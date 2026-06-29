import { NextResponse } from "next/server";
import { quoteSchema } from "@/lib/validation";

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

    const data = result.data;

    const w3fRes = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: "b1511371-e777-4260-9502-7d3533931fea",
        subject: `[QUOTE] ${data.companyName} — ${data.productsOfInterest}`,
        from_name: `${data.contactName} (${data.companyName})`,
        email: data.email,
        phone: data.phone || "N/A",
        country: data.country,
        products: data.productsOfInterest,
        quantity: data.estimatedQuantity,
        lead_time: data.targetLeadTime || "N/A",
        notes: data.notes || "N/A",
      }),
    });

    if (!w3fRes.ok) {
      console.error("Web3Forms error:", await w3fRes.text());
      return NextResponse.json(
        { error: "Failed to send quote request. Please try emailing us directly." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send quote request. Please try emailing us directly." },
      { status: 500 }
    );
  }
}
