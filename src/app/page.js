import { trendingMovies, trendingShows, upcoming } from "@/lib/tmdb";
import Card from "./components/Card";
import UpcomingCarousel from "./components/UpcomingCarousel";
import SliderSection from "./components/SliderSection";
import React from "react";

export default async function Home() {
  const movies = await trendingMovies();
  const shows = await trendingShows();
  const upcomingMovies = await upcoming();

  return (
    <div>
      <UpcomingCarousel movies={upcomingMovies} />

      <h1 className="mb-4 text-2xl font-semibold px-2">Trending Movies</h1>
      <SliderSection items={movies} type="movie" />

      <h1 className="mb-4 text-2xl font-semibold px-2">Trending Tv Shows</h1>
      <SliderSection items={shows} type="show" />
    </div>
  );
}
