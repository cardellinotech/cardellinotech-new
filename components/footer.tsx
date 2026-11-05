import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Footer({ en }: { en: boolean }) {
  const home = en ? '/en' : '/de';
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <Link className="footer-brand" href={home}>cardellinotech<span>.</span></Link>
        <span>© {new Date().getFullYear()} CardellinoTech</span>
        <nav className="footer-legal" aria-label={en ? 'Legal information' : 'Rechtliche Informationen'}>
          <Link href={`${home}/imprint`}>{en ? 'Legal notice' : 'Impressum'}</Link>
          <Link href={`${home}/privacy`}>{en ? 'Privacy' : 'Datenschutz'}</Link>
        </nav>
        <a href="#main">{en ? 'Back to top' : 'Nach oben'}<ArrowUpRight size={14} aria-hidden="true" /></a>
      </div>
    </footer>
  );
}
