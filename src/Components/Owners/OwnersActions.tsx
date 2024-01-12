import React from 'react';

import ActionOwnButton from './ButtonOwn';
import OwnerInput from './OwnerInput';

import styled from 'styled-components';

interface OwnersActionProps {
	handleOwnerName: any;
	handleOwnerNumber: any;
	handleOwnerEmail: any;
	ownerNameValue: string | undefined;
	ownerNumberValue: number | undefined;
	ownerEmailValue: string | undefined;
	handleAddActionPeoples: any;

	handleAddPetOwn: any;
}
const ActionOwnerInputs = styled.div`
	display: flex;
`;

const ActionOwnerInput = styled.div`
	margin-right: 20px;
`;

const OwnersAction = ({
	handleOwnerName,
	handleOwnerNumber,
	handleOwnerEmail,

	ownerNameValue,
	ownerNumberValue,
	ownerEmailValue,

	handleAddPetOwn,
}: OwnersActionProps) => {
	return (
		<ActionOwnerInputs>
			<ActionOwnerInput>
				{/* <OwnerInput
					ownerName={ownerNameValue}
					ownerNumber={ownerNumberValue}
					ownerEmail={ownerEmailValue}
					handleNameOwner={handleOwnerName}
					handleOwnerPhoneValue={handleOwnerNumber}
					handleOwnerEmailValue={handleOwnerEmail}
					ownersValue={undefined}
				/> */}
			</ActionOwnerInput>

			<ActionOwnButton
				textButton='Dodaj pacjenta'
				handleOwnButton={handleAddPetOwn}
			/>
		</ActionOwnerInputs>
	);
};

export default OwnersAction;
