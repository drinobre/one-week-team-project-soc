import React from "react";
import ExpandedCard from "../ExpandedCard";

function DisplayUserCard({
	firstname,
	lastname,
	nickname,
	city,
	briefintroduction,
	profileimage,
	// userid,
	deleteuser,
	hobbies,
	favtvshows,
	musictaste,
	favouritefood,
	superpower,
	mostconfidentareas,
	improveknowledge,
	favouritequote,
	interestingfact,
}) {
	return (
		<div className="userCard">
			<div className="upper-container">
				<div className="image-container">
					<img
						src={profilimage}
						alt="profile-image"
						height="100px"
						width="100px"
					/>
				</div>
			</div>
			<div className="lower-container">
				<h3>
					{firstname}
					{lastname}
				</h3>
				<h3>{nickname}</h3>
				<h4>{city}</h4>
				<p>{briefintroduction}</p>
			</div>
			<button>Visit</button>
			<button className="btn btn-danger" onClick={() => deleteuser(userId)}>
				Delete
			</button>
			<ExpandedCard
				firstname={firstname}
				profileimage={profileimage}
				lastname={lastname}
				nickname={nickname}
				hobbies={hobbies}
				favtvshows={favtvshows}
				musictaste={musictaste}
				favouritefood={favouritefood}
				superpower={superpower}
				mostconfidentareas={mostconfidentareas}
				improveknowledge={improveknowledge}
				favouritequote={favouritequote}
				interestingfact={interestingfact}
			/>
		</div>
	);
}

export default DisplayUserCard;
