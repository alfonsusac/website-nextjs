import { communityInfo } from "@/_content/info"
import { ReactIDLogo } from "@/components/icons/reactjs-id"
import { cn } from "lazy-cn"
import { Fragment, type ComponentProps, type SVGProps } from "react"
import { HugeiconsTree06, IconParkOutlineCircularConnection, MaterialSymbolsGlobe, PhCalendarCheckFill, PhFacebookLogoFill, PhUsersFill } from "../../components/Icons"
import { SectionGabungKami } from "@/components/GabungSection"
import { getAllGitHubContributors } from "@/util/data"
import { contributors } from "@/_content/contributors"

export default async function KomunitasPage() {

  await getAllGitHubContributors()


  return <>
    <SectionTentangKami className="px-page-px pt-18 *:container-content-xs" />
    <SectionGabungKami className="px-page-px *:container-content-xs" asArticle />
  </>
}


function SectionTentangKami(
  props: ComponentProps<'section'>
) {


  const allContributors = [
    ...communityInfo.contributors.map(e => e.github),
    ...contributors
  ]

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

      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-y-2 my-8">
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
      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-y-1 gap-x-6 my-8">
        {contributors.map((member, index) => (
          <a
            key={index}
            href={`https://github.com/${ member }`}
            target="_blank"
            className={cn(
              "flex gap-3 flex-1 items-center pointer-fine:hover:bg-foreground/5 rounded-3xl py-2 offset-x-2",

              "transition-all duration-500",
              "pointer-fine:hover:transition-none",
            )}
          >
            <img
              src={'https://github.com/' + member + '.png'}
              alt={member.split('/').at(-1)}
              className="rounded-full overflow-clip w-6 h-6 shrink-0"
            />
            <div className="text-sm font-normal">
              <div className="line-clamp-1 ">
                {member.split('/').at(-1)}
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





