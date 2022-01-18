import React from "react";
import { useState } from "react";

function NewUserForm() {
	const [fullname, setFullname] = useState("");
	const [nickname, setNickname] = useState("");
	const [city, setCity] = useState("");
	const [hobbies, setHobbies] = useState("");

	const submitForm = async (e) => {
		e.preventDefault();
		const body = { fullname, nickname, city, hobbies };
		const response = await fetch("", {
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
					placeholder="Please enter your Full Name..."
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
					placeholder="Where are you based...?"
					value={city}
					onChange={(e) => setCity(e.target.value)}
				/>
				<input
					type="text"
					placeholder="Got any hobbies...?"
					value={hobbies}
					onChange={(e) => setHobbies(e.target.value)}
				/>
				<button className="btn btn-success">Add</button>
			</form>
		</div>
	);
}

export default NewUserForm;
