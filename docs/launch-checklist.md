# CardellinoTech: Checkliste vor Veröffentlichung

Stand: 5. November 2026. Zweisprachiger Next.js-One-Pager mit statisch erzeugten Inhaltsseiten, React und TypeScript. Anfragen werden inzwischen als E-Mail-Entwurf im Mailprogramm des Besuchers vorbereitet; kein serverseitiger Versand, keine Datenbank, Anmeldung, Zahlung oder eingebautes Tracking. Es werden keine Umgebungsvariablen oder externen Dienste im Anwendungscode verwendet. Ungenutzte Bibliotheken wie Resend und Vercel Analytics wurden entfernt.

Geschätzter Aufwand für den einfachen Erstlaunch: etwa ein Arbeitstag, sobald Geschäftsangaben, Domainzugriff und freigegebene Rechtstexte vorliegen. Eine rechtliche Prüfung oder fehlende Kontozugänge können den Termin verlängern.

Legende: 🧑 Du: Angaben, Konten oder Entscheidungen. 🤖 Agent: Umsetzung im Repository. 🤝 Gemeinsam: technische Vorbereitung und Prüfung mit deinen Kontozugängen.

## 0. Abhängigkeiten vor dem Launch bereinigen

- [x] 🤖 **Paketstand aktualisieren und prüfen — ca. 1–2 Stunden.** Der anfängliche Aufruf `npm audit --omit=dev` meldete sechs betroffene Pakete: fünf hoch und eines kritisch. Next.js ist das kritisch eingestufte Paket; außerdem werden nanoid, PostCSS, sharp, source-map-js und Zod gemeldet. Das ist ein Befund zum Abhängigkeitsbaum, kein Nachweis, dass jede Schwachstelle auf dieser Website erreichbar ist. Ungenutzte direkte Bibliotheken reduzieren, geeignete behobene Versionen installieren und Lockdatei aktualisieren. Kein blindes erzwungenes Upgrade.

  > Aktualisiere die Abhängigkeiten der CardellinoTech-Landingpage auf geeignete behobene Versionen. Prüfe die gemeldeten Advisory-Bedingungen, entferne ungenutzte direkte Abhängigkeiten und verwende eine eigenständige Installation im Worktree: node_modules ist momentan mit dem ursprünglichen Checkout verknüpft. Führe Lint, Typprüfung, Produktions-Build, Browserprüfung und einen erneuten Audit durch. Dokumentiere verbleibende Befunde und ihre Erreichbarkeit.

  **Erfolg erkennbar:** Build und Browserprüfung bestehen; verbleibende Sicherheitsmeldungen sind einzeln bewertet und es gibt keine ungeklärten für den Betrieb relevanten kritischen Befunde.

Ergebnis der Aktualisierung: Next.js 16.4.5, React 19.3.1 und ein bereinigter Paketbaum. Der vollständige npm-Audit meldet jetzt 0 bekannte Schwachstellen. Lint, Tests, Typprüfung und Produktions-Build erfolgreich. Details: `docs/dependency-maintenance.md`.

## 1. Anfrageweg und Angebote freigeben

- [ ] 🧑 **Geschäftliche Kontaktadresse und Betriebsrahmen bestätigen — ca. 20 Minuten.** Eine regelmäßig gelesene geschäftliche E-Mail-Adresse auswählen. Im vorhandenen Mailkonto den Empfang prüfen. Festlegen, wann du antworten und laufende Betreuung übernehmen kannst. Kein neues Mailprodukt nötig, sofern ein passendes Postfach existiert; dessen bisherige Kosten bleiben bestehen.

  **Erfolg erkennbar:** Empfangsadresse und realistische Servicezeiten stehen fest. Die Aussagen zu Erfahrung, US-Projekten und Paketergebnissen sind fachlich freigegeben. Öffentliche Listenpreise sind für den Start nicht erforderlich, wenn schriftliche Angebote den Preis vor Beauftragung klären.

- [x] 🤖 **Anfrage-Buttons aktivieren — ca. 45–60 Minuten.** Für den einfachen Erstlaunch führen die Buttons zu einer Kontaktsektion mit sichtbarer Geschäftsadresse und E-Mail-Link. Paketbuttons übernehmen Paket und Sprache in den Betreff. Ein E-Mail-Link öffnet das Mailprogramm des Besuchers; deshalb bleibt die Adresse zusätzlich kopierbar sichtbar. Ein vollständiges serverseitiges Formular ist eine spätere Erweiterung.

  > Aktiviere die Anfrage-Buttons auf Deutsch und Englisch und ergänze eine Kontaktsektion. Verwende die freigegebene Geschäftsadresse sichtbar und als mailto-Link. Übernimm bei Paketbuttons den Paketnamen in den Betreff und frage im vorbereiteten Nachrichtentext nach Unternehmen, Projekt und gewünschtem Zeitrahmen. Sorge für Tastaturbedienbarkeit, verständliche Beschriftung und saubere URL-Kodierung. Vermeide zusätzliche Tracking- oder Kalenderdienste.

  **Erfolg erkennbar:** Alle Anfrage-Buttons haben ein verständliches Ziel, Paket und Sprache werden korrekt übernommen und eine Testmail kommt im Geschäftspostfach an.

