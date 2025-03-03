import { LinkButton } from "@/components/Button";
import { SectionGabungKami } from "@/components/GabungSection";
import { ReactIDLogo } from "@/components/icons/reactjs-id";
import { formatRelativeTime } from "@/util/time";
import Link from "next/link";

const NEW_ISSUE_LINK = "https://github.com/reactjs-id/meetup/issues/new?assignees=%40reactjs-id%2Fmeetup&labels=talks&template=talk-proposal.md"
const LAST_EDITED = "2020-10-7:58:13.000+07:00"

export default function AjukanTopikPage() {
  return <>
    <section className="px-page-px pt-10 *:container-content-xs">
      <div className="article-style-prose">
        <Link href="/acara" className="text-sm text-muted-2 hover:text-foreground block mb-4">
          ← Kembali ke Acara
        </Link>
        <h1 className="text-[2rem]! leading-tight! mb-8!">
          Ajukan Topik untuk Pertemuan Selanjutnya!
        </h1>
        <p>
          Kami selalu mencari topik baru yang menarik untuk dibahas dalam komunitas. Jika Anda memiliki ide yang ingin dibagikan, Anda dapat mengajukan topik melalui <a href="https://github.com/reactjs-id/meetup" target="_blank">repositori GitHub ini</a>. Topik yang terpilih akan dijadwalkan untuk dibahas dalam pertemuan berikutnya, memberikan kesempatan bagi anggota komunitas untuk berdiskusi dan berbagi wawasan.
        </p>
        <LinkButton href="https://github.com/reactjs-id/meetup">
          Repository GitHub Pengajuan Topik →
        </LinkButton>
        <h2>
          Proses pengajuan topik:
        </h2>
        <p>
          Kita mengikuti sistem yang digunakan oleh <a href="https://github.com/jakartajs/talks" target="_blank">JakartaJS</a> yang memanfaatkan GitHub. Untuk mengajukan topikmu, silakan <a href={NEW_ISSUE_LINK} target="_blank" >buat issue GitHub</a> mengikuti contoh yang telah disediakan. Selanjutnya kami akan mengulas pengajuan Anda, apabila topik Anda terpilih, kami akan menghubungi Anda untuk melakukan penjadwalan pertemuan berikutnya.
        </p>
        <p>
          Kita memiliki dua jenis topik pembahasan:
        </p>
        <ol>
          <li>
            <p>
              Pembahasan Singkat / Lightning Talk (5-15 menit)
            </p>
          </li>
          <li>
            <p>
              Pembahasan Utuh / Full Talk (30-45 menit)
            </p>
          </li>
        </ol>
        <p>
          Perlu diperhatikan bahwa pembahasan singkat (lightning talk) ini bersifat informal, jadi tidak harus melalu proses pengajuan dan persetujuan terlebih dahulu. Di setiap pertemuannya, kami akan sediakan sesi khusus untuk ini, apabila sudah tiba waktunya, silakan ajukan diri secara langsung di tempat. 😉
        </p>
        <LinkButton href={NEW_ISSUE_LINK}>
          Buat Issue GitHub →
        </LinkButton>


        <h2>
          Mempersiapkan presentasi topik
        </h2>
        <p>
          Jika ini pertama kalinya kamu menyajikan topikmu di depan umum, Anda dapat belajar beberapa tips dan trik dalam menyampaikan materi dengan baik. Anda dapat mulai mempelajarinya dari <a href="https://speaking.io/" target="_blank">speaking.io</a>.
        </p>
        <p>
          Perhatikan bahwa hampir di setiap lokasi kami hanya menyediakan mikrofon tangan yang harus Anda pegang sendiri, bukan headset atau semacamnya. Jadi berlatihlah menyajikan materi Anda sambil memegang mikrofon.
        </p>
      </div>
      <div className="py-10">

        <div className="text-muted-2/80 text-sm">
          Penulis:
        </div>
        <a
          href="https://github.com/resir014"
          className="py-2 hover:bg-muted-2/5 inline-flex items-center offset-x-2 rounded-sm">
          <img
            src="https://github.com/resir014.png"
            className="inline w-[1.5em] h-[1.5em] rounded-full overflow-hidden align-middle mr-1"
          />
          <span>
            Resi Respati
          </span>
        </a>

        <div className="mt-4 text-muted-2/80 text-sm">
          Terakhir Diedit:
        </div>
        <a
          href="https://github.com/reactjs-id/website-v2/commit/5abcd6d9908f8daca95e05cd66e0cc021d5d0cef"
          className="py-2 hover:bg-muted-2/5 inline-block items-center offset-x-2 leading-[1.2] rounded-sm">
          <span>
            {formatRelativeTime(new Date(LAST_EDITED))}
          </span><br />
          <span className="text-xs text-muted">
            {new Date(LAST_EDITED).toLocaleString()}
          </span>
        </a>

      </div>
    </section>
    <SectionGabungKami className="px-page-px *:container-content-xs" asArticle />
  </>
}
