import React from "react";
import ExpandedCard from "../ExpandedCard";
import Button from "react-bootstrap/Button";

function DisplayUserCard({
	firstname,
	lastname,
	nickname,
	city,
	briefintroduction,
	profileimage,
	id,
	deleteUser,
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
	const [modalShow, setModalShow] = React.useState(false);
	return (
		<div className="userCard" key={id}>
			<div className="upper-container">
				<div className="image-container">
					<img
						src={profileimage}
						alt="profile-image"
						height="300px"
						width="300px"
					/>
				</div>
			</div>
			<div className="lower-container">
				<div className="card-content">
					<h3>
						{firstname} {lastname}
					</h3>
					<h3>{nickname}</h3>
					<h4>{city}</h4>
					<p>{briefintroduction}</p>
					<button className="button-62-delete" onClick={() => deleteUser(id)}>
						Delete
					</button>
					<>
						<Button
							variant="primary"
							className="button-62"
							onClick={() => setModalShow(true)}
						>
							See More
						</Button>

						<ExpandedCard show={modalShow} onHide={() => setModalShow(false)} />
					</>

					<div key={id}>
						<ExpandedCard
							show={modalShow}
							onHide={() => setModalShow(false)}
							firstname={firstname}
							profileimage={profileimage}
							lastname={lastname}
							nickname={nickname}
							hobbies={hobbies}
							city={city}
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
				</div>
			</div>
		</div>
	);
}

export default DisplayUserCard;
