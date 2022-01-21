import React from "react";
import { useState, useEffect } from "react";
import DisplayUserCard from "../DisplayUserCard";
import { Routes, Route, Link } from "react-router-dom";

function UsersPage() {
	const [users, setUsers] = useState([]);

	const filterUsers = (e) => {
		const searchedLetters = e.target.value.toLowerCase();
		console.log(searchedLetters);
		const filteredUsers = users.filter((user) => {
			return (
				user.firstname.toLowerCase().includes(searchedLetters) ||
				user.lastname.toLowerCase().includes(searchedLetters)
			);
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

	return (
		<>
			<div className="navbar">
				<div className="navbar-links">
					<Link
						to="/"
						style={{
							textDecoration: "none",
							color: "white",
							fontWeight: "800",
						}}
					>
						Home
					</Link>
				</div>
				<div>
					<h1 id="navbar-title">THE BOOTCAMPER APP</h1>
				</div>
				<div className="navbar-links">
					<Link
						to="/form"
						style={{
							textDecoration: "none",
							color: "white",
							fontWeight: "800",
						}}
					>
						Form
					</Link>
				</div>
				<div className="navbar-links">
					<Link
						to="/users"
						style={{
							textDecoration: "none",
							color: "white",
							fontWeight: "800",
						}}
					>
						Bootcampers
					</Link>
				</div>
			</div>
			<div className="users-page">
				<div className="searchbar-container">
					<input
						type="text"
						placeholder="search for a bootcamper.."
						id="searchbar"
						onKeyUp={(e) => filterUsers(e)}
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
									"https://www.lewesac.co.uk/wp-content/uploads/2017/12/default-avatar.jpg"
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
		</>
	);
}

export default UsersPage;
