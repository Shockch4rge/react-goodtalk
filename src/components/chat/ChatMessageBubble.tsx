import { useAppSelector } from "../../hooks";
import { Message } from "../../typings";


interface Props {
	message: Message;
}

export const ChatMessageBubble: React.FC<Props> = ({ message }) => {
	const clientId = useAppSelector(state => state.client.user.id);

	console.log(message.author.id);

	const fromClient = message.author.id === clientId;
	const colour = fromClient ? "primary" : "secondary";
	const alignment = fromClient ? "self-end" : "self-start";

	return (
		<div className={`max-w-md h-auto mx-4 my-1 py-2 px-4 rounded-xl msg-bubble-${colour} ${alignment}`}>
			<h1 className="my-1">{message.author.name}</h1>
			<p className="text-left text-white">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo animi esse consequuntur unde
				rem, magni eum eveniet earum iste officiis, suscipit libero laudantium. Explicabo odit
				molestias, cupiditate doloribus ullam illum?
			</p>
			<p className="text-right text-white text-sm opacity-30 noselect">6:30 PM</p>
		</div>
	);
};
