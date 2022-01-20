import React from "react";
import NewUserForm from "../NewUserForm";
import { Routes, Route, Link } from "react-router-dom";

function LandingPage() {
	return (
		<div className="landingPage">
			<div>
				<h1 id="app-title">THE BOOTCAMPER CATALOG</h1>
			</div>
			<div>
				<Link to="/users">
					<img
						alt="soc-logo"
						src="https://www.schoolofcode.co.uk/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png"
						height="500rem"
						width="500rem"
					></img>
					{/* <button className="btn btn-success">
						<Link to="/form">Add my card</Link>
					</button> */}
				</Link>
			</div>
		</div>
	);
}

export default LandingPage;
