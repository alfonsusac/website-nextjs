import { cn } from "lazy-cn"
import Link from "next/link"
import type { ComponentProps } from "react"

export function LinkButton<NextLink extends boolean = false>(
  { className, primary, nextLink, ...props }: ComponentProps<
    NextLink extends true ? typeof Link : 'a'
  > & {
    href: string
    primary?: boolean
    nextLink?: NextLink
  }
) {
  const LinkComponent = nextLink ? Link : 'a'

  return (
    <LinkComponent
      target={props.href.startsWith('/') ? undefined : '_blank'}
      {...props}
      className={cn(
        'link-button',
        'py-3 px-8 rounded-3xl',
        'shadow-[0_0.4rem_0.4rem_0px_#0002,_inset_0_0.1rem_0.05rem_0px_#fff1,_inset_0_-0.4rem_1rem_0px_#252b35]',
        'cursor-pointer',
        'select-none',
        'transition-all duration-75',

        'font-normal',
        'text-white/80',
        'bg-[#1B212A]',
        'hover:brightness-110',
        'hover:text-white',

        'active:translate-y-0.5',

        primary && [
          'font-medium',
          'shadow-[0_0.4rem_0.4rem_0px_#0002,_inset_0_0.15rem_0.05rem_0px_#fff4,_inset_0_0.5rem_1rem_0px_#0c30546a]',
          'text-white',
          'bg-accent',
        ],

        className,
      )}
    />
  )
}

export function SocialLink(
  { className, ...props }: ComponentProps<'a'> & {
    href: string
  }
) {

  return (
    <LinkButton
      className={cn(
        "px-6 py-5 min-h-32 sm:min-h-40 flex flex-col justify-end",
        className
      )}
      {...props}
    />
  )
}
