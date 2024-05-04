import React from "react";
import MobileHeader from "./Headers/MediumHeader";
import SmallHeader from "./Headers/SmallHeader";
import NormalHeader from "./Headers/NormalHeader";

const Header = ({ scrollPosition }) => {
  return (
    <>
      <MobileHeader />
      <SmallHeader />
      <NormalHeader scrollPosition={scrollPosition} />
    </>
  );
};

export default Header;
