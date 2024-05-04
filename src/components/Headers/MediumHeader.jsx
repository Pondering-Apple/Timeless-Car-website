import { Link } from "react-scroll";
import React from "react";

const MobileHeader = () => {
  return (
    <>
      <div className="md:hidden block inline w-full flex justify-around bg-colordark text-colorlight border-b-2 border-colordark">
        <div className="text-center flex items-center py-1 px-5">
          <h1 className="items-center py-2.5">Cars in Monochrome</h1>
        </div>
      </div>
      <div className="md:hidden sm:bg-black sm:flex hidden bg-white *:inline text-center flex justify-around py-3 bg-colordark text-colorlight">
        <Link
          to="f40"
          smooth={true}
          className="hover:text-colordark hover:bg-colorlight hover:cursor-pointer"
        >
          F40
        </Link>
        <Link
          to="countach"
          smooth={true}
          className="hover:text-colordark hover:bg-colorlight hover:cursor-pointer"
        >
          COUNTACH
        </Link>
        <Link
          to="db5"
          smooth={true}
          className="hover:text-colordark hover:bg-colorlight hover:cursor-pointer"
        >
          DB5
        </Link>
        <Link
          to="911"
          smooth={true}
          className="hover:text-colordark hover:bg-colorlight hover:cursor-pointer"
        >
          911 SERIES
        </Link>
        <Link
          to="300sl"
          smooth={true}
          className="hover:text-colordark hover:bg-colorlight hover:cursor-pointer"
        >
          300 SL
        </Link>
        <Link
          to="mclarenf1"
          smooth={true}
          className="hover:text-colordark hover:bg-colorlight hover:cursor-pointer"
        >
          MCLAREN F1
        </Link>
      </div>
    </>
  );
};

export default MobileHeader;
