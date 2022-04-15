import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Message } from "../../typings";


export const enum ConnectionState {
	Connecting = "CLIENT_CONNECTING",
	Connected = "CLIENT_CONNECTED",
	Disconnected = "CLIENT_DISCONNECTED",
}

export interface ClientState {
	connection: ConnectionState;
}

const initialState: ClientState = {
	connection: ConnectionState.Disconnected,
};

const clientSlice = createSlice({
	name: "client",
	initialState,
	reducers: {
		clientConnecting: state => {
			state.connection = ConnectionState.Connecting;
		},

		clientConnected: state => {
			state.connection = ConnectionState.Connected;
		},

		sendMessage: (state, action: PayloadAction<Message>) => {},

		deleteMessage: (state, action: PayloadAction<Message>) => {},
	},
});

export const { clientConnected, clientConnecting, deleteMessage, sendMessage } = clientSlice.actions;
export default clientSlice;
