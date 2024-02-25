import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviewsByID } from "../../api";
import ErrorMessage from "../ErrorMessage";

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    async function fetchData() {
      try {
        setError(false);
        const fetchedMovieReviews = await getMovieReviewsByID(movieId);
        setReviews(fetchedMovieReviews);
      } catch (error) {
        setError(true);
      }
    }

    fetchData();
  }, [movieId]);

  return (
    <div>
      {error && <ErrorMessage />}
      {reviews.length > 0 && (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <div>
                <h4>Author: {review.author}</h4>
                <p>{review.content}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
      {!reviews.length && <p>We don&apos;t have any reviews for this movie</p>}
    </div>
  );
}
