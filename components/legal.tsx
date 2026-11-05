import Link from 'next/link';
import Header from './header';
import Footer from './footer';
import { business } from '../lib/business.mjs';

export type LegalPage = 'imprint' | 'privacy';

export default function Legal({ en, page }: { en: boolean; page: LegalPage }) {
  const privacy = page === 'privacy';
  const home = en ? '/en' : '/de';
  return (
    <>
      <a href="#main" className="skip-link">{en ? 'Skip to content' : 'Zum Inhalt'}</a>
      <Header en={en} page={page} />
      <main id="main" className="container legal-page">
        <Link className="text-link" href={home}>{en ? 'Back to the homepage' : 'Zur Startseite'}</Link>
        <h1>{privacy ? (en ? 'Privacy notice' : 'Datenschutzhinweise') : (en ? 'Legal notice' : 'Impressum')}</h1>
        {privacy && !business.hostingPrivacyReviewed && (
          <aside className="legal-draft" role="note">
            {en
              ? 'Draft for the launch preparation. The hosting provider, its storage periods and any international data transfers will be specified before this website is published.'
              : 'Entwurf zur Launch-Vorbereitung. Hostinganbieter, dessen Speicherfristen und mögliche Drittlandübermittlungen werden vor der Veröffentlichung ergänzt.'}
          </aside>
        )}
        {privacy ? <Privacy en={en} /> : <Imprint en={en} />}
      </main>
      <Footer en={en} />
    </>
  );
}

function BusinessAddress({ en }: { en: boolean }) {
  return (
    <address>
      {business.legalName}<br />
      {business.address.map(line => <span key={line}>{line}<br /></span>)}
      {en ? 'Germany' : business.country}<br />
      <a href={`mailto:${business.email}`}>{business.email}</a>
    </address>
  );
}

function Imprint({ en }: { en: boolean }) {
  return (
    <>
      <section>
        <h2>{en ? 'Service provider' : 'Diensteanbieter'}</h2>
        <p>{en ? 'Information pursuant to section 5 of the German Digital Services Act (DDG).' : 'Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG).'}</p>
        <p>{business.brand}</p>
        <BusinessAddress en={en} />
      </section>
      <section>
        <h2>{en ? 'Contact' : 'Kontakt'}</h2>
        <p>{en ? 'For business inquiries and questions about this website, please email' : 'Für geschäftliche Anfragen und Fragen zu dieser Website schreibe bitte an'}{' '}
          <a href={`mailto:${business.email}`}>{business.email}</a>.
        </p>
      </section>
      {business.vatId && <section><h2>{en ? 'VAT identification number' : 'Umsatzsteuer-Identifikationsnummer'}</h2><p>{business.vatId}</p></section>}
      {business.businessId && <section><h2>{en ? 'Business identification number' : 'Wirtschafts-Identifikationsnummer'}</h2><p>{business.businessId}</p></section>}
      {business.register && <section><h2>{en ? 'Register information' : 'Registerangaben'}</h2><p>{business.register}</p></section>}
    </>
  );
}

