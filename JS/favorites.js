window.onload = function() {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const container = document.getElementById("favorites-container");

  if (favorites.length === 0) {
    container.innerHTML = "<p class='empty-message'>No movies in favorites </p>";
    return;
  }

  favorites.forEach((movie, index) => {
    const card = document.createElement("div");
    card.classList.add("favorites-card");
    card.innerHTML = `
      <a href="movie.html?title=${encodeURIComponent(movie.title)}&from=favorites" class="movie-link">
        <img src="${movie.img}" alt="${movie.title}">
        <h3 class="h">${movie.title}</h3>
      </a>
      <button onclick="removeFavorite(${index})">Delete ❌</button>
    `;
    container.appendChild(card);
  });
};

function removeFavorite(index) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  favorites.splice(index, 1);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  location.reload();
}
