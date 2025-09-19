"use client";
import React from "react";

export default function UpcomingCarousel({ movies }) {
    const [current, setCurrent] = React.useState(0);

    React.useEffect(() => {
    const timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % movies.length);
    }, 2000);
    return () => clearInterval(timer);
    }, [movies.length]);

    if (!movies || movies.length === 0) return null;

    const movie = movies[current];

    return (
    <div className="w-full flex justify-center items-center mb-8 ">
        <div className="relative w-[1020px] h-[400px] rounded-2xl overflow-hidden shadow-lg max-sm:w-[400px] max-sm:h-[200px]">
        <img
            src={`https://image.tmdb.org/t/p/w780${
            movie.backdrop_path || movie.poster_path
            }`}
            alt={movie.title}
            className="w-full h-full object-cover"
        />
        </div>
    </div>
    );
}
