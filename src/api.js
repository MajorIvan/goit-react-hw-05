import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.method = "GET";
axios.defaults.language = "en-US";
axios.defaults.headers.accept = "application/json";
axios.defaults.headers.Authorization =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjVhYTcwZjVmMWQxZGEzNDYyZjA2ZWUxZDBmZjg5NSIsInN1YiI6IjY1ZGExYmFiNzJkODU1MDE4NWJjYjlmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Uc-Rtyx8hzOixxeJWHafB0t99MqBw2-LN6ZtOmWOw2s";

// const API_TOKEN =
//   "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjVhYTcwZjVmMWQxZGEzNDYyZjA2ZWUxZDBmZjg5NSIsInN1YiI6IjY1ZGExYmFiNzJkODU1MDE4NWJjYjlmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Uc-Rtyx8hzOixxeJWHafB0t99MqBw2-LN6ZtOmWOw2s";

// const options = {
//   headers: {
//     Authorization: `Bearer ${API_TOKEN}`,
//   },
// };

export const getTrendingMovies = async ({ abortController }) => {
  const response = await axios.get(`/trending/movie/day`, {
    signal: abortController.signal,
  });
  return response.data.results;
};

export const getMovieByQuery = async ({ query, abortController }) => {
  const response = await axios.get(`/search/movie?query=${query}`, {
    signal: abortController.signal,
  });
  return response.data.results;
};

export const getMovieByID = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}`);
  return response.data;
};

export const getMovieCreditsByID = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/credits?`);
  return response.data.cast;
};

export const getMovieReviewsByID = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/reviews?`);
  return response.data.results;
};
