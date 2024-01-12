import React from 'react';
import Owner from './Owner';

export interface OwnerListProps {
	owners: string[]
}

const OwnersList = ({
	owners
}: OwnerListProps) => {
	return (
		<>
		{owners.map((owner:string)=>
			<Owner ownerName={owner}/>
		)}
		</>
	);
};

export default OwnersList;
