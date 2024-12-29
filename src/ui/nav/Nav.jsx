import {Link} from "react-router-dom";
import useTheme from "../../context/ThemeContext";
import {THEMES} from "../../assets/data";
export default function Nav() {
	const {SetTheme} = useTheme();
	return (
		<header className="md:col-span-10 bg-base-200 rounded-md p-3 border-[0.5px] border-base-300">
			<ul className="flex items-center justify-center h-full md:gap-4">
				<Link to="/">
					<li className="btn btn-ghost rounded-md btn-sm">Home</li>
				</Link>

				<Link to="/skills">
					<li className="btn btn-ghost rounded-md btn-sm">Skills</li>
				</Link>

				<Link to="/projects">
					<li className="btn btn-ghost rounded-md btn-sm">
						Projects
					</li>
				</Link>
				<Link to="/contact">
					<li className="btn btn-ghost rounded-md btn-sm">Contact</li>
				</Link>
				<li className="relative">
					<button className="btn peer btn-sm btn-ghost">
						Theme
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-4">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m19.5 8.25-7.5 7.5-7.5-7.5"
							/>
						</svg>
					</button>
					<div className="absolute hidden peer-hover:block hover:block z-20 top-8 rounded-md right-0 bg-base-100 p-2">
						{THEMES.map((t, i) => (
							<>
								<button
									key={i}
									className="btn btn-block btn-xs btn-ghost"
									onClick={() => SetTheme(t)}>
									{t}
								</button>
							</>
						))}
					</div>
				</li>
			</ul>
		</header>
	);
}
