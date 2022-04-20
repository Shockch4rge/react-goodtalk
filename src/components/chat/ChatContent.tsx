import { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";

import {
    ConnectionState, createMessage, requestAllRoomMessages, requestClientData
} from "../../app/slices/client";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { Room } from "../../typings";
import { ChatMessageBubble } from "../common";
import { ChatContentInput } from "./ChatContentInput";
import { ChatContentToolbar } from "./ChatContentToolbar";


interface Props {}

export const ChatContent: React.FC<Props> = () => {
	const roomId = useParams().id!;
	const dispatch = useAppDispatch();

	const client = useAppSelector(state => state.client);
	const room: Room | undefined = useAppSelector(state => state.client.rooms[roomId]);
	const messages = room?.messages;

	useEffect(() => {
		if (client.connection === ConnectionState.Connected) {
			dispatch(requestClientData(localStorage.getItem("clientId")!));
		}
	}, [client.connection]);

	if (!room || !room.messages) {
		return <>Loading...</>;
	}

	return (
		<>
			<ChatContentToolbar />
			<div className="w-full h-full p-6 flex flex-col justify-self-stretch bg-zinc-800 overflow-y-scroll">
				{messages.map(msg => (
					<ChatMessageBubble key={msg.id} message={msg} />
				))}
			</div>
			<ChatContentInput />
		</>
	);
};
