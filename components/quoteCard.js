export function renderQuote(quoteObj) {
    const quoteCard = document.getElementById('quote-card');
    quoteCard.innerHTML = `
      <blockquote>"${quoteObj.q}"</blockquote>
      <p>– ${quoteObj.a}</p>
    `;
  }
  