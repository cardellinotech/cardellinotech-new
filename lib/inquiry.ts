import { business } from './business.mjs';

/** Compose a draft in the visitor's email client. This site does not send it. */
export function createInquiryHref(en: boolean, packageName?: string): string {
  const subject = en
    ? `Project inquiry${packageName ? `: ${packageName}` : ''} | CardellinoTech`
    : `Projektanfrage${packageName ? `: ${packageName}` : ''} | CardellinoTech`;
  const body = en
    ? [
        'Hi Dominic,', '',
        `I’m interested in ${packageName || 'working with CardellinoTech'}.`, '',
        'Company:', 'Website (optional):', 'Our current setup:',
        'What we would like to improve:', 'Preferred timeframe:', '',
        'Best regards,',
      ].join('\r\n')
    : [
        'Hallo Dominic,', '',
        packageName ? `Wir interessieren uns für das Paket ${packageName}.` : 'Wir interessieren uns für eine Zusammenarbeit mit CardellinoTech.', '',
        'Unternehmen:', 'Website (optional):', 'Unser aktuelles Setup:',
        'Was wir verbessern möchten:', 'Gewünschter Zeitrahmen:', '',
        'Viele Grüße',
      ].join('\r\n');
  return `mailto:${business.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
