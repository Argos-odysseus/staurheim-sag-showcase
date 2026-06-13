# Staurheim Sag og Hovleri static redesign

Static concept site for Staurheim Sag og Hovleri, built for GitHub Pages.

## Current-site coverage

- Existing pages represented: `Hjem`, `Tjenester`, `Kontakt`.
- Existing content represented: slogan, phone CTA, konstruksjonsvirke up to 9 m, panel/kledning/villmarkspanel, laft/laftetommer up to 9 m, leieskjaering, sagflis/biprodukter with delivery in Telemark, contact form fields.
- Static limitation: the original Brandcrowd contact form appears to submit via a hosted backend and reCAPTCHA. This static demo does not transmit form data; it creates a copyable request summary and preserves the phone CTA.
- Social links: replaced generic Facebook/Instagram/X placeholders with a public Instagram profile link found in search results.

## Research notes

- Original site: https://staurheimsag.no/
- Public business listing: https://www.proff.no/selskap/staurheim-stokk-og-sag/b%C3%B8-i-telemark/bygg-og-anleggsleverand%C3%B8rer/IF8BD2L0CVG
- Instagram profile / current social presence: https://www.instagram.com/staurheimsag/
- Local sawmill competitor pattern: Slaatto Sag leads with terrace offers, local production, exterior cladding, product paths and offer CTAs: https://slaatto-sag.no/
- Norwegian building-material chain pattern: Byggtorget emphasizes local stores, broad assortment and project help: https://www.byggtorget.no/
- Product/category expectations: Byggmakker and Neumann expose common trelast categories such as impregnated construction timber, kledning and terrace use cases: https://www.byggmakker.no/ and https://www.neumann.no/no-no/catalogue/trelast
- Construction timber documentation: Treteknisk describes konstruksjonsvirke as strength-sorted timber used for bjelkelag, takbjelker, taksperrer and stendere: https://www.treteknisk.no/resources/6.-publikasjoner/1.-fokus-pa-tre/Fokus-nr-43.pdf
- CE/documentation trust signal: Treteknisk and Norsk Trelastkontroll explain CE/NS marking and product documentation for construction timber: https://www.treteknisk.no/tjenester/sertifisering-og-kontrollordninger/sertifisering/ce-merking/generelt-om-ce-merking and https://www.trelastkontrollen.no/ce-merke
- Sustainability positioning: Treteknisk and Forskningsradet describe timber's low production energy, CO2 storage and potential to replace higher-emission materials: https://www.treteknisk.no/resources/6.-publikasjoner/1.-fokus-pa-tre/Fokus-nr-8.pdf and https://www.forskningsradet.no/suksesshistorier/forskningsorganisasjoner/smart-bruk-av-tre-kan-kutte-store-utslipp/

## Verification

- Local static server: `python3 -m http.server 4173`
- HTML/CSS/JS smoke checks via browser at desktop and mobile widths.
- Link crawl: internal pages, image assets, CSS and JS checked with a local script.
- Form smoke test: generated/copyable request summary tested in browser.

## Files

- `index.html`
- `tjenester/index.html`
- `kontakt/index.html`
- `assets/styles.css`
- `assets/app.js`
- `assets/images/*.jpg`
