import type { ComponentProps } from "react"

export default function KomunitasPage() {
  return <>
    <SectionTentangKami className="px-[var(--px-page)] *:max-w-[--var(--mw-content)] min-h-screen" />
    <SectionGabungKami className="px-[var(--px-page)] *:max-w-[--var(--mw-content)]" />
  </>
}


function SectionTentangKami(
  props: ComponentProps<'section'>
) {
  return <section {...props}>

  </section>
}

function SectionGabungKami(
  props: ComponentProps<'section'>
) {
  return <section>

  </section>
}
