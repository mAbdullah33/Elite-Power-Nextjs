"use client";

import { useEffect, useState, useCallback } from "react";

/**
 * Lightweight hash-based SPA router for the Elite Power preview.
 * Routes look like  #/products/lv-switchgear   or   #/contact
 * Returns the current path (without the leading hash) plus a navigate()
 * function that updates the hash and scrolls to top.
 */
export interface RouterState {
  path: string;          // e.g. "products/lv-switchgear" or ""
  segments: string[];    // ["products", "lv-switchgear"]
  navigate: (path: string) => void;
}

function readHash(): string {
  if (typeof window === "undefined") return "";
  const raw = window.location.hash.replace(/^#\/?/, "");
  return raw;
}

// Lazy initialiser — runs once on the client during the very first render
// so we don't trigger a synchronous setState inside useEffect.
function initPath(): string {
  if (typeof window === "undefined") return "";
  return readHash();
}

export function useHashRouter(): RouterState {
  const [path, setPath] = useState<string>(initPath);

  useEffect(() => {
    const onHash = () => {
      setPath(readHash());
      window.scrollTo({ top: 0, behavior: "auto" });
    };
    // Sync in case the hash changed between initial render and effect
    const current = readHash();
    if (current !== path) setPath(current);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = useCallback((target: string) => {
    const clean = target.replace(/^\/+/, "");
    if (typeof window !== "undefined") {
      window.location.hash = "/" + clean;
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, []);

  const segments = path ? path.split("/") : [];
  return { path, segments, navigate };
}

/** Build a hash URL for navigation */
export function hrefFor(path: string): string {
  return "#/" + path.replace(/^\/+/, "");
}

/** Resolve a top-level view name (first path segment) */
export function currentView(segments: string[]): string {
  return segments[0] ?? "";
}
