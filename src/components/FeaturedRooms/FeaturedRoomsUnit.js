import React, { useContext } from "react";
import { RoomContext } from "../../context/RoomContext";
import RoomUnit from "../Room/RoomUnit";
import LoadingUnit from "../Loading/LoadingUnit";
import "./featuredrooms.css"

const title = "Featured Rooms";

const FeaturedRoomsUnit = () => {
	const { featuredRooms, loading } = useContext(RoomContext);
	console.log(featuredRooms)
	const renderRooms = featuredRooms.map((room) => {
		return <RoomUnit key={room.id} room={room} />
	})
	return (
		<section className="featured-rooms">
			<div className="section-title">
				<h4>{title}</h4>
				<div />
			</div>
			<div className="featured-rooms-center">
				{loading?<LoadingUnit/>:renderRooms}
			</div>
			
		</section>
	);
};

export default FeaturedRoomsUnit;
