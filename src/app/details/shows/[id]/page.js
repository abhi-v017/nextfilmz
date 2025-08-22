import {show } from "@/lib/tmdb";

export default async function MovieDetails({ params }) {
    const tappedshow = await show(params.id);
    console.log(tappedshow);
    console.log(`show ID: ${params.id}`);

    return (
        <div className="flex flex-col items-center justify-center text-white gap-2">
        <img
            className="h-[400px] rounded my-2"
            src={`https://image.tmdb.org/t/p/w500${tappedshow.poster_path}`}
        />
        <div className="flex gap-2 items-center justify-center text-center">
            <h1 className="font-bold text-xl italic">{tappedshow.name}</h1>
            {tappedshow.vote_average ? (
            <div className=" rounded-full bg-black px-2 py-1 text-xs">
                ⭐ {tappedshow.vote_average.toFixed(1)}
            </div>
            ) : null}
        </div>
        <div className="flex flex-wrap items-center gap-2 mt-4">
            <h1 className="font-bold">Genres:</h1>
            {tappedshow.genres.map((genre) => (
            <span
                key={genre.id}
                className=" rounded-full bg-black text-xs mr-2 px-2 py-1 "
            >
                {genre.name}
            </span>
            ))}
        </div>
        <p className="text-lg px-4">{tappedshow.overview}</p>
        <h1>Number of seasons: {tappedshow.number_of_seasons}</h1>
        <h1>Number of episodes: {tappedshow.number_of_episodes}</h1>
        </div>
    );
}
