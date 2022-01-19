import React from "react";
import { useState } from "react";

function NewUserForm() {
	const [fullname, setFullname] = useState("");
	const [nickname, setNickname] = useState("");
	const [city, setCity] = useState("");
	const [hobbies, setHobbies] = useState("");
	const [tvShows, setTvShows] = useState("");
	const [favouriteArtists, setFavouriteArtists] = useState("");
	const [favouriteFood, setFavouriteFood] = useState("");
	const [superPower, setSuperPower] = useState("");
	const [briefIntroduction, setBriefIntroduction] = useState("");
	const [mostConfidentArea, setMostConfidentArea] = useState("");
	const [improveKnowledge, setImproveKnowledge] = useState("");
	const [favouriteQuote, setFavouriteQuote] = useState("");
	

	const submitForm = async (e) => {
		e.preventDefault();
		const body = { fullname, nickname, city, hobbies };
		const response = await fetch("http://localhost:4444/users", {
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
					placeholder="Full Name..."
					value={fullname}
					onChange={(e) => setFullname(e.target.value)}
				/>

				<input
					type="text"
					placeholder="Do you have a nickname?"
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

				<input
					type="text"
					placeholder="What are you favourite tv shows...?"
					value={tvShows}
					onChange={(e) => setTvShows(e.target.value)}
				/>

				<input
					type="text"
					placeholder="What are your favourite musical artists...?"
					value={favouriteArtists}
					onChange={(e) => setFavouriteArtists(e.target.value)}
				/>

				<input
					type="text"
					placeholder="What is your favourite food...?"
					value={favouriteFood}
					onChange={(e) => setFavouriteFood(e.target.value)}
				/>

				<input
					type="text"
					placeholder="What is your superpower...?"
					value={superPower}
					onChange={(e) => setSuperPower(e.target.value)}
				/>

				<input
					type="text"
					placeholder="Tell us a little about yourself"
					value={briefIntroduction}
					onChange={(e) => setBriefIntroduction(e.target.value)}
				/>

				<input
					type="text"
					placeholder="In what coding language are you most confident...?"
					value={mostConfidentArea}
					onChange={(e) => setMostConfidentArea(e.target.value)}
				/>

				<input
					type="text"
					placeholder="In what coding language would you like to improve your knowledge...?"
					value={improveKnowledge}
					onChange={(e) => setImproveKnowledge(e.target.value)}
				/>

				<input
					type="text"
					placeholder="What is your favourite quote...?"
					value={favouriteQuote}
					onChange={(e) => setFavouriteQuote(e.target.value)}
				/>
				<button className="btn btn-success">Add</button>
			</form>
		</div>
	);
}

export default NewUserForm;
