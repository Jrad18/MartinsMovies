export default class Movie
{
    constructor(movieData, api, movieDetails) {
        this.movie_id = movieData.id;
        this.movie_details = movieDetails;
        this.title = movieData.title;
        this.overview = movieData.overview;
        this.poster_path = movieData.poster_path;
        this.genre_ids = movieData.genre_ids;
        this.genres = {};
        this.genre_ids.forEach(genre => {
            this.genres[genre] = api.genres.find(x => x.id === genre).name;
        })
    }

    getPosterUrl(){
        return import.meta.env.VITE_TMDB_IMAGE_URL + this.poster_path;
    }

    getGenreList(){
        let array = [];
        Object.keys(this.genres).forEach( key => {
            array.push(this.genres.key);
        });
        return array.join(", ");
    }


}