import React from 'react';

export interface OwnerHeaderProps {
	headerText: string;
	subheaderText?: string;
	ownerName: string | undefined | any;
}

const OwnerHeaders = ({
	headerText,
	subheaderText,
	ownerName,
}: OwnerHeaderProps) => {
	return (
		<>
			<h1>
				{headerText} {ownerName}
			</h1>
			<h2>{subheaderText}</h2>
		</>
	);
};

export default OwnerHeaders;
