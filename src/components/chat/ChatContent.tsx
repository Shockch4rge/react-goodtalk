import { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";

import { createMessage, requestAllRoomMessages } from "../../app/slices/client";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { MessageBubble } from "../common";
import { ChatList } from "./ChatList";


interface Props {}

export const ChatContent: React.FC<Props> = () => {
	const roomId = useParams().id!;
	const dispatch = useAppDispatch();

	const client = useAppSelector(state => state.client.user);
	const messages = useAppSelector(state => state.client.rooms[roomId].messages);

	useEffect(() => {
		dispatch(requestAllRoomMessages(roomId));
	}, []);

	return (
		<>
			<div className="flex flex-col h-screen">
				<div className="max-w-full pt-4 overflow-y-scroll">
					<div className="p-4 flex flex-col">
						{messages.map(msg => (
							<MessageBubble key={msg.id} message={msg} />
						))}
					</div>
				</div>
				<footer className="w-full h-36">
					<ChatList users={[]}/>
				</footer>
			</div>
		</>
	);
};
