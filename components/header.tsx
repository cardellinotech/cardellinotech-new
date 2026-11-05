'use client';
/* eslint-disable @next/next/no-html-link-for-pages -- Locale changes intentionally use full navigation to update the document language. */
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';
export function Inquiry({en=false, className=''}: {en?: boolean; className?: string}) {
 return <button type="button" className={`button inquiry ${className}`} aria-disabled="true" title={en ? 'Inquiry will be available soon' : 'Anfrage wird in Kürze verfügbar'}>{en ? 'Let’s talk' : 'Projekt anfragen'}<ArrowUpRight size={17}/></button>;
}
export default function Header({en}: {en: boolean}) {
 const [open,setOpen]=useState(false);
 const links = [['services',en?'Expertise':'Leistungen'],['packages',en?'Packages':'Pakete'],['approach',en?'How it works':'Zusammenarbeit'],['about',en?'About':'Über mich']];
 return <header className="header"><div className="container nav"><Link href={en?'/en':'/de'} className="brand" aria-label="CardellinoTech Home"><span className="brand-icon">c<span>t</span></span><span>cardellino<span className="brand-light">tech</span><span className="brand-dot">.</span></span></Link><nav aria-label={en?'Main navigation':'Hauptnavigation'} className="nav-links">{links.map(([id,title])=><a key={id} href={`#${id}`} onClick={()=>setOpen(false)}>{title}</a>)}</nav><div className="nav-actions"><div className="languages" aria-label={en?'Language':'Sprache'}><a href="/de" lang="de" aria-current={!en?'page':undefined}>DE</a><span>/</span><a href="/en" lang="en" aria-current={en?'page':undefined}>EN</a></div><Inquiry en={en}/><button className="menu-toggle" aria-expanded={open} aria-controls="mobile-navigation" aria-label={en?'Toggle menu':'Menü öffnen oder schließen'} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div></div>{open&&<nav id="mobile-navigation" className="mobile-links" aria-label={en?'Mobile navigation':'Mobile Navigation'}>{links.map(([id,title])=><a key={id} href={`#${id}`} onClick={()=>setOpen(false)}>{title}</a>)}</nav>}</header>;
}
