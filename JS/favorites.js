window.onload = function() {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const container = document.getElementById("favorites-container");

  if (favorites.length === 0) {
    container.innerHTML = "<p class='empty-message'>No movies in favorites </p>";
    return;
  }

  renderFavorites(favorites);

  const searchInput = document.getElementById("searchInput");
  const noResults = document.getElementById("noResults");

  searchInput.addEventListener("keyup", function () {
    let filter = searchInput.value.toLowerCase();
    let filtered = favorites.filter(movie => movie.title.toLowerCase().includes(filter));
    container.innerHTML = ""; 
    if (filtered.length === 0) {
      noResults.style.display = "block";
    } else {
      noResults.style.display = "none";
      renderFavorites(filtered);
    }
  });
};
function renderFavorites(list) {
  const container = document.getElementById("favorites-container");
  container.innerHTML = "";
  list.forEach((movie, index) => {
    const card = document.createElement("div");
    card.classList.add("favorites-card");
    card.innerHTML = `
      <div class="img-wrapper">
        <a href="movie.html?title=${encodeURIComponent(movie.title)}&from=favorites" class="movie-link">
          <img src="${movie.img}" alt="${movie.title}">
          <h3 class="h">${movie.title}</h3>
        </a>
        <button class="delete-btn" onclick="removeFavorite(${index})">❌</button>
      </div>
    `;
    container.appendChild(card);
  });
}

function removeFavorite(index) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  favorites.splice(index, 1);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  location.reload();
}
document.querySelector(".save-btn").addEventListener("click", () => {
  const title = document.getElementById("movieTitle").textContent;
  const desc = document.getElementById("movieDesc").textContent;
  const img = document.getElementById("movieImg").src;
  const genre = params.get("genre"); // خزن النوع كمان

  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  if (!favorites.some(movie => movie.title === title)) {
    favorites.push({ title, desc, img, genre });
    localStorage.setItem("favorites", JSON.stringify(favorites));
    alert("The movie has been saved to favorites ❤️");
  } else {
    alert("The movie is already in my favorites");
  }
});

