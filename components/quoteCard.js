export function renderQuote(quote) {
  const card = document.getElementById('quote-card');
  card.innerHTML = `<blockquote>"${quote.q}"</blockquote><p>– ${quote.a}</p>`;
}
