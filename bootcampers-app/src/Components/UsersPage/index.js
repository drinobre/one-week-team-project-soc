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
					<DisplayUserCard
						firstname={"Gordon"}
						lastname={"Ramsey"}
						nickname={"Gordie"}
						city={"London"}
						briefintroduction={
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere neque diam, nec vehicula orci porttitor sed. Fusce dictum dolor sed ornare auctor. Sed pharetra quam nisi, a posuere mi fermentum ac. Aenean sagittis dui cursus libero pharetra, ultricies porttitor nunc tincidunt. Integer tincidunt at nulla quis blandit. Mauris eleifend tristique"
						}
						profileimage={
							"https://parade.com/wp-content/uploads/2018/10/GordonRamsay_KitchenMaster-FTR.jpg"
						}
						id={434}
						deleteUser={deleteUser}
						hobbies={"Yelling at people"}
						favtvshows={"hell's kitchen, kitchen nightmares, masterchef"}
						musictaste={"bon jovi"}
						favouritefood={"my own food"}
						superpower={"ultra loud voice"}
						mostconfidentareas={"cooking"}
						improveknowledge={"don't need to "}
						favouritequote={"my gran could do it better"}
						interestingfact={"I'm the best chef in the world"}
					/>
					<DisplayUserCard
						firstname={"Cristiano"}
						lastname={"Ronaldo"}
						nickname={"CR7"}
						city={"Manchester"}
						briefintroduction={
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere neque diam, nec vehicula orci porttitor sed. Fusce dictum dolor sed ornare auctor. Sed pharetra quam nisi, a posuere mi fermentum ac. Aenean sagittis dui cursus libero pharetra, ultricies porttitor nunc tincidunt. Integer tincidunt at nulla quis blandit. Mauris eleifend tristique"
						}
						profileimage={
							"https://www.biography.com/.image/t_share/MTc5OTQ5OTg4NjY5ODI2MTcw/gettyimages-971463110.jpg"
						}
						id={45454}
						deleteUser={deleteUser}
						hobbies={"Yelling at people"}
						favtvshows={"hell's kitchen, kitchen nightmares, masterchef"}
						musictaste={"bon jovi"}
						favouritefood={"my own food"}
						superpower={"ultra loud voice"}
						mostconfidentareas={"cooking"}
						improveknowledge={"don't need to "}
						favouritequote={"SIUUUUUUUUUUUU"}
						interestingfact={"I'm the best chef in the world"}
					/>
					<DisplayUserCard
						firstname={"Michelle"}
						lastname={"Obama"}
						nickname={"Mi Mi"}
						city={"Washington DC"}
						briefintroduction={
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere neque diam, nec vehicula orci porttitor sed. Fusce dictum dolor sed ornare auctor. Sed pharetra quam nisi, a posuere mi fermentum ac. Aenean sagittis dui cursus libero pharetra, ultricies porttitor nunc tincidunt. Integer tincidunt at nulla quis blandit. Mauris eleifend tristique"
						}
						profileimage={
							"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Michelle_Obama_2013_official_portrait.jpg/1200px-Michelle_Obama_2013_official_portrait.jpg"
						}
						id={45454}
						deleteUser={deleteUser}
						hobbies={"Yelling at people"}
						favtvshows={"hell's kitchen, kitchen nightmares, masterchef"}
						musictaste={"bon jovi"}
						favouritefood={"my own food"}
						superpower={"ultra loud voice"}
						mostconfidentareas={"cooking"}
						improveknowledge={"don't need to "}
						favouritequote={"my gran could do it better"}
						interestingfact={"I'm the best chef in the world"}
					/>
				</section>
			</div>
		</>
	);
}

export default UsersPage;
