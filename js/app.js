import { getAllEntries } from './storage.mjs';
import { getQuote } from './api.mjs';
import { renderQuote } from '../components/quoteCard.js';

document.addEventListener('DOMContentLoaded', async () => {
  // Quote
  const quoteCard = document.getElementById("quote-card");
  if (quoteCard) {
    const quote = await getQuote();
    renderQuote(quote);
  }

  // Dashboard Data
  const entries = getAllEntries();
  const today = new Date().toISOString().split("T")[0];
  const entry = entries[today];

  if (entry) {
    document.getElementById("water-today").textContent = entry.water + ' glasses';
    document.getElementById("sleep-today").textContent = entry.sleep + ' hrs';
    document.getElementById("exercise-today").textContent = entry.steps > 0 ? `${entry.steps} steps` : "No steps";
  }

  // Mini chart
  const dates = Object.keys(entries).sort().slice(-7);
  const sleep = dates.map(d => entries[d].sleep || 0);

  const ctx = document.getElementById('miniChart')?.getContext('2d');
  if (ctx) {
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: dates,
        datasets: [{
          label: 'Sleep (hrs)',
          data: sleep,
          fill: true,
          borderColor: '#4caf50',
          tension: 0.3
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          title: { display: false }
        },
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  }

  // Hamburger menu
  const toggleBtn = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");
  if (toggleBtn && nav) {
    toggleBtn.addEventListener("click", () => {
      nav.classList.toggle("nav-collapsed");
    });
  }
});

import { handleForm } from './tracker.mjs';

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("daily-form")) {
    handleForm();
  }
});
