import React from 'react';
import { Input } from './common/inputs/Input';

interface InputProps {
	handleInputValue: any;
	animalValue: string | number | undefined;
	label: string;
}

const PacientInput = ({ handleInputValue, animalValue, label }: InputProps) => {
	return (
		<>
			<Input {...{ label }} onChange={handleInputValue} value={animalValue} />
		</>
	);
};

export default PacientInput;
