import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface SnackState {
	open?: boolean;
	message?: string;
	type: "success" | "info" | "warning" | "error";
}

const initialState: SnackState = {
	open: false,
	message: "",
	type: "success",
};

const snackSlice = createSlice({
	name: "snack",
	initialState,
	reducers: {
		createSnack: (state, action: PayloadAction<SnackState>) => {
			return {
				show: action.payload.open ?? true,
				message: action.payload.message ?? state.message ?? "",
				type: action.payload.type ?? state.type ?? "success",
			};
		},
	},
});

export const { createSnack } = snackSlice.actions;
export default snackSlice;
