import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ className, priority = false }: BrandLogoProps) {
  return (
    <Image
      src="/logos/treadspark-wordmark-transparent.png"
      alt="Tread Spark"
      width={420}
      height={160}
      priority={priority}
      className={cn("h-auto w-auto object-contain", className)}
    />
  );
}
