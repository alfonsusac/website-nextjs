import type { ComponentProps } from "react";
import { SocialLink } from "./Button";
import { SectionTag, SectionHeader, SectionText } from "./Section";
import { communityInfo } from "@/_content/info";
import { HeroCarousel } from "@/app/_assets/Carousel";
import { MdiReact, MdiTelegram, CibMeetup, IcBaselineFacebook, RiTwitterXLine } from "./Icons";
import { cn } from "lazy-cn";

export function SectionGabungKami(
  { compact, withCarousel, className, ...props }: ComponentProps<'section'> & {
    withCarousel?: boolean;
    compact?: boolean;
  }
) {
  return <section className={cn(
    "px-page-px pt-24 md:pt-28 pb-40 bg-linear-to-b from-transparent via-[#0e1114] to-[#0e1114] border-b border-b-foreground/5 relative",
    className,
  )}
    {...props}
  >

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

      {
        withCarousel && (
          <section className="pt-20 lg:pt-20 relative left-1/2 -translate-x-1/2">
            <HeroCarousel />
          </section>
        )
      }

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
                key={index}
                className={cn(
                  "relative overflow-hidden group flex flex-col gap-1 *:shrink-0",
                  compact ? "min-h-[unset]! flex-row justify-start" : "",
                )}
                href={social.href}
              >
                <social.icon className="w-[1.5em] h-[1.5em] inline mr-1.5 mb-1 align-[-0.2rem] text-muted" fill="currentColor" />
                <div className="text-lg text-foreground-loud tracking-tight z-10">
                  {social.title} <span className="text-nowrap tracking-normal">{'->'}</span>
                </div>
                {
                  !compact && (
                    <>
                      <div className="z-10 opacity-80 text-sm">
                        {social.description}
                      </div>
                      <div className="absolute -bottom-20 right-0 text-[8rem] fill-[#212834] group-hover:-bottom-10 transition-all">
                        <social.icon className="w-60 h-60" />
                      </div>
                    </>
                  )
                }
              </SocialLink>
            ))
          }
        </div>
      </div>
    </div>
  </section>
}
