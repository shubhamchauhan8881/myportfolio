import {faqs, offerings} from "../assets/data";

const OfferingCard = ({value, index}) => {
	return (
		<div className="rounded-md border-2 shadow-md hover:shadow-secondary border-secondary/5 transition-all duration-300 group hover:border-secondary p-8 space-y-2 relative overflow-hidden">
			<div className="size-20 transition-all duration-150 bg-secondary/5 rounded-full absolute -right-5 -top-7  group-hover:right-0 group-hover:top-0 group-hover:h-full group-hover:w-full group-hover:rounded-none">
				<p className="absolute bottom-4 left-6 group-hover:hidden text-secondary text-xl">
					0{index + 1}
				</p>
			</div>
			<div className="fill-secondary size-12">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					id="Layer_1"
					data-name="Layer 1"
					viewBox="0 0 24 24">
					<path d="m24,6.928v13.072h-11.5v3h5v1H6.5v-1h5v-3H0V4.5c0-1.379,1.122-2.5,2.5-2.5h12.98c-.253.295-.54.631-.856,1H2.5c-.827,0-1.5.673-1.5,1.5v14.5h22v-10.993l1-1.079Zm-12.749,3.094C19.058.891,19.093.855,19.11.838c1.118-1.115,2.936-1.113,4.052.002,1.114,1.117,1.114,2.936,0,4.052l-8.185,8.828c-.116,1.826-1.623,3.281-3.478,3.281h-5.59l.097-.582c.043-.257,1.086-6.16,5.244-6.396Zm2.749,3.478c0-1.379-1.122-2.5-2.5-2.5-2.834,0-4.018,3.569-4.378,5h4.378c1.378,0,2.5-1.121,2.5-2.5Zm.814-1.073l2.066-2.229c-.332-1.186-1.371-2.057-2.606-2.172-.641.749-1.261,1.475-1.817,2.125,1.117.321,1.998,1.176,2.357,2.277Zm.208-5.276c1.162.313,2.125,1.134,2.617,2.229l4.803-5.18c.737-.741.737-1.925.012-2.653-.724-.725-1.908-.727-2.637,0-.069.08-2.435,2.846-4.795,5.606Z" />
				</svg>
			</div>
			<h1 className="font-bold group-hover:text-secondary">
				{value.title}
			</h1>
			<p className="text-sm leading-6 group-hover:text-secondary">
				{value.text}
			</p>
		</div>
	);
};

const Accordion = ({value}) => {
	return (
		<div className="mt-1">
			<div className="collapse collapse-arrow border border-primary/15">
				<input type="radio" name="my-accordion" />
				<div className="collapse-title text-md font-medium">
					{value.question}
				</div>
				<div className="collapse-content">
					<p>{value.answer}</p>
				</div>
			</div>
		</div>
	);
};

export default function HomePage() {
	return (
		<>
			<div>
				<span className="badge badge-outline rounded-full badge-primary mb-4">
					Introduction!
				</span>
				<p className="text-3xl md:text-4xl font-bold">
					Hello, I&apos;m&nbsp;
					<span className="text-primary">Shubham Chauhan</span> — Web
					Developer & Software Engineer
				</p>
				<p className="mt-2">
					I build high-performance websites and software solutions
					with a focus on innovation and great user experiences.
					Turning ideas into reality through clean, effective code is
					what I do best.
				</p>
			</div>

			<div className="mt-8">
				<span className="badge badge-outline rounded-full badge-primary">
					Explore my Offerings!
				</span>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
					{offerings.map((value, i) => (
						<OfferingCard key={i} index={i} value={value} />
					))}
				</div>
			</div>

			<div className="mt-8">
				<span className="badge badge-outline rounded-full badge-primary mb-4">
					Frequently Asked Questions!
				</span>
				{faqs.map((value, i) => (
					<Accordion key={i} value={value} />
				))}
			</div>
		</>
	);
}