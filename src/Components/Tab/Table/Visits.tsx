import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createVisits(ownerName: string, date: number, time: number) {
	return { ownerName, date, time };
}

const rows = [
	createVisits('Daniel Tomaszewski', 1.02, 10.30),
	createVisits('Bianka Jakubowska', 1.02, 14.0),
	createVisits('Ewelina Wróblewska', 3.02, 8.0),
	createVisits('Michał Zalewski', 3.02, 12.0),
	createVisits('Liliana Cieślak', 4.02, 13.0),
];

export default function Visits() {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell>Umówione wizyty</TableCell>
						{/* <TableCell align='right'>Imię i nazwisko</TableCell> */}
						<TableCell align='right'>Data</TableCell>
						<TableCell align='right'>Godzina</TableCell>
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
							{/* <TableCell align='right'>{row.ownerName}</TableCell> */}
							<TableCell align='right'>{row.date}</TableCell>
							<TableCell align='right'>{row.time}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
