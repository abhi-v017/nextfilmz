import axios from 'axios';

const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTY1NWJlYjUyZDE3MTU2MTVkNjgyODE3NmVhMDNiYiIsIm5iZiI6MTc0MTQ0MDgyMS42MSwic3ViIjoiNjdjYzQ3MzU3YzcwYzQyYTAzNGY4NDRiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.FmnFsZUm6q48JffGHjbS8Zzvcpm-fJ3zWqQz12nGkUY`,
  },
});

export async function trendingMovies(){
    try {
        const res = await tmdb.get('/trending/movie/day')
        return res.data.results
    } catch (error) {
        console.error("Error fetching trending movies:", error);
        throw error;
    }
}
export async function trendingShows(){
    try {
        const res = await tmdb.get('/trending/tv/day')
        return res.data.results
    } catch (error) {
        console.error("Error fetching trending movies:", error);
        throw error;
    }
}
export async function ratedMovie(){
    try {
        const res = await tmdb.get('/rated/movie')
        return res.data.results
    } catch (error) {
        console.error("Error fetching trending movies:", error);
        throw error;
    }
}
export async function upcoming(){
    try {
        const res = await tmdb.get('/movie/upcoming')
        return res.data.results
    } catch (error) {
        console.error("Error fetching trending movies:", error);
        throw error;
    }
}

export async function movie(id){
    try {
        const res = await tmdb.get(`/movie/${id}`)
        return res.data
    } catch (error) {
        console.error("Error fetching movie details:", error);
        throw error;
    }
}
export async function show(id){
    try {
        const res = await tmdb.get(`/tv/${id}`)
        return res.data
    } catch (error) {
        console.error("Error fetching movie details:", error);
        throw error;
    }
}

export async function search(params) {
    try {
        const { query } = params;
        const res = await tmdb.get('/search/multi', {
            params: {
                query,
                include_adult: false
            }
        });
        return res.data.results
    } catch (error) {
        console.error("Error searching for movies or shows:", error);
        throw error;
    }
}
export async function topratedMovie() {
    try {
        const res = await tmdb.get(`/movie/top_rated`);
        return res.data.results;
    } catch (error) {
        console.error("Error searching for movies or shows:", error);
        throw error;
    }
}
export async function topratedShow() {
    try {
        const res = await tmdb.get(`/tv/top_rated`);
        return res.data.results;
    } catch (error) {
        console.error("Error searching for movies or shows:", error);
        throw error;
    }
}
export async function popularMovies() {
    try {
        const res = await tmdb.get(`/movie/popular`);
        return res.data.results;
    } catch (error) {
        console.error("Error searching for movies or shows:", error);
        throw error;
    }
}
export async function popularShows() {
    try {
        const res = await tmdb.get(`/tv/popular`);
        return res.data.results;
    } catch (error) {
        console.error("Error searching for movies or shows:", error);
        throw error;
    }
}
