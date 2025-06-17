import { getAllEntries, deleteEntry } from './storage.mjs';

function renderHistory(entries) {
  const list = document.getElementById('history-list');
  list.innerHTML = '';
  const dates = Object.keys(entries).sort().reverse();

  dates.forEach(date => {
    const entry = entries[date];
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${date}</strong><br/>
      Mood: ${entry.mood} | Water: ${entry.water} glasses | Sleep: ${entry.sleep} hrs | Steps: ${entry.steps}
      <br/><button data-date="${date}" class="delete-btn">🗑️ Delete</button>
    `;
    list.appendChild(li);
  });

  document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const date = btn.getAttribute('data-date');
      deleteEntry(date);
      applyFilters(); // re-render
    });
  });
}

function applyFilters() {
  const all = getAllEntries();
  const mood = document.getElementById('moodFilter').value;
  const date = document.getElementById('dateFilter').value;

  const filtered = Object.fromEntries(
    Object.entries(all).filter(([entryDate, entry]) => {
      const moodMatch = mood === 'all' || entry.mood === mood;
      const dateMatch = !date || entryDate === date;
      return moodMatch && dateMatch;
    })
  );

  renderHistory(filtered);
}

document.getElementById('moodFilter').addEventListener('change', applyFilters);
document.getElementById('dateFilter').addEventListener('change', applyFilters);

// Initial render
applyFilters();
