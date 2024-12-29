import {skills} from "../assets/data";

const C = ({sk}) => {
	return (
		<>
			<div className="inline-flex flex-wrap gap-6 justify-center items-center">
				<div className="group relative flex flex-col gap-4 w-36 h-40 bg-gradient-to-b from-base-100 to-base-300 hover:to-secondary/20 rounded-2xl p-4 shadow-xl border-2 border-transparent transition-all duration-300 ease-in-out hover:border-secondary hover:shadow-secondary/20 hover:translate-y-[-0.2rem]">
					<div className="">
						<div className="w-12 h-12 mx-auto bg-secondary/10 rounded-lg border-2 border-secondary/40 group-hover:border-secondary group-hover:bg-secondary/30 transition-all duration-300">
							<div className="flex flex-col gap-1 p-2">
								<div className="h-1 w-8 bg-secondary rounded-full" />
								<div className="h-1 w-4 bg-secondary rounded-full" />
								<div className="h-1 w-6 bg-secondary rounded-full" />
							</div>
						</div>
					</div>
					<div className="text-center">
						<p className="font-medium text-sm group-hover:text-secondary transition-colors duration-300">
							{sk.name}
						</p>
						<p className="text-xs mt-1 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
							{sk.exp}
						</p>
					</div>
					<div className="shrink-0 absolute -bottom-1 left-0 right-0 z-10 h-2 w-0 bg-secondary rounded-full mx-auto group-hover:w-[80%] transition-all ease-in-out duration-300" />
				</div>
			</div>
		</>
	);
};

const SkillCard = ({data}) => {
	return (
		<div>
			<span className="badge badge-outline rounded-full badge-primary mb-4">
				{data.category}
			</span>

			<div className="flex justify-start gap-2 items-start flex-wrap pb-8">
				{data.data.map((sk, i) => (
					<C key={i} sk={sk} />
				))}
			</div>
		</div>
	);
};

export default function Skills() {
	return (
		<>
			<div>
				{skills.map((sk, i) => (
					<SkillCard key={i} data={sk} />
				))}
			</div>
		</>
	);
}
