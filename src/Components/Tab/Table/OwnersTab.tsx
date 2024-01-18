import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createOwnersTab(
	ownerName: string,
	number: number,
	email: string,
    street: string,
	pets: string
) {
	return { ownerName, number, email,street, pets };
}

const rows = [
	createOwnersTab('Daniel Tomaszewski', 123456678, 'gmail@gmail.com','ul. Szaserów 37', 'Frozen'),
	createOwnersTab('Bianka Jakubowska', 466423427, 'gmail@gmail.com','ul. Konopnickiej Marii 6', 'Ice'),
	createOwnersTab('Ewelina Wróblewska',188589750, 'gmail@gmail.com','ul. Włościańska 115', 'Eclair'),
	createOwnersTab('Michał Zalewski', 112348035, 'gmail@gmail.com','ul. Pryncypalna 12', 'Cupcake'),
	createOwnersTab('Liliana Cieślak', 234567543, 'gmail@gmail.com','ul. Beskidzka 56', 'Gingerbread'),
];

export default function OwnersTab() {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell>Imię i nazwisko właściciela</TableCell>
						<TableCell align='right'>Numer telefonu</TableCell>
						<TableCell align='right'>E-mail</TableCell>
						<TableCell align='right'>Adres zamieszkania</TableCell>
						<TableCell align='right'>Zwierzaki</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow
							key={row.ownerName}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<TableCell component='th' scope='row'>
								{row.ownerName}
							</TableCell>
							<TableCell align='right'>{row.number}</TableCell>
							<TableCell align='right'>{row.email}</TableCell>
							<TableCell align='right'>{row.street}</TableCell>
							<TableCell align='right'>{row.pets}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
