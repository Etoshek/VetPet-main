import React, { useEffect, useState } from "react";

import styled from "styled-components";

// INTERFACES
export interface PetsNames {
  id: number | undefined;
  name: string | undefined;
  age: number | undefined;
}

type NewPetProps = {
  animal?: PetsNames;
};
 
type VetPetListProps = {
  newAnimal?: PetsNames;
};

const Wrapper = styled.div`
  background-color: rgba(255, 0, 0, 0.3);
`;

const NewPet = ({ animal }: NewPetProps) => {
  // STATE
  const initialAddPetsName: PetsNames[] = [
    { id: 0, name: "fff", age: 6 },
    { id: 1, name: "2", age: 5 },
    { id: 2, name: "3", age: 2 },
  ];

  const [pets, setPets] = useState<PetsNames[]>(initialAddPetsName);

  const handleRemove = (petList: PetsNames) => {
    const petVet = pets.filter((t) => t !== petList);
    setPets(petVet);
  };

  useEffect(() => {
    animal && setPets((prev) => [...prev, animal]);
  }, [animal]);

  return (
    <div>
      <h1>veterinarian for pets </h1>
      <h3>VetPet</h3>

      <div>
        {pets.map((petList) => (
          <div key={petList.id}>
            {petList.id} - {petList.name} - {petList.age}
            <button onClick={() => handleRemove(petList)}>
              Remove pacient
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export const VetPetList = ({ newAnimal }: VetPetListProps) => {
  return (
    <Wrapper>
      <NewPet animal={newAnimal} />
    </Wrapper>
  );
};

export default VetPetList;
