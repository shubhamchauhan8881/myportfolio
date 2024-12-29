import {Link} from "react-router-dom";
import {projects} from "../assets/data";
const ProjectsCard = ({data}) => {
	return (
		<>
			<div className="group/a">
				<div className="overflow-hidden max-h-60 rounded-2xl relative shadow-xl transition-all duration-300 ease-in-out group-hover/a:shadow-secondary/50">
					<img
						src={data.image}
						className="h-full w-full object-cover object-top aspect-auto group-hover/a:scale-110 transition-all ease-in-out duration-700"
					/>
					<div className="hidden group-hover/a:flex absolute top-0 size-full bg-gradient-to-t from-base-300  to-transparent items-end pb-16 ps-4 justify-start">
						<Link to={data.link} target="_blank">
							<button className="btn btn-sm btn-secondary btn-outline rounded-md">
								<span>Visit Site</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={2}
									stroke="currentColor"
									className="size-5">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
									/>
								</svg>
							</button>
						</Link>
					</div>
					{/* <div className="absolute -bottom-1 left-0 right-0 z-10 h-2 w-0 bg-secondary rounded-full mx-auto group-hover/a:w-[80%] transition-all ease-in-out duration-300" /> */}
				</div>
				<div>
					<h1 className="font-bold relative text-xl transition-all duration-300 group-hover/a:ps-4 group-hover/a:-translate-y-16 group-hover/a:text-secondary">
						{data.name}
					</h1>
				</div>
			</div>
		</>
	);
};

export default function Projects() {
	return (
		<div>
			<span className="badge badge-outline rounded-full badge-primary">
				Projects
			</span>

			<div className="mt-4 grid grid-cols-1 md:grid-cols-1 gap-4">
				{projects.map((data, i) => (
					<ProjectsCard data={data} key={i} />
				))}
			</div>
		</div>
	);
}
