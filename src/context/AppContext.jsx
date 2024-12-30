import {createContext, useContext, useEffect, useState} from "react";

const AppContext = createContext();

const AppContextProvider = ({children}) => {
	const [theme, setTheme] = useState(
		localStorage.getItem("theme") ? localStorage.getItem("theme") : "",
	);
	const SetTheme = (name) => {
		localStorage.setItem("theme", name);
		setTheme(name);
	};

	const [message, setMessage] = useState("");

	useEffect(() => {
		if (theme) {
			document.getElementById("html")?.setAttribute("data-theme", theme);
		}

		if (message !== "") {
			setTimeout(() => {
				setMessage("");
			}, 2500);
		}
	}, [message, theme]);

	const v = {
		theme,
		SetTheme,
		message,
		setMessage,
	};
	return (
		<>
			<AppContext.Provider value={v}>{children}</AppContext.Provider>
		</>
	);
};

const useApp = () => useContext(AppContext);

export default useApp;
export {AppContextProvider};
