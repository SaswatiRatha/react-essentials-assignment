import { useState } from "react";
import "./App.css";
import BollywoodMovies from "./components/BollywoodMovies";
import { movies } from "./movies";
import darkIcon from "./assets/dark-mode.png";
import lightIcon from "./assets/light-mode.png";

export default function App() {
  const [input, setInput] = useState("");
  const [movieList, setMovieList] = useState(movies);
  const [faviorite, setFaviorite] = useState([]);
  const [isDark, setIsDark] = useState(false);

  function searchMovieFnc(event) {
    setInput(event.target.value);
  }

  const filteredMovies = movieList.filter((movie) => {
    const searchTerm = input.toLowerCase();
    return (
      movie.name.toLowerCase().includes(searchTerm) ||
      movie.genre.toLowerCase().includes(searchTerm) ||
      movie.year.toString().includes(searchTerm) ||
      movie.actors.some((actor) => actor.toLowerCase().includes(searchTerm))
    );
  });

  function addFaviorite(id) {
    setMovieList((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id ? { ...movie, isFavorite: true } : movie,
      ),
    );
    const selectedMovie = movieList.find((movie) => movie.id === id);
    setFaviorite((prev) => {
      const alreadyExists = prev.some((movie) => movie.id === id);
      if (alreadyExists) return prev;
      return [...prev, selectedMovie];
    });
  }

  console.log(faviorite);

  function clearSearch() {
    setInput("");
  }

  function resetMovies() {
    setFaviorite([]);
    setInput("");
  }

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
    document.body.classList.toggle("dark");
  };

  return (
    <div className="app-wrapper">
      <button className="toggleBtn" onClick={toggleTheme}>
        <img
          src={isDark ? darkIcon : lightIcon}
          alt="theme icon"
          className="toggleIcon"
        />
        Toggle theme
      </button>
      <div className="bollywood-movies">
        <BollywoodMovies
          movies={filteredMovies}
          searchMovie={searchMovieFnc}
          handleChange={searchMovieFnc}
          addFaviorite={addFaviorite}
          favioriteMovies={faviorite}
          clearSearch={clearSearch}
          input={input}
          resetMovies={resetMovies}
        />
      </div>
    </div>
  );
}
