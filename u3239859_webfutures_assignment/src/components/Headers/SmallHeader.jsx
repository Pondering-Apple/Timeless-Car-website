import React from "react";
import { Link } from "react-scroll";

const SmallHeader = () => {
  return (
    <div className="block sm:hidden text-colorlight bg-colordark">
      <div className="w-full flex justify-around *:py-2">
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
      </div>
      <div className="w-full flex justify-around *:py-2">
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
    </div>
  );
};

export default SmallHeader;
