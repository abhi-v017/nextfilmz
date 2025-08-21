import React from "react";
import Link from "next/link";

function Card({ id, title, image, vote_average,to }) {
    //const to = `pages/movie/${id}`;
    return (
    <Link
        href={to}
        className="group rounded-2xl bg-neutral-900 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:shadow-xl w-56 flex-shrink-0"
    >
        <div className="relative aspect-[2/3] w-full overflow-hidden rounded-t-2xl h-80">
        <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition group-hover:scale-105"
            sizes="(max-width:768px) 50vw, 20vw"
        />
        {vote_average ? (
            <div className="absolute left-2 top-2 rounded-full bg-black/70 px-2 py-1 text-xs">
            ⭐ {vote_average.toFixed(1)}
            </div>
        ) : null}
        </div>
        <div className="p-3">
            <h3 className="line-clamp-2 text-sm font-medium">{title}</h3>
        </div>
    </Link>
    );
}

export default Card;
