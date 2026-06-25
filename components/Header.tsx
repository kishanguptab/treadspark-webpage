import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:h-16 sm:gap-4 sm:px-6 lg:px-8">
        <Link href="/" className="min-w-0 shrink">
          <BrandLogo className="h-7 sm:h-8" priority />
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-muted md:flex lg:gap-8">
          <Link href="#trusted" className="transition-colors hover:text-foreground">
            Customers
          </Link>
          <Link href="#interest" className="transition-colors hover:text-foreground">
            Contact
          </Link>
        </nav>

        <Link
          href="#interest"
          className="inline-flex h-9 shrink-0 items-center gap-1 rounded-full bg-spark px-3.5 text-xs font-semibold text-background transition-colors hover:bg-spark-deep sm:h-10 sm:gap-1.5 sm:px-5 sm:text-sm"
        >
          <span className="max-[380px]:hidden">Show Interest</span>
          <span className="hidden max-[380px]:inline">Interest</span>
          <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </Link>
      </div>
    </header>
  );
}
