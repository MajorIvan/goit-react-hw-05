import css from "./MovieDetails.module.css";

export default function MovieDetails({ movie }) {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const defaultUrl =
    "https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png";
  return (
    <div className={css.container}>
      <img
        className={css.image}
        src={movie.poster_path ? imageUrl : defaultUrl}
        alt={movie.title}
      />
      <div className={css.descriptions}>
        <h3 className={css.title}>
          {movie.original_title} ({movie.release_date.split("-")[0]})
        </h3>
        <p>User Score: {`${Math.round((movie.vote_average / 10) * 100)}%`}</p>
        <h4>Overview</h4>
        <p className={css.overview}>{movie.overview}</p>
        <h4> Genres</h4>
        <p className={css.genres}>
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
      </div>
    </div>
  );
}
