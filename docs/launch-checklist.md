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

## 3. Hosting und Domain — separater PR

Der Nutzer hat den Hostingweg aus dem DKF-Projekt gewählt: Hetzner-VPS mit Docker, Nginx auf dem Host und certbot/Let's Encrypt. Die erfolgreichen Vercel-PR-Vorschauen sind keine Entscheidung für den Produktionsanbieter. Die Umsetzung und Veröffentlichung bleiben ausdrücklich einem separaten Hosting-PR vorbehalten.

- [ ] 🤝 **Hetzner-Betrieb und Deployment vorbereiten — ca. 1–2 Stunden.** Im Hetzner-Konto den vorgesehenen Server und dessen Standort prüfen und einen zur Verarbeitung passenden AV-Vertrag kontrollieren bzw. abschließen. GitHub Actions soll ein Containerimage über GHCR bereitstellen; GHCR ist die GitHub-Ablage für Containerimages. Die App läuft hinter dem vorhandenen Nginx und ist nur lokal auf dem Server erreichbar. Serverzugriff, Containername, Port und Dateipfade müssen von bestehenden Anwendungen getrennt sein. Für diese Website ist keine Datenbank nötig. Kosten ergeben sich aus dem tatsächlichen Serververtrag; es wird kein zusätzlicher Server ohne Entscheidung bestellt.

  **Erfolg erkennbar:** Das geprüfte Image startet isoliert, bestehende Websites bleiben funktionsfähig und ein Rückweg auf das vorherige Image ist dokumentiert. Die Datenflüsse und Log-Löschfristen aus `docs/contact-and-legal.md` sind festgelegt und technisch umgesetzt.

- [ ] 🤝 **Domain, HTTPS und Veröffentlichung verbinden — ca. 30–60 Minuten plus DNS-Wartezeit.** Beim Domainanbieter die vorhandenen A-/AAAA-Einträge prüfen und gezielt auf den vorgesehenen Server leiten. DNS ist das Adressbuch, das die Domain zum Server führt. Bestehende E-Mail-Einträge erhalten. Nginx erhält einen eigenen Server-Block für die Hauptdomain und eine Weiterleitung für die alternative Adresse mit bzw. ohne www. HTTPS ist die verschlüsselte Verbindung; die Zertifikate werden über certbot/Let's Encrypt verwaltet. Im GitHub-Repository die Deploy-Zugänge direkt in den geschützten Einstellungen hinterlegen, niemals im Quellcode oder Chat. Vor dem Merge prüfen, ob die noch bestehende Vercel-Verbindung automatisch Produktion veröffentlichen würde; eine Umstellung wird separat freigegeben.

  **Erfolg erkennbar:** Die Hauptdomain ist verschlüsselt erreichbar, Weiterleitungen und E-Mail-Empfang funktionieren und die Datenschutzhinweise stimmen mit dem tatsächlichen Betrieb überein. DNS-Änderungen können bis zur weltweiten Sichtbarkeit etwa einen Tag oder länger benötigen.

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

Für den beschriebenen Weg gelten die Kosten des gewählten bzw. vorhandenen Hetzner-Servers sowie Domain und Geschäftspostfach nach bestehenden Verträgen. Die genaue Serverwahl und damit zusätzliche monatliche Kosten sind noch nicht bestätigt. Kein neues Datenbank-, Zahlungs-, Kalender- oder E-Mail-API-Abonnement ist für den E-Mail-Anfrageweg erforderlich. Die Geschäftsadresse in Herrenberg und hello@cardellino.tech bei united-domains sind bestätigt.

## Quellen

- [Hetzner: Datenschutz und Auftragsverarbeitung](https://docs.hetzner.com/de/general/company-and-policy/data-protection-at-hetzner/); Hostingreferenz des Nutzers: DKF-Repository.
- [§ 5 DDG bei deutschem Unternehmenssitz](https://www.gesetze-im-internet.de/ddg/__5.html).
- [DSGVO, insbesondere Informationspflichten nach Artikel 13](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679).
- Paketprüfung: `npm audit --omit=dev --json` am 5. November 2026. Die genaue Ausnutzbarkeit hängt von verwendeten Funktionen und Hosting ab; die Meldungen wurden in diesem Audit noch nicht einzeln reproduziert.
