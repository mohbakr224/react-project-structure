import type { AnchorHTMLAttributes, PropsWithChildren } from 'react'
type LinkProps = PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>
export function Link({ children, ...props }: LinkProps) { return <a {...props}>{children}</a> }
