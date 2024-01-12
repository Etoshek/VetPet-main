import { TextField } from '@mui/material';
import React from 'react';

interface OwnerInputsProps {
	ownerValue?: string;
	handleOwner: any;
	label: string;
}

const OwnerInput = ({
	ownerValue,
	handleOwner,
	label,
	
}: OwnerInputsProps) => {
	return (
		<>
			<TextField
				label={label}
				type='text'
				variant='outlined'
				onChange={handleOwner}
				value={ownerValue}
			/>
		
		</>
	);
};

export default OwnerInput;
