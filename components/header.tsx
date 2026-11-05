'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { createInquiryHref } from '../lib/inquiry';
export function Inquiry({en=false, className='', packageName, homePath=''}: {en?: boolean; className?: string; packageName?: string; homePath?: string}) {
 const label = en ? 'Let’s talk' : 'Projekt anfragen';
 return <a className={`button inquiry ${className}`} href={packageName ? createInquiryHref(en, packageName) : `${homePath}#contact`} aria-label={packageName ? `${label}: ${packageName}` : undefined}>{label}<ArrowUpRight size={17} aria-hidden="true"/></a>;
}
export default function Header({en, page='home'}: {en: boolean; page?: 'home' | 'imprint' | 'privacy'}) {
 const home = en ? '/en' : '/de';
 const homePath = page === 'home' ? '' : home;
 const suffix = page === 'home' ? '' : `/${page}`;
 const [open,setOpen]=useState(false);
 const links = [['services',en?'Expertise':'Leistungen'],['packages',en?'Packages':'Pakete'],['approach',en?'How it works':'Zusammenarbeit'],['about',en?'About':'Über mich']];
 return <header className="header"><div className="container nav"><Link href={en?'/en':'/de'} className="brand" aria-label="CardellinoTech Home"><span className="brand-icon">c<span>t</span></span><span>cardellino<span className="brand-light">tech</span><span className="brand-dot">.</span></span></Link><nav aria-label={en?'Main navigation':'Hauptnavigation'} className="nav-links">{links.map(([id,title])=><a key={id} href={`${homePath}#${id}`} onClick={()=>setOpen(false)}>{title}</a>)}</nav><div className="nav-actions"><div className="languages" aria-label={en?'Language':'Sprache'}><a href={`/de${suffix}`} lang="de" aria-current={!en?'page':undefined}>DE</a><span>/</span><a href={`/en${suffix}`} lang="en" aria-current={en?'page':undefined}>EN</a></div><Inquiry en={en} homePath={homePath}/><button className="menu-toggle" aria-expanded={open} aria-controls="mobile-navigation" aria-label={en?'Toggle menu':'Menü öffnen oder schließen'} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div></div>{open&&<nav id="mobile-navigation" className="mobile-links" aria-label={en?'Mobile navigation':'Mobile Navigation'}>{links.map(([id,title])=><a key={id} href={`${homePath}#${id}`} onClick={()=>setOpen(false)}>{title}</a>)}</nav>}</header>;
}
