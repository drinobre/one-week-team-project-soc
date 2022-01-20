import React from "react";
import { useState, useEffect } from "react";
import DisplayUserCard from "../DisplayUserCard";
import { Routes, Route, Link } from "react-router-dom";

function UsersPage() {
	const [users, setUsers] = useState([]);

	// const searchBar = document.getElementById("searchBar");
	// console.log(searchBar);

	// searchBar.addEventListener("keyup", (e) => {
	// 	const searchedLetters = e.target.value.toLowerCase();
	// 	console.log(searchedLetters);
	// 	const filteredUsers = users.filter((user) => {
	// 		return user.name.toLowerCase().includes(searchedLetters);
	// 	});
	// 	setUsers(filteredUsers);
	// });

	// const API_URL = process.env.REACT_APP_API_URL;
	// console.log(API_URL);

	const getUsers = async () => {
		try {
			const response = await fetch(`http://localhost:4444/users`);

			const data = await response.json();
			setUsers(data.payload);
			console.log(data.payload);
		} catch (error) {
			console.log(error.message);
			console.log(error);
		}
	};

	const deleteUser = async (id) => {
		const response = await fetch(`http://localhost:4444/users/${id}`, {
			method: "DELETE",
		});

		console.log(response);
		setUsers(users.filter((user) => user.id !== id));
	};

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<div className="users-page">
			<div>
				<div className="navbar">
					<nav>
						<div>
							<Link to="/">Home</Link>

							<Link to="/form">Form</Link>

							<Link to="/user">Bootcampers</Link>
						</div>
					</nav>
				</div>
				<input
					type="text"
					placeholder="search for a bootcamper.."
					id="searchBar"
				/>
			</div>
			<section className="user-cards">
				{users.map((user) => (
					<DisplayUserCard
						id={user.id}
						firstname={user.firstname}
						lastname={user.lastname}
						nickname={user.nickname}
						city={user.city}
						briefintroduction={user.briefintroduction}
						profileimage={
							"https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_1280.png"
						}
						deleteUser={deleteUser}
						hobbies={user.hobbies}
						favtvshows={user.favtvshows}
						musictaste={user.musictaste}
						favouritefood={user.favouritefood}
						superpower={user.superpower}
						mostconfidentareas={user.mostconfidentareas}
						improveknowledge={user.improveknowledge}
						favouritequote={user.favouritequote}
						interestingfact={user.interestingfact}
					/>
				))}
			</section>
		</div>
	);
}

export default UsersPage;
