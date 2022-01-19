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
		const response = await fetch(`${API_URL}users`);

		const data = await response.json();
		setUsers(data.payload);
		console.log(data.payload);
	};

	const deleteUser = async (userId) => {
		const response = await fetch(`${API_URL}users/${userId}`, {
			method: "DELETE",
		});

		console.log(response);
		setUsers(users.filter((user) => user.id !== userId));
	};

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<div className="users-page">
			<div>
				<input type="text" placeholder="bootcamper search..." id="searchBar" />
			</div>
			{users.map((user) => (
				<DisplayUserCard
					city={user.city}
					fullname={user.fullname}
					nickname={user.nickname}
					briefIntro={
						"hey everyone this is a simple test to show how the text will appear on the user profile cards - of course this is hard-coded and not dynamic but once we set up this functionality, it will be a message unique to everyone and what they choose to write on submission of their form "
					}
					profileImage={
						"https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_1280.png"
					}
					userId={user.id}
					deleteUser={deleteUser}
				/>
			))}
		</div>
	);
}

export default UsersPage;
