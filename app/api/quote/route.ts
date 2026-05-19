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

    await sendQuoteEmail(result.data);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send quote request. Please try emailing us directly." },
      { status: 500 }
    );
  }
}
