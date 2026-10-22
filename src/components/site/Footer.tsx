"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  Linkedin,
  Facebook,
  Twitter,
  Youtube,
  ArrowUp,
  Send,
  Download,
} from "lucide-react";
import { PRODUCT_CATEGORIES, SECTORS, COMPANY_CONTACT, OFFICES } from "@/data/catalog";
import { hrefFor, RouterState } from "@/lib/router";

export default function Footer({ router }: { router: RouterState }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");

  const onNavigate = (view: string) => router.navigate(view);

  const onSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("subscribe failed");
      setStatus("ok");
      setEmail("");
    } catch {
      setStatus("err");
    }
  };

  return (
    <footer className="mt-auto bg-brand text-brand-foreground">
      {/* Top CTA strip */}
      <div className="border-b border-white/10 bg-brand/90">
        <div className="container-elite flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
              Partner with Elite Power
            </div>
            <div className="mt-1 text-xl font-bold">
              From Design till hand-over — everything under one roof
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <button onClick={() => onNavigate("contact")} className="btn-amber">
              Get Quote
            </button>
            <a
              href="/company-profile.pdf"
              onClick={(e) => e.preventDefault()}
              className="inline-flex items-center gap-2 rounded-sm border border-white/30 px-5 py-2.5 text-sm font-semibold transition hover:bg-white hover:text-brand"
            >
              <Download className="h-4 w-4" /> Company Profile
            </a>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="container-elite grid grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Column 1 — Company intro */}
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-white/10 text-brand-foreground">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-brand-accent" fill="currentColor">
                <path d="M13 2L3 14h7l-1 8 10-12h-7z" />
              </svg>
            </div>
            <div>
              <div className="text-base font-extrabold">ELITE POWER</div>
              <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
                Electrical · EPC · Automation
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            Elite Power (Pvt.) Ltd. is an Electrical, Instrumentation and Control
            system-oriented company specialising in EPC Turnkey E&I Projects with
            in-house LV switchgear manufacturing, SCADA development and nationwide
            project delivery.
          </p>
          <div className="mt-4 flex gap-2">
            {[Linkedin, Facebook, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                onClick={(e) => e.preventDefault()}
                className="flex h-8 w-8 items-center justify-center rounded-sm bg-white/10 transition hover:bg-brand-accent hover:text-brand"
                aria-label="social link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2 — Quick links */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-brand-accent">
            Company
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { label: "Who We Are", view: "about" },
              { label: "Mission & Vision", view: "about" },
              { label: "Leadership", view: "about" },
              { label: "Project Sectors", view: "sectors" },
              { label: "Solutions", view: "solutions" },
              { label: "News & Media", view: "news" },
              { label: "Careers", view: "careers" },
              { label: "FAQs", view: "faqs" },
              { label: "Contact Us", view: "contact" },
            ].map((q) => (
              <li key={q.label}>
                <button
                  onClick={() => onNavigate(q.view)}
                  className="flex items-center gap-1 text-slate-300 transition hover:text-brand-accent"
                >
                  <ChevronRight className="h-3 w-3" /> {q.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Products */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-brand-accent">
            Products
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {PRODUCT_CATEGORIES.map((p) => (
              <li key={p.slug}>
                <button
                  onClick={() => onNavigate(`products/${p.slug}`)}
                  className="flex items-center gap-1 text-left text-slate-300 transition hover:text-brand-accent"
                >
                  <ChevronRight className="h-3 w-3" /> {p.name}
                </button>
              </li>
            ))}
          </ul>
          <h4 className="mt-6 text-sm font-bold uppercase tracking-wider text-brand-accent">
            Sectors
          </h4>
          <ul className="mt-3 space-y-2 text-sm">
            {SECTORS.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <button
                  onClick={() => onNavigate(`sectors/${s.slug}`)}
                  className="flex items-center gap-1 text-left text-slate-300 transition hover:text-brand-accent"
                >
                  <ChevronRight className="h-3 w-3" /> {s.short}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 — Contact + Newsletter */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-brand-accent">
            Reach Us
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {OFFICES.map((o) => (
              <li key={o.label} className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" />
                <span>
                  <span className="font-semibold text-white">{o.label}:</span>
                  <br />
                  {o.address}
                </span>
              </li>
            ))}
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-brand-accent" /> {COMPANY_CONTACT.phone}
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-brand-accent" /> {COMPANY_CONTACT.email}
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0 text-brand-accent" /> {COMPANY_CONTACT.hours}
            </li>
          </ul>

          <form onSubmit={onSubscribe} className="mt-6">
            <label className="text-xs font-semibold uppercase tracking-wider text-brand-accent">
              Newsletter
            </label>
            <div className="mt-2 flex overflow-hidden rounded-sm border border-white/20 bg-white/5">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 bg-transparent px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:outline-none"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="flex w-10 items-center justify-center bg-brand-accent text-brand disabled:opacity-50"
                aria-label="Subscribe"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            {status === "ok" && (
              <p className="mt-2 text-xs text-brand-safety">Subscribed — thank you!</p>
            )}
            {status === "err" && (
              <p className="mt-2 text-xs text-red-400">Something went wrong. Try again.</p>
            )}
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-elite flex flex-col items-center justify-between gap-2 py-4 text-xs text-slate-400 sm:flex-row">
          <div>
            © {new Date().getFullYear()} Elite Power (Pvt.) Ltd. — All rights reserved.
            IMS · SAP · ATEX Certified · ZERO LTI Company
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate("about")} className="hover:text-brand-accent">
              Privacy Policy
            </button>
            <span>·</span>
            <button onClick={() => onNavigate("about")} className="hover:text-brand-accent">
              Terms
            </button>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 z-30 flex h-11 w-11 items-center justify-center rounded-sm bg-brand-accent text-brand shadow-lg transition hover:brightness-110"
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
}
