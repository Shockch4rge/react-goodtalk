import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface SnackState {
	text: string;
	type: "success" | "info" | "warning" | "error";
}

const initialState: SnackState = {
	text: "",
	type: "success",
};

const snackSlice = createSlice({
	name: "snack",
	initialState,
	reducers: {
		createSnack: (_, action: PayloadAction<SnackState>) => {
			return {
				text: action.payload.text,
				type: action.payload.type,
			};
		},
	},
});

export const { createSnack } = snackSlice.actions;
export default snackSlice;
