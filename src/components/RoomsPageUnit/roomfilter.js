import React, { useContext } from "react";
import { RoomContext } from "../../context/RoomContext";
import "./roomfilter.css"

const RoomFilter = ({ rooms }) => {
	/* console.log(rooms); */
	const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = useContext(RoomContext);

	const roomtypes = ["all", ...new Set(rooms.map((room) => room.type))]; // get Unique values for Room Types for filter
	const roomcapacity = [...new Set(rooms.map((room) => room.capacity))]; //get Unique values for Room Capacity for filter

	return (
		<div className="filter-container">
			<div className="filter-group">
				<label>room type</label>
				<select name="type" onChange={handleChange} value={type}>
					{roomtypes.map((x, index) => {
						return (
							<option key={index} value={x}>
								{x}
							</option>
						);
					})}
				</select>
			</div>
			<div className="filter-group">
				<label>guests</label>
				<select name="capacity" onChange={handleChange} value={capacity}>
					{roomcapacity.map((x, index) => {
						return (
							<option key={index} value={x}>
								{x}
							</option>
						);
					})}
				</select>
			</div>
			{/* room price */}
			<div className="filter-group">
				<label htmlFor="input-price">room price ${price}</label>
				<input id="input-price" type="range" name="price" min={minPrice} max={maxPrice} value={price} onChange={handleChange}/>
			</div>
			{/* end of room price*/}
			{/* size */}
			<div className="filter-group">
				<label>room size </label>
				<div>
					<input type="number" name="minSize" value={minSize} onChange={handleChange} />
					<input type="number" name="maxSize" value={maxSize} onChange={handleChange} />
				</div>
			</div>
			{/* end of select type */}
			{/* extras */}
			<div className="filter-group">
				<div className="single-extra">
					<input type="checkbox" name="breakfast" checked={breakfast} onChange={handleChange} />
					<label>breakfast</label>
				</div>
				<div className="single-extra">
					<input type="checkbox" name="pets" checked={pets} onChange={handleChange} />
					<label>pets</label>
				</div>
			</div>
			{/* end of extras type */}
		</div>
	);
};

export default RoomFilter;
