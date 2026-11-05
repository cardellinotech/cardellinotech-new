# Anfrageweg und Rechtstexte

## Umgesetzt

- Allgemeine Anfrage-Buttons führen zur Kontaktsektion der jeweiligen Sprachversion.
- Paket-Anfragen öffnen einen `mailto:`-Entwurf an `hello@cardellino.tech`. Paketname und deutsche bzw. englische Nachricht werden vollständig URL-kodiert übernommen.
- Die Kontaktsektion zeigt die kopierbare Adresse und erklärt, dass das eigene E-Mail-Programm geöffnet wird. Die Website sendet keine E-Mails und speichert keine Anfragen.
- Impressum unter `/de/imprint` bzw. `/en/imprint` und Datenschutz unter `/de/privacy` bzw. `/en/privacy`; Footer und Sprachwechsel verlinken die passende Seite. Die Seitennavigation führt von Rechtstexten zurück zur Landingpage.
- Die Geschäftsdaten sind zentral in `lib/business.mjs` gepflegt. Verwendet werden ausschließlich die vom Nutzer bestätigten Angaben: Dominic Cardellino, Grünewaldstraße 4/1, 71083 Herrenberg, Deutschland, hello@cardellino.tech. Kleinunternehmerstatus ist keine Rechtsform und wird nicht als solche ausgegeben.

## Bestätigt und vor Veröffentlichung noch zu prüfen

- Der Nutzer hat bestätigt: keine USt-IdNr., Wirtschafts-Identifikationsnummer oder Registereintragung vorhanden; diese Felder werden weggelassen.
- Der Nutzer hat united-domains als Postfachanbieter bestätigt. Die Datenschutzhinweise nennen united-domains GmbH und verlinken deren Informationen. Vertrags- und Aufbewahrungsdetails sind anhand des tatsächlich verwendeten Mailprodukts zu prüfen.
- Vollständige End-to-End-Zustellung: Eine Nachricht mit dem echten Mailprogramm absenden und Eingang im Geschäftspostfach kontrollieren. Die automatisierten Tests lösen keinen Versand und keine Registrierung eines externen Dienstes aus.

## Separater Hosting-PR

Der Nutzer hat Hosting ausdrücklich ausgeklammert. Deshalb werden keine Domain, kein Hostinganbieter und keine erfundenen Log-Speicherfristen eingebaut. Die Datenschutzhinweise enthalten bis zur Hostingprüfung einen sichtbaren Entwurfshinweis; `business.hostingPrivacyReviewed` bleibt `false`. Rechtstextseiten sind vorerst mit `noindex` gekennzeichnet. Das ist kein Zugriffsschutz.

Im Hosting-PR sind Anbieter/Empfänger, Anfragedaten und Logs, tatsächliche Speicherfristen, Auftragsverarbeitung und gegebenenfalls Drittlandübermittlungen zu prüfen und die Datenschutzhinweise entsprechend zu vervollständigen. Der Hinweis wird erst nach dieser Prüfung entfernt. Rechtliche Texte müssen vor Veröffentlichung anhand der tatsächlichen Geschäfts- und Verarbeitungsabläufe freigegeben werden; die technische Umsetzung stellt keine Zusicherung rechtlicher Vollständigkeit dar.

## Quellen für die Entwurfsprüfung

- [§ 5 DDG](https://www.gesetze-im-internet.de/ddg/__5.html)
- [DSGVO](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679), insbesondere Art. 6, 13 und die Betroffenenrechte
- [Landesbeauftragter für Datenschutz und Informationsfreiheit Baden-Württemberg](https://www.baden-wuerttemberg.datenschutz.de/)
