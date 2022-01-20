import React from "react";
import { useState, useEffect } from "react";
import DisplayUserCard from "../DisplayUserCard";

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

	const API_URL = process.env.REACT_APP_API_URL;
	console.log(API_URL);

	const getUsers = async () => {
		try {
			const response = await fetch(`${API_URL}users`);

			const data = await response.json();
			setUsers(data.payload);
			console.log(data.payload);
		} catch (error) {
			console.log(error.message);
			console.log(error);
		}
	};

	const deleteUser = async (userId) => {
		const response = await fetch(`${API_URL}users/${userId}`, {
			method: "DELETE",
		});

		console.log(response);
		setUsers(users.filter((user) => user.id !== userId));
	};

	useEffect(() => {
		async function retrieveData() {
			await getUsers();
		}

		retrieveData();
	}, []);

	return (
		<div className="users-page">
			<div>
				<input type="text" placeholder="bootcamper search..." id="searchBar" />
			</div>
			<section className="user-cards">
				{users.map((user) => (
					<DisplayUserCard
						firstname={user.firstname}
						lastname={user.lastname}
						nickname={user.nickname}
						city={user.city}
						briefintroduction={user.briefintroduction}
						profileimage={
							"https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_1280.png"
						}
						userId={user.id}
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
