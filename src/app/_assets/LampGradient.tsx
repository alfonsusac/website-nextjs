import { cn } from "lazy-cn";
import type { ComponentProps } from "react";

export function LampGradientBackground(
  { className, gradient, style, mask, ...props }: ComponentProps<'div'> & {
    gradient?: string,
    mask?: string,
  }
) {
  return (
    <div className={cn(
      "background-art w-[80rem] h-[40rem] ",
      className,
    )}
      {...props}
      style={{
        // @ts-expect-error css variable
        "--lamp-gradient-value": gradient?.replaceAll('\n', '') ?? undefined,
        maskImage: mask,
        style,
      }}
    >
      <div className="lamp-gradient absolute w-[50%] h-[100%]" />
      <div className="lamp-gradient absolute w-[50%] h-[100%] left-1/2 -scale-x-100" />
    </div>
  )
}
