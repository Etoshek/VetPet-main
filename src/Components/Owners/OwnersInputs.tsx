import { TextField } from '@mui/material';
import React from 'react';

interface OwnerInputsProps {
	handleOwnersInputValue: any;
	ownersValue: string | number | undefined;
	// ownerName: string | undefined
	label: string;
}

const OwnerInput = ({
	handleOwnersInputValue,
	ownersValue,
	label,
}: OwnerInputsProps) => {
	return (
		<>
			<TextField
				label={label}
				type='text'
				variant='outlined'
				onChange={handleOwnersInputValue}
				value={ownersValue}
			/>
		</>
	);
};

export default OwnerInput;
