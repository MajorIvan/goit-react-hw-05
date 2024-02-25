import { Link } from "react-router-dom";
import css from "./MoviesPageList.module.css";

export default function MoviesPageList({ movies, state }) {
  return (
    <ul className={css.list}>
      {movies.map((movie) => (
        <Link key={movie.id} to={`/movies/${movie.id}`} state={state}>
          <li className={css.title}>{movie.title}</li>
        </Link>
      ))}
    </ul>
  );
}
