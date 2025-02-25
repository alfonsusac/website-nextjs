import Link from 'next/link';
import { ReactIDLogo } from '../icons/reactjs-id';
import { siFacebook, siGithub, siTelegram, siX } from 'simple-icons';



export function Footer() {
  return (
    <footer className="">
      <div className="w-full max-w-[var(--mw-page)] mx-auto px-[var(--px-page)] flex flex-col items-center gap-10 py-16 lg:gap-16">

        <div className="w-full  flex flex-row flex-wrap gap-y-4 gap-x-8 items-end justify-between">
          <ReactIDLogo className="h-6 shrink-0" />
          <div className="flex items-center gap-4">
            {[siFacebook, siGithub, siTelegram, siX].map(({ title, path }) => (
              <Link
                href="#"
                className="hover:text-white"
                key={title}
              >
                <svg
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width={24}
                  height={24}
                >
                  <title>{title}</title>
                  <path d={path} />
                </svg>
              </Link>
            ))}
          </div>
        </div>

        <div className="w-full max flex flex-col md:flex-row items-end gap-4 gap-y-8 text-sm opacity-60">
          <div className="w-full max-w-screen-md space-y-2">
            <h3 className="font-semibold text-white">React.js Indonesia</h3>
            <p>
              React.js Indonesia adalah komunitas developer React dan React Native terbesar di Indonesia, bertujuan untuk
              menghubungkan dan mendukung para developer.
            </p>
          </div>
          <div className="flex flex-shrink-0 flex-grow justify-end">
            <p>Hak cipta &copy; React.js Indonesia</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
