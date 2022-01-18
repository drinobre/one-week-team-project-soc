import React from "react";
import { useState } from "react";

function NewUserForm() {
	const [fullname, setFullname] = useState("");
	const [nickname, setNickname] = useState("");
	const [city, setCity] = useState("");

	const submitForm = async (e) => {
		e.preventDefault();
		const body = { city, nickname, fullname };
		const response = await fetch("http://localhost:4444/records", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		});
		console.log(response);
	};

	return (
		<div className="NewUserForm">
			<form onSubmit={submitForm}>
				<input
					type="text"
					placeholder="Please enter Full Name..."
					value={fullname}
					onChange={(e) => setFullname(e.target.value)}
				/>

				<input
					type="text"
					placeholder="How do you prefer to be called?"
					value={nickname}
					onChange={(e) => setNickname(e.target.value)}
				/>

				<input
					type="text"
					placeholder="Where are you based..?"
					value={city}
					onChange={(e) => setCity(e.target.value)}
				/>
				<button className="btn btn-success">Add</button>
			</form>
		</div>
	);
}

export default NewUserForm;
