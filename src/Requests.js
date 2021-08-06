const API_KEY = ' fd8ff940ccc8527479c1eb6f0a7f9934';


const requests = {
    fetchTrending : `/trending/all/week?api=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanticMovies:`discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`discover/movie?api_key=${API_KEY}&with_genres=99`,

}

export default requests;