"use client"

import { cn } from 'lazy-cn';
import Link from 'next/link';
import { useEffect, useRef, useState, type SVGProps } from 'react';
import { SocialButtons } from './footer';

const headerNavItem: {
  title: string,
  description: string,
}[] = [
    {
      title: 'Komunitas',
      description: 'Terhubung dengan sesama penggemar ReactJS Indonesia!'
    },
    {
      title: 'Event',
      description: 'Jangan lewatkan acara seru seputar ReactJS di Indonesia!'
    },
    {
      title: 'Blog',
      description: 'Baca insight terbaru dan cerita menarik dari komunitas ReactJS Indonesia!'
    },
    {
      title: 'Materi',
      description: 'Belajar ReactJS jadi lebih mudah dengan materi yang siap pakai!'
    },
    {
      title: 'Merchandise',
      description: 'Dukung komunitas dengan merch keren khas ReactJS Indonesia!'
    },
  ]


export function Header() {
  const headerRef = useElevatedHeader()

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {

    function onResize() {
      setIsMobileMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)

  }, [])

  return (
    <header
      ref={headerRef}
      className={cn(
        "flex h-[var(--height)]",
        "sticky top-0",
        "z-40",
        "border-b border-transparent",
        "backdrop-blur-lg",

        "transition-all duration-300",

        "data-scrolled:bg-[#15181d]/90",
        "data-scrolled:border-b-white/5",
        "data-scrolled:shadow-xl",
      )}
      style={{
        // @ts-expect-error css variable
        "--height": '4rem',
      }}
    >
      <div className="w-full max-w-[var(--mw-page)] mx-auto px-[var(--px-page)] flex flex-row items-center gap-4 text-nowrap">

        {/* Logo */}
        <div className="grow font-semibold text-2xl text-white leading-[40px] select-none">
          <Link href="/">reactjs.id</Link>
        </div>

        {/* Hamburger Menu */}
        <div
          onClick={() => {
            if (isMobileMenuOpen) {
              document.body.style.overflow = ''
            } else {
              document.body.style.overflow = 'hidden'
            }
            setIsMobileMenuOpen(!isMobileMenuOpen)
          }}
          className="sm:hidden p-2 hover:bg-zinc-500/20 w-10 h-10 rounded-md">
          <IconParkOutlineHamburgerButton className="w-full h-full" />
        </div>

        {/* Mobile Navbar */}
        <nav
          className={cn(
            "absolute inset-0",
            "h-screen",
            "-z-10",
            "pt-[var(--height)]",


            "opacity-0",
            "bg-transparent",
            "pointer-events-none",
            "-translate-y-4",

            isMobileMenuOpen && [
              "opacity-100",
              "bg-[var(--background-hex)]",
              "pointer-events-auto",
              "translate-y-0",
            ],

            "transition-all duration-200",
          )}
        >
          <div className="flex flex-col h-full overflow-auto px-[var(--px-page)] select-none pb-16">
            {
              headerNavItem.map(item => (
                <Link href={`/${ item.title.toLowerCase() }`} key={item.title}
                  className={cn(
                    "py-6 border-t first:border-none border-white/10",
                    "hover:text-white",
                    "group",
                    "cursor-pointer"
                  )}
                >
                  {item.title}<span className="ml-2 group-hover:ml-3 transition-all">{'→'}</span>
                  <div className="text-sm opacity-80 text-wrap">
                    {item.description}
                  </div>
                </Link>
              ))
            }
            <SocialButtons className="pt-8" />
          </div>
        </nav>



        <nav className="hidden sm:block text-sm">
          <ul className="flex flex-row items-center [&_a]:h-full [&_a]:px-4 gap-2 [&_a]:hover:text-white">
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

function useElevatedHeader() {
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
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return ref
}
