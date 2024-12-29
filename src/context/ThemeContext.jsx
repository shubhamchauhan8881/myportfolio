import {createContext, useContext, useState} from "react";

const ThemeContext = createContext();

const ThemeContextProvider = ({children}) => {
	const [theme, setTheme] = useState(
		localStorage.getItem("theme") ? localStorage.getItem("theme") : "",
	);
	const SetTheme = (name) => {
		localStorage.setItem("theme", name);
		setTheme(name);
	};

	const v = {
		theme,
		SetTheme,
	};
	return (
		<>
			<ThemeContext.Provider value={v}>{children}</ThemeContext.Provider>
		</>
	);
};

const useTheme = () => useContext(ThemeContext);

export default useTheme;
export {ThemeContextProvider};
