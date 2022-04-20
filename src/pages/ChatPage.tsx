import { useEffect } from "react";

import * as Chat from "../components/chat";
import { useAppDispatch } from "../hooks";


export const ChatPage = () => {
	const dispatch = useAppDispatch();

	return (
		<div className="w-screen h-screen grid grid-cols-4 grid-rows-4">
			<div className="col-span-1 row-span-4 bg-white">{/* <Chat.List users={[]} /> */}</div>
			<div className="col-span-3 row-span-4 bg-white flex flex-col">
				<Chat.Content />
			</div>
		</div>
	);
};
