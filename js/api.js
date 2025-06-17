export async function getQuote() {
    try {
      const response = await fetch('https://zenquotes.io/api/random');
      const data = await response.json();
      return data[0]; // { q: "quote", a: "author" }
    } catch (error) {
      console.error('Quote fetch failed:', error);
      return { q: "Stay strong and shine.", a: "DailyGlow" };
    }
  }
  