export function renderProgressChart(dates, water, sleep, steps) {
  const ctx = document.getElementById('progressChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: dates,
      datasets: [
        {
          label: 'Water (glasses)',
          data: water,
          backgroundColor: 'rgba(54, 162, 235, 0.6)'
        },
        {
          label: 'Sleep (hrs)',
          data: sleep,
          backgroundColor: 'rgba(255, 206, 86, 0.6)'
        },
        {
          label: 'Steps',
          data: steps,
          backgroundColor: 'rgba(75, 192, 192, 0.6)'
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top'
        },
        title: {
          display: true,
          text: 'Your Last 7 Days'
        }
      }
    }
  });
}
