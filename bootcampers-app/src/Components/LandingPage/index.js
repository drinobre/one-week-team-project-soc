import React from "react";
import NewUserForm from "../NewUserForm";
import { Routes, Route, Link } from "react-router-dom";

function LandingPage() {
	return (
		<div className="landingPage">
			<h1 id="app-title">BOOTCAMPER APP</h1>
			<div>
				<Link to="/users">
					<img
						alt="soc-logo"
						src="https://www.schoolofcode.co.uk/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png"
					></img>
					<button className="btn btn-success">
						<Link to="/form">Add my card</Link>
					</button>
				</Link>
			</div>
		</div>
	);
}

export default LandingPage;
