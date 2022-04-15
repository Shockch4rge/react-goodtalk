import { io, Socket } from "socket.io-client";

import { Middleware } from "@reduxjs/toolkit";

import { ClientEvents, ServerEvents } from "../../typings/events";
import { messageDeleted, messageReceived } from "../slices/chat";
import {
    clientConnected, clientConnecting, ConnectionState, deleteMessage, sendMessage
} from "../slices/client";
import { AppState } from "../store";


const socketMiddleware: Middleware<{}, AppState> = store => {
	let socket: Socket<ServerEvents, ClientEvents>;

	return next => action => {
		const isConnected = socket && store.getState().client.connection === ConnectionState.Connected;

		if (clientConnecting.match(action)) {
			socket = io("http://localhost:4000");

			socket.on("connect", () => {
				store.dispatch(clientConnected());
			});

			socket.on("messageReceived", message => {
				store.dispatch(messageReceived(message));
			});

			socket.on("messageDeleted", message => {
				store.dispatch(messageDeleted(message));
			});
		}

		if (sendMessage.match(action) && isConnected) {
			socket.emit("messageCreate", action.payload);
		}

		if (deleteMessage.match(action) && isConnected) {
			socket.emit("messageDelete", action.payload);
		}

		next(action);
	};
};

export default socketMiddleware;
