import { useEffect, useState } from "react";
import PacientData from "./PacientData";
import VetPetList, { PetsNames } from "./VetPetList";

export const VetPetManager = () => {
  const [animal, setAnimal] = useState<PetsNames>();

  const handleAnimal = (value: PetsNames) => {
    setAnimal(value);
    console.log("HandleAnimal", value);
  };

  useEffect(() => {
    console.log("Animal ze stejtu", animal);
  }, [animal]);

  return (
    <>
      <PacientData handleNewAnimal={handleAnimal} />
      <VetPetList newAnimal={animal} />
    </>
  );
};
