import React from 'react';

import { Button } from '@mui/material';

interface ButtonOwnProps {
	handleOwnButton: any;
	textButton: string | undefined;
}
const ActionOwnButton = ({ handleOwnButton, textButton }: ButtonOwnProps) => {
	return (
		<>
			<Button variant='outlined' onClick={handleOwnButton}>
				{textButton}
			</Button>
		</>
	);
};

export default ActionOwnButton;
