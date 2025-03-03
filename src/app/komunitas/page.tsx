import { communityInfo } from "@/_content/info"
import { ReactIDLogo } from "@/components/icons/reactjs-id"
import { cn } from "lazy-cn"
import { Fragment, type ComponentProps, type SVGProps } from "react"
import { PhCalendarCheckFill, PhFacebookLogoFill, PhUsersFill } from "../../components/Icons"
import { SectionGabungKami } from "@/components/GabungSection"

export default function KomunitasPage() {
  return <>
    <SectionTentangKami className="px-page-px pt-18 *:container-[600]" />
    <SectionGabungKami className="px-page-px *:container-content" />
  </>
}


function SectionTentangKami(
  props: ComponentProps<'section'>
) {
  return <section {...props} >
    <div className="article-style-prose">
      <ReactIDLogo className="h-5 mb-3" />
      <h1>Tentang Kami</h1>
      <p className="text-2xl font-light text-foreground-loud leading-none!">
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
              <div className="text-foreground">
                {member.name}
              </div>
              <div className="text-muted">
                Core Team
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
              Misi #{index + 1} - <mission.icon className="inline align-[-0.1em]" />
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





