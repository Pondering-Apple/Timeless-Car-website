import { Link } from "react-scroll";
import React, { useState, useEffect } from "react";

const NormalHeader = ({ scrollPosition }) => {
  const [pageHeight, setPageHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setPageHeight(document.body.scrollHeight);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isValidScrollPosition =
    !isNaN(scrollPosition) && isFinite(scrollPosition);

  const scrollPercentage = (scrollPosition / document.body.scrollHeight) * 100;

  const threshold1 = 4.759;
  const threshold2 = 20.975;
  const threshold3 = 36.897;
  const threshold4 = 54.773;
  const threshold5 = 66.583;
  const threshold6 = 84.753;

  const isPastThreshold1 =
    threshold1 < scrollPercentage && scrollPercentage < threshold2;
  const isPastThreshold2 =
    threshold2 < scrollPercentage && scrollPercentage < threshold3;
  const isPastThreshold3 =
    threshold3 < scrollPercentage && scrollPercentage < threshold4;
  const isPastThreshold4 =
    threshold4 < scrollPercentage && scrollPercentage < threshold5;
  const isPastThreshold5 =
    threshold5 < scrollPercentage && scrollPercentage < threshold6;
  const isPastThreshold6 = threshold6 < scrollPercentage;

  let hoverColor =
    "hover:text-colorlight hover:bg-colorlight hover:cursor-pointer py-5";
  if (isPastThreshold1 || isPastThreshold3 || isPastThreshold5) {
    hoverColor =
      "hover:text-colorlight hover:bg-colordark hover:cursor-pointer py-5";
  }

  const lightHeader = "bg-colorlight border-colorlight text-colordark";
  const darkHeader = "bg-colordark border-colordark text-colorlight";

  const backgroundColorDefualt = darkHeader;
  const backgroundColor1 = lightHeader;
  const backgroundColor2 = darkHeader;
  const backgroundColor3 = lightHeader;
  const backgroundColor4 = darkHeader;
  const backgroundColor5 = lightHeader;
  const backgroundColor6 = darkHeader;

  let headerBackgroundColor = "";
  if (isPastThreshold1) {
    headerBackgroundColor = backgroundColor1;
  } else if (isPastThreshold2) {
    headerBackgroundColor = backgroundColor2;
  } else if (isPastThreshold3) {
    headerBackgroundColor = backgroundColor3;
  } else if (isPastThreshold4) {
    headerBackgroundColor = backgroundColor4;
  } else if (isPastThreshold5) {
    headerBackgroundColor = backgroundColor5;
  } else if (isPastThreshold6) {
    headerBackgroundColor = backgroundColor6;
  } else {
    headerBackgroundColor = backgroundColorDefualt;
  }

  const transitionDuration = "0.3s";

  return (
    <div
      className={`flex justify-aroundborder-b-2 hidden md:block ${headerBackgroundColor}`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        transition: `background-color ${transitionDuration}`,
      }}
    >
      <div className="*:w-full *:text-center flex justify-around">
        <Link to="f40" smooth={true} className={hoverColor}>
          F40
        </Link>
        <Link to="countach" smooth={true} className={hoverColor}>
          COUNTACH
        </Link>
        <Link to="db5" smooth={true} className={hoverColor}>
          DB5
        </Link>
        <h1 className="text-center py-1">
          Cars in <br />
          Monochrome
        </h1>
        <Link to="911" smooth={true} className={hoverColor}>
          911 SERIES
        </Link>
        <Link to="300sl" smooth={true} className={hoverColor}>
          300 SL
        </Link>
        <Link to="mclarenf1" smooth={true} className={hoverColor}>
          MCLAREN F1
        </Link>
      </div>
    </div>
  );
};

export default NormalHeader;
