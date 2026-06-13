const products = [
  { name: "Konstruksjonsvirke", group: "bærende", size: "C24, grove dimensjoner", note: "Stendere, bjelkelag, sperrer og takverk. Kan planlegges opp til 9 meter." },
  { name: "Panel og kledning", group: "overflate", size: "Profiler etter avtale", note: "Innvendig panel, utvendig kledning og villmarkspanel." },
  { name: "Laftetømmer", group: "spesial", size: "Opp til 9 meter", note: "Til laft, takaser, restaurering og synlige konstruksjoner." },
  { name: "Leieskjæring", group: "spesial", size: "Etter stokk og behov", note: "Skjæring og hovling for egne stokker eller spesialmål." },
  { name: "Sagflis", group: "biprodukt", size: "Levering i Telemark", note: "Rent biprodukt fra sagbruket, egnet til fjøs, stall og dekke." }
];

const catalog = document.querySelector("[data-catalog]");
const filters = document.querySelectorAll("[data-filter]");

function renderCatalog(group = "alle") {
  if (!catalog) return;
  const rows = products
    .filter((product) => group === "alle" || product.group === group)
    .map((product) => `
      <div class="catalog-row">
        <strong>${product.name}</strong>
        <span>${product.size}</span>
        <small>${product.note}</small>
      </div>
    `)
    .join("");
  catalog.innerHTML = rows;
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((item) => item.setAttribute("aria-pressed", "false"));
    button.setAttribute("aria-pressed", "true");
    renderCatalog(button.dataset.filter);
  });
});

renderCatalog();

const quoteForm = document.querySelector("[data-quote-form]");
const resultBox = document.querySelector("[data-result]");
const copyButton = document.querySelector("[data-copy]");

function quoteSummary(form) {
  const data = new FormData(form);
  const name = data.get("name") || "Ukjent navn";
  const phone = data.get("phone") || "Mangler telefon";
  const project = data.get("project") || "Byggeprosjekt";
  const product = data.get("product") || "Trelast";
  const dimensions = data.get("dimensions") || "Dimensjoner ikke fylt ut";
  const delivery = data.get("delivery") || "Hentes/leveres ikke valgt";
  const message = data.get("message") || "Ingen ekstra notat.";

  return `Foresporsel til Staurheim Sag og Hovleri
Navn: ${name}
Telefon: ${phone}
Prosjekt: ${project}
Produkt: ${product}
Dimensjoner/mengde: ${dimensions}
Henting/levering: ${delivery}
Notat: ${message}`;
}

if (quoteForm && resultBox) {
  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    resultBox.textContent = quoteSummary(quoteForm);
    resultBox.focus();
  });
}

if (copyButton && resultBox) {
  copyButton.addEventListener("click", async () => {
    const text = resultBox.textContent.trim();
    if (!text || text.startsWith("Fyll")) return;
    await navigator.clipboard.writeText(text);
    copyButton.textContent = "Kopiert";
    window.setTimeout(() => {
      copyButton.textContent = "Kopier forespørsel";
    }, 1800);
  });
}
