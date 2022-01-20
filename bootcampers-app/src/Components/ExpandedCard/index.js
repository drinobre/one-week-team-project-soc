import React from "react";

function ExpandedCard({
	firstname,
	lastname,
	nickname,
	city,
	briefintroduction,
	hobbies,
	profileimage,
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
		<>
			<button
				type="button"
				class="btn btn-success"
				data-toggle="modal"
				data-target="#myModal"
			>
				View
			</button>

			<div className="modal" id="myModal">
				<div className="modal-dialog modal-xl">
					<div className="modal-content">
						<div className="modal-upper-container">
							<div className="modal-image-container">
								<img
									src={profileimage}
									alt="profile-image"
									height="100px"
									width="100px"
								></img>
							</div>
							<div>
								<h4 class="modal-title">
									{firstname}
									{lastname}
								</h4>
								<h3>{nickname}</h3>
								<button type="button" class="close" data-dismiss="modal">
									&times;
								</button>
							</div>
						</div>

						<div class="modal-lower-container">
							<h2>I'm Based In...{city}</h2>
							<h2>A bit about me:</h2>
							<p>{briefintroduction}</p>
							<h3>My hobbies:</h3>
							<p>{hobbies}</p>
							<h3>My favourite shows:</h3>
							<p>{favtvshows}</p>
							<h3>What kind of music am I into?</h3>
							<p>{musictaste}</p>
							<h3>My favourite foods:</h3>
							<p>{favouritefood}</p>
							<h3>If I had a superpower, what would it be...</h3>
							<p>{superpower}</p>
							<h3>Which learning areas do I feel most confident in..</h3>
							<p>{mostconfidentareas}</p>
							<h3>In which areas would I like to improve..</h3>
							<p>{improveknowledge}</p>
							<h3>My favourite quote</h3>
							<p>{favouritequote}</p>
							<h3>The most interesting fact I know...</h3>
							<p>{interestingfact}</p>
						</div>

						<div class="modal-footer">
							<button type="button" class="btn btn-danger" data-dismiss="modal">
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ExpandedCard;
