// Main elements
const box = document.querySelector(".fade-in-box");
const form = document.querySelector("form");
const input = document.querySelector("#search");

// Movie info elements
let title = document.querySelector(".movie-title");
let poster = document.querySelector(".movie-poster");
let plot = document.querySelector(".movie-plot");
let rating = document.querySelector(".movie-rating");
let country = document.querySelector(".movie-country");
let language = document.querySelector(".movie-language");
let genre = document.querySelector(".movie-genre");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  box.classList.remove("show");
  const query = input.value;
  fetchMovieData(query);
  input.value = "";
});

const fetchMovieData = async (query) => {
  if (query === "") {
    return;
  } else {
    const response = await fetch(`/api/movie?title=${query}`);
    const data = await response.json();
    if (data) {
      processData(data);
    } else {
      console.log("Error occurred");
    }
  }
};

const processData = (data) => {
  const { Title, Year, Poster, imdbRating, Plot, Country, Genre, Language } =
    data;
  title.innerText = `${Title} (${Year})`;
  poster.src = Poster;
  plot.innerText = Plot;
  rating.innerText = `★  ${imdbRating} / 10 (imdb)`;

  country.innerText = `Country: ${Country}`;
  language.innerText = `Language: ${Language}`;
  genre.innerText = `Genre: ${Genre}`;
  box.classList.add("show");
};
