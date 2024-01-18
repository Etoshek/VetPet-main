import * as React from 'react';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { TransitionGroup } from 'react-transition-group';
import { Chip } from '@mui/material';
// import { useEffect } from 'react';

const ownersArray = ['Abc', 'Xyz', 'Efg', 'Yzx', 'Zyx'];

interface RenderItemOptions {
	ownerName: string;
	handleRemove: (ownerName: string) => void;
}

function renderItem({ ownerName, handleRemove }: RenderItemOptions) {
	return (
		<ListItem
			secondaryAction={
				<IconButton
					edge='end'
					aria-label='delete'
					title='Delete'
					onClick={() => handleRemove(ownerName)}
				>
					<Chip label='Usuń' />
				</IconButton>
			}
		>
			<ListItemText primary={ownerName} />
		</ListItem>
	);
}

function OwnersData() {
	const [ownerName, setOwnerName] = React.useState(ownersArray.slice(5));

	const handleAddOwner = () => {
		const newOwner = ownersArray.find((i) => !ownerName.includes(i));
		if (newOwner) {
			setOwnerName((prev) => [newOwner, ...prev]);
		}
	};

	const handleRemove = (ownerName: string) => {
		setOwnerName((prev) => [...prev.filter((i) => i !== ownerName)]);
	};

	const addOwnerButton = (
		<Button
			variant='contained'
			disabled={ownerName.length >= ownersArray.length}
			onClick={handleAddOwner}
		>
			Dodaj Opiekuna
		</Button>
	);

	return (
		<>
			{addOwnerButton}
			<List sx={{ mt: 1 }}>
				<TransitionGroup>
					{ownerName.map((ownerName) => (
						<Collapse key={ownerName}>
							Imię:{renderItem({ ownerName, handleRemove })}{' '}
						</Collapse>
					))}
				</TransitionGroup>
			</List>
		</>
	);
}

export default OwnersData;

