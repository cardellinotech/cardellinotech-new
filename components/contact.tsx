import { ArrowUpRight, Mail } from 'lucide-react';
import { business } from '../lib/business.mjs';
import { createInquiryHref } from '../lib/inquiry';

export default function Contact({ en }: { en: boolean }) {
  return (
    <section id="contact" className="contact-section container" aria-labelledby="contact-heading">
      <div>
        <p className="eyebrow">{en ? 'A direct line to your engineer' : 'Der direkte Draht zu deinem Engineer'}</p>
        <h2 id="contact-heading">{en ? 'Tell me about your project.' : 'Erzählt mir von eurem Projekt.'}</h2>
        <p>{en
          ? 'What is slowing your team down? Share your current setup, the outcome you want and your preferred timeframe. We can work out the right next step together.'
          : 'Was bremst euer Team gerade aus? Schreibt mir kurz zu eurem Setup, eurem Ziel und eurem gewünschten Zeitrahmen. Gemeinsam finden wir den passenden nächsten Schritt.'}</p>
      </div>
      <div className="contact-card">
        <Mail size={25} aria-hidden="true" />
        <h3>{business.legalName}</h3>
        <a className="contact-address" href={`mailto:${business.email}`}>{business.email}</a>
        <a className="button" href={createInquiryHref(en)}>
          {en ? 'Prepare an inquiry' : 'Anfrage vorbereiten'}<ArrowUpRight size={17} aria-hidden="true" />
        </a>
        <p>{en
          ? 'Your email app opens with a draft. You review and send it yourself. You can also copy the address and write directly.'
          : 'Dein E-Mail-Programm öffnet sich mit einem Entwurf. Du prüfst und versendest ihn selbst. Du kannst die Adresse auch kopieren und direkt schreiben.'}</p>
        <a className="contact-privacy" href={`/${en ? 'en' : 'de'}/privacy`}>{en ? 'How your inquiry is handled' : 'Datenschutz bei deiner Anfrage'}</a>
      </div>
    </section>
  );
}
