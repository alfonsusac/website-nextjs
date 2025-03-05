import { events } from "@/_content/events"
import Link from "next/link"
import type { SVGProps } from "react"

export default async function AcaraDetailPage(
  props: {
    params: Promise<{
      slug: string,
    }>
  }
) {

  const slug = (await props.params).slug

  const event = events.find(event => event.slug === slug)

  if (!event) {
    return <div>Event not found</div>
  }

  const dateTimeFormatter = Intl.DateTimeFormat

  const parsedEventDetails = event.details?.split('\n\n').map((paragraph, i) => {
    return (
      <p key={i} className="whitespace-break-spaces font-normal!">
        {paragraph}
      </p>
    )
  })

  const mapEmbedUrl = new URL('https://www.google.com/maps/embed/v1/place')
  mapEmbedUrl.searchParams.set('key', process.env.GOOGLE_EMBED_MAP_API_KEY!)
  mapEmbedUrl.searchParams.set('q', event.place?.name + ' ' + event.place?.address)

  return (
    <section className="px-page-px *:container-content min-h-screen pt-18 pb-20">
      <div className=" md:flex gap-10 max-md:container-content-xs!">

        <div className="left grow article-style-prose-event-details">
          <Link href="/acara" className="text-sm text-muted-2 hover:text-foreground block py-6 -mt-14">
            ← Daftar Acara
          </Link>
          <div
            className="event-page-image rounded-2xl max-h-80 flex justify-center relative overflow-hidden"
          >
            <img
              className="max-h-full object-contain z-10"
              src={event.image}
            />
            <img
              className="object-cover absolute w-full h-full blur-md! brightness-35 reactify-filter-blur scale-110"
              src={event.image}
            />
          </div>

          <h1 className="mt-8 text-pretty">
            {event.title}
          </h1>

          <div className="info-section flex flex-col gap-4 mt-6 *:flex *:gap-4">
            <div className="info-date-time items-center">
              <div className="widget shrink-0 w-10 flex flex-col aspect-square rounded-xl border border-muted/40 overflow-hidden leading-none">
                <div className="calendar-widget-month text-[0.5rem] py-[0.15rem] uppercase text-center bg-muted/30 font-semibold">
                  {new dateTimeFormatter('id-ID', {
                    month: 'short'
                  }).format(event.date)}
                </div>
                <div className="grow text-center self-center flex items-center font-medium">
                  {new dateTimeFormatter('id-ID', {
                    day: 'numeric'
                  }).format(event.date)}
                </div>
              </div>
              <div className="justify-center flex flex-col">
                <div className="text-foreground-loud font-normal">
                  {new dateTimeFormatter('id-ID', {
                    dateStyle: 'full',
                  }).format(event.date)}
                </div>
                <div className="font-normal text-sm">
                  {new dateTimeFormatter('id-ID', {
                    hour: 'numeric',
                    minute: 'numeric',
                    timeZoneName: 'short',
                  }).format(event.date)}
                  {event.end && <>
                    <span> - </span>
                    {new dateTimeFormatter('id-ID', {
                      hour: 'numeric',
                      minute: 'numeric',
                      timeZoneName: 'short',
                    }).format(event.end)}
                  </>}
                </div>
              </div>
            </div>
            <a
              href={event.place?.map}
              className="info-location items-start group">
              <div className="widget shrink-0 w-10 flex flex-col aspect-square rounded-xl border border-muted/40 bg-muted/20  overflow-hidden leading-none relative">
                <SolarMapBoldDuotone className="w-10 h-10 text-muted-2/50 translate-y-0" />
                <SolarMapPointBold className="w-6 h-6 text-foreground absolute translate-y-0.5 pointer-fine:group-hover:brightness-110" />
              </div>
              <div className="justify-center flex flex-col">
                <div className="text-foreground-loud font-normal">
                  {event.place?.name} <span className="text-muted pointer-fine:group-hover:text-muted-2">↗</span>
                </div>
                <div className="text-sm font-normal">
                  {event.place?.address}
                </div>
              </div>
            </a>
          </div>

          <h2>
            Deskripsi
          </h2>
          {parsedEventDetails}

          {event.speakers?.length && (
            <>
              <h2>
                Pembicara & Pembawa Acara
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {event.speakers.map(speaker => {
                  return (
                    <div key={speaker.profile.github ?? speaker.profile.name} className="flex gap-3 items-center">
                      <img
                        src={speaker.profile.github
                          ? "https://github.com/" + speaker.profile.github + '.png'
                          : "/user-placeholder-image.png"
                        }
                        className="rounded-full w-10 h-10 object-cover shrink-0"
                      />
                      <div className="flex flex-col leading-none font-normal">
                        <div>{speaker.profile.name}</div>
                        <div className="text-sm text-muted">{speaker.role}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </>
          )}



          {event.place && (
            <>
              <h2>
                Lokasi
              </h2>
              <div className="text-foreground-loud font-normal">
                {event.place?.name}
              </div>
              <div className="text-sm font-normal mb-4">
                {event.place?.address}
              </div>

              <a
                href={event.place?.map}
                target="_blank"
                className="rounded-xl overflow-hidden max-h-60 shadow-lg flex items-center relative hover:brightness-110">
                <iframe
                  className="w-full pointer-events-none adaptive-invert"
                  height="600"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={mapEmbedUrl.toString()}>
                </iframe>
                <div className="absolute right-0 bottom-0 p-2 py-1 leading-0 text-xs flex flex-col items-end bg-black/50">
                  <div className="leading-none text-[0.7rem]">
                    Map Data ©{new Date().getFullYear()} Google
                  </div>
                </div>
                <LogosGoogle className="absolute left-1/2 bottom-0 -translate-x-1/2 w-12  h-fit pb-1 stroke-[20] stroke-black overflow-visible *:brightness-[9999]"
                  style={{ paintOrder: 'stroke fill' }}
                />
              </a>
            </>
          )}



          {event.attendees && (
            <>
              <h2>
                Daftar Peserta
              </h2>
              <div className="font-normal text-foreground-loud">
                {event.attendees} Peserta
              </div>
            </>
          )}


          <>
            <h2>
              Links
            </h2>
            <div className="flex flex-col">
              {[
                {
                  label: 'Sumber',
                  href: event.source,
                  icon: <>⛓️‍💥</>
                },
                ...(event.links ?? []).map(link => {
                  return {
                    label: link.text,
                    href: link.url,
                    icon: <>🔗</>
                  }
                })
              ].map((link, i) => {
                return (
                  <a className="flex gap-2 group py-1" target="_blank" href={link.href} key={i}>
                    <div className="shrink-0">
                      {link.icon}
                    </div>
                    <div className="line-clamp-1 text-muted">
                      <span className="text-foreground pointer-fine:group-hover:text-foreground-loud">
                        {link.label}
                      </span> • <span
                        className="break-all text-muted pointer-fine:group-hover:text-muted-2">
                        {link.href}</span>
                    </div>
                  </a>
                )
              })}
            </div>
          </>



        </div>
        <div className="right sm:w-50 shrink-0">
          <div>

          </div>
          <div>

          </div>
        </div>

      </div>
    </section>
  )
}



function SolarMapBoldDuotone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M3 8.71v8.128c0 1.043 0 1.565.283 1.958s.778.558 1.768.888l1.165.388c1.367.456 2.05.684 2.739.591L9 20.657v-14a3 3 0 0 1-.34.031c-.54.019-1.074-.16-2.141-.515c-1.398-.466-2.097-.699-2.629-.462a1.5 1.5 0 0 0-.497.358C3 6.5 3 7.236 3 8.71m18 6.58V7.163c0-1.043 0-1.565-.283-1.958s-.778-.558-1.768-.888l-1.165-.388c-1.367-.456-2.05-.684-2.739-.591L15 3.343v14q.17-.025.34-.031c.54-.019 1.074.16 2.141.515c1.398.466 2.097.699 2.629.462a1.5 1.5 0 0 0 .497-.358C21 17.5 21 16.764 21 15.29" opacity=".5"></path><path fill="currentColor" d="M9.247 6.61q-.123.027-.247.047v14c.67-.104 1.269-.503 2.442-1.285l1.382-.922c.936-.624 1.404-.936 1.93-1.06q.12-.03.246-.047v-14c-.67.103-1.269.503-2.442 1.284l-1.382.922c-.936.624-1.404.936-1.93 1.06m8.235 11.218l.254.084z"></path></svg>
  )
}


function SolarMapPointBold(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M12 2c-4.418 0-8 4.003-8 8.5c0 4.462 2.553 9.312 6.537 11.174a3.45 3.45 0 0 0 2.926 0C17.447 19.812 20 14.962 20 10.5C20 6.003 16.418 2 12 2m0 10a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clipRule="evenodd"></path></svg>
  )
}



function LogosGoogle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="3.05em" height="1em" viewBox="0 0 512 168" {...props}><path fill="#FF302F" d="m496.052 102.672l14.204 9.469c-4.61 6.79-15.636 18.44-34.699 18.44c-23.672 0-41.301-18.315-41.301-41.614c0-24.793 17.816-41.613 39.308-41.613c21.616 0 32.206 17.193 35.633 26.475l1.869 4.735l-55.692 23.049c4.236 8.348 10.84 12.584 20.183 12.584c9.345 0 15.823-4.61 20.495-11.525M452.384 87.66l37.19-15.45c-2.056-5.17-8.16-8.845-15.45-8.845c-9.281 0-22.176 8.223-21.74 24.295"></path><path fill="#20B15A" d="M407.407 4.931h17.94v121.85h-17.94z"></path><path fill="#3686F7" d="M379.125 50.593h17.318V124.6c0 30.711-18.128 43.357-39.558 43.357c-20.183 0-32.33-13.58-36.878-24.606l15.885-6.604c2.865 6.79 9.78 14.827 20.993 14.827c13.767 0 22.24-8.535 22.24-24.482v-5.98h-.623c-4.112 4.983-11.961 9.468-21.928 9.468c-20.807 0-39.87-18.128-39.87-41.488c0-23.486 19.063-41.8 39.87-41.8c9.905 0 17.816 4.423 21.928 9.282h.623zm1.245 38.499c0-14.702-9.78-25.417-22.239-25.417c-12.584 0-23.174 10.715-23.174 25.417c0 14.514 10.59 25.042 23.174 25.042c12.46.063 22.24-10.528 22.24-25.042"></path><path fill="#FF302F" d="M218.216 88.78c0 23.984-18.688 41.613-41.613 41.613c-22.924 0-41.613-17.691-41.613-41.613c0-24.108 18.689-41.675 41.613-41.675c22.925 0 41.613 17.567 41.613 41.675m-18.19 0c0-14.95-10.84-25.23-23.423-25.23S153.18 73.83 153.18 88.78c0 14.826 10.84 25.23 23.423 25.23c12.584 0 23.423-10.404 23.423-25.23"></path><path fill="#FFBA40" d="M309.105 88.967c0 23.984-18.689 41.613-41.613 41.613c-22.925 0-41.613-17.63-41.613-41.613c0-24.108 18.688-41.613 41.613-41.613c22.924 0 41.613 17.443 41.613 41.613m-18.253 0c0-14.95-10.839-25.23-23.423-25.23s-23.423 10.28-23.423 25.23c0 14.826 10.84 25.23 23.423 25.23c12.646 0 23.423-10.466 23.423-25.23"></path><path fill="#3686F7" d="M66.59 112.328c-26.102 0-46.534-21.056-46.534-47.158c0-26.101 20.432-47.157 46.534-47.157c14.079 0 24.357 5.544 31.957 12.646l12.522-12.521C100.479 7.984 86.338.258 66.59.258C30.833.259.744 29.414.744 65.17s30.089 64.912 65.846 64.912c19.312 0 33.889-6.354 45.289-18.19c11.711-11.712 15.324-28.158 15.324-41.489c0-4.174-.498-8.472-1.059-11.649H66.59v17.318h42.423c-1.246 10.84-4.672 18.253-9.718 23.298c-6.105 6.168-15.76 12.958-32.705 12.958"></path></svg>
  )
}
