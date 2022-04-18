import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Message, Room, User } from "../../typings";
import { AppState } from "../store";


export const enum ConnectionState {
	Connecting = "CLIENT_CONNECTING",
	Connected = "CLIENT_CONNECTED",
	Disconnected = "CLIENT_DISCONNECTED",
}

export interface ClientState {
	user: Omit<User, "rooms">;
	rooms: Record<string, Room>;
	connection: ConnectionState;
}

const initialState: ClientState = {
	user: {
		id: "",
		name: "",
	},
	rooms: {},
	connection: ConnectionState.Disconnected,
};

const clientSlice = createSlice({
	name: "client",
	initialState,
	reducers: {
		connectClient: state => {
			state.connection = ConnectionState.Connecting;
		},

		clientConnected: state => {
			state.connection = ConnectionState.Connected;
		},

		requestClientData: (_, __: PayloadAction<string>) => {},

		receivedClientData: (state, action: PayloadAction<User>) => {
			const { id, name, rooms } = action.payload;

			state.user.id = id;
			state.user.name = name;

			for (const room of rooms) {
				state.rooms[room.id] = room;
			}
		},

		requestAllRoomMessages: (_, __: PayloadAction<string>) => {},

		receivedAllRoomMessages: (state, action: PayloadAction<Message[]>) => {
			const messages = action.payload;
			state.rooms[messages[0].room.id].messages = messages;
		},

		createMessage: (_, __: PayloadAction<Omit<Message, "id" | "createdAt">>) => {},

		createdMessage: (state, action: PayloadAction<Message>) => {
			const { room } = action.payload;

			if (!(room.id in state.rooms)) return;

			state.rooms[room.id].messages.push(action.payload);
		},

		deleteMessage: (_, __: PayloadAction<Message>) => {},

		deletedMessage: (state, action: PayloadAction<Message>) => {
			const { room } = action.payload;

			if (!(room.id in state.rooms)) return;

			const roomMessages = state.rooms[room.id].messages;
			const foundIndex = roomMessages.findIndex(msg => msg.id === action.payload.id);

			if (foundIndex) {
				roomMessages.splice(foundIndex, 1);
			}
		},
	},
});

export const {
	clientConnected,
	connectClient,
	requestAllRoomMessages,
	receivedAllRoomMessages,
	deleteMessage,
	deletedMessage,
	createMessage,
	createdMessage,
	requestClientData,
	receivedClientData,
} = clientSlice.actions;

export default clientSlice;
