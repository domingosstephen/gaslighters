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

    const message = [
      `Company: ${data.companyName}`,
      `Contact: ${data.contactName}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone || "N/A"}`,
      `Country: ${data.country}`,
      `Products: ${data.productsOfInterest}`,
      `Quantity: ${data.estimatedQuantity}`,
      `Lead Time: ${data.targetLeadTime || "N/A"}`,
      `Notes: ${data.notes || "N/A"}`,
    ].join("\n");

    const w3fRes = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: "b1511371-e777-4260-9502-7d3533931fea",
        subject: `[QUOTE] ${data.companyName} — ${data.productsOfInterest}`,
        from_name: `${data.contactName} (${data.companyName})`,
        replyto: data.email,
        message,
      }),
    });

    const w3fJson = await w3fRes.json().catch(() => null);

    if (!w3fRes.ok || !w3fJson?.success) {
      console.error("Web3Forms error:", w3fJson);
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
