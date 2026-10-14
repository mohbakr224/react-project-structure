import type { PropsWithChildren } from 'react'
import { Link } from './Link'

export function Navbar() {
  return <header className="site-header"><Link href="/" className="brand"><span className="brand-mark">S</span> Structure</Link><nav aria-label="Main navigation"><a href="#folders">Folders</a><a href="#examples">Examples</a></nav></header>
}
