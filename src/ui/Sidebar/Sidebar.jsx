import {Link} from "react-router-dom";
import {
	socialNetwork,
	RESUMELINK,
	whatsappLink,
	globalEmail,
} from "../../assets/data";
function SocialBtn({value}) {
	return (
		<>
			<Link target="_blank" to={value.link}>
				<button className="btn btn-ghost btn-circle overflow-hidden p-1 hover:bg-transparent">
					<img src={value.icon} alt={value.name} />
				</button>
			</Link>
		</>
	);
}

export default function Sidebar() {
	return (
		<div className="rounded-md border-[0.5px] border-base-300 md:col-span-3 md:row-span-8 md:col-start-1 md:row-start-2 flex flex-col justify-start bg-base-200 overflow-y-scroll no-scrollbar pb-4">
			<div className="h-52 md:h-32 rounded-t-md bg-banner bg-contain">
				<div className="rounded-full size-52 md:size-36 overflow-hidden mx-auto ring-2 ring-base-200 relative top-20 md:top-16">
					<img
						src="user.jpeg"
						className="h-full w-full object-cover object-top"
					/>
				</div>
			</div>

			<div className="text-center pt-24 md:pt-[5.5rem] px-4">
				<h1 className="text-2xl font-bold">Shubham Chauhan</h1>
				<p>Full Stack | Python | Django | React.js | Figma</p>
			</div>

			<div className="flex items-center justify-center gap-0.5 flex-wrap my-6">
				{socialNetwork.map((v, i) => (
					<SocialBtn key={i} value={v} />
				))}
			</div>

			<div className=" px-4">
				<Link target="_blank" to={RESUMELINK}>
					<button className="btn btn-block btn-ghost rounded-md">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-6">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
							/>
						</svg>
						Resume
					</button>
				</Link>

				<Link target="_blank" to={`mailto:${globalEmail}`}>
					<button className="btn btn-block btn-ghost rounded-md">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-6">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
							/>
						</svg>
						Send Mail
					</button>
				</Link>
				{/* <Link target="_blank" to={whatsappLink}>
					<button className="btn btn-block btn-outline btn-primary rounded-md">
						<img alt="" src="whatsapp.svg" />
						Send Message
					</button>
				</Link> */}
			</div>
		</div>
	);
}
