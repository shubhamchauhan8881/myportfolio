import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import HomePage from "./pages/HomePage";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import {AppContextProvider} from "./context/AppContext";
const router = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "/skills",
				element: <Skills />,
			},
			{
				path: "/projects",
				element: <Projects />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<AppContextProvider>
			<RouterProvider router={router} />
		</AppContextProvider>
	</StrictMode>,
);
