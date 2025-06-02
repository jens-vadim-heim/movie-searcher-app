# Movie searcher app 🎬🍿

[![Live Demo](https://img.shields.io/badge/Demo-Live-green?style=for-the-badge)](https://movie-searcher-app-amber.vercel.app)

A simple web application that fetches movie data and displays movie information to the user.

## Stack

- HTML, CSS, JavaScript (vanilla)
- Fetch API
- OMDB API
- Vercel for hosting (incl. use of serverless function)
- FontAwesome for magnifying glass icon

## Features

- **Search movies** by title
- On search: **Display** movie poster, title, year, plot, IMDb rating, country, language, and genre
- Smooth **fade-in effect** for results

## How it works

- User types a movie title in the search input
- On form submit, JavaScript fetches movie data from the OMDB API
- The app displays the returned movie details dynamically

## Future plans

- **Handle and display error messages to the user for invalid searches**
- Enhance UI with animations and better responsiveness (e.g. loading indicators during fetch)
- Add more movie metadata (e.g., director, cast)
- Implement search suggestions/autocomplete
