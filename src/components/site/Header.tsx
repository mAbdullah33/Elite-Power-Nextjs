"use client";

import { useEffect, useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Shield,
  Zap,
  Anchor,
  Minus,
  Grid3x3,
  Monitor,
  ShieldCheck,
  Handshake,
  Search,
  Download,
} from "lucide-react";
import { PRODUCT_CATEGORIES, SECTORS, SOLUTIONS, COMPANY_CONTACT } from "@/data/catalog";
import { hrefFor, RouterState } from "@/lib/router";

interface NavItem {
  label: string;
  view: string;
  children?: { label: string; view: string; subChildren?: { label: string; view: string }[] }[];
}

const NAV: NavItem[] = [
  { label: "Home", view: "" },
  {
    label: "Company",
    view: "about",
    children: [
      { label: "Who We Are", view: "about" },
      { label: "Mission & Vision", view: "about" },
      { label: "Core Values", view: "about" },
      { label: "Leadership", view: "about" },
      { label: "Policies", view: "about" },
      { label: "Media", view: "news" },
      { label: "Career", view: "careers" },
    ],
  },
  {
    label: "Products",
    view: "products",
    children: PRODUCT_CATEGORIES.map((c) => ({
      label: c.name,
      view: `products/${c.slug}`,
      subChildren: c.children.map((ch) => ({ label: ch.name, view: `products/${c.slug}/${ch.slug}` })),
    })),
  },
  {
    label: "Project Sectors",
    view: "sectors",
    children: SECTORS.map((s) => ({ label: s.name, view: `sectors/${s.slug}` })),
  },
  {
    label: "Solutions",
    view: "solutions",
    children: SOLUTIONS.map((s) => ({ label: s.name, view: `solutions/${s.slug}` })),
  },
  { label: "News", view: "news" },
  { label: "Careers", view: "careers" },
  { label: "FAQs", view: "faqs" },
  { label: "Contact Us", view: "contact" },
];

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

