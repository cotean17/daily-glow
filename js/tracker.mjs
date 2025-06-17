export function handleForm() {
  const form = document.getElementById("daily-form");
  const moodInput = document.getElementById("mood");

  // Mood icon selection
  document.querySelectorAll("#mood-options span").forEach(icon => {
    icon.addEventListener("click", () => {
      document.querySelectorAll("#mood-options span").forEach(i => i.classList.remove("selected"));
      icon.classList.add("selected");
      moodInput.value = icon.dataset.mood;
    });
  });

  // Handle submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const water = parseInt(document.getElementById("water").value) || 0;
    const sleep = parseFloat(document.getElementById("sleep").value) || 0;
    const steps = parseInt(document.getElementById("steps").value) || 0;
    const mood = moodInput.value;

    const today = new Date().toISOString().split("T")[0];

    const stored = JSON.parse(localStorage.getItem("dailyEntries")) || {};
    stored[today] = { water, sleep, steps, mood };

    localStorage.setItem("dailyEntries", JSON.stringify(stored));

    alert("Saved!");
    form.reset();
    moodInput.value = "";
    document.querySelectorAll("#mood-options span").forEach(i => i.classList.remove("selected"));
  });
}
