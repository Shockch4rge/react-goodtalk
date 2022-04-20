export const ChatContentToolbar = () => {
	return (
		<div className="w-full h-20 flex flex-around items-center bg-gray-800">
			{/* image + room name with members below */}
			<div className="flex gap-6 ml-6">
				<div className="w-12 h-12 shrink-0 msg-bubble-primary rounded-full" />
				<div className="flex flex-col">
					<h1>Room Name</h1>
					{/* limit width and truncate text */}
					<h3 className="max-w-lg h-fit truncate">User 1, User 2, User 3</h3>
				</div>
			</div>

			<div></div>
		</div>
	);
};
