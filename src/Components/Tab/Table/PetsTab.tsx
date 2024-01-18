import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createPetsTab(
  animalName: string, 
  ownerName: string, 
  visit: string) {
	return { animalName, ownerName, visit };
}

const rows = [
	createPetsTab(
		'Daniel Tomaszewski',
		'Frozen',
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
	),
	createPetsTab(
		'Bianka Jakubowska',
		'Ice',
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
	),
	createPetsTab(
		'Ewelina Wróblewska',
		'Eclair',
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
	),
	createPetsTab(
		'Michał Zalewski',
		'Cupcake',
		'Nulla facilisi cras fermentum odio eu. Dignissim suspendisse in est ante.'
	),
	createPetsTab(
		'Liliana Cieślak',
		'Gingerbread',
		'Id neque aliquam vestibulum morbi blandit cursus.'
	),
];

export default function PetsTab() {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell>Imię i nazwisko właściciela</TableCell>
						<TableCell align='right'>Imię zwierzaka</TableCell>
						<TableCell align='right'>Przyczyny wizyty</TableCell>
						<TableCell align='right'></TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow
							key={row.animalName}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<TableCell component='th' scope='row'>
								{row.animalName}
							</TableCell>
							<TableCell align='right'>{row.ownerName}</TableCell>
							<TableCell align='right'>{row.visit}</TableCell>
							<TableCell align='right'>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
