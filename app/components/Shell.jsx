'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Footer } from './Footer';

const links = [['Overview', '/'], ['Platform', '/platform'], ['Solutions', '/solutions'], ['Pricing', '/pricing'], ['Resources', '/resources']];

// Persistent shell intentionally owns navigation state so every page feels like one product.
export function Shell({ children }) {
  const path = usePathname(); const [open, setOpen] = useState(false);
  useEffect(() => { setOpen(false); }, [path]);
  return <div className="app-shell">
    <aside className={`sidebar ${open ? 'is-open' : ''}`}>
      <Link href="/" className="brand"><span className="brand-mark">S</span><span>Sentry<span>X</span></span></Link>
      <p className="eyebrow nav-label">Command Center</p>
      <nav>{links.map(([label, href], index) => <Link key={href} href={href} className={path === href ? 'active' : ''}><span className="nav-number">0{index + 1}</span>{label}</Link>)}</nav>
      <div className="side-bottom"><div className="secure-dot" /> All systems operational<br/><small>Secure edge intelligence</small></div>
    </aside>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation"><i /><i /><i /></button>
    <main>{children}<Footer /></main>
    <Link href="/pricing#contact" className="sticky-cta">Book a briefing <span>↗</span></Link>
  </div>;
}
