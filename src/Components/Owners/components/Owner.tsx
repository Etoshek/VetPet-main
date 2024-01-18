interface OwnerProps {
	ownerName: string;
}

const Owner = ({ ownerName }: OwnerProps) => {
	return <p>{ownerName}</p>;
};

export default Owner;
