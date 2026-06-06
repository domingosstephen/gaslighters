"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quoteSchema, type QuoteFormData } from "@/lib/validation";
import { Field } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";

export function HeroQuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { honeypot: "" },
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

      // Send email notification via Web3Forms (client-side)
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "b1511371-e777-4260-9502-7d3533931fea",
          subject: `[QUOTE] ${data.companyName} — ${data.productsOfInterest}`,
          from_name: `${data.contactName} (${data.companyName})`,
          email: data.email,
          country: data.country,
          products: data.productsOfInterest,
          quantity: data.estimatedQuantity,
        }),
      }).catch(() => {});

      setSubmitted(true);
    } catch (err) {
      setServerError(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  };

  if (submitted) {
    return (
      <div className="rounded-lg bg-white/95 p-6 text-center backdrop-blur-sm">
        <p className="text-h3 text-ink">Quote requested!</p>
        <p className="mt-2 text-small text-steel">
          We&apos;ll be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-2xl bg-white/95 p-6 shadow-2xl backdrop-blur-md md:p-8"
    >
      <h2 className="text-h3 text-[length:var(--text-h3)] text-ink">
        Request a Quote
      </h2>
      <p className="mt-1 text-small text-steel">
        Get pricing within one business day.
      </p>

      <div className="mt-4 grid gap-3">
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
          label="Products of interest"
          {...register("productsOfInterest")}
          error={errors.productsOfInterest?.message}
          placeholder="BBQ lighters, 5,000 units"
        />
        <Field
          label="Estimated quantity"
          {...register("estimatedQuantity")}
          error={errors.estimatedQuantity?.message}
          placeholder="5,000 units"
        />
      </div>

      {/* Honeypot */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <input tabIndex={-1} autoComplete="off" {...register("honeypot")} />
      </div>

      {serverError && (
        <p className="mt-3 text-small text-ember">{serverError}</p>
      )}

      <div className="mt-4">
        <Button
          type="submit"
          variant="ember"
          size="hero"
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? "Sending..." : "Get a Quote"}
        </Button>
      </div>
    </form>
  );
}
