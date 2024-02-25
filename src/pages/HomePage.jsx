import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getTrendingMovies } from "../api";
import ErrorMessage from "../components/ErrorMessage";
import MovieList from "../components/MovieList/MovieList";

export default function HomePage() {
  const [trendings, setTrendings] = useState([]);
  const [error, setError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        setError(false);
        const fetchTrendingMovies = await getTrendingMovies({
          abortController: controller,
        });
        setTrendings(fetchTrendingMovies);
      } catch (error) {
        if (error.code !== "ERR_CANCELED") {
          setError(true);
        }
      }
    }
    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {error && <ErrorMessage />}
      {trendings.length > 0 && (
        <MovieList movies={trendings} state={location} />
      )}
    </div>
  );
}
