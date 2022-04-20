const NavBar: React.FC = () => {
	return (
		<div className="w-full h-20 py-4 px-14 bg-cyan-500 backdrop-blur-lg flex justify-center md:justify-between items-center">
			<div>
				<h1 className="text-center md:text-left text-3xl md:text-5xl text-white font-black">
					GoodTalk
				</h1>
			</div>

			<div className="hidden md:flex items-center justify-evenly gap-3">
				<button className="btn-primary text-white">Sign Up</button>
				<button className="btn-secondary text-blue-500">Login</button>
			</div>
		</div>
	);
};

export default NavBar;
