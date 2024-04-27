import React from 'react'
import { GiChiliPepper, GiOlive, GiHamburger } from "react-icons/gi";
import { Link } from 'react-router-dom';

function HeroNav() {
  return (
    <div className="flex items-center justify-center flex-row h-4/6 space-x-28">
      <Link to="/desi">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center bg-[#1b9985] rounded-full p-4 h-min w-min">
            <GiChiliPepper className="size-10 text-white" />
          </div>
          <h1 className="text-white text-2xl">
            <a>Desi</a>
          </h1>
        </div>
      </Link>
      <Link to="/arab">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center bg-[#1b9985] rounded-full p-4 h-min w-min">
            <GiOlive className="size-10 text-white" />
          </div>
          <h1 className="text-white text-2xl">
            <a>Arab</a>
          </h1>
        </div>
      </Link>
      <Link to="/western">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center bg-[#1b9985] rounded-full p-4 h-min w-min">
            <GiHamburger className="size-10 text-white" />
          </div>
          <h1 className="text-white text-2xl">
            <a>Western</a>
          </h1>
        </div>
      </Link>
    </div>
  );
}

export default HeroNav