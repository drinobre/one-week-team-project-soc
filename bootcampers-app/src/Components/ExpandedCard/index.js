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
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					{props.firstname} {props.lastname}
					<h6>{props.nickname}</h6>
					<img src={props.profileimage} height="100px" width="100px"></img>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<h5>City:</h5>
				<p>{props.city}</p>
				<p> {props.briefintroduction}</p>
				<h5>Hobbies:</h5>
				<p>{props.hobbies}</p>
				<h5>Favourite TV shows and movies:</h5>
				<p>{props.favtvshows}</p>
				<h5>Taste in music:</h5>
				<p>{props.musictaste}</p>
				<h5>Favourite food:</h5>
				<p>{props.favouritefood}</p>
				<h5>Superpower of choice:</h5>
				<p>{props.superpower}</p>
				<h5>Areas I feel most confident:</h5>
				<p>{props.mostconfidentareas}</p>
				<h5>Where I'd like to improve:</h5>
				<p>{props.improveknowledge}</p>
				<h5>Favourite quote:</h5>
				<p>
					{"'"}
					{props.favouritequote}
					{"'"}
				</p>
				<h5>The most interesting fact I know:</h5>
				<p>{props.interestingfact}</p>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default ExpandedCard;
