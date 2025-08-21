import React from 'react'
import SliderSection from '../components/SliderSection'
import { trendingShows, topratedShow, popularShows } from "@/lib/tmdb";

export default async function page() {

    const shows = await trendingShows();
    const topRatedShow = await topratedShow();
    const popularShow = await popularShows(); 
    return (
        <div>
        <h1 className="mb-4 text-2xl font-semibold px-2">Trending Tv Shows</h1>
        <SliderSection items={shows} type="show" />\
        <h1 className="mb-4 text-2xl font-semibold px-2">Popular Tv Shows</h1>
        <SliderSection items={popularShow} type="show" />
        <h1 className="mb-4 text-2xl font-semibold px-2">Top-rated shows</h1>
        <SliderSection items={topRatedShow} type="show" />
        </div>
    );
}
