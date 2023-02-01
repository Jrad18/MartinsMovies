import axios from 'axios'
import Movie from "@/composables/Movie.js";

export default class TmdbApiService
{

    movies = [];
    genres = [];
    constructor(api_key, base_url){
        this.api_key = import.meta.env.VITE_TMDB_KEY;
        this.base_url = import.meta.env.VITE_TMDB_BASE_URL;
        this.getGenreList();
    }



    getMovies(page=1, with_keywords=null){
        return axios
            .get(this.buildUrl("discover/movie", {page: 1}))
            .then(response => {
                response.data.results.forEach(data => {
                    let movieDetails = this.getMovieDetails(data.id);
                    this.movies.push(new Movie(data, this, movieDetails));
                });
                return this.movies
                console.log(this.movies);
            })
            .catch(error => console.error(error));
        //discover/movie
    }
    getMovieDetails(movie_id){
       return axios
            .get(this.buildUrl("movie/"+movie_id))
            .then(response => {
                return response.data;
            })
            .catch(error => console.error(error));
    }

    getGenreList(){
        axios
            .get(this.buildUrl("genre/movie/list"))
            .then(response => {
                this.genres = response.data.genres;
            })
            .catch(error => console.error(error));
    }

    buildUrl(subdirectory, queries={}){
        let queryString = "";
        Object.keys(queries).forEach(key => {queryString += "&"+key+"="+queries[key]});
        return this.base_url+subdirectory+"?api_key="+this.api_key+queryString;
    }

    //TODO: searchKeywords autocomplete - returns keyword id
    //Todo: discoverMovies - pass "with_keywords"

}
