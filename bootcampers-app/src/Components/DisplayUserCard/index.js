import React from "react";

function DisplayUserCard({
	city,
	nickname,
	fullname,
	briefIntro,
	profileImage,
	userId,
	deleteUser,
}) {
	return (
		<div className="userCard">
			<div className="upper-container">
				<div className="image-container"></div>
				<img
					src={profileImage}
					alt="profile-image"
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
			<button className="btn btn-danger" onClick={() => deleteUser(userId)}>
				Delete
			</button>
		</div>
	);
}

export default DisplayUserCard;
