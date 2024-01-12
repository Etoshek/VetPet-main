import React, { useState } from 'react';

import Header from '../Header';

import styled from 'styled-components';
import { PetWeightProps } from './PetWeight';
import PetWeight from './PetWeight';

const Wrapper = styled.div`
	background-color: #eee;
`;

type PetWeightType = {
	animalWeight: (value: PetWeightProps) => void;
};

const ShowPetWeight = ({ animalWeight }: PetWeightType) => {
	const [petWeight, setPetWeight] = useState<number>();

	const handleWeightAnimal = (event: any) => {
		const value = event.target.value;
		setPetWeight(value);
	};

	const handleWeight = () => {
		animalWeight({
            id: 1,
            weight: petWeight,
            animalWeight: undefined,
            handleWeightAnimal: undefined,
            handleWeight: undefined
        });
	};

	console.log(petWeight);

	return (
		<Wrapper>
			<Header headerText='Lista pacjentów' animalName={petWeight} />

			<ul>
				<li>waga: {petWeight}</li>
			</ul>

			<PetWeight
                animalWeight={petWeight}
                handleWeight={handleWeight}
                handleWeightAnimal={handleWeightAnimal} 
                id={undefined} weight={undefined}			/>
		</Wrapper>
	);
};

export default ShowPetWeight;
