import React from 'react';
import { VetPetManager } from './Components/VetPetManager';
import OwnersData from './Components/Owners/OwnersData';
import PetInfo from './Components/PetInfo/PetInfo';


function App() {
	return (
		<>
			<VetPetManager />
			<OwnersData/>
			<PetInfo/>
		</>
	);
}

export default App;
