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

  const mobileMenuRef = useRef<HTMLDivElement>(null)

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu() {
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    function onResize() {
      setIsMenuOpen(false)
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

        "data-[scrolled]:bg-[#15181d]/90",
        "data-[scrolled]:border-b-white/5",
        "data-[scrolled]:shadow-xl",
      )}
      style={{
        // @ts-expect-error css variable
        "--height": '4rem',
      }}
    >
      <div className="w-full max-w-[var(--mw-page)] mx-auto px-[var(--px-page)] flex flex-row items-center gap-4 text-nowrap">

        <div className="flex-grow">
          <div className="font-semibold text-2xl text-white leading-[40px] select-none">
            <Link href="/">reactjs.id</Link>
          </div>
        </div>

        <nav className="sm:hidden">
          <div
            onClick={() => toggleMenu()}
            className="p-2 hover:bg-zinc-500/20 w-10 h-10 rounded-md">
            <IconParkOutlineHamburgerButton className="w-full h-full" />
          </div>
        </nav>

        <nav
          ref={mobileMenuRef}
          data-opened={isMenuOpen ? '' : undefined}
          className={cn(
            "absolute w-screen h-screen -z-10 inset-0 ",
            "pt-[var(--height)]",

            "opacity-0",
            "bg-transparent",

            "transition-[opacity,transform,background] duration-300",

            "-translate-y-4",

            "pointer-events-none",

            "data-[opened]:opacity-100",
            "data-[opened]:translate-y-0",
            "data-[opened]:bg-[#15161A]",
            "data-[opened]:pointer-events-auto",

          )}>
          <div className={cn(
            "flex flex-col h-full overflow-auto px-[var(--px-page)] pb-40",
          )}>
            {
              headerNavItem.map(({ title, description }) => (
                <Link key={title} href={`/${ title.toLowerCase() }`}
                  className="select-none first:border-none border-t border-t-white/20 py-6 hover:text-white group"
                >
                  {title}<span className="ml-2 group-hover:ml-4 transition-all">→</span>
                  <div className="text-wrap text-sm opacity-60">
                    {description}
                  </div>
                </Link>
              ))
            }
            <div className="pt-8">
              <SocialButtons />
            </div>
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
