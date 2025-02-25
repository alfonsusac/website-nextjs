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

export default function Home() {
  return (
    <>
      <div className="absolute w-0 h-[40rem] top-0 left-1/2 -translate-x-1/2 -z-10 pointer-events-none contain-layout" >
        <div
          className="hero-gradient absolute w-[180rem] h-[40rem] -translate-y-1/2 rotate-[-45deg] left-1/2 -translate-x-[40%] pointer-events-none" />
      </div>
      <section className="pt-14 px-[var(--px-page)]">
        <div className="mx-auto flex w-full max-w-[var(--mw-content)] flex-col items-start sm:items-center   sm:text-center">
          <ReactIDLogo className="h-10" />
          <h1 className="mt-8 text-pretty font-bold text-5xl md:text-6xl lg:text-6xl text-white tracking-tighter">
            Komunitas Developer <br />
            ReactJS Indonesia
          </h1>
          <p className="mt-5 text-pretty font-light text-xl sm:text-xl leading-8 sm:leading-8 max-w-[40rem]">
            Temukan inspirasi bersama ribuan developer yang membangun masa depan digital dengan React di
            Indonesia
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
      <section className="pt-12 lg:pt-16 ">
        <div className="flex justify-center gap-4 lg:gap-6">
          {Array.from({ length: 8 }, (i, index) => index).map((i) => (
            <div
              style={{
                rotate: `${ i % 2 === 0 ? 3 : -3 }deg`,
              }}
              className="aspect-[4/3] w-[12rem] lg:w-[16rem] bg-white/50 shrink-0 rounded-xl lg:rounded-2xl overflow-hidden"
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={i}
            >
              <img src={`/homecarousel/_${ i + 1 }.png`} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>
      <section className="mb-32 mt-48 md:mt-52 px-[var(--px-page)]">
        <div className="mx-auto flex w-full max-w-[var(--mw-content)] flex-col items-start">
          {/* Header */}
          <section className="flex justify-center items-end w-full flex-wrap-reverse lg:flex-nowrap gap-y-10">
            {/* Left */}
            <div className="flex-grow-[3] basis-0 ">
              <h2 className="text-4xl sm:text-5xl font-medium text-nowrap">
                <span className="text-white tracking-tight font-semibold">Networking</span>
                <span className="text-lg font-light text-[color:unset] ml-1 tracking-[-0.015em]">
                  <span> dengan</span>
                  <span className="ml-1">
                    {' '}
                    <ReactIDLogo className="h-4 sm:h-5 inline align-[0rem]" />
                  </span>
                </span>
              </h2>
              <p className="mt-5 text-pretty text-lg sm:text-lg  max-w-[40rem] font-light">
                Berkenalan dengan ribuan developer React di Indonesia.
              </p>
            </div>

            {/* Right */}
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
              <div className="w-[7rem] grow bg-gradient-to-l via-transparent from-transparent outline outline-white/5 to-[var(--bg-faded)]" />
              <div className="bg-gradient-to-r from-transparent to-[var(--bg-faded)]" />
              <div className="bg-[var(--bg)]">Meetup</div>
              <div className="bg-[var(--bg)]">Hackathon</div>
              <div className="grow !px-0 bg-gradient-to-l from-transparent to-[var(--bg-faded)]" />
            </div>
          </section>
          {/* End of Header */}

          {/* Featured Events */}
          <div className="flex flex-col gap-8 w-full mt-16 max-w-[var(--mw-content-sm)] mx-auto">
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
                  <div className="text-xl leading-none text-ellipsis overflow-hidden whitespace-nowrap text-white ">
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
      <section className="mb-40 mt-20 md:mt-20 px-[var(--px-page)]">
        <div className="absolute w-[80rem] h-[40rem] z-10 left-1/2 -translate-x-1/2 -translate-y-60 pointer-events-none contain-layout circle-mask">
          <div
            className="lamp-gradient absolute w-[50%] h-[100%] pointer-events-none" />
          <div
            className="lamp-gradient absolute w-[50%] h-[100%] left-1/2 pointer-events-none -scale-x-100" />
        </div>
        <div className="mx-auto flex w-full max-w-[var(--mw-content)] flex-col-reverse gap-8 sm:flex-col  items-center text-center">
          <div className="">
            <h2 className="text-4xl sm:text-5xl font-medium text-nowrap">
              <span className="text-white tracking-tight font-semibold">Kolaborasi</span>
              <span className="text-lg font-light text-[color:unset] ml-1 tracking-[-0.015em]">
                <span> dengan</span>
                <span className="ml-1">
                  {' '}
                  <ReactIDLogo className="h-4 sm:h-5 inline align-[0rem]" />
                </span>
              </span>
            </h2>
            <p className="mt-5 text-pretty text-lg sm:text-lg max-w-[50rem] font-light">
              Bertemu dengan developer React dari seluruh Indonesia. Dapatkan wawasan terbaru tentang React melalui event yang kami adakan di berbagai kota.
            </p>
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
      <section className="mt-20 md:mt-24 pb-40 px-[var(--px-page)] bg-gradient-to-b from-transparent via-[#0e1114] to-[#0e1114] border-b border-b-white/5">
        <div className="mx-auto flex w-full max-w-[var(--mw-content)] flex-col items-start">
          {/* Header */}
          <section className="flex justify-center w-full flex-wrap-reverse lg:flex-nowrap gap-y-10">
            <div className="flex-grow basis-0 text-center">
              <h2 className="text-4xl sm:text-5xl font-medium text-nowrap">
                <span className="text-white tracking-tight font-semibold">Gabung reactjs.id</span>
              </h2>
              <p className="mt-5 text-pretty text-lg sm:text-lg  font-light">
                Jadilah bagian dari komunitas developer React terbesar di Indonesia di ujung jarimu. Temukan kami di platform social media favorit-mu!
              </p>
            </div>
          </section>
          {/* End of Header */}

          {/* Social Links */}
          <div className="w-full mt-16 max-w-[var(--mw-content-sm)] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {
                [
                  {
                    title: "Telegram",
                    description: "Masuk ke Channel Telegram",
                    icon: MdiTelegram
                  },
                  {
                    title: "Meetup",
                    description: "Masuk ke Grup Meetup",
                    icon: CibMeetup
                  },
                  {
                    title: "Facebook",
                    description: "Masuk ke Grup Facebook",
                    icon: IcBaselineFacebook
                  },
                  {
                    title: "Twitter",
                    description: "Follow di Twitter",
                    icon: RiTwitterXLine
                  },
                ].map((social, index) => (
                  <SocialLink
                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                    key={index}
                    className="relative overflow-hidden group"
                  >
                    <div className="text-lg tracking-tight z-10">
                      <social.icon className="w-[1em] h-[1em] inline mr-1.5 align-[-0.2rem]" fill="currentColor" />
                      {social.title}
                    </div>
                    <div className="z-10 opacity-80">
                      {social.description} {'->'}
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
        // 'border border-white/10',

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
        "px-6 py-3 text-start h-40 flex flex-col justify-end cursor-pointer",

        'rounded-3xl',
        'shadow-[0_0.4rem_0.4rem_0px_#0002,_inset_0_0.1rem_0.05rem_0px_#fff1,_inset_0_-0.4rem_1rem_0px_#252b35]',

        'select-none',
        'transition-all duration-75',
        // 'border border-white/10',

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
