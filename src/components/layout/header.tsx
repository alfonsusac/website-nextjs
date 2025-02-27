"use client"

import { cn } from 'lazy-cn';
import Link from 'next/link';
import { useEffect, useRef, type SVGProps } from 'react';

export function Header() {

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const header = ref.current

    function onScroll() {
      if (window.scrollY > 0) {
        header.dataset.scrolled = ''
      } else {
        delete header.dataset.scrolled
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <header
      ref={ref}
      className={cn(
        "flex h-16",
        "sticky top-0",
        "z-40",

        "border-b",
        "border-transparent",

        "data-[scrolled]:bg-[#15181d]/90",
        "data-[scrolled]:shadow-xl",
        "data-[scrolled]:backdrop-blur-lg",
        "data-[scrolled]:border-b-white/5",

        "transition-all duration-300",
      )}>
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
                  <Link href={`/${ item.toLowerCase() }`}>
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
