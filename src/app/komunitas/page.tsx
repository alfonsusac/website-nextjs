import { communityInfo } from "@/_content/info"
import { ReactIDLogo } from "@/components/icons/reactjs-id"
import { cn } from "lazy-cn"
import { Fragment, type ComponentProps, type SVGProps } from "react"
import { MdiReact, MdiTelegram, CibMeetup, IcBaselineFacebook, RiTwitterXLine } from "../_assets/Icons"
import { SectionTag, SectionHeader, SectionText } from "@/components/Section"
import { SocialLink } from "@/components/Button"
import { SectionGabungKami } from "@/components/GabungSection"

export default function KomunitasPage() {
  return <>
    <SectionTentangKami className="px-page-px *:container-[600]" />
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
      "[&_h2]:mb-2",
      "[&_h2]:text-2xl",
      "[&_h2]:text-foreground-loud",
      "[&_h2]:font-medium",
      "[&_h2]:tracking-tight",

      "[&_h3]:mt-16",
      "[&_h3]:mb-4",
      "[&_h3]:text-lg",
      "[&_h3]:text-foreground-loud",
      "[&_h3]:font-medium",
      "[&_h3]:tracking-tight",

      "[&_h4]:text",
      "[&_h4]:text-muted",
      "[&_h4]:font-normal",
      "[&_h4]:tracking-tight",

      "[&>hr]:border-muted",
      "[&>hr]:my-14"


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
        Organizers
      </h2>

      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-y-4 my-8">
        {communityInfo.teamMembers.map((member, index) => (
          <div key={index} className="flex gap-3 flex-1 py-2">
            <img
              src={member.links.github + '.png'}
              alt={member.name}
              className="rounded-full overflow-clip w-10 h-10 shrink-0"
            />
            <div className="text-sm font-normal">
              <div className="text-foreground-loud">
                {member.name}
              </div>
              <div className="text-foreground/60">
                Core Team
              </div>
              <div className="flex gap-2">

              </div>
            </div>
          </div>
        ))}

      </div>
      <h4 className="-my-4 mt-0 font-medium! text-sm">
        Past Contributors
      </h4>
      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-y-2 gap-x-3 my-8">
        {communityInfo.contributors.map((member, index) => (
          <a
            key={index}
            href={member.github}
            target="_blank"
            className={cn(
              "flex gap-3 flex-1 items-center pointer-fine:hover:bg-foreground/5 rounded-3xl py-2 offset-x-2",

              "transition-all duration-500",
              "pointer-fine:hover:transition-none",
            )}
          >
            <img
              src={member.github + '.png'}
              alt={member.name ?? member.github.split('/').at(-1)}
              className="rounded-full overflow-clip w-6 h-6 shrink-0"
            />
            <div className="text-sm font-normal">
              <div className="line-clamp-1 ">
                {member.name ?? member.github.split('/').at(-1)}
              </div>
            </div>
          </a>
        ))}
      </div>

      <h2>Misi Kami</h2>
      {
        [
          {
            icon: IconParkOutlineCircularConnection,
            title: "Menghubungkan Developer",
            description: "Kita percaya bahwa komunitas yang kuat bisa bikin kita semua berkembang lebih cepat. Di sini, developer React dari berbagai latar belakang bisa saling berbagi pengalaman, belajar bareng, dan mungkin bahkan menemukan partner kolaborasi yang cocok!"
          },
          {
            icon: HugeiconsTree06,
            title: "Belajar dan Bertumbuh Bareng",
            description: "React terus berkembang, dan kita juga! Makanya, kita sering ngadain diskusi, lokakarya, dan berbagai acara seru buat bantu semua orang, dari pemula sampai expert, buat tetap up-to-date dan semakin jago."
          },
          {
            icon: MaterialSymbolsGlobe,
            title: "Berkontribusi dan Memberi Dampak",
            description: "Kita nggak cuma pakai teknologi, tapi juga ingin berkontribusi ke komunitas open-source dan bikin sesuatu yang bermanfaat. Dengan berbagi solusi dan berkontribusi bareng, kita bisa bantu ekosistem React berkembang lebih jauh, baik di Indonesia maupun dunia."
          }
        ].map((mission, index) => (
          <Fragment key={index}>
            <div className="mt-8 mb-2 text-muted font-normal text-sm">
              Misi #{index + 1} - <mission.icon className="inline" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-x-4">
              <h3 className="!mt-0 !text-2xl !leading-tight">
                {mission.title}
              </h3>
              <div>
                {mission.description}
              </div>
            </div>
          </Fragment>
        ))
      }
      <hr />
    </div>
  </section>
}


function IconParkOutlineCircularConnection(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48" {...props}><g fill="none" stroke="currentColor" strokeWidth="4"><path d="M13.5 39.37A16.93 16.93 0 0 0 24 43c3.963 0 7.61-1.356 10.5-3.63M19 9.747C12.051 11.882 7 18.351 7 26c0 1.925.32 3.775.91 5.5M29 9.747C35.949 11.882 41 18.351 41 26c0 1.925-.32 3.775-.91 5.5"></path><path strokeLinecap="round" strokeLinejoin="round" d="M43 36c0 1.342-.528 2.56-1.388 3.458A5 5 0 1 1 43 36m-28 0c0 1.342-.528 2.56-1.388 3.458A5 5 0 1 1 15 36M29 9c0 1.342-.528 2.56-1.388 3.458A5 5 0 1 1 29 9"></path></g></svg>
  )
}


function HugeiconsTree06(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 22V9m-2.998 9.002c-1.657 0-3-1.379-3-3.035a3.5 3.5 0 0 1-.74-6.74a3 3 0 0 1 3.844-4.016a3.001 3.001 0 0 1 5.79.001a3 3 0 0 1 3.844 4.016a3.501 3.501 0 0 1-.738 6.739c0 1.656-1.343 3.035-3 3.035M12 15l2.5-2.5M12 13l-2.5-2.5M10 22h4" color="currentColor"></path></svg>
  )
}

function MaterialSymbolsGlobe(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-.175-.012-.363t-.013-.312q-.125.725-.675 1.2T18 13h-2q-.825 0-1.412-.587T14 11v-1h-4V8q0-.825.588-1.412T12 6h1q0-.575.313-1.012t.762-.713q-.5-.125-1.012-.2T12 4Q8.65 4 6.325 6.325T4 12h5q1.65 0 2.825 1.175T13 16v1h-3v2.75q.5.125.988.188T12 20"></path></svg>
  )
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
