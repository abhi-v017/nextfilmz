"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

function Navbar() {
    const [search, setSearch] = useState("");
    const router = useRouter();

    const handleKeyDown = (e) => {
    if (e.key === "Enter" && search.trim()) {
        router.push(`/pages/search?query=${encodeURIComponent(search.trim())}`);
    }
    };

    return (
      <div className="flex justify-between items-center p-2 bg-gray-900 text-white">
        <h1 className="font-semibold italic">
          <a href="/">Nextfilmz</a>
        </h1>
        <ul className="flex space-x-8 justify-between items-center">
          <li className="hover:text-gray-400">
            <a href="/">Home</a>
          </li>
          <li className="hover:text-gray-400">
            <a href="/movies">Movies</a>
          </li>
          <li className="hover:text-gray-400">
            <a href="/tv">TV Shows</a>
          </li>
        </ul>
        <div className="cursor-pointer flex items-center space-x-2 bg-gray-800 px-2 py-1  rounded-full ">
          <input
            className="text-white outline-none"
            placeholder="Search Movies & Tv shows"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0,0,256,256"
          >
            <g
              fill="#7D828C"
              fillRule="nonzero"
              stroke="none"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
              strokeDasharray=""
              strokeDashoffset="0"
              fontFamily="none"
              fontWeight="none"
              fontSize="none"
              textAnchor="none"
              style={{ mixBlendMode: "normal" }}
            >
              <g transform="scale(5.12,5.12)">
                <path d="M21,3c-9.37891,0 -17,7.62109 -17,17c0,9.37891 7.62109,17 17,17c3.71094,0 7.14063,-1.19531 9.9375,-3.21875l13.15625,13.125l2.8125,-2.8125l-13,-13.03125c2.55469,-2.97656 4.09375,-6.83984 4.09375,-11.0625c0,-9.37891 -7.62109,-17 -17,-17zM21,5c8.29688,0 15,6.70313 15,15c0,8.29688 -6.70312,15 -15,15c-8.29687,0 -15,-6.70312 -15,-15c0,-8.29687 6.70313,-15 15,-15z"></path>
              </g>
            </g>
          </svg>
        </div>
      </div>
    );
}

export default Navbar;
