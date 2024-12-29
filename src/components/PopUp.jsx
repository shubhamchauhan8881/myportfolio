import useApp from "../context/AppContext";
const PopUp = () => {
	const {message} = useApp();

	if (message) {
		return (
			<div
				role="alert"
				className="bg-success p-4 text-primary-content flex items-center gap-2 justify-start anim fixed top-2 z-50 right-2 left-2 max-w-96 mx-auto rounded-md">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6 shrink-0 stroke-current"
					fill="none"
					viewBox="0 0 24 24">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
				<span>{message}</span>
			</div>
		);
	}
};

export default PopUp;
