import React, { useContext } from "react";
import HeroUnit from "../components/Hero/HeroUnit";
import { Link } from "react-router-dom";
import defaultBcg from "../images/room-1.jpeg";
import { RoomContext } from "../context/RoomContext";
import ErrorPage from "./ErrorPage";
import "./singleroompage.css";

const SingleRoomPage = (props) => {
	/* console.log("single room props",props) */
	const dynamicpath = props.match.params.dynamicpath;
	/* console.log(dynamicpath) */
	const { getRoom } = useContext(RoomContext);
	/* console.log("function", getRoom) */
	const room = getRoom(dynamicpath);

	if (!room) {
		return <ErrorPage />;
	}

	const { name, description, capacity, size, price, extras, breakfast, pets, images } = room;

	const heroImageStyle = {
		backgroundImage: `url(${images[0] || defaultBcg})`,
		minHeight: "60vh",
	};
	console.log(images);
	return (
		<div>
			<HeroUnit heroImageStyle={heroImageStyle}>
				<div className="banner">
					<h1>{name}</h1>
					<div />
					{/* <p>{description}</p> */}
					<Link to="/" className="btn-primary">
						Return Home
					</Link>
				</div>
			</HeroUnit>
			<section className="single-room">
				<div className="single-room-images">
					{images.map((imagex, index) => {
						return <img key={index} src={imagex} alt={name}></img>;
					})}
				</div>
				<div className="single-room-info">
					<article className="desc">
						<h3>details</h3>
						<p>{description}</p>
					</article>
					<article className="info">
						<h3>info</h3>
						<h6>price : ${price}</h6>
						<h6>size : {size}</h6>
						<h6>max capacity :{capacity > 1 ? `${capacity} people` : `${capacity} person`}</h6>
						<h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
						<h6>{breakfast && "free breakfast included"}</h6>
					</article>
				</div>
			</section>
			<section className="room-extras">
				<h6>extras </h6>
				<ul className="extras">
					{extras.map((item, index) => (
						<li key={index}>- {item}</li>
					))}
				</ul>
			</section>
		</div>
	);
};

export default SingleRoomPage;
