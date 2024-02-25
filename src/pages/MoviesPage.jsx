import { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import ErrorMessage from "../components/ErrorMessage";
import MovieList from "../components/MovieList/MovieList";
import { getMovieByQuery } from "../api";

export default function MoviesPage() {
  const [searched, setSearched] = useState([]);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchMoviesByQuery = searchParams.get("query") ?? "";
  const location = useLocation();

  useEffect(() => {
    const controller = new AbortController();

    if (!searchMoviesByQuery) {
      return;
    }

    async function fetchData() {
      try {
        setError(false);
        const fetchedMovieByQuery = await getMovieByQuery({
          query: searchMoviesByQuery,
          abortController: controller,
        });
        setSearched(fetchedMovieByQuery);
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
  }, [searchMoviesByQuery]);

  const handleSearch = (newQuery) => setSearchParams({ query: newQuery });

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage />}
      {searchMoviesByQuery.length > 0 && (
        <MovieList movies={searched} state={location} />
      )}
    </div>
  );
}
