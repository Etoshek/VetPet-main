import React, { useState } from 'react';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from './ChoosePet';

// import FormControl from '@mui/material/FormControl';
// import PacientData from '../PacientData';

const PetInfo: React.FC = () => {
	const [isFormVisible, setIsFormVisible] = useState<boolean>(false);

	const toggleFormVisibility = () => {
		setIsFormVisible((prevVisibility) => !prevVisibility);
	};

	return (
		<>
			{isFormVisible && (
				<form>
					<h1>Podstawowe Informacje</h1>
					<h3>Dane Pacjenta</h3>
					{/* <FormControl id='petKind'>
						<InputLabel>
							<MenuItem />
						</InputLabel>
					</FormControl> */}

					{/* <FormControl id='petGender'> */}
					<InputLabel>
						<MenuItem />
					</InputLabel>
					{/* </FormControl> */}

					<label>
						<TextField
							label='Waga'
							id='outlined-start-adornment'
							sx={{ m: 1, width: '25ch' }}
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>kg</InputAdornment>
								),
							}}
						/>
					</label>
					<label>
						<TextField fullWidth label='Przyczyna wizyty' id='fullWidth' />
					</label>
					<h3>Dane Właściciela</h3>
					
						{' '}
						<TextField id='outlined-basic' label='Imię' variant='outlined' />
						<TextField
							id='outlined-basic'
							label='Nazwisko'
							variant='outlined'
						/>
			

				
						<TextField
							id='outlined-basic'
							label='Numer telefonu'
							variant='outlined'
						/>
						<TextField
							id='outlined-basic'
							label='Adres zamieszkania'
							variant='outlined'
						/>
					
					<TextField
						id='outlined-basic'
						label='Adres Email'
						variant='outlined'
					/>
				</form>
			)}
			<Button onClick={toggleFormVisibility}>Zatwierdź</Button>
		</>
	);
};
export default PetInfo;

// Imię i Nazwisko