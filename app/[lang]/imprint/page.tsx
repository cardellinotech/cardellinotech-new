import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Legal from '../../../components/legal';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return { title: `${lang === 'en' ? 'Legal notice' : 'Impressum'} | CardellinoTech`, robots: { index: false, follow: true } };
}
export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!['de', 'en'].includes(lang)) notFound();
  return <Legal en={lang === 'en'} page="imprint" />;
}
