import React from 'react';
import OwnerInputs from './OwnersInputs';

export interface OwnerInputsProps {
	ownerName: string | undefined;
	ownerNumber: number | undefined;
	ownerEmail: string | undefined;

	handleOwnerName: any;
	handleOwnerNumber: any;
	handleOwnerEmail: any;
}

const OwnersList = ({
	ownerName,
	ownerNumber,
	ownerEmail,

	handleOwnerName,
	handleOwnerNumber,
	handleOwnerEmail,
}: OwnerInputsProps) => {
	return (
		<>
			<OwnerInputs
				ownersValue={ownerName}
				label='Imię właściciela'
				handleOwnersInputValue={handleOwnerName}
			/>
			<OwnerInputs
				ownersValue={ownerNumber}
				label='Numer telefonu'
				handleOwnersInputValue={handleOwnerNumber}
			/>
			<OwnerInputs
				ownersValue={ownerEmail}
				label='Email'
				handleOwnersInputValue={handleOwnerEmail}
			/>
		</>
	);
};

export default OwnersList;
