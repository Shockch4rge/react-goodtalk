import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Message, Room } from "../../typings";


export interface ChatState {
	rooms: Room[];
	messages: Message[];
	// messages:
}

const initialState: ChatState = {
	rooms: [],
	messages: [],
};

const chatSlice = createSlice({
	name: "chat",
	initialState,
	reducers: {
		messageReceived: (state, action: PayloadAction<Message>) => {
			state.messages.push(action.payload);
		},

		messageDeleted: (state, action: PayloadAction<Message>) => {
			state.messages = state.messages.filter(msg => msg.id !== action.payload.id);
		},

		receivedAllRoomMessages: (state, action: PayloadAction<Message[]>) => {
			state.messages = action.payload;
		},
	},
});

export const { messageReceived, messageDeleted, receivedAllRoomMessages } = chatSlice.actions;

export default chatSlice;
