import {Outlet} from "react-router-dom";
import Nav from "../ui/nav/Nav";
import Sidebar from "../ui/Sidebar/Sidebar";
import Footer from "../ui/footer/Footer";
import {useEffect} from "react";
import useTheme from "../context/ThemeContext";

export default function AppLayout() {
	const {theme} = useTheme();

	useEffect(() => {
		document.getElementById("html")?.setAttribute("data-theme", theme);
	}, [theme]);
	return (
		<div className="grid md:grid-cols-10 md:grid-rows-10 gap-1 md:h-svh p-2 ">
			<Nav />
			<Sidebar />
			<div className="myscroll bg-base-200 rounded-md md:col-span-7 md:row-span-8 md:col-start-4 md:row-start-2 p-4 overflow-y-scroll">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
}
