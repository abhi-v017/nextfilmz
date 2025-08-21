"use client";
import React from "react";
import Card from "./Card";

export default function SliderSection({ items, type }) {
    const scrollRef = React.useRef(null);

    const handleScroll = (direction) => {
    if (scrollRef.current) {
        scrollRef.current.scrollBy({
        left: direction === "left" ? -400 : 400,
        behavior: "smooth",
        });
    }
    };

    return (
    <div className="relative">
        <button
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white rounded-full p-2 hover:bg-black/80"
        onClick={() => handleScroll("left")}
        aria-label="Scroll left"
        >
        &#8592;
        </button>
        <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide px-2"
        style={{ scrollBehavior: "smooth" }}
        >
        {items.map((item) => (
            <Card
            key={item.id}
            id={item.id}
            title={type === "movie" ? item.title : item.name}
            image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            vote_average={item.vote_average}
            to={type === "movie" ? `/movie/${item.id}` : `/shows/${item.id}`}
            />
        ))}
        </div>
        <button
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white rounded-full p-2 hover:bg-black/80"
        onClick={() => handleScroll("right")}
        aria-label="Scroll right"
        >
        &#8594;
        </button>
    </div>
    );
}
