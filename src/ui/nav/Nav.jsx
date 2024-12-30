import {Link} from "react-router-dom";
import useTheme from "../../context/AppContext";
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
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-6 text-primary">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
							/>
						</svg>
					</button>
					<div className="absolute hidden peer-hover:grid hover:grid z-30 top-8 rounded-md w-40 anim  right-0 bg-base-100 border border-primary/20 p-2 grid-cols-2">
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
