import { Button} from '@mui/material';
import { useState } from 'react';
import ChoosePet from '../../PetInfo/ChoosePet';

interface FormProps {
	handleFormButton: any;
	textButton: string | undefined;
}

const PetInfo = ({ handleFormButton, textButton }: FormProps) => {
	const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
	const FormVisibility = () => {
		setIsFormVisible((prevVisibility) => !prevVisibility);
		handleFormButton()
	};
	return (
	
			<>
				{isFormVisible && (
					<form>
						<h1>Podstawowe Informacje</h1>
						<h3>Dane Pacjenta</h3>
						<ChoosePet />
					</form>
				)}
				<Button variant='outlined' onClick={FormVisibility}>
					{textButton}
				</Button>
			</>
	
	);
};

export default PetInfo;
