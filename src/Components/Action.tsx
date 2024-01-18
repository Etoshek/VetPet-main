import React from 'react';

import styled from 'styled-components';
import PacientValue from './PacientValue';
import PetInfo from './common/buttons/PetInfo';

interface ActionProps {
	animalNameValue: string | undefined;
	animalAgeValue: number | undefined;

	handleNameAnimal: any;
	handleAgeAnimal: any;

	FormVisibility: any;
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

	FormVisibility,
}: ActionProps) => {
	return (
		<ActionInputs>
			<ActionInput>
				<PacientValue
					animalName={animalNameValue}
					animalAge={animalAgeValue}
					handleAnimalName={handleNameAnimal}
					handleAnimalAge={handleAgeAnimal}
				/>
			</ActionInput>

			<PetInfo textButton='Dodaj pacjenta' handleFormButton={FormVisibility} />
		</ActionInputs>
	);
};

export default Action;
