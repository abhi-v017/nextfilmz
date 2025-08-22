import React from "react";
import { search } from "@/lib/tmdb";
import Card from "@/app/components/Card";

export default async function SearchPage({ searchParams }) {
    const query = await searchParams?.query || "";
    let results = [];
    if (query) {
    results = await search({ query });
    }

    return (
        <div className="p-4">
        <h1 className="text-2xl mb-4">{`Search Results for "${query}"`}</h1>
        <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
            {results.length > 0 ? (
            results.map((item) => (
                <Card
                key={item.id}
                id={item.id}
                title={item.title || item.name}
                image={
                    item.poster_path || item.backdrop_path
                    ? `https://image.tmdb.org/t/p/w500${
                        item.poster_path || item.backdrop_path
                        }`
                    : "/placeholder.jpg"
                }
                vote_average={item.vote_average}
                to={
                    item.media_type === "movie"
                    ? `details/movie/${item.id}`
                    : item.media_type === "tv"
                    ? `details/shows/${item.id}`
                    : "#"
                }
                />
            ))
            ) : (
            <p>No results found.</p>
            )}
        </div>
        </div>
    );
}
