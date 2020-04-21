import React, { useContext } from "react";
import { RoomContext } from "../../context/RoomContext";

const RoomFilter = () => {
	let { uniqueRoomTypes,uniqueRoomCapacities, filterdata, setFilterdata } = useContext(RoomContext);
	uniqueRoomTypes = ["all", ...uniqueRoomTypes];

	/* const {type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = useContext(RoomContext); */
	//console.log("roomfilter",uniqueRoomTypes)
	const handleChange = (event) => {
		const filterName = event.target.name;
		const filterValue = event.target.value;
		setFilterdata({
			...filterdata,
			[filterName]: filterValue,
		});
		/* console.log("handleChange: ", filterdata.type) */
		console.log("chosen filter:", filterName);
		/* console.log("choosen value: ", filterValue) */
	};
	return (
		<>
        <form>
			<div>
				<label>Room Type</label>
				<select name="type" onChange={handleChange}>
					{uniqueRoomTypes.map((roomtype, index) => {
						return (
							<option key={index} value={roomtype}>
								{roomtype}
							</option>
						);
					})}
				</select>
			</div>
			<div>
				<label>Room Capacity</label>
				<select name="capacity" onChange={handleChange}>
					{uniqueRoomCapacities.map((roomcapacity, index) => {
						return (
							<option key={index} value={roomcapacity}>
								{roomcapacity}
							</option>
						);
					})}
				</select>
			</div>
            </form>
		</>
	);
};

export default RoomFilter;
