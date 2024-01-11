import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

// INTERFACES
export interface PetsOwnersNames {
	id: number | undefined;
	ownerName: string | undefined;
	ownerNumber: number | undefined;
	ownerEmail: string | undefined;
}

type NewPetOwnerProps = {
	people?: PetsOwnersNames;
};

type PetOwnersListProps = {
	newPeople?: PetsOwnersNames;
};

const Wrapper = styled.div`
	background-color: rgba(255, 0, 0, 0.3);
`;

const PetOwnersList = ({ people }: NewPetOwnerProps) => {
	// STATE
	const initialAddPetsOwner: PetsOwnersNames[] = [
		{ id: 0, ownerName: 'fff', ownerNumber: 6, ownerEmail: 'gmail@gmail.com' },
		{ id: 1, ownerName: '2', ownerNumber: 5, ownerEmail: 'gmail@gmail.com' },
		{ id: 2, ownerName: '3', ownerNumber: 2, ownerEmail: 'gmail@gmail.com' },
	];

	const [owner, setOwner] = useState<PetsOwnersNames[]>(initialAddPetsOwner);

	const handleRemove = (ownerList: PetsOwnersNames) => {
		const petVetOwnersList = people.filter((t) => t !== ownerList);
		setOwner(petVetOwnersList);
	};

	useEffect(() => {
		people && setOwner((prev) => [...prev, people]);
	}, [people]);

	return (
		<div>
			<h1>veterinarian for pets </h1>
			<h3>VetPet</h3>

			<div>
				{owner.map((ownerList) => (
					<div key={ownerList.id}>
						{ownerList.id} - {ownerList.ownerName} - {ownerList.ownerNumber} -{' '}
						{ownerList.ownerEmail}
						<button onClick={() => handleRemove(ownerList)}>
							Remove owner
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export const OwnersPetsList = ({ newPeople }: PetOwnersListProps) => {
	return (
		<Wrapper>
			<PetOwnersList people={newPeople} />
		</Wrapper>
	);
};

export default OwnersPetsList;
