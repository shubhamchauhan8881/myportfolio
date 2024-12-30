import {Outlet} from "react-router-dom";
import Nav from "../ui/nav/Nav";
import Sidebar from "../ui/Sidebar/Sidebar";
import Footer from "../ui/footer/Footer";
import {useEffect} from "react";
import useApp from "../context/AppContext";
import PopUp from "../components/PopUp";

export default function AppLayout() {
	return (
		<>
			<PopUp />
			<div className="grid md:grid-cols-10 md:grid-rows-10 gap-1 md:h-svh max-h-[900px] p-2 ">
				<Nav />
				<Sidebar />
				<div className="myscroll border-[0.5px] border-base-300 bg-base-200 rounded-md md:col-span-7 md:row-span-8 md:col-start-4 md:row-start-2 p-4 overflow-y-scroll">
					<Outlet />
				</div>
				<Footer />
			</div>
		</>
	);
}
