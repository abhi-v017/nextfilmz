import { movie } from "@/lib/tmdb";
import React from "react";

export default async function MovieDetails({ params }) {
  const tappedmovie = await movie(params.id);

  return (
    <div className="flex flex-col items-center justify-center text-white gap-2">
      <img
        className="h-[400px] rounded my-2"
        src={`https://image.tmdb.org/t/p/w500${tappedmovie.poster_path}`}
        alt={tappedmovie.title}
      />
      <div className="flex gap-2 items-center justify-center text-center">
        <h1 className="font-bold text-xl italic">{tappedmovie.title}</h1>
        {tappedmovie.vote_average ? (
          <div className=" rounded-full bg-black px-2 py-1 text-xs">
            ⭐ {tappedmovie.vote_average.toFixed(1)}
          </div>
        ) : null}
      </div>
      <div className="flex flex-wrap items-center gap-2 mt-4">
        <h1 className="font-bold">Genres:</h1>
        {tappedmovie.genres.map((genre) => (
          <span
            key={genre.id}
            className=" rounded-full bg-black text-xs mr-2 px-2 py-1 "
          >
            {genre.name}
          </span>
        ))}
      </div>
      <p className="text-lg px-4">{`${tappedmovie.overview}`}</p>
      <h1 className="">Release Date: {tappedmovie.release_date}</h1>
      <h1>Duration: {tappedmovie.runtime}</h1>
      <h1>Budget: {tappedmovie.budget}</h1>
      <h1>Revenue: {tappedmovie.revenue}</h1>
    </div>
  );
}
