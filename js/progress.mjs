import { getAllEntries } from './storage.mjs';
import { renderProgressChart } from '../components/chartComponent.js';

document.addEventListener('DOMContentLoaded', () => {
  const entries = getAllEntries();
  const sortedDates = Object.keys(entries).sort().slice(-7); // last 7 days
  const water = sortedDates.map(d => entries[d].water || 0);
  const sleep = sortedDates.map(d => entries[d].sleep || 0);
  const steps = sortedDates.map(d => entries[d].steps || 0);

  renderProgressChart(sortedDates, water, sleep, steps);
});

const toggleBtn = document.getElementById("menu-toggle");
const nav = document.getElementById("main-nav");

if (toggleBtn && nav) {
  toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("nav-collapsed");
  });
}
