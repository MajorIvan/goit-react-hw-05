import { useParams, useLocation, Outlet, Link } from "react-router-dom";
import { useState, useEffect, useRef, Suspense } from "react";
import { getMovieByID } from "../api";
import ErrorMessage from "../components/ErrorMessage";
import css from "./MovieDetailsPage.module.css";
import BackLink from "../components/BackLink/BackLink";
import MovieDetails from "../components/MovieDetails/MovieDetails";

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const [error, setError] = useState(false);
  const location = useLocation();
  const backLinkRef = useRef(location.state);

  useEffect(() => {
    if (!movieId) return;

    async function fetchData() {
      try {
        setError(false);
        const fetchedMovieByID = await getMovieByID(movieId);
        setMovie(fetchedMovieByID);
      } catch (error) {
        if (error.code !== "ERR_CANCELED") {
          setError(true);
        }
      }
    }

    fetchData();
  }, [movieId]);

  return (
    <div>
      <BackLink href={backLinkRef.current ?? "/"}>Go Back</BackLink>
      {error && <ErrorMessage />}
      {movie && <MovieDetails movie={movie} />}
      <div className={css.addInfo}>
        <p>Additional information</p>
        <ul className={css.navlink}>
          <li>
            <Link to="cast" className={css.cast}>
              Movie cast
            </Link>
          </li>
          <li>
            <Link to="reviews" className={css.reviews}>
              Movie reviews
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
}
