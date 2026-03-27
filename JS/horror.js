const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".horror-card");
const noResults = document.getElementById("noResults");

searchInput.addEventListener("keyup", function () {
    let filter = searchInput.value.toLowerCase();
    let found = false;

    cards.forEach(card => {
        let title = card.querySelector("h3").textContent.toLowerCase();

        if (title.includes(filter)) {
            card.style.display = "block";
            found = true;
        } else {
            card.style.display = "none";
        }
    });
    if (!found) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }
});
