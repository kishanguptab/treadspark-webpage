"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  interestFormSchema,
  type InterestFormData,
} from "@/lib/validations";

export function InterestForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InterestFormData>({
    resolver: zodResolver(interestFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(data: InterestFormData) {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error ?? "Something went wrong. Please try again.");
      }

      toast.success("Thank you! We'll be in touch soon.");
      reset();
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to submit. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="interest" className="px-4 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
        <div className="text-center lg:sticky lg:top-28 lg:text-left">
          <p className="text-xs font-semibold uppercase tracking-widest text-spark sm:text-sm">
            Early access
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Show your interest
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted sm:text-base lg:mx-0">
            Be the first to know when Tread Spark launches. Share your details
            and we&apos;ll reach out with early access information.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-2xl border border-line bg-card p-5 sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            <div className="space-y-2 sm:col-span-1">
              <Label htmlFor="name">Name *</Label>
              <Input id="name" placeholder="Your name" {...register("name")} />
              {errors.name && (
                <p className="text-xs text-red-400">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2 sm:col-span-1">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@company.com"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-xs text-red-400">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2 sm:col-span-1">
              <Label htmlFor="company">Company *</Label>
              <Input
                id="company"
                placeholder="Your company"
                {...register("company")}
              />
              {errors.company && (
                <p className="text-xs text-red-400">{errors.company.message}</p>
              )}
            </div>

            <div className="space-y-2 sm:col-span-1">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="(555) 123-4567"
                {...register("phone")}
              />
              {errors.phone && (
                <p className="text-xs text-red-400">{errors.phone.message}</p>
              )}
            </div>

            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell us about your business needs..."
                {...register("message")}
              />
              {errors.message && (
                <p className="text-xs text-red-400">{errors.message.message}</p>
              )}
            </div>
          </div>

          <Button
            type="submit"
            size="lg"
            className="mt-5 w-full rounded-full sm:mt-7"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Interest"
            )}
          </Button>
        </form>
      </div>
    </section>
  );
}
