import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ChoosePet() {
	return (
		<>
		
			<FormControl id='petKind'>
				<InputLabel id='demo-simple-select-helper-label'>Gatunek</InputLabel>
				<Select
					sx={{ m: 1, minWidth: 120 }}
					labelId='demo-simple-select-helper-label'
					id='demo-simple-select-helper'
				>
					<MenuItem value=''>{/* <em>None</em> */}</MenuItem>
					<MenuItem value={10}>Pies</MenuItem>
					<MenuItem value={20}>Kot</MenuItem>
					{/* <MenuItem value={30}>Thirty</MenuItem> */}
				</Select>
				{/* <FormHelperText>Gatunek</FormHelperText> */}
			</FormControl>

			<FormControl id='petGender'>
				<InputLabel id='demo-simple-select-helper-label'>Płeć</InputLabel>
				<Select
					sx={{ m: 1, minWidth: 120 }}
					labelId='demo-simple-select-helper-label'
					id='demo-simple-select-helper'
				>
					<MenuItem value=''>{/* <em>None</em>  */}</MenuItem>
					<MenuItem value={10}>Suczka/Kotka</MenuItem>
					<MenuItem value={20}>Pies/Kocur</MenuItem>
					{/* <MenuItem value={30}>Thirty</MenuItem> */}
				</Select>
				{/* <FormHelperText>Gatunek</FormHelperText> */}
			</FormControl>
		</>
	);
}
