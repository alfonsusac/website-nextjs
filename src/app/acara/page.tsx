import { events } from "@/_content/events";
import { people } from "@/_content/people";
import { LinkButton } from "@/components/Button";
import { SectionGabungKami } from "@/components/GabungSection";
import { ReactIDLogo } from "@/components/icons/reactjs-id";
import { cn } from "lazy-cn";
import { Fragment, type ComponentProps, type SVGProps } from "react";

export default function AcaraPage() {

  const sortedEvents = events.sort((a, b) => b.date.getTime() - a.date.getTime())

  return <>
    <section className="px-page-px pt-18 *:container-content">
      <header className="pb-10">
        <ReactIDLogo className="h-5 mb-3" />
        <h1
          className="text-5xl text-foreground-loud font-semibold tracking-tight"
        >
          Bergabung dalam <br />Acara Komunitas Kami!
        </h1>
        <p className="font-light mt-4 max-w-160">
          Kami mengadakan berbagai acara menarik—dari meetup dan workshop hingga diskusi santai seputar desain, teknologi, dan inovasi. Temukan acara yang cocok untukmu dan jadi bagian dari komunitas kami!
        </p>
        <LinkButton
          nextLink={true}
          href="/acara/ajukan-topik"
          className="inline-block mt-6">
          Ajukan Topik →
        </LinkButton>
      </header>
    </section>
    <section className={cn(
      "px-page-px *:container-content",

      "[&_h2,h3,h4,h5]:leading-[1.5]",

      "[&_h2]:text-2xl",
      "[&_h2]:font-medium",
      "[&_h2]:tracking-tight",
      "[&_h2]:text-foreground-loud",
      "[&_h2]:my-4",

      "[&_h3]:text-xl",
      "[&_h3]:text-muted-2",
      "[&_h3]:my-4",
    )}>
      <h2>
        Rekap Acara Sebelumnya
      </h2>

      <div className="flex flex-col gap-3">
        {
          sortedEvents
            .map((event, i) => {

              const formattedDate = new Intl.DateTimeFormat('id-ID', {
                weekday: 'long',
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              }).format(event.date)

              const formattedTime = new Intl.DateTimeFormat('id-ID', {
                hour: 'numeric',
                minute: 'numeric',
                timeZoneName: 'short',
              }).format(event.date)

              return (
                <div key={event.title}
                  style={{
                    // @ts-expect-error custom css
                    "--padding": "1.1rem",
                  }}
                  className={cn(
                    "flex gap-4 flex-wrap-reverse bg-muted/10 rounded-2xl",
                    "p-[var(--padding)]",
                    "border border-muted/10",
                    "hover:border-muted/40",
                    "cursor-pointer"
                  )}
                >

                  <div className="grow flex-1 min-w-80">

                    <div className="text-sm text-muted-2/80">
                      {formattedDate}
                      <span className="font-black mx-1 text-muted"> • </span>
                      {formattedTime}
                    </div>
                    <div className="mt-1 text-xl text-foreground-loud font-medium">
                      {event.title}
                    </div>

                    {event.speakers && (
                      <div className="line-clamp-1">
                        <div className="inline align-[0.1rem]">
                          {
                            event.speakers?.map(speaker => (
                              <img
                                key={speaker.profile.github}
                                src={'https://github.com/' + speaker.profile.github + '.png'}
                                alt={speaker.profile.name}
                                className="w-4 h-4 rounded-full inline not-first:-ml-0.5 last:mask-none!"
                                style={{ maskImage: 'radial-gradient(60% 60% at 135% , transparent 100%, black 100%)' }}
                              />
                            ))}
                        </div>
                        <div className="inline ml-2">
                          {new Intl
                            .ListFormat('en-US', { style: 'short' })
                            .formatToParts(event.speakers.map(s => s.profile.name))
                            .map((item, i) => (
                              <span key={i} className={item.type === 'literal' ? 'text-muted-2/50' : ''}>
                                {item.value}
                              </span>
                            ))}
                        </div>
                      </div>
                    )}

                    {/* {event.speakers &&
                      <div className="my-2 flex gap-y-2 gap-x-4 flex-wrap">
                        {event.speakers?.map((speaker, i) => (
                          <div key={i} className="inline gap-2 text-sm !leading-tight font-light items-center">
                            <img
                              src={'https://github.com/' + speaker.profile.github + '.png'}
                              alt={speaker.profile.name}
                              className="w-5 h-5 mr-1.5 rounded-full inline" />
                            <span>{speaker.profile.name}</span>
                          </div>
                        ))}
                      </div>} */}


                    {event.place?.name && (
                      <div className="mt-2 text-sm text-muted-2/80">
                        <FluentLocation16Regular
                          className="inline align-[-0.1rem] mr-1" />
                        {event.place.name}
                      </div>
                    )}

                    {event.attendees && (
                      <div className="mt-2 text-sm text-muted-2/80 bg-muted/20 inline-block p-1 leading-none rounded-md">
                        <TablerUsers
                          className="inline align-[-0.1rem] mr-1" />
                        {event.attendees}
                      </div>
                    )}

                  </div>
                  <EventCardImage
                    src={event.image}
                    alt={event.title}
                  />
                </div>
              )
            })}
      </div>

    </section>

    <SectionGabungKami compact className="pt-80!" />
  </>
}


function EventCardImage(
  { className, src, alt, ...props }: ComponentProps<"div"> & {
    src?: string,
    alt?: string,
  }
) {
  if (!src) return null
  return (
    <div className="w-36 h-36 rounded-lg self-end grid grid-cols-1 items-center overflow-hidden border border-muted/20">
      <img src={src} alt={alt}
        className="col-start-1 row-start-1 z-10" />
      <img src={src} alt=""
        className="col-start-1 row-start-1 object-cover w-full h-full blur-sm brightness-35 scale-100 reactify-filter-blur" />
    </div>
  )
}


















function FluentLocation16Regular(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}><path fill="currentColor" d="M9.5 7a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0M14 7c0 2.874-3.097 6.016-4.841 7.558a1.74 1.74 0 0 1-2.318 0C5.097 13.016 2 9.874 2 7a6 6 0 1 1 12 0m-1 0A5 5 0 0 0 3 7c0 1.108.615 2.395 1.57 3.683c.934 1.258 2.087 2.377 2.933 3.126a.74.74 0 0 0 .994 0c.846-.749 2-1.867 2.933-3.126C12.385 9.395 13 8.108 13 7"></path></svg>
  )
}

function TablerUsers(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2m1-17.87a4 4 0 0 1 0 7.75M21 21v-2a4 4 0 0 0-3-3.85"></path></svg>
  )
}
