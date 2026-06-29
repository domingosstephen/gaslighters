"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quoteSchema, type QuoteFormData } from "@/lib/validation";
import { Field } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";

export function ProductQuoteForm({ productName }: { productName: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { honeypot: "", productsOfInterest: productName },
  });

  const onSubmit = async (data: QuoteFormData) => {
    setServerError("");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => null);
        throw new Error(json?.error || "Something went wrong.");
      }

      setSubmitted(true);
    } catch (err) {
      setServerError(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  };

  if (submitted) {
    return (
      <div className="border border-line p-6">
        <p className="text-h3 text-ink">Quote requested!</p>
        <p className="mt-2 text-small text-steel">
          We&apos;ll be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="grid gap-4 md:grid-cols-2">
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
        <Field
          label="Target lead time (optional)"
          {...register("targetLeadTime")}
          error={errors.targetLeadTime?.message}
          placeholder="8 weeks"
        />
      </div>

      {/* Pre-filled product field */}
      <div className="mt-4">
        <Field
          label="Product"
          {...register("productsOfInterest")}
          error={errors.productsOfInterest?.message}
        />
      </div>

      <div className="mt-4">
        <Field
          label="Notes (optional)"
          as="textarea"
          {...register("notes")}
          error={errors.notes?.message}
          placeholder="Branding requirements, delivery constraints, sample requests..."
        />
      </div>

      {/* Honeypot */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <input tabIndex={-1} autoComplete="off" {...register("honeypot")} />
      </div>

      {serverError && (
        <p className="mt-3 text-small text-ember">{serverError}</p>
      )}

      <div className="mt-6">
        <Button
          type="submit"
          variant="ember"
          size="hero"
          disabled={isSubmitting}
          className="w-full md:w-auto"
        >
          {isSubmitting ? "Sending..." : "Submit Quote Request"}
        </Button>
      </div>
    </form>
  );
}
