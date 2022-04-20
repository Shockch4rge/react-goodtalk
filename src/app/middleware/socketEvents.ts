import { io, Socket } from "socket.io-client";

import { Action, Middleware } from "@reduxjs/toolkit";

import { ClientEvents, ServerEvents } from "../../typings/events";
import {
    clientConnected, connectClient, ConnectionState, createdMessage, createMessage, deletedMessage,
    deleteMessage, receivedAllRoomMessages, receivedClientData, requestAllRoomMessages,
    requestClientData
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

				let clientId = localStorage.getItem("clientId");

				if (clientId) {
					return;
				}

				clientId = "cl25tcykz0007twus1z79sh72";
				localStorage.setItem("clientId", clientId);
				// store.dispatch(requestClientData(clientId));
			});

			socket.on("createdMessage", message => {
				store.dispatch(createdMessage(message));
			});

			socket.on("createdMessage", message => {
				store.dispatch(deletedMessage(message));
			});

			socket.on("sentAllRoomMessages", messages => {
				console.log(messages);

				store.dispatch(receivedAllRoomMessages(messages));
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
