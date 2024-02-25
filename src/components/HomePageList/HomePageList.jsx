import { Link } from "react-router-dom";
import css from "./HomePageList.module.css";

export default function HomePageList({ movies, state }) {
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
