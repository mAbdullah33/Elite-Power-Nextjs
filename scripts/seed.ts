// Elite Power — seed script
// Run with: bun run /home/z/my-project/scripts/seed.ts
// Populates the SQLite database with reference content from the catalog file.

import { PrismaClient } from "@prisma/client";
import { createHash } from "crypto";
import {
  PRODUCT_CATEGORIES,
  SECTORS,
  SOLUTIONS,
  NEWS_ARTICLES,
  TEAM,
  CLIENTS,
  FAQS,
  JOBS,
} from "../src/data/catalog";

const db = new PrismaClient();

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function hashPassword(pw: string): string {
  const salt = "elite-power-static-salt";
  return createHash("sha256").update(salt + pw).digest("hex");
}

async function main() {
  console.log("Seeding database...");

  // Admin user
  const adminEmail = "admin@elitepower.com.pk";
  const existing = await db.adminUser.findUnique({ where: { email: adminEmail } });
  if (!existing) {
    await db.adminUser.create({
      data: {
        email: adminEmail,
        name: "Elite Admin",
        passwordHash: hashPassword("elite123"),
        role: "super_admin",
        isActive: true,
      },
    });
    console.log("Created seed admin:", adminEmail);
  }

  // Product categories + products
  for (const cat of PRODUCT_CATEGORIES) {
    const parent = await db.productCategory.upsert({
      where: { slug: cat.slug },
      update: {
        name: cat.name,
        description: cat.short,
        longDescription: cat.description,
        icon: cat.icon,
      },
      create: {
        name: cat.name,
        slug: cat.slug,
        description: cat.short,
        longDescription: cat.description,
        icon: cat.icon,
        displayOrder: PRODUCT_CATEGORIES.indexOf(cat),
        isActive: true,
      },
    });
    // Create child categories
    for (const ch of cat.children) {
      const childSlug = `${cat.slug}--${ch.slug}`;
      const child = await db.productCategory.upsert({
        where: { slug: childSlug },
        update: {
          name: ch.name,
          description: ch.description,
          parentId: parent.id,
        },
        create: {
          name: ch.name,
          slug: childSlug,
          description: ch.description,
          parentId: parent.id,
          displayOrder: cat.children.indexOf(ch),
          isActive: true,
        },
      });
      // Product under child
      await db.product.upsert({
        where: { slug: childSlug + "-product" },
        update: {
          name: ch.name,
          categoryId: child.id,
          shortDescription: ch.description,
          fullDescription: ch.description,
          specifications: JSON.stringify(ch.specifications),
          features: JSON.stringify(ch.features),
          images: JSON.stringify([]),
          relatedProductIds: JSON.stringify([]),
        },
        create: {
          name: ch.name,
          slug: childSlug + "-product",
          categoryId: child.id,
          shortDescription: ch.description,
          fullDescription: ch.description,
          specifications: JSON.stringify(ch.specifications),
          features: JSON.stringify(ch.features),
          images: JSON.stringify([]),
          relatedProductIds: JSON.stringify([]),
        },
      });
    }
  }
  console.log("Seeded products");

  // Sectors
  for (const s of SECTORS) {
    await db.projectSector.upsert({
      where: { slug: s.slug },
      update: {
        name: s.name,
        overview: s.overview,
        scopeOfWork: JSON.stringify(s.scopeOfWork),
        services: JSON.stringify(s.services),
      },
      create: {
        name: s.name,
        slug: s.slug,
        overview: s.overview,
        scopeOfWork: JSON.stringify(s.scopeOfWork),
        services: JSON.stringify(s.services),
        displayOrder: SECTORS.indexOf(s),
        isActive: true,
      },
    });
  }
  console.log("Seeded sectors");

  // Solutions
  for (const s of SOLUTIONS) {
    await db.solution.upsert({
      where: { slug: s.slug },
      update: {
        name: s.name,
        tagline: s.tagline,
        overview: s.overview,
        technicalScope: JSON.stringify(s.technicalScope),
      },
      create: {
        name: s.name,
        slug: s.slug,
        tagline: s.tagline,
        overview: s.overview,
        technicalScope: JSON.stringify(s.technicalScope),
        displayOrder: SOLUTIONS.indexOf(s),
        isActive: true,
      },
    });
  }
  console.log("Seeded solutions");

  // News
  for (const n of NEWS_ARTICLES) {
    await db.newsArticle.upsert({
      where: { slug: n.slug },
      update: {
        title: n.title,
        excerpt: n.excerpt,
        content: n.content,
        category: n.category,
        published: true,
        publishedAt: new Date(n.date),
      },
      create: {
        title: n.title,
        slug: n.slug,
        excerpt: n.excerpt,
        content: n.content,
        category: n.category,
        published: true,
        publishedAt: new Date(n.date),
      },
    });
  }
  console.log("Seeded news");

  // Team
  for (const t of TEAM) {
    await db.teamMember.upsert({
      where: { id: `tm-${slugify(t.name)}` },
      update: { name: t.name, designation: t.designation, bio: t.bio },
      create: {
        id: `tm-${slugify(t.name)}`,
        name: t.name,
        designation: t.designation,
        bio: t.bio,
        displayOrder: TEAM.indexOf(t),
        isActive: true,
      },
    });
  }
  console.log("Seeded team");

  // Clients
  for (const c of CLIENTS) {
    await db.client.upsert({
      where: { id: `cl-${slugify(c.name)}` },
      update: { name: c.name, sector: c.sector },
      create: {
        id: `cl-${slugify(c.name)}`,
        name: c.name,
        sector: c.sector,
        displayOrder: CLIENTS.indexOf(c),
        isActive: true,
      },
    });
  }
  console.log("Seeded clients");

  // FAQs
  for (const f of FAQS) {
    await db.fAQ.upsert({
      where: { id: `faq-${slugify(f.question).slice(0, 40)}` },
      update: { category: f.category, question: f.question, answer: f.answer },
      create: {
        id: `faq-${slugify(f.question).slice(0, 40)}`,
        category: f.category,
        question: f.question,
        answer: f.answer,
        displayOrder: FAQS.indexOf(f),
        isActive: true,
      },
    });
  }
  console.log("Seeded faqs");

  // Jobs
  for (const j of JOBS) {
    await db.job.upsert({
      where: { slug: j.slug },
      update: {
        title: j.title,
        department: j.department,
        location: j.location,
        type: j.type,
        description: j.description,
        requirements: JSON.stringify(j.requirements),
      },
      create: {
        title: j.title,
        slug: j.slug,
        department: j.department,
        location: j.location,
        type: j.type,
        description: j.description,
        requirements: JSON.stringify(j.requirements),
        isActive: true,
      },
    });
  }
  console.log("Seeded jobs");

  // Site settings
  await db.siteSetting.upsert({
    where: { key: "company.name" },
    update: { value: "Elite Power (Pvt.) Ltd." },
    create: { key: "company.name", value: "Elite Power (Pvt.) Ltd." },
  });

  console.log("Seed complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
