import React from "react";
import { useState, useEffect } from "react";
import DisplayUserCard from "../DisplayUserCard";

function UsersPage() {
	const [users, setUsers] = useState([]);

	// const searchBar = document.getElementById("#search-bar");

	// searchBar.addEventListener("keyup", (e) => {});

	const getUsers = async () => {
		const response = await fetch("http://localhost:4444/users");
		const data = await response.json();
		setUsers(data.payload);
		console.log(data.payload);
	};

	const deleteUser = async (userId) => {
		const response = await fetch(`http://localhost:4444/users/${userId}`, {
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
			<div className="search-bar">
				<input type="text" placeholder="bootcamper search..." id="search-bar" />
			</div>
			{users.map((user) => (
				<DisplayUserCard
					city={user.city}
					fullname={user.fullname}
					nickname={user.nickname}
					briefIntro={
						"blah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blah"
					}
					image={user.profileImage}
					userId={user.id}
					deleteUser={deleteUser}
				/>
			))}
		</div>
	);
}

export default UsersPage;