function NavLink({
  item,
  router,
  onNavigate,
}: {
  item: NavItem;
  router: RouterState;
  onNavigate: (view: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const isActive =
    (item.view === "" && router.path === "") ||
    (item.view !== "" && router.segments[0] === item.view);

  if (!item.children) {
    return (
      <a
        href={hrefFor(item.view)}
        onClick={(e) => {
          e.preventDefault();
          onNavigate(item.view);
        }}
        className={`flex h-full items-center border-b-2 px-3 text-sm font-semibold transition lg:px-4 ${
          isActive
            ? "border-brand-accent text-brand"
            : "border-transparent text-slate-700 hover:border-brand-accent hover:text-brand"
        }`}
      >
        {item.label}
      </a>
    );
  }

  return (
    <div
      className="relative flex h-full"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => onNavigate(item.view)}
        className={`flex h-full items-center gap-1 border-b-2 px-3 text-sm font-semibold transition lg:px-4 ${
          isActive
            ? "border-brand-accent text-brand"
            : "border-transparent text-slate-700 hover:border-brand-accent hover:text-brand"
        }`}
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown className="h-3.5 w-3.5 opacity-70" />
      </button>

      {/* Mega menu */}
      {open && (
        <div
          className="absolute left-0 top-full z-50 min-w-[260px] pt-1"
          onMouseEnter={() => setOpen(true)}
        >
          <div className="overflow-hidden rounded-sm border border-slate-200 bg-white shadow-xl">
            {item.label === "Products" ? (
              <div className="grid grid-cols-2 gap-0 p-0" style={{ width: "min(92vw, 760px)" }}>
                {item.children.map((child) => {
                  const Icon = ICONS[
                    PRODUCT_CATEGORIES.find((c) => c.slug === child.view.split("/")[1])?.icon || "Shield"
                  ] || Shield;
                  return (
                    <div key={child.view} className="border-b border-r border-slate-100 p-3 last:border-b-0">
                      <a
                        href={hrefFor(child.view)}
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate(child.view);
                        }}
                        className="group flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm font-semibold text-brand hover:bg-brand/5"
                      >
                        <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-brand/10 text-brand">
                          <Icon className="h-4 w-4" />
                        </span>
                        {child.label}
                        <ChevronRight className="ml-auto h-3.5 w-3.5 opacity-50 transition group-hover:translate-x-0.5" />
                      </a>
                      {child.subChildren && child.subChildren.length > 0 && (
                        <ul className="mt-1 space-y-0.5 pl-10">
                          {child.subChildren.slice(0, 5).map((sc) => (
                            <li key={sc.view}>
                              <a
                                href={hrefFor(sc.view)}
                                onClick={(e) => {
                                  e.preventDefault();
                                  onNavigate(sc.view);
                                }}
                                className="block rounded-sm px-2 py-1 text-xs text-slate-600 hover:bg-brand-accent/10 hover:text-brand"
                              >
                                {sc.label}
                              </a>
                            </li>
                          ))}
                          {child.subChildren.length > 5 && (
                            <li className="px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-accent">
                              + {child.subChildren.length - 5} more
                            </li>
                          )}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <ul className="py-1">
                {item.children.map((child) => (
                  <li key={child.view}>
                    <a
                      href={hrefFor(child.view)}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate(child.view);
                      }}
                      className="flex items-center justify-between px-4 py-2 text-sm text-slate-700 hover:bg-brand/5 hover:text-brand"
                    >
                      {child.label}
                      <ChevronRight className="h-3.5 w-3.5 opacity-50" />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Header({ router }: { router: RouterState }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onNavigate = (view: string) => {
    router.navigate(view);
    setMobileOpen(false);
    setMobileExpanded(null);
  };

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Top info bar */}
      <div className="bg-brand text-brand-foreground">
        <div className="container-elite flex h-9 items-center justify-between text-xs">
          <div className="flex items-center gap-4">
            <a
              href={`tel:${COMPANY_CONTACT.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-1.5 transition hover:text-brand-accent"
            >
              <Phone className="h-3 w-3" />
              {COMPANY_CONTACT.phone}
            </a>
            <a
              href={`mailto:${COMPANY_CONTACT.email}`}
              className="hidden items-center gap-1.5 transition hover:text-brand-accent sm:flex"
            >
              <Mail className="h-3 w-3" />
              {COMPANY_CONTACT.email}
            </a>
            <span className="hidden items-center gap-1.5 text-slate-300 lg:flex">
              <MapPin className="h-3 w-3" />
              182 D Block, Valencia Town, Lahore, Pakistan
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate("sectors/renewable-energy")}
              className="transition hover:text-brand-accent"
            >
              Renewables
            </button>
            <span className="text-slate-500">·</span>
            <button
              onClick={() => onNavigate("about")}
              className="transition hover:text-brand-accent"
            >
              Elite Engineering
            </button>
            <span className="text-slate-500">·</span>
            <button
              onClick={() => onNavigate("contact")}
              className="font-semibold text-brand-accent transition hover:brightness-125"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Certification strip */}
      <div className="bg-brand/95 text-brand-foreground backdrop-blur">
        <div className="container-elite flex h-7 items-center justify-end gap-4 text-[10px] font-semibold uppercase tracking-wider text-slate-300">
          <span className="flex items-center gap-1">
            <ShieldCheck className="h-3 w-3 text-brand-accent" /> IMS Implemented
          </span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="h-3 w-3 text-brand-accent" /> SAP Integrated
          </span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="h-3 w-3 text-brand-accent" /> ATEX Certified
          </span>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`border-b border-slate-200 bg-white transition-shadow ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <div className="container-elite flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <button onClick={() => onNavigate("")} className="flex items-center gap-3" aria-label="Elite Power Home">
            <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-brand text-brand-foreground lg:h-12 lg:w-12">
              <Zap className="h-5 w-5 text-brand-accent lg:h-6 lg:w-6" />
            </div>
            <div className="text-left leading-tight">
              <div className="text-base font-extrabold tracking-tight text-brand lg:text-lg">
                ELITE POWER
              </div>
              <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
                Electrical · EPC · Automation
              </div>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden h-full lg:flex">
            {NAV.map((item) => (
              <NavLink key={item.label} item={item} router={router} onNavigate={onNavigate} />
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <a
              href={hrefFor("contact")}
              onClick={(e) => {
                e.preventDefault();
                onNavigate("contact");
              }}
              className="btn-amber hidden lg:inline-flex"
            >
              Get Quote
            </a>
            <button
              onClick={() => setMobileOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-sm border border-slate-200 text-brand lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-brand/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-[88%] max-w-sm overflow-y-auto bg-white shadow-2xl thin-scroll">
            <div className="flex items-center justify-between border-b border-slate-200 p-4">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-brand text-brand-foreground">
                  <Zap className="h-5 w-5 text-brand-accent" />
                </div>
                <div className="text-sm font-extrabold text-brand">ELITE POWER</div>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-sm border border-slate-200"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <ul className="py-2">
              {NAV.map((item) => (
                <li key={item.label} className="border-b border-slate-100">
                  {item.children ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileExpanded((cur) => (cur === item.label ? null : item.label))
                        }
                        className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-brand"
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-4 w-4 transition ${
                            mobileExpanded === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {mobileExpanded === item.label && (
                        <ul className="bg-slate-50 py-1">
                          {item.children.map((c) => (
                            <li key={c.view}>
                              <button
                                onClick={() => onNavigate(c.view)}
                                className="flex w-full items-center justify-between px-6 py-2 text-left text-xs text-slate-700 hover:text-brand"
                              >
                                {c.label}
                                <ChevronRight className="h-3 w-3 opacity-50" />
                              </button>
                              {c.subChildren && c.subChildren.length > 0 && (
                                <ul className="pl-8">
                                  {c.subChildren.map((sc) => (
                                    <li key={sc.view}>
                                      <button
                                        onClick={() => onNavigate(sc.view)}
                                        className="block w-full px-4 py-1.5 text-left text-[11px] text-slate-500 hover:text-brand"
                                      >
                                        — {sc.label}
                                      </button>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <button
                      onClick={() => onNavigate(item.view)}
                      className="block w-full px-4 py-3 text-left text-sm font-semibold text-brand hover:bg-slate-50"
                    >
                      {item.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>

            <div className="p-4">
              <a
                href={hrefFor("contact")}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate("contact");
                }}
                className="btn-amber w-full"
              >
                Get Quote
              </a>
              <div className="mt-4 space-y-1 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <Phone className="h-3 w-3" /> {COMPANY_CONTACT.phone}
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-3 w-3" /> {COMPANY_CONTACT.email}
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-3 w-3" /> 182 D Block, Valencia Town, Lahore
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
