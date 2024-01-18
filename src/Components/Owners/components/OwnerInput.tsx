import React from 'react';
import { Input } from '../../common/inputs/Input';

export interface OwnerInputsProps {
	ownerValue?: string;
	handleOwner: any;
	label: string;
}

const OwnerInput = ({ ownerValue, handleOwner, label }: OwnerInputsProps) => {
	return (
		<>
			<Input {...{ label }} onChange={handleOwner} value={ownerValue} />
		</>
	);
};

export default OwnerInput;
