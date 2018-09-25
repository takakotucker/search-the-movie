/* @flow */
import axios from 'axios'

// All the api calls here. Stats can be viewed on https://www.themoviedb.org/settings/api/stats 
const apiKey: string = '91aa77223157faa2cb4957484d961129'; // Takako's API key

export default {
  getMovies: (category: string) => {
    const url = `https://api.themoviedb.org/3/movie/${category}?api_key=${apiKey}&language=en-US&page=1`
    return axios.get(url).then(info => info.data)
  },
  getSearch: (query: string) => {
    const url = `https://api.themoviedb.org/3/search/multi?query=${query}&api_key=${apiKey}&append_to_response=videos`
    return axios.get(url).then(info => info.data)
  },
  getMovieById: (movieId: number) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=videos`
    return axios.get(url).then(info => info.data)
  },

  getTvById: (tvId: number) => {
    const url = `https://api.themoviedb.org/3/tv/${tvId}?api_key=${apiKey}&append_to_response=videos`
    return axios.get(url).then(info => info.data)
  },
  getPersonById: (personId: number) => {
    const url = `https://api.themoviedb.org/3/person/${personId}?api_key=${apiKey}&append_to_response=videos`
    return axios.get(url).then(info => info.data)
  },
  getMostVoted: () => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1`
    return axios.get(url).then(info => info.data)
  }
}
