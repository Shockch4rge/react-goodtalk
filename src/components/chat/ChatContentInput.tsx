import { useCallback, useState } from "react";
import { useParams } from "react-router-dom";

import { createMessage } from "../../app/slices/client";
import { useAppDispatch, useAppSelector } from "../../hooks";


interface Props {
	// onSubmit: (message: string) => void;
}

export const ChatContentInput: React.FC<Props> = ({}) => {
	const roomId = useParams().id!;
	const dispatch = useAppDispatch();
	const [content, setContent] = useState("");

	return (
		<>
			<div className="w-full h-full p-4 flex items-center justify-center bg-gray-700">
				<textarea
					onChange={e => setContent(e.target.value)}
					// onSubmit={e => onSubmit(e.currentTarget.value)}
					className="py-2 px-3 w-full h-fit rounded-lg bg-slate-600 resize-none text-white"
					minLength={1}
					placeholder="Type a message"
				></textarea>
			</div>

			<button onClick={() => { }}>Send Message</button>
		</>
	);
};
