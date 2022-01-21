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
					<h1 className="modal-username">
						{props.firstname} {props.lastname}
					</h1>
					<h5>{props.nickname}</h5>
					<div className="modal-image-container">
						<img src={props.profileimage} height="150px" width="150px"></img>
					</div>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body classname="modal-body">
				<div className="modal-body-left">
					<h3>CITY:</h3>
					<p>{props.city}</p>
					<p> {props.briefintroduction}</p>
					<h3>HOBBIES:</h3>
					<p>{props.hobbies}</p>
					<h3>FAVOURITE TV SHOWS AND MOVIES:</h3>
					<p>{props.favtvshows}</p>
					<h3>TASTE IN MUSIC:</h3>
					<p>{props.musictaste}</p>

					<h3>FAVOURITE FOOD :</h3>
					<p>{props.favouritefood}</p>
					<h3>SUPERPOWER OF CHOICE:</h3>
					<p>{props.superpower}</p>
				</div>
				<div className="modal-body-right">
					<h3>AREAS OF MOST CONFIDENCE:</h3>
					<p>{props.mostconfidentareas}</p>
					<h3>AREAS I'D LIKE TO IMPROVE:</h3>
					<p>{props.improveknowledge}</p>
					<h3>FAVOURITE QUOTE:</h3>
					<p>
						{"'"}
						{props.favouritequote}
						{"'"}
					</p>
					<h3>THE MOST INTERESTING FACT I KNOW:</h3>
					<p>{props.interestingfact}</p>
				</div>
			</Modal.Body>
			<Modal.Footer className="modal-footer">
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default ExpandedCard;
