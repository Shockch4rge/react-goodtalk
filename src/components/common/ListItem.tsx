export const ListItem: React.FC = () => {
	return (
		<>
			<div
				className="w-72 h-20 p-2 flex flex-row items-center justify-around gap-4 hover:bg-slate-700"
				draggable={false}
			>
				<div
					className="w-12 h-12 shrink-0 msg-bubble-primary rounded-full"
					draggable={false}
				></div>
				<div className="flex flex-col gap-1 truncate noselect">
					<h1 className="text-white">John Doe Fitzgerald Fazbearington</h1>
					<p className="text-slate-400 text-sm noselect">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde eius, hic autem expedita
						eaque saepe cupiditate sunt animi quas excepturi vero. Repellat magnam obcaecati eum
						rerum suscipit error accusantium facilis.
					</p>
				</div>
			</div>
		</>
	);
};
