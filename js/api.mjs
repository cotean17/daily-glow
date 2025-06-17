export async function getQuote() {
  try {
    const proxy = "https://corsproxy.io/?";
    const url = "https://zenquotes.io/api/random";
    const response = await fetch(`${proxy}${encodeURIComponent(url)}`);
    const data = await response.json();
    return data[0]; // { q: "", a: "" }
  } catch (error) {
    console.error("Failed to fetch quote:", error);
    return { q: "Stay strong and shine.", a: "DailyGlow" };
  }
}
