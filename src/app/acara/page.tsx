import { events } from "@/_content/events";
import { LinkButton } from "@/components/Button";
import { SectionGabungKami } from "@/components/GabungSection";
import { ReactIDLogo } from "@/components/icons/reactjs-id";
import { cn } from "lazy-cn";

export default function AcaraPage() {
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


      {/* <h3>
        2024
      </h3> */}

      <div className="flex flex-col gap-3">
        {
          events.map((event, i) => (
            <div key={i} className={cn(
              "flex gap-4 flex-wrap-reverse bg-muted/10 rounded-xl",
              "p-5",
              "text-light"
            )}>
              <div className="grow flex-1 min-w-80">
                <div className="text-sm text-muted-2">
                  Muara Karang, Jakarta
                </div>
                <div className="text-sm text-muted-2">
                  {new Intl.DateTimeFormat('id-ID', {
                    dateStyle: 'full',
                  }).format(event.date)}
                </div>
                <div className="mt-2 text-2xl text-foreground-loud">
                  {event.title}
                </div>
                <div className="flex flex-wrap my-4 gap-4">
                  {[
                    { role: "Pembicara", name: "Zain Fathoni", github: "https://github.com/zainfathoni" },
                  ].map((speaker, i) => (
                    <div key={i} className="flex gap-2 text-sm !leading-tight font-light">
                      <img
                        src={speaker.github + '.png'}
                        alt={speaker.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <div className="flex flex-col pt-0">
                        <div>{speaker.name}</div>
                        <div className="text-muted">{speaker.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-60 bg-muted rounded-md self-end overflow-clip">
                <img
                  src={event.image}
                  alt={event.title}
                  className=""
                />
              </div>
            </div>

          ))
        }
      </div>

    </section>

    <SectionGabungKami compact className="pt-80!" />
  </>
}
