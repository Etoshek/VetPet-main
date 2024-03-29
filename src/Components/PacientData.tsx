import React, { useState } from 'react';

import Action from './Action';
import Header from './Header';

import styled from 'styled-components';
import { PetsNames } from './VetPetList';

const Wrapper = styled.div`
	background-color: #eee;
`;

type PacientDataProps = {
	handleNewAnimal: (value: PetsNames) => void;
};

const PacientData = ({ handleNewAnimal }: PacientDataProps) => {
	const [animalName, setAnimalName] = useState<string>();
	const [animalAge, setAnimalAge] = useState<number>();

	const handleNameAnimal = (event: any) => {
		const value = event.target.value;
		setAnimalName(value);
	};

	const handleAgeAnimal = (event: any) => {
		const value = event.target.value;
		setAnimalAge(value);
	};

	const FormVisibility = () => {
		handleNewAnimal({
			id: 1,
			age: animalAge,
			name: animalName,
		});
	};

	console.log(animalName);

	return (
		<Wrapper>
			<Header headerText='Lista pacjentów' animalName={animalName} />

			<ul>
				{animalName}
				{animalAge}
			</ul>

			<Action
				animalNameValue={animalName}
				animalAgeValue={animalAge}
				handleNameAnimal={handleNameAnimal}
				handleAgeAnimal={handleAgeAnimal}
				FormVisibility={FormVisibility}
			/>
		</Wrapper>
	);
};

export default PacientData;
