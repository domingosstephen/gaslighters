"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quoteSchema, type QuoteFormData } from "@/lib/validation";
import { Field } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function QuoteForm() {
  const searchParams = useSearchParams();
  const prefillProduct = searchParams.get("product") || "";
  const [submitted, setSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { honeypot: "", productsOfInterest: prefillProduct },
  });

  const onSubmit = async (data: QuoteFormData) => {
    setServerError("");
    try {
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

      const res = await fetch("https://api.web3forms.com/submit", {
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

      const json = await res.json().catch(() => null);

      if (!res.ok || !json?.success) {
        throw new Error("Something went wrong.");
      }

      setSubmittedEmail(data.email);
      setSubmitted(true);
    } catch {
      setServerError("Failed to send quote request. Please try emailing us directly.");
    }
  };

  if (submitted) {
    return (
      <div className="py-16 md:py-24">
        <Eyebrow>Quote requested</Eyebrow>
        <h2 className="text-h2 mt-4 text-[length:var(--text-h2)]">
          We&apos;ll be in touch within one business day.
        </h2>
        <p className="mt-4 text-steel">
          A confirmation will be sent to{" "}
          <span className="text-spec text-ink">{submittedEmail}</span>. If you
          don&apos;t hear from us, check your spam folder or email us directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="grid gap-6 md:grid-cols-2">
        <Field
          label="Company name"
          {...register("companyName")}
          error={errors.companyName?.message}
          placeholder="Acme Distributors Ltd"
        />
        <Field
          label="Contact name"
          {...register("contactName")}
          error={errors.contactName?.message}
          placeholder="Jane Smith"
        />
        <Field
          label="Email"
          type="email"
          {...register("email")}
          error={errors.email?.message}
          placeholder="jane@acme.com"
        />
        <Field
          label="Phone (optional)"
          type="tel"
          {...register("phone")}
          error={errors.phone?.message}
          placeholder="+44 20 1234 5678"
        />
        <Field
          label="Country"
          {...register("country")}
          error={errors.country?.message}
          placeholder="GB"
        />
        <Field
          label="Estimated quantity"
          {...register("estimatedQuantity")}
          error={errors.estimatedQuantity?.message}
          placeholder="5,000 units"
        />
      </div>

      <div className="mt-6">
        <Field
          label="Products of interest"
          as="textarea"
          {...register("productsOfInterest")}
          error={errors.productsOfInterest?.message}
          placeholder="BBQ lighters and refillable torches, ~5,000 units"
        />
      </div>

      <div className="mt-6">
        <Field
          label="Target lead time (optional)"
          {...register("targetLeadTime")}
          error={errors.targetLeadTime?.message}
          placeholder="8 weeks"
        />
      </div>

      <div className="mt-6">
        <Field
          label="Notes (optional)"
          as="textarea"
          {...register("notes")}
          error={errors.notes?.message}
          placeholder="Any additional details — samples, branding requirements, delivery constraints."
        />
      </div>

      {/* Honeypot — hidden from humans */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <input tabIndex={-1} autoComplete="off" {...register("honeypot")} />
      </div>

      {serverError && (
        <div className="mt-6 border border-ember p-4">
          <p className="text-small text-ember">{serverError}</p>
          <p className="mt-2 text-small text-steel">
            You can also{" "}
            <a
              href="mailto:infomegatitulocomerciotrade@gmail.com?subject=Quote%20Request"
              className="text-ink underline underline-offset-2"
            >
              send us an inquiry directly
            </a>
          </p>
        </div>
      )}

      <div className="mt-8 flex justify-start md:justify-end">
        <Button
          type="submit"
          variant="ember"
          size="hero"
          disabled={isSubmitting}
          className="w-full md:w-auto"
        >
          {isSubmitting ? "Sending..." : "Submit quote request"}
        </Button>
      </div>
    </form>
  );
}
