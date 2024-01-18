import React from "react";
import PacientInput from "./PacientInput";

interface PacjentInputsProps {
  handleAnimalName: any;
  handleAnimalAge: any;
  
  animalName: string | undefined | any;
  animalAge: number | undefined;
}

const PacientValue = ({
  handleAnimalName,
  handleAnimalAge,
  animalName,
  animalAge,
}: PacjentInputsProps) => {
  return (
    <>
      <PacientInput
        animalValue={animalName}
        label="Imię zwierzaka"
        handleInputValue={handleAnimalName}
      />
      <PacientInput
        animalValue={animalAge}
        label="Wiek zwierzaka"
        handleInputValue={handleAnimalAge}
      />
    </>
  );
};

export default PacientValue;
