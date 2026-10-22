"use client";

import { useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Award,
  Users,
  Building2,
  Wrench,
  Factory,
} from "lucide-react";
import {
  HERO_SLIDES,
  STATS,
  MISSION,
  VISION,
  CORE_VALUES,
  EPC_WORKFLOW,
  SECTORS,
  PRODUCT_CATEGORIES,
  NEWS_ARTICLES,
  TEAM,
  CLIENTS,
  COMPANY_INTRO,
} from "@/data/catalog";
import { hrefFor, RouterState } from "@/lib/router";

/* ============================================================
   1. HERO SLIDER
   ============================================================ */
export function HeroSlider({ router }: { router: RouterState }) {
  const [index, setIndex] = useState(0);
  const total = HERO_SLIDES.length;
  const onNavigate = router.navigate;

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % total), 7000);
    return () => clearInterval(id);
  }, [total]);

  const slide = HERO_SLIDES[index];

  return (
    <section className="relative h-[560px] w-full overflow-hidden bg-brand sm:h-[640px] lg:h-[720px]">
      {HERO_SLIDES.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ background: s.bg }}
          aria-hidden={i !== index}
        >
          <div className="absolute inset-0 hero-pattern" />
          {/* Diagonal accent shape */}
          <div
            className="absolute right-0 top-0 h-full w-1/3 opacity-30"
            style={{
              background: `linear-gradient(115deg, transparent 0%, ${s.accent}22 60%, transparent 100%)`,
              clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)",
            }}
          />
          {/* Decorative circuit dots */}
          <div className="absolute inset-0">
            <svg className="absolute right-12 top-16 h-32 w-32 opacity-30" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" stroke={s.accent} strokeWidth="1" fill="none" strokeDasharray="2 4" />
              <circle cx="50" cy="50" r="25" stroke={s.accent} strokeWidth="1" fill="none" />
              <circle cx="50" cy="50" r="3" fill={s.accent} />
            </svg>
          </div>
        </div>
      ))}

      <div className="container-elite relative flex h-full items-center">
        <div className="max-w-3xl py-10">
          {slide.badge && (
            <div
              className="inline-flex items-center gap-2 rounded-sm px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white"
              style={{ background: `${slide.accent}22`, border: `1px solid ${slide.accent}` }}
            >
              <Sparkles className="h-3 w-3" style={{ color: slide.accent }} />
              <span style={{ color: slide.accent }}>{slide.badge}</span>
            </div>
          )}
          <h1
            key={slide.id + "-title"}
            className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl"
          >
            {slide.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
            {slide.description}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate(slide.primaryCta.view)}
              className="btn-amber"
            >
              {slide.primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </button>
            {slide.secondaryCta && (
              <button
                onClick={() => onNavigate(slide.secondaryCta!.view)}
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white hover:text-brand"
              >
                {slide.secondaryCta.label}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={() => setIndex((i) => (i - 1 + total) % total)}
        className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-sm border border-white/30 bg-brand/30 text-white backdrop-blur transition hover:bg-brand-accent hover:text-brand sm:left-4"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() => setIndex((i) => (i + 1) % total)}
        className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-sm border border-white/30 bg-brand/30 text-white backdrop-blur transition hover:bg-brand-accent hover:text-brand sm:right-4"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-8 bg-brand-accent" : "w-2 bg-white/50 hover:bg-white"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   2. COMPANY INTRODUCTION
   ============================================================ */
export function CompanyIntro({ router }: { router: RouterState }) {
  return (
    <section className="section-pad bg-white">
      <div className="container-elite grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="text-eyebrow">Welcome to Elite Power (Pvt.) Ltd.</div>
          <h2 className="heading-xl mt-2 text-brand">
            Multi-cultural engineering, modern practices, IEC &amp; ATEX standards
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600">{COMPANY_INTRO}</p>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            We are also manufacturers of prestigious E&amp;I products like LV
            switchgears, PLC Control Panels, Workstations, and specialised
            electrical products. We have our in-house SCADA development and PLC
            programmers to provide customised solutions enabling us to fulfill
            absolute customer requirements.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button onClick={() => router.navigate("about")} className="btn-navy">
              More About Us <ArrowRight className="h-4 w-4" />
            </button>
            <button onClick={() => router.navigate("contact")} className="btn-outline-navy">
              Get in Touch
            </button>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-500">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-brand-accent" /> IMS Implemented
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-brand-accent" /> SAP Integrated
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-brand-accent" /> ATEX Certified
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-[4/5] overflow-hidden rounded-sm bg-gradient-to-br from-brand to-[#143a5e] p-6 text-white">
            <Wrench className="h-8 w-8 text-brand-accent" />
            <div className="mt-auto pt-12">
              <div className="text-3xl font-extrabold">EPC</div>
              <div className="text-sm text-slate-200">Turnkey E&amp;I Projects</div>
            </div>
          </div>
          <div className="aspect-[4/5] overflow-hidden rounded-sm bg-brand-accent p-6 text-brand">
            <Factory className="h-8 w-8" />
            <div className="mt-auto pt-12">
              <div className="text-3xl font-extrabold">LV</div>
              <div className="text-sm">Switchgear Manufacturing</div>
            </div>
          </div>
          <div className="col-span-2 grid grid-cols-3 gap-3">
            <div className="rounded-sm bg-slate-100 p-4 text-center">
              <Users className="mx-auto h-6 w-6 text-brand" />
              <div className="mt-2 text-lg font-bold text-brand">250+</div>
              <div className="text-[10px] uppercase tracking-wide text-slate-500">Employees</div>
            </div>
            <div className="rounded-sm bg-slate-100 p-4 text-center">
              <Building2 className="mx-auto h-6 w-6 text-brand" />
              <div className="mt-2 text-lg font-bold text-brand">3</div>
              <div className="text-[10px] uppercase tracking-wide text-slate-500">Offices</div>
            </div>
            <div className="rounded-sm bg-slate-100 p-4 text-center">
              <Award className="mx-auto h-6 w-6 text-brand" />
              <div className="mt-2 text-lg font-bold text-brand">ZERO</div>
              <div className="text-[10px] uppercase tracking-wide text-slate-500">LTI Record</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   3. STATISTICS COUNTERS
   ============================================================ */
function useCountUp(target: number, start: boolean, durationMs = 1500) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    const startTs = performance.now();
    const step = (ts: number) => {
      const p = Math.min(1, (ts - startTs) / durationMs);
      setVal(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
      else setVal(target);
    };
    requestAnimationFrame(step);
  }, [start, target, durationMs]);
  return val;
}

export function StatsSection() {
  const [start, setStart] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ob = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStart(true);
          ob.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    ob.observe(el);
    return () => ob.disconnect();
  }, []);

  return (
    <section className="relative bg-brand text-white">
      <div className="absolute inset-0 hero-pattern opacity-30" />
      <div ref={ref} className="container-elite relative grid grid-cols-2 gap-6 py-12 sm:grid-cols-3 lg:grid-cols-6 lg:py-16">
        {STATS.map((s) => (
          <StatCard key={s.label} stat={s} start={start} />
        ))}
      </div>
      <p className="container-elite relative pb-6 text-center text-[10px] text-slate-400">
        Statistical figures are representative industry estimates pending final client verification.
      </p>
    </section>
  );
}

function StatCard({ stat, start }: { stat: { label: string; value: number; suffix?: string }; start: boolean }) {
  const v = useCountUp(stat.value, start);
  return (
    <div className="text-center">
      <div className="text-3xl font-extrabold text-brand-accent sm:text-4xl">
        {v}
        {stat.suffix || ""}
      </div>
      <div className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-300 sm:text-sm">
        {stat.label}
      </div>
    </div>
  );
}

/* ============================================================
   4. MISSION · VISION · CORE VALUES
   ============================================================ */
export function MissionVision({ router }: { router: RouterState }) {
  return (
    <section className="section-pad bg-slate-50">
      <div className="container-elite">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Mission */}
          <article className="card-elite p-6 lg:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-brand text-brand-foreground">
              <TrendingUp className="h-6 w-6 text-brand-accent" />
            </div>
            <h3 className="heading-md mt-5 text-brand">Our Mission</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{MISSION}</p>
          </article>

          {/* Vision */}
          <article className="card-elite p-6 lg:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-brand-accent text-brand-accent-foreground">
              <Sparkles className="h-6 w-6" />
            </div>
            <h3 className="heading-md mt-5 text-brand">Our Vision</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{VISION}</p>
          </article>

          {/* Values */}
          <article className="card-elite p-6 lg:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-brand text-brand-foreground">
              <Award className="h-6 w-6 text-brand-accent" />
            </div>
            <h3 className="heading-md mt-5 text-brand">Core Values</h3>
            <ul className="mt-3 space-y-1.5 text-sm">
              {CORE_VALUES.map((v) => (
                <li key={v.word} className="flex items-start gap-2 text-slate-600">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-sm bg-brand-accent/15 text-xs font-bold text-brand">
                    {v.letter}
                  </span>
                  <span>
                    <span className="font-semibold text-brand">{v.word}</span>{" "}
                    <span className="text-slate-500">{v.text}</span>
                  </span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   5. EPC WORKFLOW
   ============================================================ */
export function EpcWorkflow({ router }: { router: RouterState }) {
  return (
    <section className="section-pad bg-white">
      <div className="container-elite">
        <div className="text-center">
          <div className="text-eyebrow">From Design Till Hand-over</div>
          <h2 className="heading-lg mt-2 text-brand">Our E&amp;I EPC Project Work Flow</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600">
            Everything we do is under one roof — design, procurement and execution
            carried out by permanent, in-house teams using ERP, IFC drawings and
            OEM collaborations.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {EPC_WORKFLOW.map((stage, i) => (
            <div key={stage.number} className="relative">
              {/* Connector */}
              {i < EPC_WORKFLOW.length - 1 && (
                <div className="absolute left-full top-12 hidden h-0.5 w-6 bg-brand-accent/50 md:block lg:w-12" />
              )}
              <div className="card-elite h-full p-6 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-4 border-brand-accent/30 bg-brand text-3xl font-extrabold text-brand-accent">
                  {stage.number}
                </div>
                <h3 className="heading-md mt-5 text-brand">{stage.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button onClick={() => router.navigate("sectors")} className="btn-amber">
            Start To Work <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   6. EPC PROJECT SECTORS GRID
   ============================================================ */
export function SectorsGrid({ router }: { router: RouterState }) {
  return (
    <section className="section-pad bg-slate-50">
      <div className="container-elite">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <div className="text-eyebrow">Our EPC Projects</div>
            <h2 className="heading-lg mt-2 text-brand">Industries We Serve</h2>
          </div>
          <button onClick={() => router.navigate("sectors")} className="btn-outline-navy">
            View All Sectors <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
          {SECTORS.slice(0, 9).map((s) => (
            <button
              key={s.slug}
              onClick={() => router.navigate(`sectors/${s.slug}`)}
              className="group relative flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-sm border border-slate-200 bg-brand p-5 text-left transition hover:border-brand-accent"
            >
              <div className="absolute inset-0 circuit-grid opacity-30" />
              <div
                className="absolute inset-0 opacity-80 transition group-hover:opacity-100"
                style={{
                  background: `linear-gradient(135deg, ${s.accent === "#22c55e" ? "#0a3a1a" : "#0a2342"} 0%, #0a2342 70%, ${s.accent}33 100%)`,
                }}
              />
              <div className="relative">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-brand-accent">
                  EPC Sector
                </div>
                <h3 className="mt-1 text-lg font-bold text-white">{s.short}</h3>
                <p className="mt-1 line-clamp-2 text-xs text-slate-300">{s.name}</p>
                <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-brand-accent opacity-0 transition group-hover:opacity-100">
                  Explore <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   7. PRODUCTS RANGE
   ============================================================ */
export function ProductsRange({ router }: { router: RouterState }) {
  const icons: Record<string, React.ReactNode> = {
    "lv-switchgear": <ShieldCheck className="h-6 w-6" />,
    "dc-power-supply": <Sparkles className="h-6 w-6" />,
    "cathodic-protection-materials": <Award className="h-6 w-6" />,
    "bus-tie-duct": <TrendingUp className="h-6 w-6" />,
    "cable-trays-ladders": <Wrench className="h-6 w-6" />,
    "price-display-units": <Factory className="h-6 w-6" />,
    "mv-switchgear": <ShieldCheck className="h-6 w-6" />,
    "distributions": <Users className="h-6 w-6" />,
  };

  return (
    <section className="section-pad bg-white">
      <div className="container-elite">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <div className="text-eyebrow">Manufactured &amp; Supplied</div>
            <h2 className="heading-lg mt-2 text-brand">Our Products Range</h2>
          </div>
          <button onClick={() => router.navigate("products")} className="btn-outline-navy">
            All Products <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCT_CATEGORIES.map((c) => (
            <button
              key={c.slug}
              onClick={() => router.navigate(`products/${c.slug}`)}
              className="card-elite group flex h-full flex-col p-5 text-left"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-brand text-brand-accent">
                {icons[c.slug] || <Wrench className="h-6 w-6" />}
              </div>
              <h3 className="heading-md mt-4 text-brand">{c.name}</h3>
              <ul className="mt-3 space-y-1 text-xs text-slate-600">
                {c.children.slice(0, 4).map((ch) => (
                  <li key={ch.slug} className="flex items-start gap-1.5">
                    <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-brand-accent" />
                    {ch.name}
                  </li>
                ))}
                {c.children.length > 4 && (
                  <li className="pl-2.5 text-[10px] font-semibold uppercase tracking-wide text-brand-accent">
                    + {c.children.length - 4} more
                  </li>
                )}
              </ul>
              <div className="mt-auto pt-4 flex items-center gap-1 text-sm font-semibold text-brand-accent">
                More Details <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   8. LATEST NEWS
   ============================================================ */
export function LatestNews({ router }: { router: RouterState }) {
  return (
    <section className="section-pad bg-slate-50">
      <div className="container-elite">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <div className="text-eyebrow">From Our Workshop</div>
            <h2 className="heading-lg mt-2 text-brand">Our Latest News</h2>
          </div>
          <button onClick={() => router.navigate("news")} className="btn-outline-navy">
            Explore More <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {NEWS_ARTICLES.slice(0, 3).map((n) => (
            <button
              key={n.slug}
              onClick={() => router.navigate(`news/${n.slug}`)}
              className="card-elite group flex flex-col overflow-hidden text-left"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-brand">
                <div
                  className="absolute inset-0 hero-pattern"
                  style={{ background: "linear-gradient(135deg, #0a2342 0%, #143a5e 100%)" }}
                />
                <div className="absolute inset-0 flex items-end p-4">
                  <span className="rounded-sm bg-brand-accent px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-brand-accent-foreground">
                    {n.category}
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                  {new Date(n.date).toLocaleDateString("en-PK", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </div>
                <h3 className="heading-md mt-2 line-clamp-2 text-brand group-hover:text-brand-accent">
                  {n.title}
                </h3>
                <p className="mt-2 line-clamp-3 flex-1 text-sm text-slate-600">{n.excerpt}</p>
                <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-brand-accent">
                  Explore More <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Remaining news strip */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {NEWS_ARTICLES.slice(3, 6).map((n) => (
            <button
              key={n.slug}
              onClick={() => router.navigate(`news/${n.slug}`)}
              className="card-elite group flex gap-3 p-4 text-left"
            >
              <div className="h-16 w-16 shrink-0 overflow-hidden rounded-sm bg-brand">
                <div className="h-full w-full hero-pattern" style={{ background: "linear-gradient(135deg, #0a2342 0%, #143a5e 100%)" }} />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] font-semibold uppercase tracking-wide text-brand-accent">
                  {n.category}
                </div>
                <h4 className="line-clamp-2 text-sm font-semibold text-brand group-hover:text-brand-accent">
                  {n.title}
                </h4>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   9. CLIENTS MARQUEE
   ============================================================ */
export function ClientsMarquee({ router }: { router: RouterState }) {
  // Duplicate the list for seamless marquee
  const doubled = [...CLIENTS, ...CLIENTS];
  return (
    <section className="bg-white py-12">
      <div className="container-elite">
        <div className="text-center">
          <div className="text-eyebrow">Trusted By</div>
          <h2 className="heading-lg mt-2 text-brand">Our Valued Clients</h2>
        </div>
      </div>
      <div className="relative mt-8 overflow-hidden">
        <div className="flex w-max animate-marquee gap-3">
          {doubled.map((c, i) => (
            <div
              key={i}
              className="flex h-20 w-56 shrink-0 items-center justify-center rounded-sm border border-slate-200 bg-slate-50 px-4 text-center"
            >
              <div>
                <div className="text-sm font-bold text-brand">{c.name}</div>
                <div className="text-[10px] uppercase tracking-wider text-slate-500">
                  {c.sector}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container-elite mt-6 text-center">
        <button onClick={() => router.navigate("about")} className="btn-outline-navy">
          View All Clients
        </button>
      </div>
    </section>
  );
}

/* ============================================================
   10. LEADERSHIP GRID
   ============================================================ */
export function LeadershipGrid({ router }: { router: RouterState }) {
  return (
    <section className="section-pad bg-slate-50">
      <div className="container-elite">
        <div className="text-center">
          <div className="text-eyebrow">Steering Excellence</div>
          <h2 className="heading-lg mt-2 text-brand">Our Experienced Team</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {TEAM.map((m) => (
            <div key={m.name} className="card-elite overflow-hidden text-center">
              <div className="relative aspect-square overflow-hidden bg-brand">
                <div
                  className="absolute inset-0 hero-pattern"
                  style={{ background: "linear-gradient(135deg, #0a2342 0%, #143a5e 100%)" }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-extrabold text-brand-accent">
                    {m.name
                      .split(" ")
                      .map((p) => p[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-brand">{m.name}</h3>
                <p className="mt-0.5 text-[11px] font-medium text-brand-accent">
                  {m.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CTA BANNER (reusable)
   ============================================================ */
export function CtaBanner({ router, title, subtitle }: { router: RouterState; title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden bg-brand">
      <div className="absolute inset-0 hero-pattern opacity-40" />
      <div className="container-elite relative flex flex-col items-center justify-between gap-6 py-12 text-center lg:flex-row lg:text-left">
        <div>
          <h2 className="heading-lg text-white">{title}</h2>
          {subtitle && <p className="mt-2 max-w-2xl text-sm text-slate-300">{subtitle}</p>}
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <button onClick={() => router.navigate("contact")} className="btn-amber">
            Get a Quote <ArrowRight className="h-4 w-4" />
          </button>
          <button onClick={() => router.navigate("products")} className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white hover:text-brand">
            Browse Products
          </button>
        </div>
      </div>
    </section>
  );
}
