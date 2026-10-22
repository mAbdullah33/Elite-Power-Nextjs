import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().min(2, "Name is required").max(120),
  email: z.string().email("Invalid email"),
  phone: z.string().max(40).optional(),
  company: z.string().max(160).optional(),
  subject: z.string().max(200).optional(),
  message: z.string().min(5, "Message is required").max(5000),
  consent: z.boolean().optional(),
});

// Simple in-memory rate-limit (per-IP, 5 / minute)
const RATE_LIMIT = new Map<string, { count: number; ts: number }>();
function rateLimit(ip: string): boolean {
  const now = Date.now();
  const win = 60_000;
  const rec = RATE_LIMIT.get(ip);
  if (!rec || now - rec.ts > win) {
    RATE_LIMIT.set(ip, { count: 1, ts: now });
    return true;
  }
  rec.count += 1;
  return rec.count <= 5;
}

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (!rateLimit(ip)) {
      return NextResponse.json(
        { ok: false, error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json().catch(() => null);
    const parsed = ContactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    // Persist to MongoDB (SQLite in this sandbox preview)
    await db.contactEnquiry.create({
      data: {
        name: parsed.data.name,
        email: parsed.data.email,
        phone: parsed.data.phone || null,
        company: parsed.data.company || null,
        subject: parsed.data.subject || null,
        message: parsed.data.message,
        ip,
        userAgent: req.headers.get("user-agent") || null,
      },
    });

    // In production: send Nodemailer notification email here when SMTP env vars are set.
    return NextResponse.json({ ok: true, message: "Message received" });
  } catch (err) {
    console.error("[api/contact] error:", err);
    return NextResponse.json(
      { ok: false, error: "Server error. Please email info@elitepower.com.pk." },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Public read endpoint — list recent published enquiries for admin review
  return NextResponse.json({ ok: false, error: "Method not allowed" }, { status: 405 });
}
