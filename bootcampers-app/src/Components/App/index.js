import UsersPage from "../UsersPage";
import NewUserForm from "../NewUserForm";
import LandingPage from "../LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import "../../App.css";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="form" element={<NewUserForm />} />
				<Route path="users" element={<UsersPage />} />
			</Routes>
		</div>
	);
}

export default App;
