import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[110px] w-full resize-y rounded-lg border border-line bg-background px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted-light focus-visible:border-spark/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-spark/20 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
