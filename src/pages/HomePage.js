import React from "react";
import HeroUnit from "./../components/Hero/HeroUnit";
import HomePageHeroImage from "../images/homepage-min.jpg";
import { Link } from "react-router-dom";
import ServicesUnit from "../components/Services/ServicesUnit";
import FeaturedRoomsUnit from "../components/FeaturedRooms/FeaturedRoomsUnit";

const heroImageStyle = {
	margin: "40px",
	border: "5px solid pink",
	color: "red",
	backgroundImage: `url(${HomePageHeroImage})`,
};

const title = "luxurious rooms";
const subtitle = "delux rooms starting at $299";

const HomePage = () => {
	return (
		<>
			<HeroUnit heroImageStyle={heroImageStyle}>
				<div className="banner">
					<h1>{title}</h1>
					<div />
					<p>{subtitle}</p>
					<Link to="/rooms" className="btn-primary">
						Our Rooms
					</Link>
				</div>
			</HeroUnit>
			<ServicesUnit />
			<FeaturedRoomsUnit />
		</>
	);
};

export default HomePage;
