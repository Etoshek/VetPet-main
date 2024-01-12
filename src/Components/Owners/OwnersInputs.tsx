import { TextField } from '@mui/material';
import React from 'react';

interface OwnerInputsProps {
	ownerNumber?: number;
	// label: string;
	ownerEmail?: string;
	ownerName?: string;
	handleNameOwner: any;
	handleOwnerPhoneValue: any;
	handleOwnerEmailValue: any;

}

const OwnerInput = ({
	// label,
	ownerNumber,
	ownerEmail,
	ownerName,
	handleNameOwner,
	handleOwnerPhoneValue,
	handleOwnerEmailValue,
}: OwnerInputsProps) => {
	return (
		<>
			<TextField
				label={'name'}
				type='text'
				variant='outlined'
				onChange={handleNameOwner}
				value={ownerName}
			/>
			<TextField
				label={'number'}
				type='text'
				variant='outlined'
				onChange={handleOwnerPhoneValue}
				value={ownerNumber}
			/>
			<TextField
				label={'email'}
				type='text'
				variant='outlined'
				onChange={handleOwnerEmailValue}
				value={ownerEmail}
			/>
		</>
	);
};

export default OwnerInput;
