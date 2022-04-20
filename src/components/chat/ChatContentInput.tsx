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
			<div className="w-full h-auto p-4 flex items-center justify-center bg-gray-700">
				{/* Input area; we use a div instead of textarea because textarea sucks */}
				<div
					className="text-input w-full p-2 bg-slate-600 text-white"
					onInput={e => setContent(e.currentTarget.textContent!)}
					contentEditable
				></div>
				<button className="btn-primary mx-6 text-white">Send</button>
			</div>
		</>
	);
};
