import { useEffect } from "react";
import { useRoutes } from "react-router-dom";

import { connectClient, ConnectionState } from "./app/slices/client";
import { Snack } from "./components/common/Snack";
import { useAppDispatch, useAppSelector } from "./hooks";
import { ChatPage, HomePage, NotFoundPage } from "./pages";


const App = () => {
	const dispatch = useAppDispatch();
	const socketConnection = useAppSelector(state => state.client.connection);

	useEffect(() => {
		if (socketConnection === ConnectionState.Disconnected) {
			dispatch(connectClient());
		}
	}, []);

	const routes = useRoutes([
		{
			path: "/",
			element: <HomePage />,
		},
		{
			path: "/chat",
			children: [
				{
					path: "room/:id",
					element: <ChatPage />,
				},
			],
		},
		{
			path: "*",
			element: <NotFoundPage />,
		},
	]);

	return (
		<>
			{routes}
			<Snack />
		</>
	);
};

export default App;
