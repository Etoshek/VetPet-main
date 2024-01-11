import React from "react";

import styled from "styled-components";
import ActionButton from "./Button";
import PacjentInputs from "./PacjentInputs";

interface ActionProps {
  animalNameValue: string | undefined;
  animalAgeValue: number | undefined;

  handleNameAnimal: any;
  handleAgeAnimal: any;
  
  handleAddActionAnimal: any;
}

const ActionInputs = styled.div`
  display: flex;
`;

const ActionInput = styled.div`
  margin-right: 20px;
`;

const Action = ({
  animalNameValue,
  animalAgeValue,

  handleNameAnimal,
  handleAgeAnimal,
  
  handleAddActionAnimal,

}: ActionProps) => {
  return (
    <ActionInputs>
      <ActionInput>
        <PacjentInputs
          animalName={animalNameValue}
          animalAge={animalAgeValue}
          handleAnimalName={handleNameAnimal}
          handleAnimalAge={handleAgeAnimal}
        />
      </ActionInput>

      <ActionButton
        textButton="Dodaj pacjenta"
        handleActionButton={handleAddActionAnimal}
      />
    </ActionInputs>
  );
};

export default Action;
