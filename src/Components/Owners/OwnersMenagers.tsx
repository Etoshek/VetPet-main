import { useEffect, useState } from 'react';
import OwnersPetsList, { PetsOwnersNames } from './OwnersPetsList';
import OwnersData from './OwnersData';

export const OwnersMenagers = () => {
	const [people, setPeople] = useState<PetsOwnersNames>();

	const handleOwner = (value: PetsOwnersNames) => {
		setPeople(value);
		console.log('HandleAnimal', value);
	};

	useEffect(() => {
		console.log('people ze stejtu', people);
	}, [people]);

	return (
		<>
			<OwnersData handleNewPeople={handleOwner} />
			<OwnersPetsList newPeople={people} />
		</>
	);
};