function Privacy({ en }: { en: boolean }) {
  return (
    <>
      <p>{en ? 'These notes explain how personal data is processed when you visit this website or contact CardellinoTech.' : 'Diese Hinweise erläutern, wie personenbezogene Daten beim Besuch dieser Website und bei der Kontaktaufnahme mit CardellinoTech verarbeitet werden.'}</p>
      <section>
        <h2>{en ? 'Controller' : 'Verantwortlicher'}</h2>
        <BusinessAddress en={en} />
      </section>
      <section>
        <h2>{en ? 'Visiting the website' : 'Besuch der Website'}</h2>
        <p>{en
          ? 'To deliver the website, the hosting service processes your IP address and technical request data. The purpose is to provide a working website and protect its operation. The legal basis is Article 6(1)(f) GDPR, our legitimate interest in providing a secure and reliable business website.'
          : 'Zur Auslieferung der Website verarbeitet der Hostingdienst deine IP-Adresse und technische Anfragedaten. Dies dient der Bereitstellung und dem Schutz des Betriebs. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO: das berechtigte Interesse an einer sicheren und zuverlässigen geschäftlichen Website.'}</p>
        <p>{en
          ? 'The specific hosting service and the scope and retention of its access logs will be documented when hosting is configured. This notice must be completed before the website goes live.'
          : 'Der konkrete Hostingdienst sowie Umfang und Speicherdauer seiner Zugriffsprotokolle werden bei der Hosting-Einrichtung dokumentiert. Diese Hinweise müssen vor dem Livegang vervollständigt werden.'}</p>
      </section>
      <section>
        <h2>{en ? 'Email inquiries' : 'Kontaktaufnahme per E-Mail'}</h2>
        <p>{en
          ? 'The inquiry links open a draft in your own email application. This website does not submit a form or send an email for you. You decide whether to send the message. If you contact us, we process your email address, name if supplied, message and any accompanying project details to answer the inquiry.'
          : 'Die Anfrage-Links öffnen einen Entwurf in deinem eigenen E-Mail-Programm. Die Website übermittelt kein Kontaktformular und versendet keine E-Mail für dich. Du entscheidest selbst über den Versand. Wenn du uns schreibst, verarbeiten wir deine E-Mail-Adresse, einen gegebenenfalls angegebenen Namen, die Nachricht und mitgesendete Projektdaten zur Bearbeitung deiner Anfrage.'}</p>
        <p>{en
          ? 'For inquiries aimed at entering into a contract with you, the legal basis is Article 6(1)(b) GDPR. For other business correspondence, including communication with company representatives, it is Article 6(1)(f) GDPR, our legitimate interest in handling business inquiries. You are not required to provide additional project information; without a way to contact you, we cannot answer.'
          : 'Bei Anfragen zur Anbahnung eines Vertrags mit dir ist Art. 6 Abs. 1 lit. b DSGVO die Rechtsgrundlage. Für andere geschäftliche Korrespondenz, auch mit Ansprechpartnern von Unternehmen, ist es Art. 6 Abs. 1 lit. f DSGVO: unser berechtigtes Interesse an der Bearbeitung geschäftlicher Anfragen. Zusätzliche Projektdaten musst du nicht angeben; ohne eine Kontaktmöglichkeit können wir nicht antworten.'}</p>
        <p>{en
          ? 'Messages are retained for as long as needed to handle the inquiry and any resulting business relationship. They are then deleted unless statutory retention obligations or the establishment, exercise or defence of legal claims require continued retention.'
          : 'Nachrichten werden so lange aufbewahrt, wie dies zur Bearbeitung der Anfrage und einer daraus entstehenden Geschäftsbeziehung erforderlich ist. Danach werden sie gelöscht, soweit nicht gesetzliche Aufbewahrungspflichten oder die Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen eine weitere Speicherung erfordern.'}</p>
        {business.emailProvider && <p>{en ? 'Email service provider:' : 'E-Mail-Dienstleister:'} {business.emailProvider}.{' '}<a href="https://www.united-domains.de/unternehmen/datenschutz/">{en ? 'Provider privacy information' : 'Datenschutzhinweise des Anbieters'}</a></p>}
      </section>
      <section>
        <h2>{en ? 'Service providers and transfers' : 'Dienstleister und Übermittlungen'}</h2>
        <p>{en
          ? 'Hosting and email providers receive personal data to the extent necessary to provide their services. Other recipients may include authorities where disclosure is legally required or parties involved in establishing or defending legal claims. Any transfer outside the EEA must meet the requirements of Chapter V GDPR. The hosting-specific information will be completed before publication.'
          : 'Hosting- und E-Mail-Dienstleister erhalten personenbezogene Daten, soweit dies für ihre Leistungen erforderlich ist. Weitere Empfänger können Behörden bei gesetzlicher Verpflichtung sowie Beteiligte an der Geltendmachung oder Verteidigung von Rechtsansprüchen sein. Eine Übermittlung außerhalb des EWR muss die Voraussetzungen von Kapitel V DSGVO erfüllen. Die hostingbezogenen Angaben werden vor Veröffentlichung ergänzt.'}</p>
      </section>
      <section>
        <h2>{en ? 'Cookies, analytics and embedded content' : 'Cookies, Reichweitenmessung und eingebundene Inhalte'}</h2>
        <p>{en
          ? 'The application currently sets no cookies and uses no analytics, advertising trackers, external fonts, embedded calendars or social media widgets. The email links only open your email application. Any additional services introduced with hosting must be assessed and reflected in this notice before launch.'
          : 'Die Anwendung setzt derzeit keine Cookies und verwendet keine Reichweitenmessung, Werbetracker, externen Schriftarten, eingebetteten Kalender oder Social-Media-Widgets. Die E-Mail-Links öffnen lediglich dein E-Mail-Programm. Zusätzliche Dienste aus der Hosting-Einrichtung müssen vor dem Launch geprüft und hier berücksichtigt werden.'}</p>
      </section>
      <section>
        <h2>{en ? 'Your rights' : 'Deine Rechte'}</h2>
        <p>{en
          ? 'Subject to the applicable legal conditions, you have rights of access, rectification, erasure, restriction of processing and data portability. You may withdraw consent for the future where processing is based on consent. To exercise these rights, contact the controller above.'
          : 'Unter den jeweiligen gesetzlichen Voraussetzungen hast du Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit. Eine Einwilligung kannst du mit Wirkung für die Zukunft widerrufen, soweit eine Verarbeitung auf Einwilligung beruht. Wende dich zur Ausübung deiner Rechte an den oben genannten Verantwortlichen.'}</p>
        <p><strong>{en ? 'Right to object:' : 'Widerspruchsrecht:'}</strong>{' '}{en
          ? 'Where processing is based on Article 6(1)(f) GDPR, you may object on grounds relating to your particular situation. You may object to processing for direct marketing at any time.'
          : 'Bei einer Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO kannst du aus Gründen, die sich aus deiner besonderen Situation ergeben, Widerspruch einlegen. Einer Verarbeitung für Direktwerbung kannst du jederzeit widersprechen.'}</p>
        <p>{en
          ? 'You also have the right to complain to a data protection supervisory authority, in particular where you live, work or where you believe an infringement occurred. The authority at the controller’s location is the State Commissioner for Data Protection and Freedom of Information Baden-Württemberg.'
          : 'Du kannst dich außerdem bei einer Datenschutzaufsichtsbehörde beschweren, insbesondere an deinem Aufenthaltsort, Arbeitsplatz oder dem Ort eines vermuteten Verstoßes. Am Sitz des Verantwortlichen ist der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg zuständig.'}{' '}
          <a href="https://www.baden-wuerttemberg.datenschutz.de/">{en ? 'Supervisory authority website' : 'Website der Aufsichtsbehörde'}</a>
        </p>
        <p>{en ? 'We do not use automated decision-making or profiling.' : 'Eine automatisierte Entscheidungsfindung oder ein Profiling findet nicht statt.'}</p>
      </section>
    </>
  );
}
