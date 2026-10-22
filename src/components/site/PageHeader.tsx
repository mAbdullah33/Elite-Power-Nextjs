"use client";

import { ChevronRight } from "lucide-react";
import { RouterState, hrefFor } from "@/lib/router";

interface Crumb {
  label: string;
  view?: string;
}

export default function PageHeader({
  router,
  eyebrow,
  title,
  description,
  crumbs,
  bg,
}: {
  router: RouterState;
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs?: Crumb[];
  bg?: string;
}) {
  return (
    <section
      className="relative overflow-hidden bg-brand text-white"
      style={{ background: bg || "linear-gradient(135deg, #0a2342 0%, #143a5e 100%)" }}
    >
      <div className="absolute inset-0 hero-pattern opacity-30" />
      <div className="container-elite relative py-12 sm:py-16 lg:py-20">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-1 text-xs text-slate-300">
              {crumbs.map((c, i) => (
                <li key={i} className="flex items-center gap-1">
                  {i > 0 && <ChevronRight className="h-3 w-3 opacity-60" />}
                  {c.view ? (
                    <a
                      href={hrefFor(c.view)}
                      onClick={(e) => {
                        e.preventDefault();
                        router.navigate(c.view!);
                      }}
                      className="transition hover:text-brand-accent"
                    >
                      {c.label}
                    </a>
                  ) : (
                    <span className="text-brand-accent">{c.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && (
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
            {eyebrow}
          </div>
        )}
        <h1 className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-200 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
