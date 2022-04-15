interface Props {
	author: string;
    timestamp: number;
    isConsecutive?: boolean;
	fromClient?: boolean;
    repliedMessage?: unknown; // TODO: place message to reply into box
}

export const ChatMessage: React.FC<Props> = ({ fromClient = false, timestamp, author, isConsecutive = false, repliedMessage }) => {
	const colour = fromClient ? "bg-indigo-600" : "bg-gray-700";
	const alignment = fromClient ? "self-end" : "self-start";

	return (
		<>
			<div className={`max-w-md h-auto mx-4 my-1 py-2 px-4 rounded-xl ${colour} ${alignment}`}>
				<h1 className="my-1">{author}</h1>
				<p className="text-left text-white">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo animi esse consequuntur
					unde rem, magni eum eveniet earum iste officiis, suscipit libero laudantium. Explicabo odit
					molestias, cupiditate doloribus ullam illum?
				</p>
				<p className="text-right text-white text-sm opacity-30 noselect">6:30 PM</p>
			</div>
		</>
	);
};
