import React from "react";
import { useState, useEffect } from "react";
import DisplayUserCard from "../DisplayUserCard";

import { Routes, Route, Link } from "react-router-dom";

function UsersPage() {
	const [users, setUsers] = useState([]);

	const filterUsers = (e) => {
		const searchedLetters = e.target.value;
		console.log(searchedLetters);
		const filteredUsers = users.filter((user) => {
			return user.name.includes(searchedLetters);
		});
		setUsers(filteredUsers);
	};

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

	const linkStyle = {
		margin: "2em",
		textDecoration: "none",
		color: "white",
	};
	return (
		<div className="users-page">
			<div className="navbar">
				<div className="navbar-links" style={linkStyle}>
					<Link to="/">Home</Link>
				</div>
				<div>
					<h1 id="navbar-title">THE BOOTCAMPER CATALOG</h1>
				</div>
				<div className="navbar-links" style={linkStyle}>
					<Link to="/form">Form</Link>
				</div>
				<div className="navbar-links" style={linkStyle}>
					<Link to="/users">Bootcampers</Link>
				</div>
			</div>
			<div className="searchbar-container">
				<input
					type="text"
					placeholder="search for a bootcamper.."
					id="searchbar"
					// onKeyUp={(e) => filterUsers(e)}
				/>
			</div>

			<section className="user-cards">
				{users.map((user) => (
					<div key={user.id}>
						<DisplayUserCard
							id={user.id}
							// key={user.id}
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
					</div>
				))}
			</section>
		</div>
	);
}

export default UsersPage;
