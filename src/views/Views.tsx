"use client";

import { useState } from "react";
import {
  ArrowRight,
  ChevronRight,
  Shield,
  Zap,
  Anchor,
  Minus,
  Grid3x3,
  Monitor,
  ShieldCheck,
  Handshake,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Plus,
  Minus as MinusIcon,
  Send,
  Upload,
  Lock,
  LogOut,
  LayoutDashboard,
  FileText,
  Users,
  Briefcase,
  Inbox,
} from "lucide-react";
import {
  PRODUCT_CATEGORIES,
  SECTORS,
  SOLUTIONS,
  NEWS_ARTICLES,
  TEAM,
  CLIENTS,
  FAQS,
  JOBS,
  OFFICES,
  COMPANY_CONTACT,
  COMPANY_INTRO,
  MISSION,
  VISION,
  CORE_VALUES,
  EPC_WORKFLOW,
} from "@/data/catalog";
import { RouterState } from "@/lib/router";
import PageHeader from "@/components/site/PageHeader";
import {
  CtaBanner,
  HeroSlider,
  CompanyIntro,
  StatsSection,
  MissionVision,
  EpcWorkflow,
  SectorsGrid,
  ProductsRange,
  LatestNews,
  ClientsMarquee,
  LeadershipGrid,
} from "@/components/site/sections/HomeSections";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  Zap,
  Anchor,
  Minus,
  Grid3x3,
  Monitor,
  ShieldCheck,
  Handshake,
};

/* ============================================================
   HOME VIEW
   ============================================================ */
export function HomeView({ router }: { router: RouterState }) {
  return (
    <>
      <HeroSlider router={router} />
      <CompanyIntro router={router} />
      <StatsSection />
      <MissionVision router={router} />
      <EpcWorkflow router={router} />
      <SectorsGrid router={router} />
      <ProductsRange router={router} />
      <LatestNews router={router} />
      <ClientsMarquee router={router} />
      <LeadershipGrid router={router} />
      <CtaBanner
        router={router}
        title="Ready to power your next project?"
        subtitle="From design till hand-over — everything under one roof. Contact our proposals team for a no-obligation quotation."
      />
    </>
  );
}

/* ============================================================
   ABOUT VIEW
   ============================================================ */
