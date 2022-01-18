import React from "react";
import { useState } from "react";

function NewUserForm() {
	const [fullName, setFullName] = useState("");
	CONST;

	return (
		<div className="NewUserForm">
			<form onSubmit={submitForm}>
				<input
					type="text"
					placeholder="Full Name"
					value={fullName}
					onChange={(e) => setFullName(e.target.value)}
				/>

				<input
					type="text"
					placeholder="Nickname"
					value={nickname}
					onChange={(e) => setNickname(e.target.value)}
				/>

				<input
					type="text"
					placeholder="Digitalised?"
					value={city}
					onChange={(e) => setCity(e.target.value)}
				/>
				<button className="btn btn-success">Add</button>
			</form>
		</div>
	);
}

export default NewUserForm;
