import Link from 'next/link';
import { ReactIDLogo } from '../icons/reactjs-id';
import { siFacebook, siGithub, siTelegram, siX } from 'simple-icons';
import { cn } from 'lazy-cn';
import { communityInfo } from '@/_content/info';



export function Footer() {
  return (
    <footer className="px-page-px">
      <div className="container-page flex flex-col items-center gap-10 py-16 lg:gap-16">

        <div className="w-full flex flex-row flex-wrap gap-y-4 gap-x-8 items-end justify-between">
          <ReactIDLogo className="h-6 shrink-0" />
          <SocialButtons />
        </div>

        <div className="w-full max flex flex-col md:flex-row items-end gap-4 gap-y-8 text-sm opacity-60">
          <div className="w-full max-w-(--breakpoint-md) space-y-2">
            <h3 className="font-semibold text-foreground-loud">React.js Indonesia</h3>
            <p>
              React.js Indonesia adalah komunitas developer React dan React Native terbesar di Indonesia, bertujuan untuk
              menghubungkan dan mendukung para developer.
            </p>
          </div>
          <div className="flex shrink-0 grow justify-end">
            <p>Hak cipta &copy; React.js Indonesia</p>
          </div>
        </div>

      </div>
    </footer>
  );
}


export function SocialButtons(
  { className, ...props }: React.ComponentProps<'div'>
) {
  return (
    <div className={cn("flex items-center gap-4", className)} {...props}>
      {
        [
          {
            label: 'facebook',
            icon: siFacebook,
            url: communityInfo.facebook.link,
          },
          {
            label: 'github',
            icon: siGithub,
            url: communityInfo.github.link,
          },
          {
            label: 'telegram',
            icon: siTelegram,
            url: communityInfo.telegram.link,
          },
          {
            label: 'X',
            icon: siX,
            url: communityInfo.meetup.link,
          }
        ].map(({ label, url, icon: { path } }) => (
          <Link
            href={url}
            className="hover:text-white"
            key={label}
            target="_blank"
          >
            <svg
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width={24}
              height={24}
            >
              <title>{label}</title>
              <path d={path} />
            </svg>
          </Link>
        ))
      }
    </div>
  )
}
