import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-background">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between lg:gap-10">
          <div className="text-center sm:text-left">
            <div className="flex justify-center sm:justify-start">
              <BrandLogo className="h-7" />
            </div>
            <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-muted sm:mx-0">
              The all-in-one tire sales solution to power your business.
            </p>
          </div>

          <div className="flex justify-center gap-12 text-sm sm:justify-end sm:gap-16">
            <div>
              <p className="font-semibold text-foreground">Product</p>
              <ul className="mt-3 space-y-2 text-muted">
                <li>
                  <Link href="#trusted" className="hover:text-foreground">
                    Customers
                  </Link>
                </li>
                <li>
                  <Link href="#interest" className="hover:text-foreground">
                    Early access
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-foreground">Contact</p>
              <ul className="mt-3 space-y-2 text-muted">
                <li>
                  <Link href="#interest" className="hover:text-foreground">
                    Show interest
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-line pt-6 text-center text-xs text-muted-light sm:mt-10 sm:text-left">
          &copy; {year} Tread Spark. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
