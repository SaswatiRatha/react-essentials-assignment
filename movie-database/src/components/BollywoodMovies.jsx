import MovieCard from "./MovieCard";
import searchIcon from "../assets/search.png";

export default function BollywoodMovies({ movies, handleChange, addFaviorite, favioriteMovies, clearSearch, input, resetMovies }) {
  return (
    <div>
      <h1>Movie explorer</h1>
      <div className="search-wrapper">
        <div className="search-box">
          <span className="search-icon">
            <img src={searchIcon} alt="search" />
          </span>

          <input
            type="text"
            className="search-input"
            value={input}
            placeholder='Search movies (e.g. "Interstellar", "Star")'
            onChange={handleChange}
          />

          <button className="clear-btn" onClick={clearSearch}>X</button>
        </div>

        <button className="reset-btn" onClick={resetMovies}>⟳ Reset</button>
      </div>
      {input.length!==0 ? <h4>{`${movies.length} results for "${input}"`}</h4> : ''}
      <div className="movie-container">
        <div className="display-movie">
            <h2 className="heading">{input.length!==0 ? `Matching Movies` : `All Movies`}</h2>
            {movies.length!==0? movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} addFaviorite={addFaviorite} />
            )) : `No movies found`}
            
        </div>

        <div className="faviorite-movie">
            <h2 className="heading">Faviorite Movies</h2>
            {favioriteMovies.length!==0 ? <div className="fav-movie-list">
                {favioriteMovies.map((movie) => (
                <span key={movie.id} className="favCapsule">♡ {movie.name} ({movie.year})</span>
                ))}
            </div> : `You haven't added any faviorites yet.`}
            
        </div>
      </div>
    </div>
  );
}
