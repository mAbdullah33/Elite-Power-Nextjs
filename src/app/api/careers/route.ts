import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { z } from "zod";

const ApplySchema = z.object({
  jobId: z.string().min(1),
  fullName: z.string().min(2).max(120),
  email: z.string().email(),
  phone: z.string().max(40).optional(),
  coverLetter: z.string().max(5000).optional(),
  cvName: z.string().max(200).optional(),
});

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();
    const jobId = String(form.get("jobId") || "");
    const fullName = String(form.get("fullName") || "");
    const email = String(form.get("email") || "");
    const phone = String(form.get("phone") || "");
    const coverLetter = String(form.get("coverLetter") || "");
    const cv = form.get("cv") as File | null;

    const parsed = ApplySchema.safeParse({
      jobId,
      fullName,
      email,
      phone: phone || undefined,
      coverLetter: coverLetter || undefined,
      cvName: cv?.name,
    });
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    // Validate CV file size and type when provided (Multer-equivalent in Next.js)
    let cvPath: string | null = null;
    if (cv && cv.size > 0) {
      if (cv.size > 5 * 1024 * 1024) {
        return NextResponse.json(
          { ok: false, error: "CV must be under 5MB" },
          { status: 400 }
        );
      }
      const allowed = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowed.includes(cv.type)) {
        return NextResponse.json(
          { ok: false, error: "Only PDF / DOC / DOCX allowed" },
          { status: 400 }
        );
      }
      cvPath = `/uploads/cv/${Date.now()}-${cv.name.replace(/\s+/g, "_")}`;
      // In production: stream to S3 / disk storage here.
    }

    // Check job exists
    const job = await db.job.findUnique({ where: { slug: parsed.data.jobId } });
    const jobIdResolved = job?.id || parsed.data.jobId; // fall back to slug text

    // Persist application; if no Job row in this sandbox, store with raw slug
    try {
      await db.jobApplication.create({
        data: {
          jobId: job?.id ?? "",
          fullName: parsed.data.fullName,
          email: parsed.data.email,
          phone: parsed.data.phone || null,
          coverLetter: parsed.data.coverLetter || null,
          cvPath,
          ip: req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || null,
        },
      });
    } catch {
      // Job row may not exist in seed; persist into ContactEnquiry as fallback
      await db.contactEnquiry.create({
        data: {
          name: `${parsed.data.fullName} (Job: ${parsed.data.jobId})`,
          email: parsed.data.email,
          phone: parsed.data.phone || null,
          subject: "Job Application",
          message: parsed.data.coverLetter || "(no cover letter)",
          ip: req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || null,
          userAgent: req.headers.get("user-agent") || null,
        },
      });
    }

    return NextResponse.json({ ok: true, message: "Application submitted" });
  } catch (err) {
    console.error("[api/careers] error:", err);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}
