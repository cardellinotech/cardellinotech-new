import type { Metadata } from 'next';
import '../globals.css';
export const metadata: Metadata = { title: 'CardellinoTech — DevOps & Platform Engineering', description: 'Planbare Releases. Verlässliche Infrastruktur. DevOps, SRE und Cloud Engineering für Softwareteams – vom klaren Fahrplan bis zur laufenden Betreuung.' };
export default async function RootLayout({children, params}: {children: React.ReactNode; params: Promise<{lang?: string}>}) {
  const {lang} = await params;
  return <html lang={lang === 'en' ? 'en' : 'de'}><body>{children}</body></html>;
}
