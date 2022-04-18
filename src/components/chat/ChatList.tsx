import { User } from "../../typings";
import { ListItem } from "../common";


interface Props {
	users: User[];
}

export const ChatList: React.FC<Props> = props => {
	return (
		<div className="flex flex-col h-full">
			<div>
				<input type="text" />
			</div>
			<div className="max-w-full pt-4 overflow-y-scroll">
				<div className="divide-y divide-gray-700">
					<ListItem />
					<ListItem />
					<ListItem />
				</div>
			</div>
		</div>
	);
};
