"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowLeftRight,
  Clock,
  LayoutList,
  Package,
  TrendingUp,
  UserCheck,
} from "lucide-react";

const features = [
  { icon: LayoutList, label: "Unified Sales Pipeline" },
  { icon: Clock, label: "Service Booking Engine" },
  { icon: TrendingUp, label: "Real-Time Analytics" },
  { icon: UserCheck, label: "AI Lead Qualification" },
  { icon: Package, label: "Inventory Management" },
  { icon: ArrowLeftRight, label: "Multi-Location Sync" },
];

export function AboutSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden bg-background px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[min(420px,65vh)]"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 0%, color-mix(in srgb, var(--spark) 10%, transparent), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="relative mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-spark sm:text-xs sm:tracking-[0.25em]">
            <span className="h-px w-5 bg-spark sm:w-6" />
            About TreadSpark
          </div>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          <div
            className={`transition-all duration-700 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <div className="mb-6 flex items-start gap-4 sm:mb-8 sm:gap-5">
              <div className="mt-1 min-h-[72px] w-1 shrink-0 bg-spark sm:min-h-[80px]" />
              <h2 className="text-[clamp(1.5rem,3.5vw,2.25rem)] font-semibold leading-[1.12] tracking-tight text-foreground">
                Built for the people who move the tire industry
              </h2>
            </div>

            <div className="space-y-4 pl-5 sm:space-y-5 sm:pl-6">
              <p className="text-sm leading-relaxed text-muted sm:text-base">
                Tread Spark is being built by someone with more than{" "}
                <span className="text-foreground">30 years of experience</span>{" "}
                in the tire and automobile industry — from the dealership floor to
                distribution and service operations.
              </p>
              <p className="text-sm leading-relaxed text-muted sm:text-base">
                We watched talented teams drown in spreadsheets, miss follow-ups,
                and leave revenue on the table — not from lack of effort, but from
                lacking the right tools. Tread Spark is designed to fix that.
              </p>
              <p className="text-sm leading-relaxed text-muted sm:text-base">
                One platform for inventory, sales, and operations — with built-in
                AI analytics to improve customer experience and optimize dealership
                workflows. Coming soon for dealers who are ready to run smarter.
              </p>
            </div>

            <div className="mt-8 pl-5 sm:mt-10 sm:pl-6">
              <Link
                href="#interest"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-spark px-6 text-sm font-semibold text-background transition-colors hover:bg-spark-deep sm:h-12 sm:px-7"
              >
                Show Interest
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-150 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-spark sm:mb-5 sm:text-sm">
              Platform features
            </p>
            <div className="overflow-hidden rounded-2xl border border-line bg-card">
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  const isLeftColumn = index % 2 === 0;
                  const isLastRow = index >= features.length - 2;

                  return (
                    <div
                      key={feature.label}
                      className={[
                        "flex items-center gap-3 border-line p-4 sm:gap-3.5 sm:p-5",
                        "border-b",
                        index === features.length - 1 ? "border-b-0" : "",
                        isLastRow ? "sm:border-b-0" : "",
                        isLeftColumn ? "sm:border-r" : "",
                        "transition-colors hover:bg-background/40",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center sm:h-10 sm:w-10">
                        <Icon
                          className="h-4 w-4 text-spark sm:h-[18px] sm:w-[18px]"
                          aria-hidden="true"
                        />
                      </div>
                      <span className="text-sm font-medium leading-snug text-foreground sm:text-[0.95rem]">
                        {feature.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
