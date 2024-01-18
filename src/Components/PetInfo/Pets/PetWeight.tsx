export interface PetWeightProps {
	animalWeight: any;
	id: any;
	weight: number | undefined;
	handleWeightAnimal: any;
	handleWeight: any;
}

const PetWeight = ({ 
    animalWeight,
}: PetWeightProps) => {
	return (
    <li>Waga: {animalWeight}</li>
    )
};


export default PetWeight;
