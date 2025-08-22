import React from 'react'
import SliderSection from '../../components/SliderSection'
import { trendingMovies, topratedMovie,  popularMovies, upcoming } from "@/lib/tmdb";


export default async function page() {
        const movies = await trendingMovies();
        const topRatedMovie = await topratedMovie();
        const popularMovie = await popularMovies();
        const upcomingMovies = await upcoming(); 

        
  return (
    <div>
      <h1 className="mb-4 text-2xl font-semibold px-2">Trending Movies</h1>
            <SliderSection items={movies} type="movie" />
            <h1 className="mb-4 text-2xl font-semibold px-2">Popular movies</h1>
            <SliderSection items={popularMovie} type="movie" />
            <h1 className="mb-4 text-2xl font-semibold px-2">Top-rated movies</h1>
            <SliderSection items={topRatedMovie} type="movie" />
            <h1 className="mb-4 text-2xl font-semibold px-2">Upcoming movies</h1>
            <SliderSection items={upcomingMovies} type="movie" />
    </div>
  )
}

