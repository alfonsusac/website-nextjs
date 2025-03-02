import type { ComponentProps } from "react";

export function LocationDot(
  {
    x, y, index, label,
    ...props
  }: ComponentProps<"div"> & {
    x: number,
    y: number,
    index: number,
    label: string,
  }
) {

  return (
    <div
      key={`${ x }-${ y }`}
      className="bg-[#41dcff] absolute h-[1.5%] aspect-square rounded-full z-20 outline"
      style={{
        top: `${ (y / 2.95) - 8 }%`,
        left: `${ x / 7.9 }%`,
        animationDelay: `${ index * 0.05 }s`,
        transform: 'scale(0.83333333333)',
        transformStyle: 'preserve-3d',
      }}
    >
      <div className="absolute inset-0 rounded-full bg-[#41dcff88] animate-ping-bigger"
        style={{
          animationDelay: `${ - index * 13 }s`,
        }}
      />
      <div className="absolute top-1/2 left-1/2 w-12 h-12 peer"
        style={{
          transform: 'translateZ(1px) translateX(-50%) translateY(-50%)',
          animationDelay: `${ - index * 13 }s`,
        }}
      />
      <div className="absolute origin-bottom bottom-full flex flex-col items-center select-none  transition location-dot-label left-1/2 pointer-events-none">
        <div className="rounded-md px-2 py-1 bg-[#15181D] text-xs text-nowrap border border-[#293239]">
          {label}
        </div>
        <div className="pb-0.5 -translate-y-px">
          <svg width="10" height="3" viewBox="0 0 100 100" preserveAspectRatio="none" role="presentation">
            <polygon points="10,0 100,0 50,100" fill={"#15181D"} />
          </svg>
        </div>
      </div>
    </div>
  )
}
