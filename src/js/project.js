const apiKey = import.meta.env.VITE_API_KEY;

function displayMovies(movies) {
  const moviesContainer = document.querySelector("#movies-container");
  // Clear previous content
  moviesContainer.innerHTML = "";

  movies.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");

    const posterUrl = movie.poster_path
      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
      : "images/img_not_found.jpg";

    movieCard.innerHTML = `
            <img src="${posterUrl}" alt="${movie.vote_average}">
            <h3>${movie.title}</h3>
            <p>Release Date: ${movie.release_date}</p>
        `;

    moviesContainer.appendChild(movieCard);

    const imgElement = movieCard.querySelector("img");
    imgElement.addEventListener("mouseover", () => {
      imgElement.setAttribute("title", `Average Score: ${movie.vote_average}`);
    });
  });
}

async function fetchPopularMovies() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`,
    );
    const data = await response.json();
    displayMovies(data.results);
  } catch (error) {
    console.error(`Error fetching popular movies: ${error}`);
  }
}

async function searchMovies() {
  const query = document.querySelector("#searchInput").value;
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`,
    );
    const data = await response.json();
    console.log(`Search movies: ${data.results}`);
    displayMovies(data.results);
  } catch (error) {
    console.error(`Error Searching movies: ${error}`);
  }
}

async function fetchByGenreMovies() {
  const genreSelect = document.querySelector("#genreFilter");
  const selectedGenreId = genreSelect.value;
  if (!selectedGenreId) {
    console.error("Please select a genre.");
    return;
  }
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${selectedGenreId}`,
    );
    const data = await response.json();
    displayMovies(data.results);
  } catch (error) {
    console.error(`Error fetching movies by genre: ${error}`);
  }
}

async function fetchTopRatedMovies() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`,
    );
    const data = await response.json();
    console.log(`Top Rated Movies: ", ${data.results}`);
    displayMovies(data.results);
  } catch (error) {
    console.error(`Error fetching top rated movies: ${error}`);
  }
}

// call:
fetchPopularMovies();

document.getElementById("searchButton").addEventListener("click", searchMovies);
document
  .getElementById("byGenreButton")
  .addEventListener("click", fetchByGenreMovies);
document
  .getElementById("topRatedButton")
  .addEventListener("click", fetchTopRatedMovies);
