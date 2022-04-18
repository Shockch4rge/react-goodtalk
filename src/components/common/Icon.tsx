import { IconType } from "react-icons/lib";


interface Props {
	type: IconType;
	url?: string;
}

export const Icon: React.FC<Props> = props => {
	return (
		<props.type
			className={`max-w-full hover:fill-subtext ${props.url ? "cursor-pointer" : ""}`}
			size="2em"
			onClick={() => window.open(props.url)}
		/>
	);
};
