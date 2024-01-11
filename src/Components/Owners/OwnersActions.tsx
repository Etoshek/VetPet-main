import React from 'react';

import ActionOwnButton from './ButtonOwn';
import OwnerInput from './OwnersInputs';

import styled from 'styled-components';

interface OwnersActionProps {
	handleOwnerName: string | undefined;
	handleOwnerNumber: number | undefined;
	handleOwnerEmail: string | undefined;

	ownerNameValue: string | undefined;
	ownerNumberValue: number | undefined;
	ownerEmailValue: string | undefined;

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
				<OwnerInput
					ownerName={ownerNameValue}
					ownerNumber={ownerNumberValue}
					ownerEmail={ownerEmailValue}
					handleNameOwner={handleOwnerName}
					handleOwnerPhoneValue={handleOwnerNumber}
					handleOwnerEmailValue={handleOwnerEmail}
				/>
			</ActionOwnerInput>

			<ActionOwnButton
				textButton='Dodaj pacjenta'
				handleOwnButton={handleAddPetOwn}
			/>
		</ActionOwnerInputs>
	);
};

export default OwnersAction;
