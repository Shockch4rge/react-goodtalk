import { setDialog } from "../app/slices/ui/dialog";
import { ChatMessage } from "../components/common/_index";
import MessageInputBox from "../components/MessageInputBox";
import NavBar from "../components/NavBar";
import { useAppDispatch, useAppSelector } from "../hooks";


export const ChatPage = () => {
	const dispatch = useAppDispatch();
	const rooms = useAppSelector(state => state.chat.rooms);

	return (
		<>
			<div className="flex flex-col h-screen">
				<div className="max-w-full pt-4 overflow-y-scroll">
					<div className="p-4 flex flex-col">
						<ChatMessage fromClient timestamp={42} author={"John Doe"} />
						<ChatMessage fromClient timestamp={42} author={"John Doe"} />
						<ChatMessage timestamp={42} author={"Jane Smith"} />
						<ChatMessage timestamp={42} author={"Jane Smith"} isConsecutive />
						<ChatMessage fromClient timestamp={42} author={"John Doe"} />
						<ChatMessage timestamp={42} author={"Jane Smith"} />
						<ChatMessage timestamp={42} author={"Jane Smith"} />
						<ChatMessage timestamp={42} author={"Jane Smith"} />
						<ChatMessage fromClient timestamp={42} author={"Jane Smith"} />
					</div>
				</div>
				<footer className="w-full h-36">
					<MessageInputBox onChange={msg => console.log(msg)} />
				</footer>
			</div>
		</>
	);
};
