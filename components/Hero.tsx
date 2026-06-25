import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-8 pt-10 sm:px-6 sm:pb-10 sm:pt-16 lg:px-8 lg:pt-20">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[min(480px,70vh)]"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 50% 0%, color-mix(in srgb, var(--spark) 14%, transparent), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="mx-auto flex justify-center">
          <BrandLogo
            className="w-full max-w-[240px] sm:max-w-[300px] lg:max-w-[340px]"
            priority
          />
        </div>

        <h1 className="mt-8 text-[clamp(1.75rem,6vw,3.75rem)] font-semibold leading-[1.12] tracking-tight text-foreground sm:mt-10 lg:mt-12">
          The all-in-one tire sales solution.{" "}
          <span className="text-spark">Coming soon.</span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl px-1 text-[0.95rem] leading-relaxed text-muted sm:mt-6 sm:text-lg">
          One platform for inventory, sales, and operations — with built-in AI
          analytics to improve customer experience and optimize dealership
          workflows.
        </p>

        <div className="mt-8 flex justify-center sm:mt-10">
          <Link
            href="#interest"
            className="inline-flex h-11 w-full max-w-xs items-center justify-center gap-2 rounded-full bg-spark px-6 text-sm font-semibold text-background transition-colors hover:bg-spark-deep sm:h-12 sm:max-w-none sm:px-7"
          >
            Show Interest
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
