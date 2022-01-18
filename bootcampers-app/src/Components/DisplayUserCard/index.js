import React from "react";

function DisplayUserCard({ city, nickname, fullname, briefIntro }) {
	return (
		<div className="userCard">
			<div className="upper-container">
				<div className="image-container"></div>
				<img
					src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.deviantart.com%2Fkarmaanddestiny%2Fart%2FDefault-user-icon-4-858661084&psig=AOvVaw2KxgdpyEQBqn4VJD3dIAnV&ust=1642597363033000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNDaw5Wuu_UCFQAAAAAdAAAAABAN"
					alt=""
					height="100px"
					width="100px"
				/>
			</div>
			<div className="lower-container"></div>
			<h3>{fullname}</h3>
			<h3>{nickname}</h3>
			<h4>{city}</h4>
			<p>{briefIntro}</p>
			<button>Visit</button>
		</div>
	);
}

export default DisplayUserCard;
