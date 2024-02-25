import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCreditsByID } from "../../api";
import ErrorMessage from "../ErrorMessage";
import css from "./MovieCast.module.css";

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setError(false);
        const fetchMovieCredits = await getMovieCreditsByID(movieId);
        setCast(fetchMovieCredits);
      } catch (error) {
        setError(true);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <>
      {error && <ErrorMessage />}
      {cast.length > 0 && (
        <ul className={css.list}>
          {cast.map(({ id, name, character, profile_path }) => (
            <li key={id} className={css.item}>
              <img
                className={css.image}
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt={name}
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}{" "}
        </ul>
      )}
      {!cast.length && <p>Sorry, there is no cast info for this movie</p>}
    </>
  );
}
