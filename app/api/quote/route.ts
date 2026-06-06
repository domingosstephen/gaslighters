import { NextResponse } from "next/server";
import { quoteSchema } from "@/lib/validation";
import { sendQuoteEmail } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = quoteSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    // Reject honeypot submissions
    if (result.data.honeypot) {
      return NextResponse.json({ ok: true });
    }

    // Try SMTP email (optional — Web3Forms handles delivery client-side)
    try {
      await sendQuoteEmail(result.data);
    } catch (emailErr) {
      console.error("SMTP email failed (non-critical, Web3Forms handles delivery):", emailErr);
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send quote request. Please try emailing us directly." },
      { status: 500 }
    );
  }
}
