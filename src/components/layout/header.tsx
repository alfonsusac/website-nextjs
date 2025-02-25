import Link from 'next/link';
import type { SVGProps } from 'react';

export function Header() {
  return (
    <header className="flex h-16">
      <div className="w-full max-w-[var(--mw-page)] mx-auto px-[var(--px-page)] flex flex-row items-center gap-4 text-nowrap">

        <div className="flex-grow">
          <div className="font-semibold text-2xl text-white leading-[40px] select-none">
            <Link href="/">reactjs.id</Link>
          </div>
        </div>

        <nav className="sm:hidden">
          <div className="p-2 hover:bg-zinc-500/20 w-10 h-10 rounded-md">
            <IconParkOutlineHamburgerButton className="w-full h-full" />
          </div>
        </nav>

        <nav className="hidden sm:block text-sm">
          <ul className="flex flex-row items-center [&_a]:h-full [&_a]:px-4 gap-2 hover:[&_a]:text-white">
            {
              [
                'Komunitas',
                'Event',
                'Blog',
                'Materi',
                'Merchandise',
              ].map((item) => (
                <li key={item}>
                  <Link href={`/${ item }`}>
                    {item}
                  </Link>
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
    </header>
  );
}



function IconParkOutlineHamburgerButton(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48" {...props}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M7.95 11.95h32m-32 12h32m-32 12h32"></path></svg>
  )
}
