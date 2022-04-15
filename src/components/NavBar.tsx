import { Button } from "./common/_index";


const NavBar = () => {
	return (
		<>
			<div className="w-full h-20 py-4 px-14 bg-indigo-800 flex justify-center md:justify-between items-center">
				<div>
					<h1 className="text-center md:text-left text-3xl md:text-5xl text-indigo-500 font-black">
						GoodTalk
					</h1>
				</div>

				<div className="hidden md:flex items-center justify-evenly gap-3">
					<Button color="primary">Sign Up</Button>
					<Button color="primary">Sign Up</Button>
				</div>
			</div>
		</>
	);
};

export default NavBar;
