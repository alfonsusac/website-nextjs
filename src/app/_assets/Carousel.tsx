"use client"

import { cn } from "lazy-cn"
import { useEffect, useRef, type ComponentProps } from "react"

const imgCount = 8

export function HeroCarousel() {

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const animation = ref.current.animate([
      { transform: "translateX(0%)" },
      { transform: "translateX(-100%)" },
    ], {
      duration: 10000 * imgCount,
      iterations: Number.POSITIVE_INFINITY,
    })

    ref.current.addEventListener('mouseenter', () => {
      animation.pause()
    })
    ref.current.addEventListener('mouseleave', () => {
      animation.play()
    })

    ref.current.animate([
      {
        filter: "blur(5px)",
        opacity: 0,
      },
      {
        filter: "blur(0px)",
        opacity: 1,
      }
    ], {
      duration: 600,
      fill: "forwards",
    })

    return () => {
      animation.cancel()
    }
  }, [])

  return (
    <>
      <div
        className="relative w-fit mx-auto group min-[2239px]:hidden"
        ref={ref}
      >
        <StaticCarousel className="absolute top-0 right-full" />
        <StaticCarousel />
        <StaticCarousel className="absolute top-0 left-full" />
      </div>
      <div
        className="hidden min-[2239px]:block"
      >
        <StaticCarousel />
      </div>
    </>
  )
}

function StaticCarousel(
  { className, ...props }: ComponentProps<"div">
) {
  return (
    <div
      className={cn("flex justify-center gap-4 lg:gap-6 pl-4 lg:pl-6", className)}
      {...props}
    >
      {Array.from({ length: imgCount }, (_, index) => index).map((i) => (
        <CarouselItem
          i={i}
          key={i}
        />
      ))}
    </div>
  )
}

function CarouselItem(
  { i }: { i: number }
) {
  return (
    <div
      className={cn(
        "aspect-4/3 w-48 lg:w-64 bg-white/50 shrink-0 rounded-xl lg:rounded-2xl overflow-hidden",
        "transition-all duration-300",
        "group-hover:brightness-50",
        "hover:brightness-100!",
        "hover:rotate-0",
        "hover:scale-110",
        (i % imgCount) % 2 === 0 ? "rotate-3" : "-rotate-3",
      )}
      key={i}
    >
      <div className={cn(
        "absolute inset-0 rounded-xl lg:rounded-2xl z-10 shadow-[inset_0px_0.05rem_0.01rem_0_#fff5]",
        "after:pointer-events-none",
        "after:absolute",
        "after:w-full",
        "after:h-full",
        "after:-left-full",
        "hover:after:left-full",
        "hover:after:duration-1000",
        "hover:after:transition-all",
        "after:bg-linear-to-r",
        "after:from-transparent",
        "after:via-white/10",
        "after:to-transparent",
        "after:-skew-x-12"
      )}>
      </div>
      <img
        src={`/homecarousel/_${ (i % imgCount) + 1 }.png`}
        alt=""
        className={cn(
          "w-full h-full object-cover shadow-[inset_0px_4px_0_0_#fff]"
        )}
      />
    </div>
  )
}
