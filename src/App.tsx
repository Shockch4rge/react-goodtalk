import { Provider } from "react-redux";
import { useRoutes } from "react-router-dom";

import store from "./app/store";
import { ChatPage, HomePage } from "./pages";


const App = () => {
	const routes = useRoutes([
		{
			path: "/",
			element: <HomePage />,
		},
		{
			path: "chat",
			element: <ChatPage />,
		},
	]);

	return <Provider store={store}>{routes}</Provider>;
};

export default App;
