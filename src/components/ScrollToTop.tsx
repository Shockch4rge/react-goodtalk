import { useEffect } from "react";
import { useLocation } from "react-router-dom";


interface Props {
	children: React.ReactNode;
}

const ScrollToTop: React.FC<Props> = props => {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return <>{props.children}</>;
};

export default ScrollToTop;
