import { ReactIDLogo } from '@/components/icons/reactjs-id';
import { cn } from 'lazy-cn';
import React, { type ComponentProps, type SVGProps } from 'react';
import { HeroCarousel } from '../_assets/Carousel';
import { IndonesiaHolograph } from '../_assets/IndonesiaHolo';
import { LampGradientBackground } from '../_assets/LampGradient';
import { featuredEvents } from '@/_content/events';
import { communityInfo } from '@/_content/info';
import { CibMeetup, IcBaselineFacebook, IcBaselineLaunch, IconoirLongArrowRightDownSolid, IcRoundStarRate, MdiReact, MdiTelegram, RiTwitterXLine } from '../_assets/Icons';
import { SectionText, SectionTag, SectionHeader } from '@/components/Section';
import { LinkButton, SocialLink } from '@/components/Button';

export default function Home() {
  return (
    <>
      {/* Background Layer */}
      <div className="absolute w-0 h-[40rem] top-0 left-1/2 -translate-x-1/2 -z-10 pointer-events-none contain-layout" >
        <div className="hero-gradient absolute w-[180rem] h-[40rem] -translate-y-1/2 rotate-[-45deg] left-1/2 -translate-x-[40%] pointer-events-none" />
      </div>

      {/* Hero Section */}
      <section className="px-page-px pt-14 ">
        <div className="container-content flex w-full flex-col items-start sm:items-center sm:text-center">
          <ReactIDLogo className="h-10" />
          <h1 className="mt-8 text-pretty font-bold text-5xl md:text-6xl lg:text-6xl text-white tracking-tighter">
            Komunitas Developer <br />
            ReactJS Indonesia
          </h1>
          <SectionText className="mt-6 text-xl max-w-160">
            Temukan inspirasi dan bertumbuh bersama ribuan developer yang membangun masa depan digital dengan React di Indonesia.
          </SectionText>
          <LinkButton primary href="#join" className="mt-8 px-16">
            Masuk
          </LinkButton>
        </div>
      </section>

      {/* Carousel */}
      <section className="pt-20 lg:pt-20">
        <HeroCarousel />
      </section>

      {/* Networing */}
      <section className="px-page-px pb-32 pt-48 md:pt-52">
        <div className={cn("container-content",
          "flex justify-center items-end  flex-wrap-reverse lg:flex-nowrap gap-y-10"
        )}>
          {/* Left */}
          <div className="flex-grow-3 xs:min-w-80 basis-0 z-10">
            {/* Section Tag */}
            <SectionTag>Networking</SectionTag>
            <SectionHeader id="networking">
              Belajar & Berjejaring <br /> di Event Terbaru
            </SectionHeader>
            <SectionText className="mt-5">
              Jangan lewatkan kesempatan untuk belajar, berbagi, dan berjejaring dengan sesama developer React di Indonesia!
            </SectionText>
          </div>

          {/* Right */}
          <div className="flex-grow-1 xs:min-w-80 basis-0 flex items-center justify-center">
            <div
              className={cn(
                'h-full flex-none w-[27rem] flex flex-wrap gap-2 select-none',
                '*:p-1',
                '*:h-14',
                '*:px-8',
                '*:flex',
                '*:items-center',
                '*:rounded-3xl',
                '*:text-lg',
              )}
              style={{
                // @ts-expect-error custom css props
                '--bg': '#272E37',
                '--bg-faded': '#272E3788',
              }}
            >
              <div className="w-[6rem] bg-linear-to-r from-transparent to-[var(--bg-faded)]" />
              <div className="bg-[var(--bg)]">Talkshow</div>
              <div className="w-[4rem] grow bg-linear-to-l via-transparent from-transparent to-[var(--bg-faded)]" />
              <div className="w-[8rem] bg-linear-to-r via-transparent from-transparent to-[var(--bg-faded)]" />
              <div className="bg-[var(--bg)]">Workshop</div>
              <div className="w-[7rem] grow bg-linear-to-l via-transparent from-transparent to-[var(--bg-faded)]" />
              <div className="bg-linear-to-r from-transparent to-[var(--bg-faded)]" />
              <div className="bg-[var(--bg)]">Meetup</div>
              <div className="bg-[var(--bg)]">Hackathon</div>
              <div className="grow px-0! bg-linear-to-l from-transparent to-[var(--bg-faded)]" />
            </div>
          </div>
        </div>

        {/* Featured Events */}
        <div className="container-content-sm flex flex-col items-start gap-14 xs:gap-8 mt-16">
          <div className="text-muted text font-medium">
            Reactjs.id Featured Events
            <IconoirLongArrowRightDownSolid className="w-6 h-6 inline translate-y-1" />
          </div>
          {featuredEvents.map((event) => (
            <div key={event.title} className="group flex gap-6 flex-col items-start xs:flex-row xs:items-center cursor-pointer">
              <div className="max-h-40 xs:h-28 sm:h-32 md:h-36 aspect-video shrink-0">
                <img
                  src={event.image}
                  alt=""
                  className={cn(
                    "reactify-filter rounded-2xl transition-all duration-300 outline outline-muted/30",
                    "pointer-fine:group-hover:scale-105",
                  )} />
              </div>
              <div className="flex flex-col gap-1 min-w-0 pointer-fine:group-hover:text-foreground-loud">
                <div className="text-xl leading-none line-clamp-1">
                  {event.title}
                </div>
                <div className="opacity-40 leading-none mb-2 text-sm">
                  {event.date.toDateString()}
                </div>
                <div className="opacity-80 line-clamp-2 text-sm">
                  {event.description}
                </div>
                <div className="opacity-40 mt-2 self-start text-sm">
                  Baca selanjutnya {'->'}
                </div>
              </div>
            </div>
          ))}
          <LinkButton>Lihat semua acara {'->'}</LinkButton>
        </div>
      </section>

      {/* Kolaborasi */}
      <section className="px-page-px py-24 md:py-28">

        <LampGradientBackground
          className="w-[80rem] h-[60rem] z-10 -translate-y-[20rem]"
          gradient={`
conic-gradient(
  from 0.25turn at 80% 25%,
  #a8e0ed, 1deg, #41dcff11, 280deg, #16181D00
)
            `}
          mask={`
radial-gradient(
    50% 50% at 50% 50%,
    #000 0%,
    #000 0%,
    #0000 100%
)
          `}
        />

        <div className="container-content flex flex-col-reverse gap-8 sm:flex-col items-center text-center">
          <header>
            <SectionTag>Kolaborasi</SectionTag>
            <SectionHeader id="kolaborasi">Kolaborasi dengan <br />Developer Se-Indonesia</SectionHeader>
            <SectionText className="max-w-[40rem] mx-auto">
              Bangun koneksi dan temukan inspirasi dari komunitas React di berbagai kota.
            </SectionText>
          </header>
          <IndonesiaHolograph />
        </div>

      </section>

      {/* Kontribusi */}
      <section className={cn("pt-20 pb-32 px-page-px ",
        "bg-linear-to-b from-accent/0 to-accent/5"
      )}>

        <div className="container-content">

          <div className="flex flex-col md:flex-row gap-y-8 gap-x-2 flex-wrap">

            <div className="max-w-120 flex-1">
              <SectionTag>
                Kontribusi
              </SectionTag>
              <SectionHeader className="text-wrap!" id="kontribusi">
                Berkarya dan<br /> Berkontribusi
              </SectionHeader>
              <SectionText>
                Ikut serta dalam proyek komunitas dan bantu membangun masa depan React di Indonesia!
              </SectionText>
            </div>

            <div className={cn(
              "flex-1 max-w-content-sm",
              "flex flex-col gap-6",
            )}>
              <div className="text-muted font-medium">
                Reactjs.id Current Projects
                <IconoirLongArrowRightDownSolid className="w-6 h-6 inline translate-y-1" />
              </div>
              <div className="flex flex-col gap-2 max-w-120">

                {/* Ideally this part should also fetch CMS to maintain the list */}

                {/* Ideally this should points to a project page first */}
                {/* Because we need new-comers to contact "PIC" from the telegram group to allow contribution */}
                <a
                  href="https://github.com/reactjs/id.react.dev"
                  target="_blank"
                  className="w-full flex flex-col gap-2 p-5 border rounded-2xl border-muted/20 hover:bg-foreground/5 cursor-pointer">
                  <div className="text-foreground-loud text-lg">
                    Dokumentasi React.js Bahasa Indonesia <IcBaselineLaunch className="inline align-[-0.2rem] text-muted" />
                  </div>
                  <div className="font-light opacity-60 text-sm">
                    Bantu menerjemahkan dan menyempurnakan dokumentasi React dalam Bahasa Indonesia, agar lebih banyak developer bisa belajar dengan mudah.
                  </div>
                  <div className="text-sm flex gap-4 flex-wrap">
                    <div className="flex items-center gap-1">
                      <IcRoundStarRate className="inline" />317
                    </div>
                  </div>

                </a>

                <a
                  href="https://github.com/reactjs-id/website-nextjs"
                  target="_blank"
                  className="w-full flex flex-col gap-2 p-5 border rounded-2xl border-muted/20 hover:bg-foreground/5 cursor-pointer">
                  <div className="text-white text-lg">
                    Website React.js Indonesia
                    <IcBaselineLaunch className="inline align-[-0.2rem] text-muted" />
                  </div>
                  <div className="font-light opacity-60 text-sm">
                    Kembangkan dan tingkatkan situs komunitas ReactJS Indonesia, tempat developer bisa menemukan informasi, acara, dan proyek terbaru.
                  </div>
                  <div className="text-sm flex gap-4 flex-wrap">
                    <div className="flex items-center gap-1">
                      <IcRoundStarRate className="inline" />8
                    </div>
                  </div>
                </a>
              </div>

              <LinkButton className="self-start" href={communityInfo.github.link}>
                Ikuti GitHub Kami {'->'}
              </LinkButton>

            </div>

          </div>

        </div>
      </section>

      {/* Gabung ReactJS */}
      <section className="px-page-px pt-24 md:pt-28 pb-40 bg-linear-to-b from-transparent via-[#0e1114] to-[#0e1114] border-b border-b-foreground/5 relative">

        <div className="absolute inset-0 overflow-hidden  contain-layout flex justify-center">
          <MdiReact className="h-[80rem] w-[80rem] shrink-0 stroke-[#505a6933] stroke-[0.02] translate-x-40 animate-dash-offset " fill="transparent"
            style={{
              strokeDasharray: '0.3 0.1 0.2 0.1',
            }}
          />
        </div>

        <div className="container-content flex flex-col items-start z-10">

          {/* Header */}
          <section className="flex flex-col items-center text-center container-content-sm flex-wrap-reverse lg:flex-nowrap">
            <SectionTag separator="Join" />
            <SectionHeader id="join">
              Gabung dan Jadi Bagian <br /> dari Komunitas!
            </SectionHeader>
            <SectionText className="mt-5">
              Jadilah bagian dari komunitas developer React terbesar di Indonesia di ujung jarimu. Temukan kami di platform social media favorit-mu!
            </SectionText>
          </section>
          {/* End of Header */}

          {/* Social Links */}
          <div className="w-full mt-16 container-content-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {
                [
                  {
                    title: "Telegram Supergroup",
                    description: "Diskusi real-time dengan komunitas di Telegram!",
                    icon: MdiTelegram,
                    href: communityInfo.telegram.link,
                  },
                  {
                    title: "Meetup Group",
                    description: "Ikuti event dan bertemu langsung dengan sesama developer!",
                    icon: CibMeetup,
                    href: communityInfo.meetup.link,
                  },
                  {
                    title: "Facebook Group",
                    description: "Gabung di komunitas Facebook dan berbagi wawasan!",
                    icon: IcBaselineFacebook,
                    href: communityInfo.facebook.link
                  },
                  {
                    title: "Official Twitter Account",
                    description: "Dapatkan update dan insight terbaru di Twitter!",
                    icon: RiTwitterXLine,
                    href: communityInfo.twitter.link
                  },
                ].map((social, index) => (
                  <SocialLink
                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                    key={index}
                    className="relative overflow-hidden group flex flex-col gap-1 *:shrink-0"
                  >
                    <social.icon className="w-[1.5em] h-[1.5em] inline mr-1.5 mb-1 align-[-0.2rem] text-muted" fill="currentColor" />
                    <div className="text-lg text-foreground-loud tracking-tight z-10">
                      {social.title} <span className="text-nowrap tracking-normal">{'->'}</span>
                    </div>
                    <div className="z-10 opacity-80 text-sm">
                      {social.description}
                    </div>
                    <div className="absolute -bottom-20 right-0 text-[8rem] fill-[#212834] group-hover:-bottom-10 transition-all">
                      <social.icon className="w-60 h-60" />
                    </div>
                  </SocialLink>
                ))
              }
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
