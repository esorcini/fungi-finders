const cards = document.querySelectorAll(".mushroom-guide .card");
const seasonFilter = document.querySelector("#season");
const edibleFilter = document.querySelector("#edible");
const noMatchesMsg = document.querySelector(".no-matches");

const currentFilters = {
  season: "all",
  edible: "all",
};

let visibleCards = 0;

// Enable filters if JS is enabled
function enableFilters() {
  seasonFilter.hidden = false;
  edibleFilter.hidden = false;
}
enableFilters();

seasonFilter.addEventListener("change", updateFilter);
edibleFilter.addEventListener("change", updateFilter);

function updateFilter(e) {
  visibleCards = 0;
  currentFilters[e.target.name] = e.target.value;

  filterCards();

  visibleCards === 0
    ? (noMatchesMsg.hidden = false)
    : (noMatchesMsg.hidden = true);
}

function filterCards() {
  cards.forEach((card) => {
    const seasonTag = card.querySelector("[data-season]").dataset.season;
    const edibleTag = card.querySelector("[data-edible]").dataset.edible;

    const matchesSeason = seasonTag === currentFilters.season;
    const matchesEdible = edibleTag === currentFilters.edible;

    if (
      (matchesSeason || currentFilters.season === "all") &&
      (matchesEdible || currentFilters.edible === "all")
    ) {
      card.hidden = false;
      visibleCards++;
    } else {
      card.hidden = true;
    }
  });
}
