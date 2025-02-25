import type { ComponentProps } from 'react';

export function LayoutRoot(
  { children, ...props }: ComponentProps<"div">,
) {
  return <div className="h-full min-h-screen" {...props}>
    {children}
  </div>;
}
