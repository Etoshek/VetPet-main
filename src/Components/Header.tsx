import React from "react";

interface HeaderProps {
  headerText: string;
  subheaderText?: string;
  animalName: string | undefined | any;
}

const Header = ({ headerText, subheaderText, animalName }: HeaderProps) => {
  return (
    <>
      <h1>
        {headerText} {animalName}
      </h1>
      <h2>{subheaderText}</h2>
    </>
  );
};

export default Header;
