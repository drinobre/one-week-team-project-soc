import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// 	interestingfact,

function ExpandedCard(props) {
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton className="modal-header">
				<Modal.Title id="contained-modal-title-vcenter">
					<h2>
						{props.firstname} {props.lastname}
					</h2>
					<h6>{props.nickname}</h6>
					<div className="modal-image-container">
						<img src={props.profileimage} height="150px" width="150px"></img>
					</div>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body classname="modal-body">
				<div className="modal-body-left">
					<h3>City:</h3>
					<p>{props.city}</p>
					<p> {props.briefintroduction}</p>
					<h3>Hobbies:</h3>
					<p>{props.hobbies}</p>
					<h3>Favourite TV shows and movies:</h3>
					<p>{props.favtvshows}</p>
					<h3>Taste in music:</h3>
					<p>{props.musictaste}</p>

					<h3>Favourite food:</h3>
					<p>{props.favouritefood}</p>
					<h3>Superpower of choice:</h3>
					<p>{props.superpower}</p>
				</div>
				<div className="modal-body-right">
					<h3>Areas I feel most confident:</h3>
					<p>{props.mostconfidentareas}</p>
					<h3>Where I'd like to improve:</h3>
					<p>{props.improveknowledge}</p>
					<h3>Favourite quote:</h3>
					<p>
						{"'"}
						{props.favouritequote}
						{"'"}
					</p>
					<h3>The most interesting fact I know:</h3>
					<p>{props.interestingfact}</p>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default ExpandedCard;
