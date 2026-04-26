fetch("games.json")
  .then(response => response.json())
  .then(data => {
    const container = document.querySelector(".games");
    if (!container) return;

    container.innerHTML = data.map(game => `
      <div class="card">
        <img src="${game.image}" alt="${game.name}">
        <h3>${game.name}</h3>
        <p>${game.description}</p>
        <button onclick="window.location.href='game-page.html?game=${game.key}'">View Details</button>
      </div>
    `).join("\n");
  })
  .catch(() => {
    const container = document.querySelector(".games");
    if (container) {
      container.innerHTML = "<p>Unable to load games. Please check games.json.</p>";
    }
  });

function downloadGame(link) {
  window.open(link, "_blank");
  setTimeout(() => {
    alert("Download started!");
  }, 2000);
}
