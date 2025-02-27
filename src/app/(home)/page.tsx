import { CarouselSection } from '@/components/home/carousel-section';
import { HeroSection } from '@/components/home/hero-section';
import { ReactIDLogo } from '@/components/icons/reactjs-id';
import { NetworkingSection } from '@/components/home/networking-section';
import { heroPhotos } from '../_data/hero-photos';
import { fakerEvents } from '../_data/faker-events';
import NetworkingIllustration from '@/assets/networking.svg';
import Image from 'next/image';
import { cn } from 'lazy-cn';
import React, { Fragment, type ComponentProps, type SVGProps } from 'react';
import { Indonesia, IndonesiaAnimatedStroke } from '@/app/(home)/assets/Indonesia';
import { LocationDot } from './assets/LocationDot';
import { HeroCarousel } from './assets/Carousel';

export default function Home() {
  return (
    <>
      <div className="absolute w-0 h-[40rem] top-0 left-1/2 -translate-x-1/2 -z-10 pointer-events-none contain-layout" >
        <div
          className="hero-gradient absolute w-[180rem] h-[40rem] -translate-y-1/2 rotate-[-45deg] left-1/2 -translate-x-[40%] pointer-events-none" />
      </div>

      {/* Hero Section */}
      <section className="pt-14 px-[var(--px-page)]">
        <div className="mx-auto flex w-full max-w-[var(--mw-content)] flex-col items-start sm:items-center   sm:text-center">
          <ReactIDLogo className="h-10" />
          <h1 className="mt-8 text-pretty font-bold text-5xl md:text-6xl lg:text-6xl text-white tracking-tighter">
            Komunitas Developer <br />
            ReactJS Indonesia
          </h1>
          <p className="mt-5 text-pretty font-light text-xl sm:text-xl leading-8 sm:leading-8 max-w-[40rem]">
            Temukan inspirasi dan bertumbuh bersama ribuan developer yang membangun masa depan digital dengan React di Indonesia.
          </p>

          <a
            href="#asdf"
            className={cn(
              'mt-6 py-3 px-16 rounded-3xl',
              'shadow-[0_0.4rem_0.4rem_0px_#0002,_inset_0_0.15rem_0.05rem_0px_#fff4,_inset_0_-0.4rem_1rem_0px_#fff2]',

              'select-none',
              'transition-all duration-75',

              'font-medium',
              'text-white',
              'bg-[#3cb0ca]',
              'hover:brightness-110',

              'active:translate-y-0.5',
            )}
          >
            Masuk
          </a>
        </div>
      </section>

      {/* Carousel */}
      <section className="pt-12 lg:pt-16 ">
        <HeroCarousel />
      </section>

      {/* Networing */}
      <section className="mb-32 mt-48 md:mt-52 px-[var(--px-page)]">
        <div className="mx-auto flex w-full max-w-[var(--mw-content)] flex-col items-start">
          {/* Header */}
          <section className="flex justify-center items-end w-full flex-wrap-reverse lg:flex-nowrap gap-y-10">
            {/* Left */}
            <div className="flex-grow-[3] basis-0">
              {/* Section Tag */}
              <SectionTag>
                Networking
              </SectionTag>
              <SectionHeader className="mt-5 text-nowrap">
                Belajar & Berjejaring <br /> di Event Terbaru
              </SectionHeader>
              <SectionText className="mt-5">
                Jangan lewatkan kesempatan untuk belajar, berbagi, dan berjejaring dengan sesama developer React di Indonesia!
              </SectionText>
              {/* <p className="mt-5 text-pretty text-lg sm:text-lg  max-w-[40rem] font-light">
                Jangan lewatkan kesempatan untuk belajar, berbagi, dan berjejaring dengan sesama developer React di Indonesia!
              </p> */}
            </div>

            {/* Right */}
            <div className="flex-grow-[1] min-w-[20rem] basis-0 flex items-center justify-center">
              <div
                className={cn(
                  'h-full flex-none w-[27rem] flex flex-wrap gap-2 select-none',
                  '*:p-1',
                  // '*:bg-[#272E37]',
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
                <div className="w-[6rem] bg-gradient-to-r from-transparent to-[var(--bg-faded)]" />
                <div className="bg-[var(--bg)]">Talkshow</div>
                <div className="w-[4rem] grow bg-gradient-to-l via-transparent from-transparent to-[var(--bg-faded)]" />
                <div className="w-[8rem] bg-gradient-to-r via-transparent from-transparent to-[var(--bg-faded)]" />
                <div className="bg-[var(--bg)]">Workshop</div>
                <div className="w-[7rem] grow bg-gradient-to-l via-transparent from-transparent to-[var(--bg-faded)]" />
                <div className="bg-gradient-to-r from-transparent to-[var(--bg-faded)]" />
                <div className="bg-[var(--bg)]">Meetup</div>
                <div className="bg-[var(--bg)]">Hackathon</div>
                <div className="grow !px-0 bg-gradient-to-l from-transparent to-[var(--bg-faded)]" />
              </div>
            </div>
          </section>
          {/* End of Header */}

          {/* Featured Events */}
          <div className="flex flex-col gap-8 w-full mt-16 max-w-[var(--mw-content-sm)] mx-auto">
            <div className="text-[#505a69] text font-medium">
              Reactjs.id Featured Events <IconoirLongArrowRightDownSolid className="w-6 h-6 inline translate-y-1" />
            </div>
            {[
              {
                title: 'ReactID Bali Meetup',
                date: new Date('2025-01-18T14:00:00+08:00'),
                description:
                  'Bergabunglah di ReactID Bali Meetup, sebuah acara kolaborasi antara GDG Bali, BaliJS, dan ReactID. Kesempatan emas untuk belajar, berbagi, dan memperluas jaringan dengan sesama developer React di Bali.',
              },
              {
                title: 'Tech Meetup: Frontend Drama',
                date: new Date('2024-07-27T13:00:00+07:00'),
                description:
                  'Meetup dan ngobrol santai seputar drama di dunia Frontend Web. Membahas situasi frontend saat ini, spesifik library/framework (React, Vue, Angular, dsb), arsitektur, komunitas, dsb',
              },
              {
                title: 'Meetup #6',
                date: new Date('2020-01-31T19:00:00+07:00'),
                description:
                  'Pelajari cara mengoptimalkan aplikasi React dengan Apollo serta meningkatkan performa menggunakan useCallback dan useMemo. Sesi ini cocok untuk pemula maupun developer berpengalaman yang ingin memperdalam keterampilan React!',
              },
            ].map((event, index) => (
              <div key={event.title} className="flex flex-col xs:flex-row gap-6 items-center group cursor-pointer">
                <div className="max-h-40 xs:h-28 sm:h-32 md:h-36 aspect-video shrink-0">
                  <img src={`/events/_${ index + 1 }.png`} alt="" className="reactify-filter rounded-2xl [@media(pointer:fine)]:group-hover:scale-105 transition-all duration-300 group-hover:rotate-1 outline outline-white/10" />
                </div>
                <div className="flex flex-col gap-1 min-w-0">
                  <div className="text-xl leading-none line-clamp-1 text-white ">
                    {event.title}
                  </div>
                  <div className="opacity-40 leading-none mb-2 text-sm">
                    {event.date.toDateString()}
                  </div>
                  <div className="opacity-80 line-clamp-2 text-sm">
                    {event.description}
                  </div>
                  <div className="opacity-40 text-white mt-2 border-b self-start text-sm group-hover:opacity-100">
                    Baca selanjutnya {'->'}
                  </div>
                </div>
              </div>
            ))}
            <LinkButton className="self-start">
              Lihat semua acara {'->'}
            </LinkButton>
          </div>
        </div>
      </section>

      {/* Kolaborasi */}
      <section className="mb-20 mt-20 md:mt-20 px-[var(--px-page)]">
        <div className="absolute w-[80rem] h-[40rem] z-10 left-1/2 -translate-x-1/2 -translate-y-60 pointer-events-none contain-layout circle-mask">
          <div
            className="lamp-gradient absolute w-[50%] h-[100%] pointer-events-none" />
          <div
            className="lamp-gradient absolute w-[50%] h-[100%] left-1/2 pointer-events-none -scale-x-100" />
        </div>
        <div className="mx-auto flex w-full max-w-[var(--mw-content)] flex-col-reverse gap-8 sm:flex-col  items-center text-center">
          <div className="">
            <SectionTag>
              Kolaborasi
            </SectionTag>
            <SectionHeader>
              Kolaborasi dengan <br />Developer Se-Indonesia
            </SectionHeader>
            <SectionText className="max-w-[40rem] mx-auto">
              Bangun koneksi dan temukan inspirasi dari komunitas React di berbagai kota.
            </SectionText>
          </div>


          <div
            className="w-full"
            style={{
              perspective: '1000px',
            }}
          >

            <div
              className="relative "
              style={{
                transform: 'rotateX(40deg) scale(1.2)',
                transformStyle: 'preserve-3d'
              }}
            >
              {
                [
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
                    x={x}
                    y={y}
                    index={index}
                    label={label}
                  />
                ))
              }
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
        </div>
      </section>
      {/* End of Kolaborasi */}

      {/* Kontribusi */}
      <section className={cn(
        "py-20 md:py-24 pb-40 px-[var(--px-page)] ",
        "bg-gradient-to-b from-[#3cb0ca]/0 to-[#3cb0ca]/5"
      )}>

        <div className="mx-auto max-w-[var(--mw-content)]">

          <div className="flex flex-col md:flex-row gap-y-8 gap-x-2 flex-wrap">

            <div className="max-w-[30rem] flex-1">
              <SectionTag>
                Kontribusi
              </SectionTag>
              <SectionHeader className="!text-wrap">
                Berkarya dan<br /> Berkontribusi
              </SectionHeader>
              <SectionText>
                Ikut serta dalam proyek komunitas dan bantu membangun masa depan React di Indonesia!
              </SectionText>
            </div>

            <div className={cn(
              "flex-1 max-w-[var(--mw-content-sm)]",
              "flex flex-col gap-6",
            )}>
              <div className="text-[#505a69] text font-medium">
                Reactjs.id Current Projects <IconoirLongArrowRightDownSolid className="w-6 h-6 inline translate-y-1" />
              </div>
              <div className="flex flex-col gap-2 max-w-[30rem]">

                {/* Ideally this part should also fetch CMS to maintain the list */}

                {/* Ideally this should points to a project page first */}
                {/* Because we need new-comers to contact "PIC" from the telegram group to allow contribution */}
                <a href="https://github.com/reactjs/id.react.dev" target="_blank" className="w-full flex flex-col gap-2 p-5 border rounded-2xl border-[#505a69]/20 hover:bg-white/5 cursor-pointer">
                  <div className="text-white text-lg">
                    Dokumentasi React.js Bahasa Indonesia <IcBaselineLaunch className="inline align-[-0.2rem] text-[#505a69]" />
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

                <a href="https://github.com/reactjs-id/website-nextjs" target="_blank" className="w-full flex flex-col gap-2 p-5 border rounded-2xl border-[#505a69]/20 hover:bg-white/5 cursor-pointer">
                  <div className="text-white text-lg">
                    Website React.js Indonesia <IcBaselineLaunch className="inline align-[-0.2rem] text-[#505a69]" />
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

              <LinkButton className="self-start">
                Ikuti GitHub Kami {'->'}
              </LinkButton>

            </div>

          </div>

        </div>
      </section>

      {/* Gabung ReactJS */}
      <section className="pt-20 md:pt-24 pb-40 px-[var(--px-page)] bg-gradient-to-b from-transparent via-[#0e1114] to-[#0e1114] border-b border-b-white/5 relative">

        <div className="absolute inset-0 overflow-hidden  contain-layout flex justify-center">
          <MdiReact className="h-[80rem] w-[80rem] shrink-0 stroke-[#505a6933] stroke-[0.02] translate-x-40 animate-dash-offset" fill="transparent"
            style={{
              strokeDasharray: '0.3 0.1 0.2 0.1',
            }}
          />
        </div>

        <div className="mx-auto max-w-[var(--mw-content)] flex w-full flex-col items-start relative z-10">

          {/* Header */}
          <section className="flex flex-col items-center text-center w-full max-w-[var(--mw-content-sm)] mx-auto flex-wrap-reverse lg:flex-nowrap">
            <SectionTag separator="Join" />
            <SectionHeader>
              Gabung dan Jadi Bagian <br /> dari Komunitas!
            </SectionHeader>
            <SectionText className="mt-5">
              Jadilah bagian dari komunitas developer React terbesar di Indonesia di ujung jarimu. Temukan kami di platform social media favorit-mu!
            </SectionText>
          </section>
          {/* End of Header */}

          {/* Social Links */}
          <div className="w-full mt-16 max-w-[var(--mw-content-sm)] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {
                [
                  {
                    title: "Telegram Supergroup",
                    description: "Diskusi real-time dengan komunitas di Telegram!",
                    icon: MdiTelegram
                  },
                  {
                    title: "Meetup Group",
                    description: "Ikuti event dan bertemu langsung dengan sesama developer!",
                    icon: CibMeetup
                  },
                  {
                    title: "Facebook Group",
                    description: "Gabung di komunitas Facebook dan berbagi wawasan!",
                    icon: IcBaselineFacebook
                  },
                  {
                    title: "Official Twitter Account",
                    description: "Dapatkan update dan insight terbaru di Twitter!",
                    icon: RiTwitterXLine
                  },
                ].map((social, index) => (
                  <SocialLink
                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                    key={index}
                    className="relative overflow-hidden group flex flex-col gap-1 *:shrink-0"
                  >
                    <social.icon className="w-[1.5em] h-[1.5em] inline mr-1.5 mb-1 align-[-0.2rem] text-[#3b4961]" fill="currentColor" />
                    <div className="text-lg text-white tracking-tight z-10">
                      {social.title} <span className="text-nowrap tracking-normal">{'->'}</span>
                    </div>
                    <div className="z-10 opacity-80 text-sm">
                      {social.description}
                    </div>
                    <div className="absolute -bottom-20 right-0 text-[8rem] fill-[#212834] group-hover:-bottom-10 transition-all">
                      <social.icon className="w-60 h-60"
                      />
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

function LinkButton(
  { className, ...props }: ComponentProps<'button'>
) {
  return (
    <button
      {...props}
      className={cn(
        'py-3 px-8 rounded-3xl',
        'shadow-[0_0.4rem_0.4rem_0px_#0002,_inset_0_0.1rem_0.05rem_0px_#fff1,_inset_0_-0.4rem_1rem_0px_#252b35]',

        'select-none',
        'transition-all duration-75',

        'font-normal',
        'text-white/80',
        'bg-[#1B212A]',
        'hover:brightness-110',
        'hover:text-white',

        'active:translate-y-0.5',

        className,
      )}
    />
  )
}

function SocialLink(
  { className, ...props }: ComponentProps<'a'>
) {
  return (
    <a
      {...props}
      className={cn(
        "px-6 py-5 text-start min-h-32 sm:min-h-40 flex flex-col justify-end cursor-pointer",

        'rounded-3xl',
        'shadow-[0_0.4rem_0.4rem_0px_#0002,_inset_0_0.1rem_0.05rem_0px_#fff1,_inset_0_-0.4rem_1rem_0px_#252b35]',

        'select-none',
        'transition-all duration-75',

        'font-normal',
        'text-white/80',
        'bg-[#1B212A]',
        'hover:brightness-110',
        'hover:text-white',

        'active:translate-y-0.5',

        className,
      )}
    />
  )
}

function SectionTag(
  { className, children, separator, ...props }: ComponentProps<"div"> & {
    separator?: string
  }
) {
  return (
    <div className={cn("text-sm sm:text-base text-nowrap font-medium tracking-[-0.015em]", className)} {...props}>
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

function SectionHeader(
  { className, ...props }: ComponentProps<"h2">
) {
  return (
    <h2 className={cn("text-white text-4xl sm:text-5xl font-semibold text-pretty break-words sm:text-nowrap tracking-tight mt-5", className)} {...props} />
  )
}

function SectionText(
  { className, ...props }: ComponentProps<"p">
) {
  return (
    <p className={cn(
      "mt-5 text-pretty text-lg sm:text-lg font-light",
      className
    )} {...props} />
  )
}


function MdiTelegram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}><path d="M9.78 18.65l.28-4.23l7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3L3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"></path></svg>
  )
}

function CibMeetup(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M31.969 26.984c-.401-2.572-5.163-.593-5.459-3.411c-.417-4 5.531-12.615 5.063-15.964c-.417-3.005-2.453-3.64-4.219-3.677c-1.715-.025-2.167.245-2.745.584c-.339.192-.817.577-1.484-.057c-.443-.423-.745-.713-1.208-1.089c-.24-.192-.62-.432-1.261-.525c-.629-.099-1.463 0-1.984.219c-.532.229-.937.625-1.369 1c-.433.375-1.532 1.599-2.548 1.145c-.448-.192-1.948-.943-3.031-1.405c-2.084-.901-5.093.557-6.183 2.489C3.926 9.157.745 20.428.254 21.913c-1.077 3.333 1.381 6.052 4.683 5.895c1.401-.067 2.333-.572 3.213-2.181c.511-.928 5.308-13.448 5.667-14.057c.261-.432 1.125-1.005 1.855-.636c.735.38.88 1.161.771 1.896c-.183 1.193-3.557 8.839-3.693 9.699c-.219 1.473.48 2.285 2.011 2.369c1.043.052 2.089-.317 2.912-1.88c.464-.871 5.797-11.557 6.265-12.271c.521-.781.937-1.043 1.475-1.011c.411.02 1.061.125.9 1.353c-.161 1.209-4.452 9.043-4.9 10.959c-.605 2.573.801 5.167 3.124 6.308c1.48.728 7.959 1.968 7.433-1.371z"></path></svg>
  )
}


function IcBaselineFacebook(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"></path></svg>
  )
}


function RiTwitterXLine(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}><path d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"></path></svg>
  )
}


