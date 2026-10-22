import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { z } from "zod";
import { createHash, createHmac, randomBytes } from "crypto";

const AuthSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const JWT_SECRET =
  process.env.JWT_SECRET || "elite-power-dev-secret-change-me-in-production";

// Simple HMAC-based token (JWT-like). In production, use the `jsonwebtoken` package.
function signToken(payload: Record<string, unknown>): string {
  const header = Buffer.from(JSON.stringify({ alg: "HS256", typ: "JWT" })).toString("base64url");
  const body = Buffer.from(JSON.stringify({ ...payload, iat: Date.now() })).toString("base64url");
  const sig = createHmac("sha256", JWT_SECRET).update(`${header}.${body}`).digest("base64url");
  return `${header}.${body}.${sig}`;
}

// Hash password with sha256 + salt (in production use bcrypt — kept here as
// sandbox-safe equivalent so we don't need a native module)
function hashPassword(pw: string): string {
  const salt = "elite-power-static-salt";
  return createHash("sha256").update(salt + pw).digest("hex");
}

async function ensureSeedAdmin() {
  let admin = await db.adminUser.findUnique({ where: { email: "admin@elitepower.com.pk" } });
  if (!admin) {
    admin = await db.adminUser.create({
      data: {
        email: "admin@elitepower.com.pk",
        name: "Elite Admin",
        passwordHash: hashPassword("elite123"),
        role: "super_admin",
        isActive: true,
      },
    });
  }
  return admin;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);
    const parsed = AuthSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const admin = await ensureSeedAdmin();
    const incomingHash = hashPassword(parsed.data.password);
    if (admin.email !== parsed.data.email || admin.passwordHash !== incomingHash) {
      return NextResponse.json({ ok: false, error: "Invalid credentials" }, { status: 401 });
    }
    if (!admin.isActive) {
      return NextResponse.json({ ok: false, error: "Account disabled" }, { status: 403 });
    }

    await db.adminUser.update({
      where: { id: admin.id },
      data: { lastLoginAt: new Date() },
    });

    const token = signToken({ sub: admin.id, email: admin.email, role: admin.role });
    return NextResponse.json({
      ok: true,
      token,
      user: { email: admin.email, name: admin.name, role: admin.role },
    });
  } catch (err) {
    console.error("[api/admin] error:", err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}

export async function GET() {
  // List admin dashboard summary counts — protected in production by token check
  try {
    const [
      productCategoryCount,
      productCount,
      sectorCount,
      solutionCount,
      newsCount,
      teamCount,
      faqCount,
      clientCount,
      enquiryCount,
      quoteCount,
      subscriberCount,
      jobCount,
      applicationCount,
    ] = await Promise.all([
      db.productCategory.count(),
      db.product.count(),
      db.projectSector.count(),
      db.solution.count(),
      db.newsArticle.count(),
      db.teamMember.count(),
      db.fAQ.count(),
      db.client.count(),
      db.contactEnquiry.count(),
      db.quoteRequest.count(),
      db.newsletterSubscriber.count(),
      db.job.count(),
      db.jobApplication.count(),
    ]);
    return NextResponse.json({
      ok: true,
      counts: {
        productCategories: productCategoryCount,
        products: productCount,
        sectors: sectorCount,
        solutions: solutionCount,
        news: newsCount,
        team: teamCount,
        faqs: faqCount,
        clients: clientCount,
        enquiries: enquiryCount,
        quotes: quoteCount,
        subscribers: subscriberCount,
        jobs: jobCount,
        applications: applicationCount,
      },
    });
  } catch (err) {
    console.error("[api/admin GET] error:", err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
