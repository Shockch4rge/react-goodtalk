import { io, Socket } from "socket.io-client";

import { Action, Middleware } from "@reduxjs/toolkit";

import { ClientEvents, ServerEvents } from "../../typings/events";
import { receivedAllRoomMessages, receivedAllRooms } from "../slices/chat";
import {
    clientConnected, connectClient, ConnectionState, createdMessage, createMessage, deletedMessage,
    deleteMessage, receivedClientData, requestAllRoomMessages, requestAllRooms, requestClientData
} from "../slices/client";
import { AppState } from "../store";


const socketMiddleware: Middleware<{}, AppState> = store => {
	let socket: Socket<ServerEvents, ClientEvents>;

	return next => (action: Action<unknown>) => {
		const isConnected = socket && store.getState().client.connection === ConnectionState.Connected;

		if (connectClient.match(action)) {
			socket = io("http://localhost:4000", {
				withCredentials: true,
			});

			socket.on("connect", () => {
				store.dispatch(clientConnected());
				const id = "cl21tl1dj00073susq35zeits";
				store.dispatch(requestClientData(id));
			});

			socket.on("createdMessage", message => {
				store.dispatch(createdMessage(message));
			});

			socket.on("createdMessage", message => {
				store.dispatch(deletedMessage(message));
			});

			socket.on("sentAllRoomMessages", messages => {
				store.dispatch(receivedAllRoomMessages(messages));
			});

			socket.on("sentAllRooms", rooms => {
				store.dispatch(receivedAllRooms(rooms));
			});

			socket.on("sentClientData", client => {
				store.dispatch(receivedClientData(client));
			});
		}

		if (createMessage.match(action) && isConnected) {
			socket.emit("createMessage", action.payload);
		}

		if (deleteMessage.match(action) && isConnected) {
			socket.emit("deleteMessage", action.payload);
		}

		if (requestAllRooms.match(action) && isConnected) {
			socket.emit("requestAllRooms");
		}

		if (requestAllRoomMessages.match(action) && isConnected) {
			socket.emit("requestAllRoomMessages", action.payload);
		}

		if (requestClientData.match(action) && isConnected) {
			socket.emit("requestClientData", action.payload);
		}

		next(action);
	};
};

export default socketMiddleware;
