import React from "react";
import "./room.css";
import { Link } from 'react-router-dom';

const RoomUnit = ({ room }) => {
	console.log("this is one room", room.images);
	return (
		<article className="room">
			<div className="img-container">
				<img src={room.images[0]} alt="room-jpg" />
			</div>
			<div className="price-top">
				<h6>${room.price}</h6>
				<p>per night</p>
			</div>
			<Link to={`/rooms/${room.slug}`} className="btn-primary room-link">
				features
			</Link>
		</article>
	);
};

export default RoomUnit;
