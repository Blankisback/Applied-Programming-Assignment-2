const apiKey = "862cccce"; // in actual scenarios i would never put my api key here - as this could easily be found by bots - however as this is a free api everyone can access I am leaving it here instead of a gitignore file

// this api key i got for free from OMDB - link is provided at the bottom of the README

const searchInput = document.getElementById("search");
const toggleBtn = document.getElementById("toggle");

const overlay = document.getElementById("searchOverlay");
const closeSearch = document.getElementById("closeSearch");

const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

// FOR CALLING THE API - I USED FREECODECAMP TO LEARN HOW - REFERENCE AT BOTTOM OF README

async function fetchMovies(query, containerId) {
  const res = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`);
  const data = await res.json();

  if (data.Response === "True") {    // if the api call works then the cover images for the movies are loaded
    displayMovies(data.Search, containerId);
  }
}

function displayMovies(movies, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = ""; // clears previous results before loading new ones to prevent results stacking on top of eachother and creating weird overlays

  movies.forEach(movie => {
    if (movie.Poster === "N/A") return; // skips movies that dont have a poster so they arent shown to the user

    const div = document.createElement("div");
    div.classList.add("movie");

    // fetches the title and year and underneath displays them both underneath the movie poster so that the user can easier tell the title of the movie
    div.innerHTML = `
      <div class="movie-card">
        <img src="${movie.Poster}" />

        <div class="movie-overlay">
          <h4>${movie.Title}</h4>
          <p>${movie.Year}</p>
        </div>
      </div>
    `;

    div.onclick = () => showMovieDetails(movie.imdbID);

    container.appendChild(div);
  });
}


async function showMovieDetails(id) {
  const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`);
  const data = await res.json();

  document.getElementById("modalTitle").innerText = data.Title;
  document.getElementById("modalRuntime").innerText = "Runtime: " + data.Runtime;
  document.getElementById("modalPlot").innerText = data.Plot;

  modal.classList.remove("hidden");
}
 
closeModal.onclick = () => modal.classList.add("hidden");

window.onclick = (e) => {
  if (e.target === modal) modal.classList.add("hidden");
};

searchInput.addEventListener("keyup", () => {
  const query = searchInput.value;

  if (query.length < 3) {
    overlay.classList.add("hidden");
    return;
  }

  overlay.classList.remove("hidden");
  fetchMovies(query, "searchResults");
});

closeSearch.onclick = () => overlay.classList.add("hidden");

function loadRows() {
  fetchMovies("Avengers", "trending");
  fetchMovies("Batman", "action");
  fetchMovies("Comedy", "comedy");
  fetchMovies("Star Wars", "scifi");
}

toggleBtn.onclick = () => { // light mode toggle 
  document.body.classList.toggle("light");
};

loadRows();
