import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { FaCheck, FaCross, FaExclamation } from "react-icons/fa";

import { useAppSelector } from "../../hooks";
import { Icon } from "./Icon";


export type SnackTypes = "success" | "error" | "warning" | "info";

const Snacks: Record<SnackTypes, [color: string, icon: React.ReactElement<typeof Icon>]> = {
	success: ["bg-green-400", <Icon type={FaCheck} />],
	error: ["bg-red-400", <Icon type={FaCross} />],
	info: ["bg-blue-400", <Icon type={FaExclamation} />],
	warning: ["bg-yellow-400", <Icon type={FaExclamation} />],
};

export const Snack: React.FC = () => {
	const [open, setOpen] = useState(false);
	const { type, text } = useAppSelector(state => state.ui.snack);
	const [color, icon] = Snacks[type];

	useEffect(() => {
		if (!open) {
			setOpen(true);
			setTimeout(() => setOpen(false), 4000);
		}
	}, [type, text]);

	return open ? (
		<div className={`center-x w-fit h-20 flex flex-nowrap bg-${color} `}>
			<span>
				{icon} {text}
			</span>
		</div>
	) : (
		<></>
	);
};
