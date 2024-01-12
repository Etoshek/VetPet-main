import React, { useState } from 'react';

import OwnersHeader from './OwnersHeader';
import OwnersActions from './OwnersActions';
import OwnersList from './OwnersList';

import { PetsOwnersNames } from './OwnersPetsList';
import styled from 'styled-components';

const Wrapper = styled.div`
	background-color: #eee;
`;

// type OwnersDataProps = {
// 	handleNewPeople: (value: PetsOwnersNames) => void;
// };

const OwnersData = () => {
	const [ownerName, setOwnerName] = useState<string>();
	const [ownerNumber, setOwnerNumber] = useState<number>();
	const [ownerEmail, setOwnerEmail] = useState<string>();

	const handleOwnerName = (event: any) => {
		const people = event.target.value;
		setOwnerName(people);
	};

	const handleOwnerNumber = (event: any) => {
		const people = event.target.value;
		setOwnerNumber(people);
	};

	const handleOwnerEmail = (event: any) => {
		const people = event.target.value;
		setOwnerEmail(people);
	};

	const handleAddActionPeoples = () => {
	// 	// handleNewPeople({
	// 	// 	id: 1,
	// 	// 	ownerName: ownerName,
	// 	// 	ownerNumber: ownerNumber,
	// 	// 	ownerEmail: ownerEmail,
	// 	// });
	};
	const ownersArray =['XYz', 'Abc', "hgjhfgdf"]

	return (
		<Wrapper>
			<OwnersHeader headerText='Imię właściciela' ownerName={ownerName} />
			<OwnersList owners={ownersArray}/>

			<ul>
				<li>imię: {ownerName}</li>
				<li>Numer Telefonu: {ownerNumber}</li>
				<li>Email: {ownerEmail}</li>
			</ul>

			<OwnersActions
				ownerNameValue={ownerName}
				ownerNumberValue={ownerNumber}
				ownerEmailValue={ownerEmail}
				handleOwnerName={handleOwnerName}
				handleOwnerNumber={handleOwnerNumber}
				handleOwnerEmail={handleOwnerEmail}
				handleAddPetOwn
				handleAddActionPeoples={handleAddActionPeoples}
			/>
		</Wrapper>
	);
};

// };

export default OwnersData;
