import React from "react";
import HeroUnit from "../components/Hero/HeroUnit";
import RoomsPageHeroImage from "../images/roomspage-min.jpg";

import { Link } from "react-router-dom";

const title = "Our Rooms";
const subtitle = "";

const heroImageStyle = {
	margin: "40px",
	border: "5px solid pink",
	color: "white",
	minHeight: "60vh",
	backgroundImage: `url(${RoomsPageHeroImage})`,
};
const RoomsPage = () => {
	return (
		<div>
			<HeroUnit heroImageStyle={heroImageStyle}>
				<div className="banner">
					<h1>{title}</h1>
					<div />
					<p>{subtitle}</p>
					<Link to="/" className="btn-primary">
						Return Home
					</Link>
				</div>
			</HeroUnit>
			{/* <room container/> */}
		</div>
	);
};

export default RoomsPage;
