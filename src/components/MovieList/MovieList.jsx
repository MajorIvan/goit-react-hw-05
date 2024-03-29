import { Link } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MoviesList({ movies, state }) {
  return (
    <ul className={css.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={css.title}>
          <Link to={`/movies/${movie.id}`} state={state}>
            {movie.title} ({movie.release_date.split("-")[0]})
          </Link>
        </li>
      ))}
    </ul>
  );
}
