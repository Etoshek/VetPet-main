import { useState } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
// import TextField from '@mui/material/TextField';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

export default function ChoosePet() {
	const [selected, setSelected] = useState();

	const handleChange = (event: SelectChangeEvent) => {
		setSelected(event.target.value as any);
		console.log(`Option selected:`, event.target.value);
	};

	return (
		<Box>
			{/* {selected === 'dog' && (
						<h1>Pies rasy</h1>
					)} */}
			<FormControl sx={{ minWidth: 215 }}>
				<InputLabel id='demo-simple-select-label'>Zwierze</InputLabel>
				<Select
					labelId='demo-simple-select-label'
					id='demo-simple-select'
					value={selected}
					label='Zwierze'
					onChange={handleChange}
				>
					<MenuItem value={'dog'}>Pies</MenuItem>
					<MenuItem value={'cat'}>Kot</MenuItem>
					<MenuItem value={'rabbit'}>Królik</MenuItem>
				</Select>
			</FormControl>
			{/* {selected === 'dog' && (
						<TextField id='outlined-basic' label='Rasa' variant='outlined' />
					)} */}

			<FormControl sx={{ minWidth: 215 }}>
				<InputLabel id='demo-simple-select-label'>Płeć</InputLabel>
				<Select
					labelId='demo-simple-select-label'
					id='demo-simple-select'
					value={selected}
					label='Zwierze'
					onChange={handleChange}
				>
					<MenuItem value={'male'}>On</MenuItem>
					<MenuItem value={'female'}>Ona</MenuItem>
				</Select>
			</FormControl>

			<FormControl sx={{ minWidth: 215 }}>
				<InputLabel id='demo-simple-select-label'>
					Kastracja / Sterylizacja
				</InputLabel>
				<Select
					labelId='demo-simple-select-label'
					id='demo-simple-select'
					value={selected}
					label='Kastracja / Sterylizacja'
					onChange={handleChange}
				>
					<MenuItem value={'yes'}>Tak</MenuItem>
					<MenuItem value={'no'}>Nie</MenuItem>
				</Select>
			</FormControl>
			<FormControl>
				<TextField
					label='Waga'
					id='outlined-start-adornment'
					sx={{ m: 1, width: 215 }}
					InputProps={{
						startAdornment: (
							<InputAdornment position='start'>kg</InputAdornment>
						),
					}}
				/>
			</FormControl>
			<TextField fullWidth label='Przyczyna wizyty' id='fullWidth' />
		</Box>
	);
}
