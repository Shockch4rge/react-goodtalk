import { useAppSelector } from "../../hooks";
import { Message } from "../../typings";


interface Props {
	message: Message;
}

export const ChatMessageBubble: React.FC<Props> = ({ message }) => {
	const clientId = useAppSelector(state => state.client.user.id);

	// TODO: REMOVE ts-ignore; SHOULD BE message.author.id
	// @ts-ignore
	const fromClient = message.authorId === clientId;
	const colour = fromClient ? "primary" : "secondary";
	const alignment = fromClient ? "self-end" : "self-start";

	return (
		<div className={`max-w-md h-auto mx-4 my-2 py-2 px-4 rounded-xl chat-msg-primary ${alignment}`}>
			{/* REMOVE ts-ignore HERE TOO */}
			{/* @ts-ignore */}
			<h1 className="my-1">{message.authorId}</h1>
			<p className="text-left text-white">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo animi esse consequuntur unde
				rem, magni eum eveniet earum iste officiis, suscipit libero laudantium. Explicabo odit
				molestias, cupiditate doloribus ullam illum?
			</p>
			<p className="text-right text-white text-sm opacity-30 noselect">6.30pm</p>
		</div>
	);
};
