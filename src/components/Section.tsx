import { cn } from "lazy-cn"
import type { ComponentProps } from "react"
import { ReactIDLogo } from "./icons/reactjs-id"

export function SectionTag(
  { className, children, separator, ...props }: ComponentProps<"div"> & {
    separator?: string
  }
) {
  return (
    <div className={cn(
      "mb-6",
      "text-sm sm:text-base text-nowrap font-medium tracking-[-0.015em]", className)} {...props}>
      <span className="tracking-tighter text-[#3cb0ca]">
        {children}{' '}
      </span>
      <span>
        {separator ?? "dengan"}{' '}
      </span>
      <ReactIDLogo className="h-4 sm:h-5 inline align-[-0.2rem]" />
    </div>
  )
}

export function SectionHeader(
  { className, ...props }: ComponentProps<"h2"> & {
    id: string
  }
) {
  return (
    <h2
      className={cn(
        "text-white text-4xl xs:text-4xl sm:text-5xl font-semibold text-pretty break-words sm:text-nowrap tracking-tight",
        "pt-40 -mt-40",
        className)} {...props} />
  )
}

export function SectionText(
  { className, ...props }: ComponentProps<"p">
) {
  return (
    <p className={cn(
      "mt-5 text-pretty text-lg font-light",
      className
    )} {...props} />
  )
}
