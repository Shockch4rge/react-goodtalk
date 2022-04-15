interface Props extends React.HTMLAttributes<HTMLButtonElement> {
	color: "primary" | "secondary";
}

export const Button: React.FC<Props> = props => {
	const { children, color } = props;

	let _color: string;

	switch (color) {
        case "primary":
            _color = "bg-indigo-500 hover:bg-indigo-400";
            break;
        case "secondary":
            _color = "bg-gray-500 hover:bg-gray-400";
            break;
		default:
			_color = "bg-gray-500 hover:bg-gray-400";
			break;
	}

	return (
		<button className={`min-w-min w-24 p-2 ${_color} rounded-md text-white`} {...props}>
			{children}
		</button>
	);
};
