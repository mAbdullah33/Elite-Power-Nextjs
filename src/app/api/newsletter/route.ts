import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { z } from "zod";

const SubSchema = z.object({
  email: z.string().email("Invalid email"),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);
    const parsed = SubSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    // Upsert so a re-subscribe of an existing email simply toggles it back to active
    const existing = await db.newsletterSubscriber.findUnique({
      where: { email: parsed.data.email },
    });
    if (existing) {
      await db.newsletterSubscriber.update({
        where: { id: existing.id },
        data: { isActive: true },
      });
    } else {
      await db.newsletterSubscriber.create({
        data: { email: parsed.data.email },
      });
    }
    return NextResponse.json({ ok: true, message: "Subscribed" });
  } catch (err) {
    console.error("[api/newsletter] error:", err);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}