function IconoirLongArrowRightDownSolid(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><g fill="currentColor" fillRule="evenodd" strokeWidth="1.5" clipRule="evenodd"><path d="M14.97 17.53a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0-.53-1.28h-7a.75.75 0 0 0-.53 1.28z"></path><path d="M15.5 14.75a.75.75 0 0 0 .75-.75v-3a4.75 4.75 0 0 0-4.75-4.75h-7a.75.75 0 0 0 0 1.5h7A3.25 3.25 0 0 1 14.75 11v3c0 .414.336.75.75.75"></path></g></svg>
  )
}


function IcBaselineLaunch(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3z"></path></svg>
  )
}



function IcRoundStarRate(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="m14.43 10l-1.47-4.84c-.29-.95-1.63-.95-1.91 0L9.57 10H5.12c-.97 0-1.37 1.25-.58 1.81l3.64 2.6l-1.43 4.61c-.29.93.79 1.68 1.56 1.09l3.69-2.8l3.69 2.81c.77.59 1.85-.16 1.56-1.09l-1.43-4.61l3.64-2.6c.79-.57.39-1.81-.58-1.81h-4.45z"></path></svg>
  )
}


function MdiReact(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path d="M12 10.11c1.03 0 1.87.84 1.87 1.89c0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7c-.52-.59-1.03-1.23-1.51-1.9a23 23 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86c.27.06.57.11.88.16zm6.54-.76l.81-1.5l-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47c.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7c.52.59 1.03 1.23 1.51 1.9c.82.08 1.63.2 2.4.36c.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86c-.27-.06-.57-.11-.88-.16zm1.45-7.05c1.47.84 1.63 3.05 1.01 5.63c2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63c-1.46.84-3.45-.12-5.37-1.95c-1.92 1.83-3.91 2.79-5.38 1.95c-1.46-.84-1.62-3.05-1-5.63c-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63c1.47-.84 3.46.12 5.38 1.95c1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26c2.1-.63 3.28-1.53 3.28-2.26s-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26c-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16c-.07-.28-.18-.57-.29-.86zm-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7c.64-.35.83-1.82.32-3.96c-.77.16-1.58.28-2.4.36c-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16c.07.28.18.57.29.86zm2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a23 23 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9"></path></svg>
  )
}
