import React from "react";
import { useState } from "react";

function NewUserForm() {
	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
	const [nickname, setNickname] = useState("");
	const [city, setCity] = useState("");
	const [hobbies, setHobbies] = useState("");
	const [favtvshows, setFavtvshows] = useState("");
	const [musictaste, setMusictaste] = useState("");
	const [favouritefood, setFavouritefood] = useState("");
	const [superpower, setSuperpower] = useState("");
	const [briefintroduction, setBriefintroduction] = useState("");
	const [mostconfidentareas, setMostconfidentareas] = useState("");
	const [improveknowledge, setImproveknowledge] = useState("");
	const [favouritequote, setFavouritequote] = useState("");
	const [interestingfact, setInterestingfact] = useState("");

	const submitForm = async (e) => {
		e.preventDefault();
		const body = {
			firstname,
			lastname,
			nickname,
			briefintroduction,
			city,
			hobbies,
			favtvshows,
			musictaste,
			favouritefood,
			superpower,
			mostconfidentareas,
			improveknowledge,
			favouritequote,
			interestingfact,
		};
		const response = await fetch(`http://localhost:4444/users`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		});
		console.log(response);
	};

	return (
		<div className="NewUserForm-container">
			<form className="NewUserForm" onSubmit={submitForm}>
				<label htmlFor="first-name">First Name</label>
				<input
					required
					id="first-name"
					required
					type="text"
					required
					placeholder="First Name..."
					required
					value={firstname}
					required
					onChange={(e) => setFirstname(e.target.value)}
					required
				/>
				<label htmlFor="last-name">Last Name</label>
				<input
					required
					id="last-name"
					required
					type="text"
					required
					placeholder="Last Name..."
					required
					value={lastname}
					required
					onChange={(e) => setLastname(e.target.value)}
					required
				/>
				<label htmlFor="nickname">Nickname</label>
				<input
					required
					id="nickname"
					required
					type="text"
					required
					placeholder="Nickname..."
					required
					value={nickname}
					required
					onChange={(e) => setNickname(e.target.value)}
					required
				/>
				<label htmlFor="city">Location</label>
				<input
					required
					id="city"
					required
					type="text"
					required
					placeholder="Where are you based...?"
					required
					value={city}
					required
					onChange={(e) => setCity(e.target.value)}
					required
				/>
				<label htmlFor="brief-intro">Brief Intro</label>
				<textarea
					required
					id="brief-intro"
					required
					type="text"
					required
					placeholder="Brief introduction..."
					required
					value={briefintroduction}
					required
					onChange={(e) => setBriefintroduction(e.target.value)}
					required
				/>
				<label htmlFor="hobbies">Hobbies</label>
				<input
					required
					id="hobbies"
					required
					type="text"
					required
					placeholder="Got any hobbies...?"
					required
					value={hobbies}
					required
					onChange={(e) => setHobbies(e.target.value)}
					required
				/>
				<label htmlFor="tvshows">Favourite shows and films</label>
				<input
					required
					id="tvshows"
					required
					type="text"
					required
					placeholder="Shows and films..?"
					required
					value={favtvshows}
					required
					onChange={(e) => setFavtvshows(e.target.value)}
					required
				/>
				<label htmlFor="music-taste">Music Taste</label>
				<input
					required
					id="music-taste"
					required
					type="text"
					required
					placeholder="What are you into...?"
					required
					value={musictaste}
					required
					onChange={(e) => setMusictaste(e.target.value)}
					required
				/>
				<label htmlFor="favourite-foods">Favourite foods</label>
				<input
					required
					id="favourite-foods"
					required
					type="text"
					required
					placeholder="Favourite foods...?"
					required
					value={favouritefood}
					required
					onChange={(e) => setFavouritefood(e.target.value)}
					required
				/>
				<label htmlFor="superpower">Superpower</label>
				<input
					required
					id="superpower"
					required
					type="text"
					required
					placeholder="What superpower would you want...?"
					required
					value={superpower}
					required
					onChange={(e) => setSuperpower(e.target.value)}
					required
				/>
				<label htmlFor="confident-areas">Confident learning areas</label>
				<input
					required
					id="confident-areas"
					required
					type="text"
					required
					placeholder="In which areas do you feel comfortable...?"
					required
					value={mostconfidentareas}
					required
					onChange={(e) => setMostconfidentareas(e.target.value)}
					required
				/>
				<label htmlFor="confident-areas">Areas to improve</label>
				<input
					required
					id="confident-areas"
					required
					type="text"
					required
					placeholder="Where can you improve...?"
					required
					value={improveknowledge}
					required
					onChange={(e) => setImproveknowledge(e.target.value)}
					required
				/>
				<label htmlFor="favourite-quote">Favourite Quote</label>
				<input
					required
					id="favourite-quote"
					required
					type="text"
					required
					placeholder="What is your favourite quote...?"
					required
					value={favouritequote}
					required
					onChange={(e) => setFavouritequote(e.target.value)}
					required
				/>

				<label htmlFor="interesting-fact">Most interesting fact you know</label>
				<input
					required
					id="interesting-fact"
					required
					type="text"
					required
					placeholder="Most interesting fact...?"
					required
					value={interestingfact}
					required
					onChange={(e) => setInterestingfact(e.target.value)}
					required
				/>
				<button className="submit-btn">Submit</button>
			</form>
		</div>
	);
}

export default NewUserForm;
