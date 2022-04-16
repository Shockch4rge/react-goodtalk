import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface DialogState {
	open: boolean;
}

type DialogTypes = "common"

const initialState: Record<DialogTypes, DialogState> = {
	common: {
		open: false,
	},
};

const dialogSlice = createSlice({
	name: "dialogs",
	initialState,
	reducers: {
		setDialog: (state, action: PayloadAction<{ type: keyof typeof initialState; open: boolean }>) => {
			state[action.payload.type].open = action.payload.open;
		},
	},
});

export const { setDialog } = dialogSlice.actions;
export default dialogSlice;
