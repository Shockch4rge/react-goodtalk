interface Props {
	onChange: (message: string) => void;
}

const MessageInputBox: React.FC<Props> = ({ onChange }) => {
	return (
		<>
			<div className="w-full h-full p-4 flex items-center justify-center bg-gray-700">
				<textarea
					onChange={e => onChange(e.target.value)}
					className="py-2 px-3 w-full h-fit rounded-lg bg-slate-600 resize-none text-white"
					minLength={1}
					placeholder="Type a message"
				></textarea>
			</div>
		</>
	);
};

export default MessageInputBox;
