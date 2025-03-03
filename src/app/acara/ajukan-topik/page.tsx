import { ReactIDLogo } from "@/components/icons/reactjs-id";
import Link from "next/link";

export default function AjukanTopikPage() {
  return <>
    <section className="px-page-px pt-8 *:container-content-sm">
      <div className="article-style-prose">
        <Link href="/acara" className="text-sm text-muted-2 block mb-10">
          ← Kembali ke Acara
        </Link>
        <ReactIDLogo className="h-5 mb-3" />
        <h1>Ajukan Topik</h1>
        <p>
          Punya ide topik untuk pertemuan berikutnya? Ajukan topikmu melalui repositori GitHub ini.
        </p>
      </div>
    </section>
  </>
}
