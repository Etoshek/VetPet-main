import { useState } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function ChoosePet() {
	const [selected, setSelected] = useState();

	const handleChange = (event: SelectChangeEvent) => {
		setSelected(event.target.value as any);
		console.log(`Option selected:`, event.target.value);
	};

	return (
		<Box>
			{selected === 'dog' && <h1>Pies123</h1>}
			<FormControl sx={{ minWidth: 180 }}>
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

			<FormControl sx={{ minWidth: 180 }}>
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

			<FormControl sx={{ minWidth: 180 }}>
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
		</Box>
	);
}
