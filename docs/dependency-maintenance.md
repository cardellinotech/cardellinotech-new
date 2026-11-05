# Abhängigkeiten: Aktualisierung vor dem Launch

Stand: 5. November 2026.

## Ergebnis

- Next.js 15.5.18 → 16.4.5; passende ESLint-Konfiguration ebenfalls 16.4.5.
- React und React DOM 19.2.4 → 19.3.1, Lucide React 1.15.0 → 1.69.0.
- TypeScript und Typdefinitionen auf kompatible aktuelle Versionen aktualisiert. Node.js >=22.18 ist für die verwendeten Tests mit nativer TypeScript-Unterstützung dokumentiert.
- Ungenutzte UI-, Formular-, Mail-, Validierungs-, Tracking- und Tailwind-Abhängigkeiten entfernt. Das Design verwendet bereits normales CSS; die nicht mehr benötigte Tailwind-PostCSS-Konfiguration entfällt.
- Eigene node_modules-Installation im Worktree ersetzt den bisherigen Verweis auf den ursprünglichen Checkout. Installationen verändern diesen nicht mehr.
- Reproduzierbare Versionen stehen in package-lock.json. Bei einer frischen Installation `npm ci` verwenden.

Der anfängliche Produktions-Audit meldete sechs betroffene Pakete (fünf hoch, eines kritisch). Nach Bereinigung und Aktualisierung meldet der vollständige Audit einschließlich der Entwicklungsabhängigkeiten **0 bekannte Schwachstellen**. Das ist ein Ergebnis der aktuellen Advisory-Datenbank, keine Zusicherung, dass jede denkbare Sicherheitslücke ausgeschlossen ist.

## Gezielter Entwicklungs-Override

`@typescript-eslint/typescript-estree` 8.72.1 verwendet minimatch 10, für das GHSA-g3hv-75wg-m249 gemeldet wird. Ein auf diesen Verbraucher begrenzter Override verwendet minimatch ^11.0.1. Der Verbraucher nutzt die weiterhin vorhandene CommonJS-Funktion `minimatch(filePath, pattern, { dot: true })`; die Export-Kompatibilität und der gesamte Lintlauf wurden geprüft. Den Override entfernen, sobald die upstream-Version eine behobene minimatch-Version nutzt.

ESLint bleibt auf dem neuesten kompatiblen 9er-Zweig: Die derzeitigen React-, Import- und Accessibility-Plugins der Next.js-Konfiguration deklarieren noch keine ESLint-10-Unterstützung. Es wurden keine Peer-Abhängigkeiten erzwungen oder Sicherheitsmeldungen ausgeblendet.

## Verifikation

- Vier Tests prüfen lokalisierte Mailentwürfe, die Auswahl aller drei Pakete sowie sichere Kodierung von Sonderzeichen und Unicode.
- `npm run lint`, `npm run build` und `npm run typecheck` erfolgreich.
- Beide Landingpages und vier Rechtstextseiten werden statisch erzeugt.
- Browserprüfung von Kontaktsektion, Footer, Impressum, Datenschutz, Sprachwechsel und mobiler Navigation; keine horizontalen Überläufe bei 320 px und keine Browserfehler.
- HTTP-Prüfung aller sechs Seiten, Weiterleitung, ungültiger Sprachen und der nicht vorhandenen Kontakt-API. Es wurde keine E-Mail versendet.

## Primärquellen

- [Next.js Upgrade-Dokumentation](https://nextjs.org/docs/app/guides/upgrading/version-16)
- Offizielle npm-Paketmetadaten und `npm audit` für die tatsächlich installierte Lockdatei.
- [minimatch Advisory GHSA-g3hv-75wg-m249](https://github.com/advisories/GHSA-g3hv-75wg-m249)
