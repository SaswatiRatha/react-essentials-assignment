export default function MovieCard({ movie, addFaviorite }) {
  return (
    <div className="movie-content">
      <div className="first-row">
        <h3 className="movie-name">
          {movie.name}
          <span className="details">
            {movie.year} · {movie.genre}
          </span>
        </h3>

        <div className="second-row">
          <span
            className={`ratings ${
              movie.ratings > 8.5
                ? "high-rating"
                : movie.ratings >= 7.0
                  ? "medium-rating"
                  : "low-rating"
            }`}
          >
            {movie.ratings}
          </span>
          <span className="main-theme">{movie.mainTheme}</span>
          <span className="other-themes">{movie.otherThemes.join(" · ")}</span>
        </div>
      </div>
      <button className={`faviorite-btn ${movie.isFavorite ? "fav" : ""}`} onClick={() => addFaviorite(movie.id)}>
        ♡ {movie.isFavorite ? `Favorited` : `Favorite`}
      </button>
    </div>
  );
}
