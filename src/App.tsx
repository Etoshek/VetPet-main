import React, { useState } from 'react';
import { VetPetManager } from './Components/VetPetManager';
import OwnersData from './Components/Owners/components/OwnersData';
import Tabs from './Components/Tab/Tabs';
import PetInfo from './Components/common/buttons/PetInfo';

function App() {
	const [name, setName] = useState<string>();
	const handleSetName = () => {
		setName(`Jan Kowalski`)
	};
	return (
		<>
			<h1>{name}</h1>
			<VetPetManager ownerName={name} />
			<OwnersData />
			<PetInfo textButton='Umów wizytę' handleFormButton={handleSetName} />
			<Tabs />
		</>
	);
}

export default App;