## 2. Rechtstexte zum tatsächlichen Betrieb

- [ ] 🧑 **Impressumsangaben und Datenschutzhinweise freigeben — ca. 30–60 Minuten plus ggf. externe Prüfung.** Unternehmenssitz und Rechtsform klären. Geschäftsangaben und rechtlich geprüfte Texte passend zum Sitz, Hosting, Geschäfts-E-Mail und tatsächlichen Datenflüssen zusammenstellen. Bei deutschem Sitz ist insbesondere § 5 DDG zu berücksichtigen. Datenschutzinformationen müssen auch Hosting- und Kontaktverarbeitung abdecken; fehlendes Tracking ersetzt diese Angaben nicht. Kosten einer externen Prüfung hängen vom gewählten Anbieter ab.

  **Erfolg erkennbar:** Vollständige tatsächliche Geschäftsangaben und freigegebene Texte liegen vor; es werden keine erfundenen Adressen, Registernummern oder pauschalen Vorlagentexte verwendet.

- [ ] 🤖 **Rechtstexte einbauen und verlinken — ca. 45–60 Minuten.** Von beiden Sprachversionen direkt im Footer erreichbar. Sprachumfang der Texte mit den freigegebenen Unterlagen abstimmen.

  > Baue die bereitgestellten Impressums- und Datenschutzhinweise als eigenständige Seiten ein und verlinke sie in beiden Sprachversionen im Footer. Erfinde keine rechtlichen Angaben. Gleiche die Datenschutzhinweise mit dem tatsächlichen Hosting und Kontaktweg ab und markiere offene Angaben vor Veröffentlichung.

  **Erfolg erkennbar:** Jede Sprachseite bietet sichtbare, funktionierende Links auf vollständige Rechtstexte; keine Platzhalter bleiben übrig.

Die Geschäftsdaten und der Mailanbieter wurden vom Nutzer bestätigt; die Seiten sind technisch umgesetzt. Der Datenschutz-Entwurf bleibt bis zur Prüfung des tatsächlichen Hostings offen. Details: `docs/contact-and-legal.md`.

## 3. Hosting und Domain

- [ ] 🤝 **Vercel-Pro-Projekt vorbereiten — ca. 30–45 Minuten.** Empfohlener einfacher Veröffentlichungsweg für dieses Next.js-Projekt. Vorhandenes Vercel-Konto und bestehende Domainkonfiguration zuerst prüfen. Unter Dashboard → Add New → Project das GitHub-Repository importieren, Framework Next.js und Produktionsbranch main kontrollieren. Achtung: Bei bereits aktivierter automatischer Veröffentlichung kann ein Merge nach main die bestehende Website sofort ersetzen; deshalb zuerst die Vorschau abnehmen. Der Hobby-Tarif ist auf persönliche, nichtkommerzielle Nutzung beschränkt. Pro wird aktuell ab 20 USD/Monat angeboten; zusätzliche Nutzung, weitere kostenpflichtige Sitze und Steuern prüfen. Budgetwarnungen und eine passende Ausgabenbegrenzung einrichten. Noch keinen neuen kostenpflichtigen Tarif abschließen, wenn ein bestehender Account das Projekt bereits abdeckt.

  **Erfolg erkennbar:** Die Vorschau baut erfolgreich, die kommerzielle Nutzung ist vom Tarif gedeckt und Produktionsbranch sowie automatische Veröffentlichungen sind bekannt.

- [ ] 🤝 **Domain verbinden — ca. 30 Minuten plus DNS-Wartezeit.** Unter Project → Settings → Domains die freigegebene Domain hinzufügen. DNS ist das Adressbuch, das die Domain zum Hosting leitet. Beim Domainanbieter genau die von Vercel angezeigten Einträge setzen. Bestehende E-Mail-Einträge erhalten. Eine Hauptadresse auswählen, beispielsweise mit oder ohne www, und die andere darauf weiterleiten. HTTPS ist die verschlüsselte Verbindung; das Zertifikat muss für alle verwendeten Hostnamen gültig sein. Domainkosten hängen von vorhandener Domain und Verlängerungstarif ab und sind noch nicht ermittelt.

  **Erfolg erkennbar:** Die Hauptdomain ist verschlüsselt erreichbar, die alternative Adresse leitet korrekt weiter und der E-Mail-Empfang funktioniert weiterhin. DNS-Änderungen können bis zur weltweiten Sichtbarkeit etwa einen Tag oder länger benötigen.

## 4. Auffindbarkeit und finale Abnahme

