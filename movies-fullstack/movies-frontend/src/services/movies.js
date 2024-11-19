import axios from "axios";

const baseURL = "/api/movies";

const getMovies = () => {
  return axios.get(baseURL).then((res) => res.data);
};

const addMovie = (movie) => {
  return axios.post(baseURL, movie).then((res) => res.data);
};

const updateMovie = (movie) => {
  return axios.put(`${baseURL}/${movie.id}`, movie).then((res) => res.data);
};

export default { getMovies, addMovie, updateMovie };
