import React from "react";
import { useState, useEffect } from "react";
import DisplayUserCard from "../DisplayUserCard";

function UsersPage() {
	const [users, setUsers] = useState([]);

	// const searchBar = document.getElementById("#search-bar");

	// searchBar.addEventListener("keyup", (e) => {});

	const getUsers = async () => {
		const response = await fetch("https://localhost5000/users");
		const data = await response.json();
		setUsers(data.payload);
		console.log(users);
	};

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<div className="users-page">
			<div className="search-bar">
				<input
					type="text"
					placeholder="search for a bootcamper..."
					id="search-bar"
				/>
			</div>
			{users.map((user) => (
				<DisplayUserCard
					city={"birmingham"}
					fullname={"rory maguire"}
					nickname={"rors"}
					briefIntro={
						"blah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blah"
					}
				/>
			))}
		</div>
	);
}

export default UsersPage;
