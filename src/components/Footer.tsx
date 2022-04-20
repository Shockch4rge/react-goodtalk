import { FaGithub } from "react-icons/fa";

import { Icon } from "./common";


export const Footer: React.FC = () => {
	return (
		<footer className="w-full h-72 mt-24 flex flex-col justify-center items-center bg-cyan-900">
			<div className="flex">
				<Icon type={FaGithub} url="https://github.com/Shockch4rge/react-goodtalk" />
			</div>
		</footer>
	);
};
