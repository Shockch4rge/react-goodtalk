import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface DialogState {
	open: boolean;
}

interface InitialState {
	type: Record<"common", DialogState>;
}

const initialState: InitialState = {
	type: {
		common: {
			open: false,
		},
	},
};

const dialogSlice = createSlice({
	name: "dialogs",
	initialState,
	reducers: {
		setDialog: (
			state,
			action: PayloadAction<{ type: keyof typeof initialState.type; open: boolean }>
		) => {
			state.type[action.payload.type].open = action.payload.open;
		},
	},
});

export const { setDialog } = dialogSlice.actions;
export default dialogSlice;
