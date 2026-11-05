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

## Geplanter Hostingweg nach DKF-Vorbild

Der Nutzer möchte den technischen Hostingansatz aus `dcardellino/dkf` übernehmen. Die gelesenen Dateien `docs/deployment-hetzner.md`, `deploy/compose.yaml`, `deploy/nginx/dkf-bikes.conf` und `.github/workflows/deploy.yml` beschreiben einen Hetzner-VPS mit Docker, Nginx auf dem Host und certbot/Let's Encrypt. GitHub Actions baut Containerimages und veröffentlicht sie über GHCR; der Server wird per SSH aktualisiert. Das ist die gewünschte Architektur, kein Nachweis der tatsächlich laufenden CardellinoTech-Konfiguration.

Für CardellinoTech reichen der App-Container und der Proxy. Die DKF-Datenbank, der Formularschutz und die zugehörigen Aufbewahrungsregeln sind kein Bestandteil dieser Website und werden nicht übernommen.

Vor dem Entfernen des Datenschutz-Entwurfshinweises fehlen konkret:

1. Tatsächlicher Hetzner-Produktstandort und verantwortliches Kundenkonto. Der Standort ist im Konto zu prüfen; die DKF-Texte allein belegen ihn nicht für CardellinoTech.
2. Bestätigung eines auf die Verarbeitung passenden AV-Vertrags mit Hetzner. Nicht behaupten, dass dieser bereits abgeschlossen ist.
3. Tatsächliches Nginx-Logformat und die Datenfelder, getrennt für Zugriffs- und Fehlerprotokolle. In der DKF-Referenz sind beide Logs aktiv; die Löschfristen und ein mögliches geerbtes Format fehlen dort.
4. Technisch umgesetzte Aufbewahrung und Löschung für Nginx-Logs, Containerlogs und gegebenenfalls Sicherungen. Drei Docker-Logdateien zu je 10 MB sind eine Größenbegrenzung, keine feste Speicherdauer. Die 24-Stunden-Regel des DKF-IP-Hashes betrifft nicht Nginx-Logs.
5. Tatsächliche weitere Empfänger oder Dienste auf dem Anfrageweg, zum Beispiel ein zusätzlich vorgeschalteter CDN-/Proxy-Dienst oder externe Fehlerüberwachung. GitHub Actions und GHCR sind zunächst Build-/Verteilungswerkzeuge; Besucheranfragen werden dadurch nicht automatisch an GitHub weitergeleitet.
6. Löschpraxis für erledigte E-Mail-Anfragen bei united-domains einschließlich Archivierung und Sicherungen. Die DKF-Frist für Datenbankanfragen ist hier nicht übertragbar.

Die Datenschutzerklärung im DKF-Repository ist selbst ausdrücklich als Platzhalter gekennzeichnet. Sie ist keine fertige Vorlage für CardellinoTech. Beim Hosting-PR werden die bestätigten Datenflüsse und Fristen in beide Sprachfassungen eingearbeitet. `hostingPrivacyReviewed` bleibt bis dahin `false`.

Quellen zur Vertrags- und Informationsprüfung:

- [Datenschutz bei Hetzner](https://docs.hetzner.com/de/general/company-and-policy/data-protection-at-hetzner/)
- [Informationen zu Datenschutzerklärungen der IHK Rhein-Neckar](https://www.ihk.de/rhein-neckar/recht/datenschutz-itrecht-internetrecht/datenschutz/datenschutzerklaerung-4502986)
