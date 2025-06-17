import { getQuote } from './api.js';
import { renderQuote } from '../components/quoteCard.js';

document.addEventListener('DOMContentLoaded', async () => {
  const quote = await getQuote();
  renderQuote(quote);
});
