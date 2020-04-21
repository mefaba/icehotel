import React, { useContext } from "react";
import HeroUnit from "../components/Hero/HeroUnit";
import RoomsPageHeroImage from "../images/roomspage-min.jpg";

import { Link } from "react-router-dom";
import RoomFilter from "../components/RoomsPageUnit/roomfilter";
import RoomLister from "../components/RoomsPageUnit/roomlister";
import { RoomContext } from "../context/RoomContext";
import LoadingUnit from "../components/Loading/LoadingUnit";

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
	const { rooms, sortedRooms, loading } = useContext(RoomContext);
	/* console.log(rooms) */
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
			{loading ? (<LoadingUnit />) : (
				<>
					<RoomFilter rooms={rooms} />
					<RoomLister sortedRooms={sortedRooms} />
				</>
			)}
		</div>
	);
};

export default RoomsPage;
