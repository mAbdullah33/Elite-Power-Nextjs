import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { z } from "zod";

const QuoteSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email(),
  phone: z.string().max(40).optional(),
  company: z.string().max(160).optional(),
  productName: z.string().max(200).optional(),
  sector: z.string().max(120).optional(),
  message: z.string().min(5).max(5000),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);
    const parsed = QuoteSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    await db.quoteRequest.create({
      data: {
        ...parsed.data,
        productName: parsed.data.productName || null,
        sector: parsed.data.sector || null,
        ip,
        userAgent: req.headers.get("user-agent") || null,
      },
    });
    return NextResponse.json({ ok: true, message: "Quote request received" });
  } catch (err) {
    console.error("[api/quote] error:", err);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}
