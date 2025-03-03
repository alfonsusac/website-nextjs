import { ReactIDLogo } from "@/components/icons/reactjs-id"
import { cn } from "lazy-cn"
import type { ComponentProps, SVGProps } from "react"

export default function KomunitasPage() {
  return <>
    <SectionTentangKami className="px-page-px *:container-[600] min-h-screen" />
    <SectionGabungKami className="px-page-px *:container-content" />
  </>
}


function SectionTentangKami(
  props: ComponentProps<'section'>
) {
  return <section {...props} >
    <div className={cn(
      "pt-20",
      "font-light",

      "[&_p]:font-light",

      "[&_h1,h2,h3,h4,h5,p]:leading-[1.5]",
      "[&_h1]:text-5xl",
      "[&_h1]:text-foreground-loud",
      "[&_h1]:font-semibold",
      "[&_h1]:tracking-tight",

      "[&_h2]:mt-24",
      "[&_h2]:text-2xl",
      "[&_h2]:text-foreground-loud",
      "[&_h2]:font-medium",


    )}>
      <ReactIDLogo className="h-8" />
      <h1>
        Tentang Kami
      </h1>
      <p className="text-2xl font-light text-foreground-loud leading-tight!">
        Komunitas Developer React Terbesar di Indonesia
      </p>
      <p className="mt-8">
        ReactJS Indonesia adalah komunitas yang didedikasikan untuk developer React di Indonesia. Kami bertujuan untuk menghubungkan, mendukung, dan menginspirasi para developer dari berbagai latar belakang dan tingkat pengalaman melalui berbagai kegiatan dan acara.
      </p>
      <GeneralStatisticBlock className="my-8" />


      <h2>
        Contributors
      </h2>

    </div>
  </section>
}

function GeneralStatisticBlock(
  { className, ...props }: ComponentProps<'div'>
) {
  return (
    <div className={cn(
      "flex flex-col",
      "sm:flex-row",

      "*:my-3",
      "min-[380px]:*:my-1",
      "min-[380px]:*:flex",
      "min-[380px]:*:gap-2",
      "min-[380px]:*:items-center",
      "sm:*:block",
      "sm:*:px-6",
      "sm:*:border-l",
      "*:border-l-muted",
      "*:first:border-l-0",
      "*:first:ps-0",


      "*:*:nth-[1]:text-3xl",
      "*:*:nth-[1]:mb-1 ",

      "*:*:nth-[2]:text-xl",
      "sm:*:*:nth-[2]:text-2xl",
      "*:*:nth-[2]:font-normal",
      "*:*:nth-[2]:text-foreground-loud",
      className
    )} {...props}>
      <div>
        <PhUsersFill className="text-muted" />
        <div>10.000+</div>
        <p>Member Telegram</p>
      </div>
      <div>
        <PhCalendarCheckFill className="text-muted" />
        <div>12 Events</div>
        <p>Acara diselenggarakan</p>
      </div>
      <div>
        <PhFacebookLogoFill className="text-muted" />
        <div>58.000+</div>
        <p>Member Facebook</p>
      </div>
    </div>
  )
}

function SectionGabungKami(
  props: ComponentProps<'section'>
) {
  return <section>

  </section>
}



function PhUsersFill(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...props}><path fill="currentColor" d="M164.47 195.63a8 8 0 0 1-6.7 12.37H10.23a8 8 0 0 1-6.7-12.37a95.83 95.83 0 0 1 47.22-37.71a60 60 0 1 1 66.5 0a95.83 95.83 0 0 1 47.22 37.71m87.91-.15a95.87 95.87 0 0 0-47.13-37.56A60 60 0 0 0 144.7 54.59a4 4 0 0 0-1.33 6a75.83 75.83 0 0 1 3.63 89.94a4 4 0 0 0 1.07 5.53a112.3 112.3 0 0 1 29.85 30.83a23.92 23.92 0 0 1 3.65 16.47a4 4 0 0 0 3.95 4.64h60.3a8 8 0 0 0 7.73-5.93a8.22 8.22 0 0 0-1.17-6.59"></path></svg>
  )
}



export function PhCalendarCheckFill(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...props}><path fill="currentColor" d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-38.34 101.66l-48 48a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L116 164.69l42.34-42.35a8 8 0 0 1 11.32 11.32M48 80V48h24v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32Z"></path></svg>
  )
}

function PhFacebookLogoFill(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...props}><path fill="currentColor" d="M232 128a104.16 104.16 0 0 1-91.55 103.26a4 4 0 0 1-4.45-4V152h24a8 8 0 0 0 8-8.53a8.17 8.17 0 0 0-8.25-7.47H136v-24a16 16 0 0 1 16-16h16a8 8 0 0 0 8-8.53a8.17 8.17 0 0 0-8.27-7.47H152a32 32 0 0 0-32 32v24H96a8 8 0 0 0-8 8.53a8.17 8.17 0 0 0 8.27 7.47H120v75.28a4 4 0 0 1-4.44 4a104.15 104.15 0 0 1-91.49-107.19c2-54 45.74-97.9 99.78-100A104.12 104.12 0 0 1 232 128"></path></svg>
  )
}
