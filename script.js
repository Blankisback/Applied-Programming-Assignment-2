const apiKey = "862cccce";

// Elements
const searchInput = document.getElementById("search");
const toggleBtn = document.getElementById("toggle");

const overlay = document.getElementById("searchOverlay");
const closeSearch = document.getElementById("closeSearch");

const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

// Fetch movies
async function fetchMovies(query, containerId) {
  const res = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`);
  const data = await res.json();

  if (data.Response === "True") {
    displayMovies(data.Search, containerId);
  }
}

// Display movies
function displayMovies(movies, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  movies.forEach(movie => {
    if (movie.Poster === "N/A") return;

    const div = document.createElement("div");
    div.classList.add("movie");

    // ✅ Netflix-style card with overlay
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

// Show movie details (modal)
async function showMovieDetails(id) {
  const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`);
  const data = await res.json();

  document.getElementById("modalTitle").innerText = data.Title;
  document.getElementById("modalRuntime").innerText = "Runtime: " + data.Runtime;
  document.getElementById("modalPlot").innerText = data.Plot;

  modal.classList.remove("hidden");
}
 
// Close modal
closeModal.onclick = () => modal.classList.add("hidden");

window.onclick = (e) => {
  if (e.target === modal) modal.classList.add("hidden");
};

// Search overlay
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

// Load default rows
function loadRows() {
  fetchMovies("Avengers", "trending");
  fetchMovies("Batman", "action");
  fetchMovies("Comedy", "comedy");
  fetchMovies("Star Wars", "scifi");
}

// Theme toggle
toggleBtn.onclick = () => {
  document.body.classList.toggle("light");
};

// Init
loadRows();