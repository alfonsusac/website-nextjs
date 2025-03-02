import { cn } from "lazy-cn";
import type { ComponentProps } from "react";

export function PageSection(
  { className, ...props }: ComponentProps<'section'>
) {
  return (
    <section className={cn(
      "",
      className,
    )}>
      <div>

      </div>
    </section>
  )

}
