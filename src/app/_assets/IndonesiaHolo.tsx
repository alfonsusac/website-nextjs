import type { ComponentProps } from "react"
import { Indonesia, IndonesiaAnimatedStroke } from "./Indonesia"
import { LocationDot } from "./LocationDot"
import { cn } from "lazy-cn"

export function IndonesiaHolograph(
  { style, className, ...props }: ComponentProps<'div'>
) {
  return (
    <div
      className={cn("w-full", className)}
      style={{
        perspective: '1000px',
        ...style,
      }}
      {...props}
    >
      <div
        className="relative"
        style={{
          transform: 'rotateX(40deg) scale(1.2)',
          transformStyle: 'preserve-3d'
        }}
      >
        {[
          { x: 0, y: 30, label: "Aceh" },
          { x: 55, y: 61, label: "Medan" },
          { x: 85, y: 127, label: "Bukittinggi" },
          { x: 118, y: 186, label: "Bengkulu" },
          { x: 196, y: 229, label: "Jakarta" },
          { x: 209, y: 242, label: "Bandung" },
          { x: 256, y: 258, label: "Yogyakarta" },
          { x: 298, y: 248, label: "Surabaya" },
          { x: 341, y: 272, label: "Ubud" },
          { x: 452, y: 275, label: "Ende" },
          { x: 329, y: 180, label: "Banjarmasin" },
          { x: 418, y: 212, label: "Makassar" },
          { x: 567, y: 187, label: "Kota Ambon" },
          { x: 782, y: 168, label: "Jaya Pura" },
        ].map(({ x, y, label }, index) => (
          <LocationDot
            key={`${ x }-${ y }`}
            x={x} y={y}
            index={index}
            label={label}
          />
        ))}
        <Indonesia
          className="relative z-10"
          fill={"#343B47"}
        />
        <Indonesia
          className=" absolute inset-0 -z-10 top-2 scale-[0.995]"
          stroke={"#7bb9c722"}
        />
        <Indonesia
          className="absolute inset-0 -z-10 top-4 scale-[0.99]"
          stroke={"#7bb9c711"}
        />
        <IndonesiaAnimatedStroke
          dashLength={20}
          className="z-10 absolute inset-0"
          stroke={"#7bb9c788"}
        />
        {
          [
            12, 10, 8
          ].map(
            (l) => {
              return (
                <IndonesiaAnimatedStroke
                  key={l}
                  dashLength={l}
                  className="z-10 absolute inset-0 indonesia-mask"
                  stroke={"#343B4788"}
                />
              )
            }
          )
        }
        <div
          className="absolute inset-0 indonesia-mask-stroke"
        />
        <div className="-z-10 absolute inset-0 bg-[url('/grid1.svg')] opacity-10 indonesia-mask"
          style={{
            transform: 'translateZ(-1px)',
            backgroundSize: '4.05%',
          }}
        />
      </div>
    </div>
  )
}
