import React from "react";
import RoomUnit from "../Room/RoomUnit";
import "./roomlister.css"

const RoomLister = ({ sortedRooms }) => {
	if (sortedRooms.length === 0) {
		return (
			<div className="empty-search">
				<h3>unfortunately no rooms matched your search parameters</h3>
			</div>
		);
	}
	return (
		<section className="roomslist">
			<div className="roomslist-center">
				{sortedRooms.map((room) => {
					return <RoomUnit key={room.id} room={room} />;
				})}
			</div>
		</section>
	);
};

export default RoomLister;
