import {useState} from "react";
import {WEB3APIKEY, globalEmail, globalPhone} from "../assets/data";
import useApp from "../context/AppContext";

const ContactForm = () => {
	const {setMessage} = useApp();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const onSubmit = async (event) => {
		event.preventDefault();
		setIsSubmitting(true);
		try {
			const formData = new FormData(event.target);

			formData.append("access_key", WEB3APIKEY);

			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				body: formData,
			});
			const data = await response.json();
			if (data.success) {
				event.target.reset();
				setMessage("Success! Your request has been sent.");
			} else {
				setMessage("Failed to send message!");
			}
		} catch {
			setMessage("Error");
		} finally {
			setIsSubmitting(false);
		}
	};
	return (
		<div>
			<form
				onSubmit={onSubmit}
				className="w-full grid grid-cols-2 gap-4 ">
				<input
					required
					type="text"
					name="name"
					placeholder="Your name"
					className="border border-secondary/20 bg-transparent rounded-md p-4 outline-none focus:border-secondary"
				/>
				<input
					required
					type="email"
					name="email"
					placeholder="Your email address"
					className="border border-secondary/20 bg-transparent rounded-md p-4 outline-none focus:border-secondary"
				/>
				<textarea
					required
					name="message"
					placeholder="What's in your mind?"
					className="border border-secondary/20 bg-transparent rounded-md p-4 outline-none focus:border-secondary col-span-2"></textarea>

				<button
					disabled={isSubmitting}
					type="submit"
					className="btn btn-secondary btn-outline border-secondary/20">
					{isSubmitting ? "Submitting..." : "Submit Form"}
				</button>
			</form>
		</div>
	);
};

export default function Contact() {
	return (
		<div>
			<span className="badge badge-outline rounded-full badge-primary">
				Contact Me
			</span>
			<div className="mt-4 flex flex-wrap gap-4">
				{/* <div className="rounded-full p-2 px-4 border border-secondary inline-flex items-center justify-start gap-4">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="size-6 text-secondary">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
						/>
					</svg>
					<p>{globalPhone}</p>
				</div> */}
				<div className="rounded-full p-2 px-4 border border-secondary inline-flex items-center justify-start gap-4">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="size-6 text-secondary">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
						/>
					</svg>

					<p>{globalEmail}</p>
				</div>
			</div>

			<div className="divider my-8">Or you can fill this form</div>
			<ContactForm />
		</div>
	);
}
