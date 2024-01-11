import { Button } from '@mui/material';

import React from 'react';

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
