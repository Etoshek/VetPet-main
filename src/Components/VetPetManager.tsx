import { useEffect, useState } from 'react';
import PacientData from './PacientData';
import VetPetList, { PetsNames } from './VetPetList';

interface TestX {
	ownerName: string | undefined;
}
export const VetPetManager = ({ ownerName }: TestX) => {
	const [animal, setAnimal] = useState<PetsNames>();

	const handleAnimal = (value: PetsNames) => {
		setAnimal(value);
		console.log('HandleAnimal', value);
	};

	useEffect(() => {
		console.log('Animal ze stejtu', animal);
	}, [animal]);

	return (
		<>
			<p>{ownerName}</p>
			<PacientData handleNewAnimal={handleAnimal} />
			<VetPetList newAnimal={animal} />
		</>
	);
};