export function AboutView({ router }: { router: RouterState }) {
  return (
    <>
      <PageHeader
        router={router}
        eyebrow="Company"
        title="Who We Are"
        description={COMPANY_INTRO}
        crumbs={[{ label: "Home", view: "" }, { label: "Company" }, { label: "Who We Are" }]}
      />

      {/* Intro block with photo grid */}
      <section className="section-pad bg-white">
        <div className="container-elite grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="text-eyebrow">Multi-cultural engineering</div>
            <h2 className="heading-xl mt-2 text-brand">
              Seasoned technical staff handpicked for modern engineering practices
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              We, Elite Power, are a multi-cultural company with seasoned technical
              staff carefully handpicked for carrying out the modern engineering
              practices as per IEC &amp; ATEX Standards and guidelines. With SAP
              and IMS implemented, our all projects are 100% focused and spot-on
              with the customer timelines and quality measures.
            </p>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              We are also manufacturers of prestigious E&amp;I products like LV
              switchgears, PLC Control Panels, Workstations, and specialised
              electrical products. We have our in-house SCADA development and PLC
              programmers to provide customised solutions enabling us to fulfill
              absolute customer requirements. With a network of corporate offices
              and workshops nationwide, we are determined to achieve much more than
              what we are today.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="rounded-sm bg-slate-100 p-4 text-center">
                <ShieldCheck className="mx-auto h-6 w-6 text-brand" />
                <div className="mt-2 text-xs font-semibold text-brand">IMS</div>
                <div className="text-[10px] text-slate-500">Implemented</div>
              </div>
              <div className="rounded-sm bg-slate-100 p-4 text-center">
                <CheckCircle2 className="mx-auto h-6 w-6 text-brand" />
                <div className="mt-2 text-xs font-semibold text-brand">SAP</div>
                <div className="text-[10px] text-slate-500">Integrated</div>
              </div>
              <div className="rounded-sm bg-slate-100 p-4 text-center">
                <Shield className="mx-auto h-6 w-6 text-brand" />
                <div className="mt-2 text-xs font-semibold text-brand">ATEX</div>
                <div className="text-[10px] text-slate-500">Certified</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[4/5] overflow-hidden rounded-sm bg-gradient-to-br from-brand to-[#143a5e] hero-pattern" />
            <div className="aspect-[4/5] overflow-hidden rounded-sm bg-brand-accent" />
            <div className="col-span-2 aspect-[16/9] overflow-hidden rounded-sm bg-gradient-to-r from-brand via-[#143a5e] to-brand-accent hero-pattern" />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-pad bg-slate-50">
        <div className="container-elite">
          <div className="text-center">
            <div className="text-eyebrow">Guiding Principles</div>
            <h2 className="heading-lg mt-2 text-brand">Our Mission &amp; Vision</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <article className="card-elite p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-brand text-brand-foreground">
                <Zap className="h-6 w-6 text-brand-accent" />
              </div>
              <h3 className="heading-md mt-5 text-brand">Our Mission</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">{MISSION}</p>
            </article>
            <article className="card-elite p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-brand-accent text-brand-accent-foreground">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="heading-md mt-5 text-brand">Our Vision</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">{VISION}</p>
            </article>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-pad bg-white">
        <div className="container-elite">
          <div className="text-center">
            <div className="text-eyebrow">The Elite Power Code</div>
            <h2 className="heading-lg mt-2 text-brand">Core Values — L · I · A · Z · R · S · C · H</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600">
              Each value carries weight in every project decision — from design
              through commissioning and after-sales support.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-3">
            {CORE_VALUES.map((v) => (
              <div key={v.word} className="flex items-center gap-4 rounded-sm border border-slate-200 bg-white p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-brand text-lg font-extrabold text-brand-accent">
                  {v.letter}
                </div>
                <div>
                  <div className="text-base font-bold text-brand">{v.word}</div>
                  <div className="text-xs text-slate-600">{v.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-pad bg-slate-50">
        <div className="container-elite">
          <div className="text-center">
            <div className="text-eyebrow">Steering Excellence</div>
            <h2 className="heading-lg mt-2 text-brand">Our Leadership</h2>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {TEAM.map((m) => (
              <div key={m.name} className="card-elite overflow-hidden text-center">
                <div className="relative aspect-square overflow-hidden bg-brand">
                  <div className="absolute inset-0 hero-pattern" style={{ background: "linear-gradient(135deg, #0a2342 0%, #143a5e 100%)" }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-extrabold text-brand-accent">
                      {m.name.split(" ").map((p) => p[0]).slice(0, 2).join("")}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-bold text-brand">{m.name}</h3>
                  <p className="mt-0.5 text-[11px] font-medium text-brand-accent">{m.designation}</p>
                  <p className="mt-2 line-clamp-3 text-[11px] text-slate-600">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="section-pad bg-white">
        <div className="container-elite">
          <div className="text-eyebrow">Policies &amp; Compliance</div>
          <h2 className="heading-lg mt-2 text-brand">Quality, HSE &amp; CSR Policies</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <article className="card-elite p-6">
              <ShieldCheck className="h-8 w-8 text-brand" />
              <h3 className="heading-md mt-4 text-brand">Quality Policy</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Elite Power implements an Integrated Management System (IMS)
                covering ISO 9001 (Quality), ISO 14001 (Environment) and ISO 45001
                (Occupational Health &amp; Safety). Every project is delivered
                against documented procedures and KPIs.
              </p>
            </article>
            <article className="card-elite p-6">
              <Shield className="h-8 w-8 text-brand" />
              <h3 className="heading-md mt-4 text-brand">HSE Policy</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                We are a proud ZERO Lost Time Injury (LTI) company. Our HSE Team
                enforces mandatory PPE compliance, toolbox talks, risk assessments
                and emergency drills on every site — safety is a shared
                responsibility.
              </p>
            </article>
            <article className="card-elite p-6">
              <Handshake className="h-8 w-8 text-brand" />
              <h3 className="heading-md mt-4 text-brand">CSR Policy</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Beyond engineering, we invest in our people and our community —
                from long-term career rewards to local tree-plantation drives
                celebrating national days and recognising dedication tangibly.
              </p>
            </article>
          </div>
        </div>
      </section>

      <CtaBanner
        router={router}
        title="Let's build your next EPC project together"
        subtitle="Our in-house design, procurement and execution teams are ready to mobilise."
      />
    </>
  );
}

/* ============================================================
   PRODUCTS LIST VIEW
   ============================================================ */
export function ProductsView({ router }: { router: RouterState }) {
  return (
    <>
      <PageHeader
        router={router}
        eyebrow="Manufactured & Supplied"
        title="Our Products Range"
        description="Type-tested LV switchgear, DC power supplies, cathodic-protection materials, bus tie ducts, cable trays, price display units, MV switchgear and authorised distributions — all under one roof."
        crumbs={[{ label: "Home", view: "" }, { label: "Products" }]}
      />
      <section className="section-pad bg-white">
        <div className="container-elite grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCT_CATEGORIES.map((c) => {
            const Icon = ICONS[c.icon] || Shield;
            return (
              <button
                key={c.slug}
                onClick={() => router.navigate(`products/${c.slug}`)}
                className="card-elite group flex flex-col p-6 text-left"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-brand text-brand-accent">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="heading-md mt-5 text-brand">{c.name}</h3>
                <p className="mt-2 text-xs text-slate-500">{c.short}</p>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-600">{c.description}</p>
                <ul className="mt-4 space-y-1 text-xs text-slate-600">
                  {c.children.slice(0, 4).map((ch) => (
                    <li key={ch.slug} className="flex items-start gap-1.5">
                      <ChevronRight className="mt-0.5 h-3 w-3 shrink-0 text-brand-accent" />
                      {ch.name}
                    </li>
                  ))}
                  {c.children.length > 4 && (
                    <li className="pl-4 text-[10px] font-semibold uppercase tracking-wide text-brand-accent">
                      + {c.children.length - 4} more categories
                    </li>
                  )}
                </ul>
                <div className="mt-auto pt-5 flex items-center gap-1 text-sm font-semibold text-brand-accent">
                  View Category <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </button>
            );
          })}
        </div>
      </section>
      <CtaBanner
        router={router}
        title="Need a custom-built panel or solution?"
        subtitle="Our design department works with your OEMs and consultants to deliver IFC drawings and pin-pointed solutions."
      />
    </>
  );
}

/* ============================================================
   PRODUCT CATEGORY DETAIL VIEW
   ============================================================ */
export function ProductDetailView({ router, categorySlug, childSlug }: { router: RouterState; categorySlug: string; childSlug?: string }) {
  const category = PRODUCT_CATEGORIES.find((c) => c.slug === categorySlug);
  if (!category) return <NotFoundView router={router} />;

  const child = childSlug ? category.children.find((c) => c.slug === childSlug) : undefined;
  const Icon = ICONS[category.icon] || Shield;

  if (child) {
    return (
      <>
        <PageHeader
          router={router}
          eyebrow={category.name}
          title={child.name}
          description={child.description}
          crumbs={[
            { label: "Home", view: "" },
            { label: "Products", view: "products" },
            { label: category.name, view: `products/${category.slug}` },
            { label: child.name },
          ]}
        />
        <section className="section-pad bg-white">
          <div className="container-elite grid grid-cols-1 gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="heading-lg text-brand">Product Overview</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">{child.description}</p>

              <h3 className="heading-md mt-8 text-brand">Key Features</h3>
              <ul className="mt-4 space-y-2">
                {child.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" />
                    {f}
                  </li>
                ))}
              </ul>

              <h3 className="heading-md mt-8 text-brand">Specifications</h3>
              <div className="mt-4 overflow-hidden rounded-sm border border-slate-200">
                <table className="w-full text-sm">
                  <tbody>
                    {child.specifications.map((s, i) => (
                      <tr key={s.label} className={i % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                        <td className="border-b border-slate-200 px-4 py-2 font-semibold text-brand">{s.label}</td>
                        <td className="border-b border-slate-200 px-4 py-2 text-slate-700">{s.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <button onClick={() => router.navigate("contact")} className="btn-amber">
                  Request Quotation <ArrowRight className="h-4 w-4" />
                </button>
                <button onClick={() => router.navigate(`products/${category.slug}`)} className="btn-outline-navy">
                  Back to {category.name}
                </button>
              </div>
            </div>

            <aside>
              <div className="rounded-sm border border-slate-200 bg-slate-50 p-5">
                <h4 className="text-sm font-bold uppercase tracking-wide text-brand">
                  Child Categories
                </h4>
                <ul className="mt-3 space-y-1">
                  {category.children.map((c) => (
                    <li key={c.slug}>
                      <button
                        onClick={() => router.navigate(`products/${category.slug}/${c.slug}`)}
                        className={`flex w-full items-center justify-between rounded-sm px-3 py-2 text-left text-sm transition ${
                          c.slug === child.slug
                            ? "bg-brand text-brand-foreground"
                            : "text-slate-700 hover:bg-brand/5 hover:text-brand"
                        }`}
                      >
                        {c.name}
                        <ChevronRight className="h-3.5 w-3.5 opacity-60" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 rounded-sm bg-brand p-5 text-white">
                <Handshake className="h-8 w-8 text-brand-accent" />
                <h4 className="mt-3 text-base font-bold">Related Sectors</h4>
                <p className="mt-1 text-xs text-slate-300">
                  See where {category.name} is deployed across our EPC project portfolio.
                </p>
                <button
                  onClick={() => router.navigate("sectors")}
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-accent"
                >
                  View Sectors <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </aside>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader
        router={router}
        eyebrow="Product Category"
        title={category.name}
        description={category.description}
        crumbs={[
          { label: "Home", view: "" },
          { label: "Products", view: "products" },
          { label: category.name },
        ]}
      />
      <section className="section-pad bg-white">
        <div className="container-elite">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-brand text-brand-accent">
              <Icon className="h-7 w-7" />
            </div>
            <div>
              <h2 className="heading-lg text-brand">{category.name}</h2>
              <p className="text-xs text-slate-500">{category.short}</p>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {category.children.map((ch) => (
              <button
                key={ch.slug}
                onClick={() => router.navigate(`products/${category.slug}/${ch.slug}`)}
                className="card-elite group flex flex-col p-5 text-left"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-brand-accent/15 text-brand">
                  <ChevronRight className="h-5 w-5" />
                </div>
                <h3 className="heading-md mt-4 text-brand">{ch.name}</h3>
                <p className="mt-2 line-clamp-3 text-sm text-slate-600">{ch.description}</p>
                <ul className="mt-3 space-y-1 text-xs text-slate-500">
                  {ch.features.slice(0, 2).map((f) => (
                    <li key={f} className="flex items-start gap-1">
                      <CheckCircle2 className="mt-0.5 h-3 w-3 shrink-0 text-brand-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4 flex items-center gap-1 text-sm font-semibold text-brand-accent">
                  View Details <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner
        router={router}
        title={`Request a ${category.name} quotation`}
        subtitle="Provide product name, sector and project location — our proposals team will respond within one business day."
      />
    </>
  );
}

/* ============================================================
   SECTORS LIST + DETAIL
   ============================================================ */
export function SectorsView({ router }: { router: RouterState }) {
  return (
    <>
      <PageHeader
        router={router}
        eyebrow="EPC Project Portfolio"
        title="Project Sectors"
        description="Elite Power delivers EPC turnkey E&I projects across nine industrial sectors nationwide — from oil storage terminals to renewable energy plants."
        crumbs={[{ label: "Home", view: "" }, { label: "Project Sectors" }]}
      />
      <section className="section-pad bg-white">
        <div className="container-elite grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SECTORS.map((s) => (
            <button
              key={s.slug}
              onClick={() => router.navigate(`sectors/${s.slug}`)}
              className="card-elite group flex flex-col overflow-hidden text-left"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-brand">
                <div
                  className="absolute inset-0 hero-pattern"
                  style={{
                    background: `linear-gradient(135deg, ${s.accent === "#22c55e" ? "#0a3a1a" : "#0a2342"} 0%, #143a5e 60%, ${s.accent}33 100%)`,
                  }}
                />
                <div className="absolute inset-0 flex items-end p-4">
                  <h3 className="text-xl font-bold text-white">{s.short}</h3>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-accent">{s.name}</p>
                <p className="mt-2 line-clamp-3 flex-1 text-sm text-slate-600">{s.overview}</p>
                <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-brand-accent">
                  View Sector <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>
    </>
  );
}

export function SectorDetailView({ router, slug }: { router: RouterState; slug: string }) {
  const sector = SECTORS.find((s) => s.slug === slug);
  if (!sector) return <NotFoundView router={router} />;

  return (
    <>
      <PageHeader
        router={router}
        eyebrow="EPC Project Sector"
        title={sector.name}
        description={sector.overview}
        crumbs={[
          { label: "Home", view: "" },
          { label: "Project Sectors", view: "sectors" },
          { label: sector.name },
        ]}
        bg={`linear-gradient(135deg, ${sector.accent === "#22c55e" ? "#0a3a1a" : "#0a2342"} 0%, #143a5e 70%, ${sector.accent}33 100%)`}
      />
      <section className="section-pad bg-white">
        <div className="container-elite grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="heading-lg text-brand">Engineering Scope of Work</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">{sector.overview}</p>
            <ul className="mt-6 space-y-3">
              {sector.scopeOfWork.map((s) => (
                <li key={s} className="flex items-start gap-3 rounded-sm border border-slate-200 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" />
                  <span className="text-sm text-slate-700">{s}</span>
                </li>
              ))}
            </ul>

            <h3 className="heading-md mt-8 text-brand">Services Delivered</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {sector.services.map((s) => (
                <span
                  key={s}
                  className="rounded-sm bg-brand-accent/15 px-3 py-1 text-xs font-semibold text-brand"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={() => router.navigate("contact")} className="btn-amber">
                Enquiry / Quotation <ArrowRight className="h-4 w-4" />
              </button>
              <button onClick={() => router.navigate("sectors")} className="btn-outline-navy">
                All Sectors
              </button>
            </div>
          </div>

          <aside>
            <div className="rounded-sm border border-slate-200 bg-slate-50 p-5">
              <h4 className="text-sm font-bold uppercase tracking-wide text-brand">Related Sectors</h4>
              <ul className="mt-3 space-y-1">
                {SECTORS.filter((x) => x.slug !== slug).slice(0, 5).map((s) => (
                  <li key={s.slug}>
                    <button
                      onClick={() => router.navigate(`sectors/${s.slug}`)}
                      className="flex w-full items-center justify-between rounded-sm px-3 py-2 text-left text-sm text-slate-700 transition hover:bg-brand/5 hover:text-brand"
                    >
                      {s.short}
                      <ChevronRight className="h-3.5 w-3.5 opacity-60" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4 rounded-sm bg-brand p-5 text-white">
              <Handshake className="h-8 w-8 text-brand-accent" />
              <h4 className="mt-3 text-base font-bold">Related Products</h4>
              <p className="mt-1 text-xs text-slate-300">
                Discover LV switchgear, automation panels and field equipment deployed on this sector.
              </p>
              <button
                onClick={() => router.navigate("products")}
                className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-accent"
              >
                Browse Products <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

/* ============================================================
   SOLUTIONS LIST + DETAIL
   ============================================================ */
export function SolutionsView({ router }: { router: RouterState }) {
  return (
    <>
      <PageHeader
        router={router}
        eyebrow="Engineered Solutions"
        title="Solutions"
        description="Specialised turnkey solutions engineered for oil & gas, process automation and hazardous-area compliance — built on in-house SCADA, PLC and instrumentation capability."
        crumbs={[{ label: "Home", view: "" }, { label: "Solutions" }]}
      />
      <section className="section-pad bg-white">
        <div className="container-elite grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((s) => (
            <button
              key={s.slug}
              onClick={() => router.navigate(`solutions/${s.slug}`)}
              className="card-elite group flex flex-col p-6 text-left"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-brand text-brand-accent">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="heading-md mt-5 text-brand">{s.name}</h3>
              <p className="mt-1 text-xs font-medium text-brand-accent">{s.tagline}</p>
              <p className="mt-3 line-clamp-3 flex-1 text-sm text-slate-600">{s.overview}</p>
              <div className="mt-auto pt-5 flex items-center gap-1 text-sm font-semibold text-brand-accent">
                Solution Details <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </button>
          ))}
        </div>
      </section>
    </>
  );
}

export function SolutionDetailView({ router, slug }: { router: RouterState; slug: string }) {
  const solution = SOLUTIONS.find((s) => s.slug === slug);
  if (!solution) return <NotFoundView router={router} />;

  return (
    <>
      <PageHeader
        router={router}
        eyebrow={solution.tagline}
        title={solution.name}
        description={solution.overview}
        crumbs={[
          { label: "Home", view: "" },
          { label: "Solutions", view: "solutions" },
          { label: solution.name },
        ]}
      />
      <section className="section-pad bg-white">
        <div className="container-elite grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="heading-lg text-brand">Solution Overview</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">{solution.overview}</p>

            <h3 className="heading-md mt-8 text-brand">Technical Scope</h3>
            <ul className="mt-4 space-y-3">
              {solution.technicalScope.map((s) => (
                <li key={s} className="flex items-start gap-3 rounded-sm border border-slate-200 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" />
                  <span className="text-sm text-slate-700">{s}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={() => router.navigate("contact")} className="btn-amber">
                Request Quotation <ArrowRight className="h-4 w-4" />
              </button>
              <button onClick={() => router.navigate("solutions")} className="btn-outline-navy">
                All Solutions
              </button>
            </div>
          </div>
          <aside>
            <div className="rounded-sm border border-slate-200 bg-slate-50 p-5">
              <h4 className="text-sm font-bold uppercase tracking-wide text-brand">All Solutions</h4>
              <ul className="mt-3 space-y-1">
                {SOLUTIONS.map((s) => (
                  <li key={s.slug}>
                    <button
                      onClick={() => router.navigate(`solutions/${s.slug}`)}
                      className={`flex w-full items-center justify-between rounded-sm px-3 py-2 text-left text-sm transition ${
                        s.slug === slug ? "bg-brand text-brand-foreground" : "text-slate-700 hover:bg-brand/5 hover:text-brand"
                      }`}
                    >
                      {s.name}
                      <ChevronRight className="h-3.5 w-3.5 opacity-60" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

/* ============================================================
   NEWS LIST + DETAIL
   ============================================================ */
export function NewsView({ router }: { router: RouterState }) {
  return (
    <>
      <PageHeader
        router={router}
        eyebrow="From Our Workshop"
        title="News & Media"
        description="Project updates, vendor relations, HSE campaigns and corporate milestones from across the Elite Power workshop and project sites."
        crumbs={[{ label: "Home", view: "" }, { label: "News" }]}
      />
      <section className="section-pad bg-white">
        <div className="container-elite grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {NEWS_ARTICLES.map((n) => (
            <button
              key={n.slug}
              onClick={() => router.navigate(`news/${n.slug}`)}
              className="card-elite group flex flex-col overflow-hidden text-left"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-brand">
                <div className="absolute inset-0 hero-pattern" style={{ background: "linear-gradient(135deg, #0a2342 0%, #143a5e 100%)" }} />
                <div className="absolute inset-0 flex items-end p-4">
                  <span className="rounded-sm bg-brand-accent px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-brand-accent-foreground">
                    {n.category}
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                  {new Date(n.date).toLocaleDateString("en-PK", { day: "numeric", month: "short", year: "numeric" })}
                </div>
                <h3 className="heading-md mt-2 line-clamp-2 text-brand group-hover:text-brand-accent">{n.title}</h3>
                <p className="mt-2 line-clamp-3 flex-1 text-sm text-slate-600">{n.excerpt}</p>
                <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-brand-accent">
                  Read More <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>
    </>
  );
}

export function NewsDetailView({ router, slug }: { router: RouterState; slug: string }) {
  const article = NEWS_ARTICLES.find((n) => n.slug === slug);
  if (!article) return <NotFoundView router={router} />;
  const related = NEWS_ARTICLES.filter((n) => n.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHeader
        router={router}
        eyebrow={article.category}
        title={article.title}
        crumbs={[
          { label: "Home", view: "" },
          { label: "News", view: "news" },
          { label: article.title },
        ]}
      />
      <section className="section-pad bg-white">
        <div className="container-elite grid grid-cols-1 gap-10 lg:grid-cols-3">
          <article className="lg:col-span-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              {new Date(article.date).toLocaleDateString("en-PK", { day: "numeric", month: "long", year: "numeric" })} · {article.category}
            </div>
            <div className="mt-4 aspect-[16/9] overflow-hidden rounded-sm bg-brand hero-pattern" style={{ background: "linear-gradient(135deg, #0a2342 0%, #143a5e 100%)" }} />
            <p className="mt-6 text-base leading-relaxed text-slate-700">{article.content}</p>
            <p className="mt-4 text-base leading-relaxed text-slate-700">{article.excerpt}</p>
            <div className="mt-8 flex items-center gap-3">
              <button onClick={() => router.navigate("news")} className="btn-outline-navy">
                Back to News
              </button>
              <button onClick={() => router.navigate("contact")} className="btn-amber">
                Contact Press Team
              </button>
            </div>
          </article>
          <aside>
            <h3 className="heading-md text-brand">Related News</h3>
            <div className="mt-4 space-y-4">
              {related.map((r) => (
                <button
                  key={r.slug}
                  onClick={() => router.navigate(`news/${r.slug}`)}
                  className="card-elite group flex w-full gap-3 p-3 text-left"
                >
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-sm bg-brand hero-pattern" style={{ background: "linear-gradient(135deg, #0a2342 0%, #143a5e 100%)" }} />
                  <div className="min-w-0">
                    <div className="text-[10px] font-semibold uppercase tracking-wide text-brand-accent">
                      {r.category}
                    </div>
                    <h4 className="line-clamp-2 text-sm font-semibold text-brand group-hover:text-brand-accent">
                      {r.title}
                    </h4>
                  </div>
                </button>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

/* ============================================================
   FAQ VIEW
   ============================================================ */
export function FaqView({ router }: { router: RouterState }) {
  const categories = Array.from(new Set(FAQS.map((f) => f.category)));
  const [open, setOpen] = useState<string | null>(`${categories[0]}-0`);

  return (
    <>
      <PageHeader
        router={router}
        eyebrow="Knowledge Base"
        title="Frequently Asked Questions"
        description="General, engineering, procurement, commissioning, inspections and contract FAQs — answered by our proposals team."
        crumbs={[{ label: "Home", view: "" }, { label: "FAQs" }]}
      />
      <section className="section-pad bg-white">
        <div className="container-elite max-w-4xl">
          {categories.map((cat) => (
            <div key={cat} className="mb-8">
              <h2 className="heading-md text-brand">{cat}</h2>
              <div className="mt-3 space-y-2">
                {FAQS.filter((f) => f.category === cat).map((f, i) => {
                  const id = `${cat}-${i}`;
                  const isOpen = open === id;
                  return (
                    <div key={id} className="overflow-hidden rounded-sm border border-slate-200">
                      <button
                        onClick={() => setOpen(isOpen ? null : id)}
                        className="flex w-full items-center justify-between gap-3 bg-slate-50 px-5 py-4 text-left text-sm font-semibold text-brand transition hover:bg-brand/5"
                      >
                        {f.question}
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-sm bg-brand text-brand-accent">
                          {isOpen ? <MinusIcon className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="bg-white px-5 py-4 text-sm leading-relaxed text-slate-600">
                          {f.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

/* ============================================================
   CAREERS VIEW
   ============================================================ */
export function CareersView({ router }: { router: RouterState }) {
  const [openJob, setOpenJob] = useState<string | null>(null);

  return (
    <>
      <PageHeader
        router={router}
        eyebrow="Join the Team"
        title="Careers at Elite Power"
        description="We are a multi-cultural company with seasoned technical staff handpicked for modern engineering practices. Permanent employment, ZERO LTI culture, and a long-term career path — not just a job."
        crumbs={[{ label: "Home", view: "" }, { label: "Careers" }]}
      />
      <section className="section-pad bg-white">
        <div className="container-elite grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="heading-lg text-brand">Current Openings</h2>
            <p className="mt-3 text-sm text-slate-600">
              The roles below represent typical engineering positions at Elite
              Power. Active vacancies are confirmed at the contact-us stage before
              a candidate application is reviewed.
            </p>
            <div className="mt-6 space-y-3">
              {JOBS.map((j) => {
                const isOpen = openJob === j.slug;
                return (
                  <div key={j.slug} className="overflow-hidden rounded-sm border border-slate-200">
                    <button
                      onClick={() => setOpenJob(isOpen ? null : j.slug)}
                      className="flex w-full items-center justify-between gap-3 bg-slate-50 px-5 py-4 text-left transition hover:bg-brand/5"
                    >
                      <div>
                        <h3 className="text-base font-bold text-brand">{j.title}</h3>
                        <p className="mt-0.5 text-xs text-slate-600">
                          {j.department} · {j.location} · {j.type}
                        </p>
                      </div>
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-sm bg-brand text-brand-accent">
                        {isOpen ? <MinusIcon className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="bg-white px-5 py-5">
                        <p className="text-sm leading-relaxed text-slate-700">{j.description}</p>
                        <h4 className="mt-4 text-sm font-bold text-brand">Requirements</h4>
                        <ul className="mt-2 space-y-1.5">
                          {j.requirements.map((r) => (
                            <li key={r} className="flex items-start gap-2 text-sm text-slate-700">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" />
                              {r}
                            </li>
                          ))}
                        </ul>
                        <ApplicationForm slug={j.slug} />
                      </div>
                    )}
                  </div>
                );
              })}
              {JOBS.length === 0 && (
                <div className="rounded-sm border border-dashed border-slate-300 p-10 text-center">
                  <Briefcase className="mx-auto h-10 w-10 text-slate-400" />
                  <p className="mt-2 text-sm text-slate-600">
                    No active vacancies at the moment. Send us your CV via the
                    form below — we keep great engineers on file.
                  </p>
                </div>
              )}
            </div>
          </div>
          <aside>
            <div className="rounded-sm border border-slate-200 bg-slate-50 p-6">
              <Users className="h-8 w-8 text-brand" />
              <h3 className="heading-md mt-3 text-brand">Why Elite Power</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-accent" /> Permanent, in-house employment — not contract</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-accent" /> ZERO LTI culture with HSE as a shared responsibility</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-accent" /> In-house SCADA, PLC and design departments</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-accent" /> Recognition programme — loyalty is rewarded tangibly</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function ApplicationForm({ slug }: { slug: string }) {
  const [form, setForm] = useState({ fullName: "", email: "", phone: "", coverLetter: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [fileName, setFileName] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobId: slug, ...form, cvName: fileName }),
      });
      if (!res.ok) throw new Error("apply failed");
      setStatus("ok");
      setForm({ fullName: "", email: "", phone: "", coverLetter: "" });
      setFileName(null);
    } catch {
      setStatus("err");
    }
  };

  return (
    <form onSubmit={onSubmit} className="mt-6 space-y-3 border-t border-slate-200 pt-6">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input required value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} placeholder="Full Name" className="rounded-sm border border-slate-300 px-3 py-2 text-sm focus:border-brand focus:outline-none" />
        <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email" className="rounded-sm border border-slate-300 px-3 py-2 text-sm focus:border-brand focus:outline-none" />
        <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Phone" className="rounded-sm border border-slate-300 px-3 py-2 text-sm focus:border-brand focus:outline-none" />
        <label className="flex cursor-pointer items-center justify-center gap-2 rounded-sm border border-dashed border-slate-300 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50">
          <Upload className="h-4 w-4" />
          {fileName || "Upload CV (PDF)"}
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setFileName(e.target.files?.[0]?.name || null)}
            className="hidden"
          />
        </label>
      </div>
      <textarea
        rows={3}
        value={form.coverLetter}
        onChange={(e) => setForm({ ...form, coverLetter: e.target.value })}
        placeholder="Brief cover letter — why this role and why you?"
        className="w-full rounded-sm border border-slate-300 px-3 py-2 text-sm focus:border-brand focus:outline-none"
      />
      <div className="flex items-center gap-3">
        <button type="submit" disabled={status === "loading"} className="btn-amber disabled:opacity-50">
          Submit Application
        </button>
        {status === "ok" && <span className="text-xs text-brand-safety">Application submitted — our HR team will reach out.</span>}
        {status === "err" && <span className="text-xs text-red-500">Submission failed. Try again or email us directly.</span>}
      </div>
    </form>
  );
}

/* ============================================================
   CONTACT VIEW
   ============================================================ */
export function ContactView({ router }: { router: RouterState }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    consent: false,
  });
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Invalid email format";
    if (!form.message.trim()) errs.message = "Message is required";
    if (!form.consent) errs.consent = "Please accept the consent checkbox";
    return errs;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("contact failed");
      setStatus("ok");
      setForm({ name: "", email: "", phone: "", company: "", subject: "", message: "", consent: false });
    } catch {
      setStatus("err");
    }
  };

  return (
    <>
      <PageHeader
        router={router}
        eyebrow="Let's Talk"
        title="Contact Us"
        description="Our proposals team responds within one business day. For project-specific quotations, please include product name, sector and project location."
        crumbs={[{ label: "Home", view: "" }, { label: "Contact Us" }]}
      />
      <section className="section-pad bg-white">
        <div className="container-elite grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* Contact info */}
          <div>
            <h2 className="heading-lg text-brand">Reach Us</h2>
            <p className="mt-3 text-sm text-slate-600">
              We operate a head office in Lahore, a manufacturing workshop and
              regional offices nationwide.
            </p>
            <div className="mt-6 space-y-4">
              {OFFICES.map((o) => (
                <div key={o.label} className="rounded-sm border border-slate-200 p-4">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand-accent">
                    <MapPin className="h-3.5 w-3.5" /> {o.label}
                  </div>
                  <p className="mt-1 text-sm text-slate-700">{o.address}</p>
                </div>
              ))}
              <div className="rounded-sm border border-slate-200 p-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand-accent">
                  <Phone className="h-3.5 w-3.5" /> Phone
                </div>
                <a href={`tel:${COMPANY_CONTACT.phone.replace(/\s+/g, "")}`} className="mt-1 block text-sm font-semibold text-brand hover:text-brand-accent">
                  {COMPANY_CONTACT.phone}
                </a>
              </div>
              <div className="rounded-sm border border-slate-200 p-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand-accent">
                  <Mail className="h-3.5 w-3.5" /> Email
                </div>
                <a href={`mailto:${COMPANY_CONTACT.email}`} className="mt-1 block text-sm font-semibold text-brand hover:text-brand-accent">
                  {COMPANY_CONTACT.email}
                </a>
              </div>
              <div className="rounded-sm border border-slate-200 p-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand-accent">
                  <Clock className="h-3.5 w-3.5" /> Business Hours
                </div>
                <p className="mt-1 text-sm text-slate-700">{COMPANY_CONTACT.hours}</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <h2 className="heading-lg text-brand">Send a Message</h2>
            <p className="mt-3 text-sm text-slate-600">
              All submissions are stored in our CRM database and acknowledged via
              email when SMTP is configured.
            </p>
            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold text-brand">Full Name *</label>
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-1 w-full rounded-sm border border-slate-300 px-3 py-2 text-sm focus:border-brand focus:outline-none"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                </div>
                <div>
                  <label className="text-xs font-semibold text-brand">Email *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-1 w-full rounded-sm border border-slate-300 px-3 py-2 text-sm focus:border-brand focus:outline-none"
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>
                <div>
                  <label className="text-xs font-semibold text-brand">Phone</label>
                  <input
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="mt-1 w-full rounded-sm border border-slate-300 px-3 py-2 text-sm focus:border-brand focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-brand">Company</label>
                  <input
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="mt-1 w-full rounded-sm border border-slate-300 px-3 py-2 text-sm focus:border-brand focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-brand">Subject / Product of Interest</label>
                <input
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="e.g. LV Switchgear quotation, ATG system, EPC project"
                  className="mt-1 w-full rounded-sm border border-slate-300 px-3 py-2 text-sm focus:border-brand focus:outline-none"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-brand">Message *</label>
                <textarea
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-1 w-full rounded-sm border border-slate-300 px-3 py-2 text-sm focus:border-brand focus:outline-none"
                />
                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
              </div>
              <label className="flex items-start gap-2 text-xs text-slate-600">
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                  className="mt-0.5"
                />
                I consent to Elite Power storing my submission for the purpose of responding to this enquiry.
              </label>
              {errors.consent && <p className="text-xs text-red-500">{errors.consent}</p>}
              <div className="flex items-center gap-3">
                <button type="submit" disabled={status === "loading"} className="btn-amber disabled:opacity-50">
                  {status === "loading" ? "Sending..." : "Send Message"}
                  {status !== "loading" && <Send className="h-4 w-4" />}
                </button>
                {status === "ok" && (
                  <span className="text-xs text-brand-safety">
                    Thank you! Your message has been received — our team will respond within 1 business day.
                  </span>
                )}
                {status === "err" && (
                  <span className="text-xs text-red-500">Something went wrong. Please email us directly.</span>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

/* ============================================================
   ADMIN VIEW (Login + Dashboard mockup)
   ============================================================ */
export function AdminView({ router }: { router: RouterState }) {
  const [authed, setAuthed] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "err">("idle");

  const onLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) throw new Error("auth failed");
      const data = await res.json();
      if (data.token) {
        localStorage.setItem("elite_admin_token", data.token);
        setAuthed(true);
        setStatus("idle");
      } else {
        setStatus("err");
      }
    } catch {
      setStatus("err");
    }
  };

  const onLogout = () => {
    localStorage.removeItem("elite_admin_token");
    setAuthed(false);
    setEmail("");
    setPassword("");
  };

  if (authed) return <AdminDashboard router={router} onLogout={onLogout} />;

  return (
    <>
      <PageHeader
        router={router}
        eyebrow="Restricted Area"
        title="Admin Login"
        description="Content management dashboard for managing products, sectors, news, FAQs, careers, contact enquiries, quotations and site settings."
        crumbs={[{ label: "Home", view: "" }, { label: "Admin" }]}
      />
      <section className="section-pad bg-white">
        <div className="container-elite max-w-md">
          <form onSubmit={onLogin} className="rounded-sm border border-slate-200 p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-brand text-brand-accent">
              <Lock className="h-6 w-6" />
            </div>
            <h2 className="heading-md mt-4 text-brand">Sign in</h2>
            <p className="mt-1 text-xs text-slate-500">Demo: admin@elitepower.com.pk / elite123</p>
            <div className="mt-5 space-y-4">
              <div>
                <label className="text-xs font-semibold text-brand">Email</label>
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 w-full rounded-sm border border-slate-300 px-3 py-2 text-sm focus:border-brand focus:outline-none" />
              </div>
              <div>
                <label className="text-xs font-semibold text-brand">Password</label>
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 w-full rounded-sm border border-slate-300 px-3 py-2 text-sm focus:border-brand focus:outline-none" />
              </div>
              {status === "err" && <p className="text-xs text-red-500">Invalid credentials. Try the demo account above.</p>}
              <button type="submit" disabled={status === "loading"} className="btn-amber w-full disabled:opacity-50">
                {status === "loading" ? "Signing in..." : "Sign In"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

function AdminDashboard({ router, onLogout }: { router: RouterState; onLogout: () => void }) {
  const [tab, setTab] = useState("overview");
  const cards = [
    { id: "overview", label: "Dashboard", icon: LayoutDashboard },
    { id: "products", label: "Products", icon: Briefcase },
    { id: "sectors", label: "Sectors", icon: Briefcase },
    { id: "news", label: "News", icon: FileText },
    { id: "enquiries", label: "Enquiries", icon: Inbox },
    { id: "team", label: "Team", icon: Users },
  ];

  return (
    <>
      <PageHeader
        router={router}
        eyebrow="Content Management"
        title="Admin Dashboard"
        crumbs={[{ label: "Home", view: "" }, { label: "Admin" }, { label: "Dashboard" }]}
      />
      <section className="section-pad bg-slate-50">
        <div className="container-elite grid grid-cols-1 gap-6 lg:grid-cols-4">
          <aside className="rounded-sm border border-slate-200 bg-white p-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Menu</div>
            <ul className="mt-3 space-y-1">
              {cards.map((c) => (
                <li key={c.id}>
                  <button
                    onClick={() => setTab(c.id)}
                    className={`flex w-full items-center gap-2 rounded-sm px-3 py-2 text-left text-sm transition ${
                      tab === c.id ? "bg-brand text-brand-foreground" : "text-slate-700 hover:bg-brand/5"
                    }`}
                  >
                    <c.icon className="h-4 w-4" /> {c.label}
                  </button>
                </li>
              ))}
              <li>
                <button onClick={onLogout} className="flex w-full items-center gap-2 rounded-sm px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50">
                  <LogOut className="h-4 w-4" /> Sign Out
                </button>
              </li>
            </ul>
          </aside>
          <div className="lg:col-span-3">
            <div className="rounded-sm border border-slate-200 bg-white p-6">
              {tab === "overview" && (
                <>
                  <h2 className="heading-md text-brand">Overview</h2>
                  <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {[
                      { label: "Product Categories", value: PRODUCT_CATEGORIES.length },
                      { label: "Child Categories", value: PRODUCT_CATEGORIES.reduce((n, c) => n + c.children.length, 0) },
                      { label: "Sectors", value: SECTORS.length },
                      { label: "Solutions", value: SOLUTIONS.length },
                      { label: "News Articles", value: NEWS_ARTICLES.length },
                      { label: "Team Members", value: TEAM.length },
                      { label: "FAQs", value: FAQS.length },
                      { label: "Clients", value: CLIENTS.length },
                    ].map((s) => (
                      <div key={s.label} className="rounded-sm bg-slate-50 p-4">
                        <div className="text-2xl font-extrabold text-brand">{s.value}</div>
                        <div className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">{s.label}</div>
                      </div>
                    ))}
                  </div>
                  <p className="mt-6 text-xs text-slate-500">
                    This is a demonstration admin dashboard. In the production MERN build, all entities
                    above are backed by MongoDB collections with full CRUD via JWT-protected API routes.
                  </p>
                </>
              )}
              {tab !== "overview" && (
                <>
                  <h2 className="heading-md text-brand">{cards.find((c) => c.id === tab)?.label}</h2>
                  <p className="mt-2 text-sm text-slate-600">
                    Full CRUD for {cards.find((c) => c.id === tab)?.label} is implemented via the
                    <code className="mx-1 rounded-sm bg-slate-100 px-1.5 py-0.5 text-xs">/api/v1/{tab}</code>
                    endpoints in the production build.
                  </p>
                  <div className="mt-4 rounded-sm border border-dashed border-slate-300 p-8 text-center">
                    <LayoutDashboard className="mx-auto h-8 w-8 text-slate-400" />
                    <p className="mt-2 text-xs text-slate-500">Module scaffolded — connect to MongoDB for live data.</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ============================================================
   404 VIEW
   ============================================================ */
export function NotFoundView({ router }: { router: RouterState }) {
  return (
    <section className="flex min-h-[60vh] items-center bg-white">
      <div className="container-elite text-center">
        <div className="text-eyebrow">404</div>
        <h1 className="heading-xl mt-2 text-brand">Page Not Found</h1>
        <p className="mx-auto mt-4 max-w-md text-sm text-slate-600">
          The page you are looking for doesn&apos;t exist or has been moved. Use
          the navigation above to find what you need.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <button onClick={() => router.navigate("")} className="btn-amber">Back to Home</button>
          <button onClick={() => router.navigate("contact")} className="btn-outline-navy">Contact Us</button>
        </div>
      </div>
    </section>
  );
}
