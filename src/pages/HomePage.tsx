import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Footer } from "../components/Footer";
import NavBar from "../components/NavBar";
import ScrollToTop from "../components/ScrollToTop";
import { useAppDispatch } from "../hooks";


export const HomePage = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	return (
		<ScrollToTop>
			<NavBar />
			<div className="container w-full h-screen p-24">
				<div className="flex flex-col mt-32 gap-14">
					<div className="flex flex-row">
						<h1 className="text-7xl text-white text-center font-black tracking-wider">
							Welcome to GoodTalk.
						</h1>
					</div>

					<div className="flex flex-row gap-6">
						<button
							className="btn-primary text-white text-xl p-5 w-44"
							onClick={() => navigate("/chat/room/cl25tcyk60000twusyatkd7gc")}
						>
							Start chatting
						</button>
						<button
							className="btn-secondary text-blue-600 text-xl p-5 w-44"
							onClick={() =>
								navigate({
									pathname: "/home",
									hash: "#features",
								})
							}
						>
							Features
						</button>
					</div>
				</div>
			</div>

			<div className="container w-full">
				<h1 id="features" className="text-6xl text-center text-white mb-16">
					Features
				</h1>
				<div className="flex flex-row justify-around items-center">
					<div className="w-72 h-72 bg-white"></div>
					<div className="w-72 h-72 bg-white"></div>
					<div className="w-72 h-72 bg-white"></div>
				</div>
			</div>
			<Footer />
		</ScrollToTop>
	);
};