- [ ] 🤖 **Metadaten und Suchmaschinen-Grundlagen ergänzen — ca. 1 Stunde.** Titel, Beschreibung, Sprachseiten und Favicon existieren. Es fehlen insbesondere eine an der Hauptdomain ausgerichtete Basis-URL, eindeutige Hauptadressen pro Sprachseite, Sitemap, robots.txt und ein Vorschaubild für geteilte Links. Eine Sitemap listet Suchmaschinen die veröffentlichten Seiten auf; robots.txt steuert Crawling und ist kein Zugriffsschutz.

  > Ergänze nach Festlegung der Produktionsdomain metadataBase, selbstreferenzierende Canonical-URLs für /de und /en, konsistente Sprachalternativen, sitemap.xml, robots.txt und ein Open-Graph-Vorschaubild mit sprachlich passenden Titeln. Stelle sicher, dass Produktion indexierbar ist und Vorschauen nicht als Hauptadresse in Suchmaschinen landen.

  **Erfolg erkennbar:** Beide Sprachseiten nennen die richtige Hauptdomain und Sprache, Sitemap und robots.txt sind erreichbar und eine geteilte URL zeigt Titel, Beschreibung und Vorschaubild der Website.

- [ ] 🤝 **Öffentliche Version als Interessent testen und dann freigeben — ca. 45–60 Minuten.** Erst Vorschau abnehmen, anschließend PR mergen bzw. Produktion veröffentlichen und denselben Ablauf auf der echten Domain wiederholen. Deutsch öffnen → Pakete lesen → Anfrage starten → Testmail senden → Englisch prüfen → Rechtstexte öffnen. Zusätzlich auf einem echten Smartphone und per Tastatur prüfen. Links, Anker, 404-Seite, Weiterleitungen, Ladezeit und Browserfehler kontrollieren. Bei einem Fehler zur vorherigen funktionierenden Veröffentlichung zurückkehren.

  **Erfolg erkennbar:** Ein Interessent kann von der echten Domain aus Kontakt aufnehmen, und du erhältst die Anfrage. Beide Sprachversionen, Rechtstexte und Weiterleitungen funktionieren ohne fehlerhafte Links oder Platzhalter.

## 5. Nach dem Launch

- [ ] 🤝 **Erreichbarkeit und Anfragen kontrollieren — ca. 20–30 Minuten Einrichtung, danach wöchentlich.** Zum Start bestehende Hosting-Logs, eine einfache Erreichbarkeitsprüfung und das Geschäftspostfach nutzen. Im Hosting-Dashboard befinden sich Deployments und Logs; dort lässt sich bei Fehlern die letzte funktionierende Veröffentlichung wieder aktivieren. Eine Datenbanksicherung ist aktuell nicht erforderlich, weil keine Datenbank existiert. Quellcode liegt in Git; Geschäftsmails bleiben nach dem Sicherungsmodell des Mailanbieters zu sichern. Analytics und Newsletter erst ergänzen, wenn daraus konkrete Entscheidungen entstehen.

  **Erfolg erkennbar:** Zuständigkeit und Benachrichtigungsadresse für Ausfälle stehen fest, Testanfragen kommen an und der Rückweg zur vorherigen Veröffentlichung ist bekannt.

## Optional nach dem Erstlaunch

Ein echtes Foto, ein freigegebenes anonymisiertes Projektbeispiel, strukturierte Daten, Search-Console-Anbindung und datensparsame Erfolgsmessung können Vertrauen und Auffindbarkeit verbessern. Sie blockieren den einfachen Erstlaunch nicht. Zahlen zu Einsparungen, Verfügbarkeit oder Kundenerfolgen nur mit belastbaren Nachweisen veröffentlichen.

## Kosten und offene Entscheidungen

Für den beschriebenen Weg: Vercel Pro ab 20 USD/Monat, gegebenenfalls zusätzliche Nutzung, Sitze und Steuern; Domain und Geschäftspostfach je nach bestehenden Verträgen. Kein neues Datenbank-, Zahlungs-, Kalender- oder E-Mail-API-Abonnement für den beschriebenen E-Mail-Start erforderlich. Offen sind Domain und vorhandenes Hosting-Konto. Unternehmenssitz und Geschäftsadresse in Herrenberg sowie hello@cardellino.tech bei united-domains sind bestätigt. Deshalb ist eine vollständige monatliche Gesamtsumme noch nicht belastbar.

## Quellen

- [Vercel-Preise](https://vercel.com/pricing) und [Hobby-Nutzungsrahmen](https://vercel.com/docs/plans/hobby), geprüft am 5. November 2026.
- [§ 5 DDG bei deutschem Unternehmenssitz](https://www.gesetze-im-internet.de/ddg/__5.html).
- [DSGVO, insbesondere Informationspflichten nach Artikel 13](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679).
- Paketprüfung: `npm audit --omit=dev --json` am 5. November 2026. Die genaue Ausnutzbarkeit hängt von verwendeten Funktionen und Hosting ab; die Meldungen wurden in diesem Audit noch nicht einzeln reproduziert.
