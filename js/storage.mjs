export function saveEntry(entry) {
  const allEntries = JSON.parse(localStorage.getItem('dailyEntries')) || {};
  allEntries[entry.date] = entry;
  localStorage.setItem('dailyEntries', JSON.stringify(allEntries));
}

export function getAllEntries() {
  return JSON.parse(localStorage.getItem('dailyEntries')) || {};
}

export function deleteEntry(date) {
  const entries = JSON.parse(localStorage.getItem('dailyEntries')) || {};
  delete entries[date];
  localStorage.setItem('dailyEntries', JSON.stringify(entries));
}
