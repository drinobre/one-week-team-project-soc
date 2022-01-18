import React from "react";

function DisplayUserCard({ city, nickname, fullname }) {
	return (
		<div className="userCard">
			<div className="upper-container">
				<div className="image-container"></div>
				<img src="" alt="" height="100px" width="100px" />
			</div>
			<div className="lower-container"></div>
			<h3>{fullname}</h3>
			<h3>{nickname}</h3>
			<p>{city}</p>
		</div>
	);
}

export default DisplayUserCard;
