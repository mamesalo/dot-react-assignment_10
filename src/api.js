import axios from "axios";
const API_KEY = "d9cb4d395b2d4a9d474fc9d3d7c58be2";
const BASE_URL = `https://api.themoviedb.org/3`;
export const fetchMovies = async (page, query) => {
  return new Promise(async (resolve, reject) => {
    try {
      let fullURL;
      console.log(query);

      if (query) {
        fullURL = `${BASE_URL}/search/movie?api_key=${API_KEY}&page=${page}&query=${query}`;
      } else {
        fullURL = `${BASE_URL}/discover/movie?api_key=${API_KEY}&page=${page}`;
      }
      console.log(fullURL);

      const response = await axios.get(fullURL);
      resolve(response.data);
    } catch (error) {
      reject(error);
    }
  });
};
