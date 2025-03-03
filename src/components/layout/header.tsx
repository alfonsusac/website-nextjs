"use client"

import { cn } from 'lazy-cn';
import Link from 'next/link';
import { useEffect, useRef, useState, type SVGProps } from 'react';
import { SocialButtons } from './footer';
import { headerNavItem } from '@/app/navigations';
import { usePathname } from 'next/navigation';


export function Header() {
  const headerRef = useElevatedHeader()

  const {
    isMobileMenuOpen,
    toggleMobileMenu,
  } = useMobileNavbar()

  const pathname = usePathname()
  const isActive = (path: string) => pathname.split('/')[1].startsWith(path.toLowerCase())

  return (
    <header
      ref={headerRef}
      style={{
        // @ts-expect-error css variable
        "--height": '4rem',
      }}
      className={cn(
        "flex h-[var(--height)]",
        "sticky top-0",
        "z-40",
        "border-b border-transparent",
        "backdrop-blur-lg",

        "transition-all duration-300",

        "data-scrolled:bg-background/90",
        "data-scrolled:border-b-foreground/5",
        "data-scrolled:shadow-xl",

        "px-page-px",
      )}
    >
      <div className={cn(
        "container-page",
        "w-full max-w-page mx-auto text-nowrap",
        "flex items-center justify-between gap-4",
      )}>

        {/* Logo */}
        <Link
          href="/"
          className={cn(
            "block py-2 offset-x-4 font-semibold text-xl select-none",
            "select-none",
            "text-foreground-loud/90 hover:text-foreground-loud",
          )}
        >
          reactjs.id
        </Link>

        {/* Hamburger Menu */}
        <div
          onClick={toggleMobileMenu}
          className="sm:hidden p-2 hover:bg-foreground/5 w-10 h-10 rounded-md">
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
              "bg-background",
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
                    "py-6 border-t first:border-none border-foreground/10",
                    "hover:text-foreground-loud",
                    "group",
                    "cursor-pointer",
                  )}
                  data-active={pathname.startsWith(`/${ item.title.toLowerCase() }`)}
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

        <nav className="hidden sm:block text-sm h-full ">
          <ul className="flex flex-row gap-px [&_a]:hover:text-foreground-loud h-full">
            {
              headerNavItem.map((item) => (
                <li key={item.title} className="h-full flex items-center">
                  <Link
                    href={`/${ item.title.toLowerCase() }`}
                    className={cn(
                      "px-5 rounded-full py-2 hover:bg-muted/20",
                      isActive(item.title) && [
                        "bg-muted/10",
                        "text-foreground-loud",
                      ]
                    )}
                  >
                    {item.title}
                  </Link>
                </li>
              ))
            }
            <li className="h-full flex items-center ml-4">
              <Link
                href="/#gabung"
                className={cn(
                  "px-5 rounded-full py-2",
                  "bg-accent",
                  "text-foreground-loud",
                  "hover:brightness-105",
                  "font-medium",
                )}
              >
                Gabung
              </Link>
            </li>
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



function useMobileNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    function onResize() {
      setIsMobileMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const toggleMobileMenu = () => {
    document.body.style.overflow = isMobileMenuOpen
      ? ''
      : 'hidden'
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return { isMobileMenuOpen, toggleMobileMenu }
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
