import React, { useState, useEffect } from "react";
import items from "../data.js";

export const RoomContext = React.createContext();

const RoomProvider = (props) => {
	const [state, setState] = useState({
		rooms: [],
		featuredRooms: [],
		loading: true
	});

	const [filteredRooms, setFilteredRooms] = useState([])

	/* console.log("roomcontext rendered") */

	const [filterdata, setFilterdata] = useState({
		type: "all",
		capacity: 1,
		price: 0,
		minPrice: 0,
		maxPrice: 0,
		minSize: 0,
		maxSize: 0,
		breakfast: false,
		pets: false
	})

	useEffect(() => {
		let rooms = formatData(items);
		let featuredRooms = rooms.filter((room) => {
			return room.featured === true;
		});
		setState({
			...state,
			rooms: rooms,
			/* filteredRooms: rooms, */
			featuredRooms: featuredRooms,
			loading: false,
		});
		setFilteredRooms(rooms)
		// eslint-disable-next-line
	}, []);

	const formatData = (items) => {
		/* console.log("1"); */
		let tempItems = items.map((item) => {
			let id = item.sys.id;
			let images = item.fields.images.map((image) => image.fields.file.url);
			let room = { ...item.fields, images: images, id: id };
			return room;
		});
		return tempItems;
	};
	const getRoom = slug => {
		const room = state.rooms.find(room => room.slug === slug);
		return room;
	};
	//FILTER ROOMS
	useEffect(()=>{
		filterRooms()// eslint-disable-next-line
	},[filterdata,state])

	const filterRooms = () => {
		let tempRooms = [...state.rooms]
		/* console.log("filterRooms: ", filterdata.type) */
		if (filterdata.type !== "all") {
			tempRooms = tempRooms.filter(room => room.type === filterdata.type);
		}
		/* console.log("tempRooms",tempRooms) */
		setFilteredRooms(tempRooms)	
	}


	/*uniqueRoomTypes*/
	let uniqueRoomTypes = state.rooms.map(room=>{
		return room.type
	})
	uniqueRoomTypes = [...new Set(uniqueRoomTypes)] //console.log("UniqueRoomTypes",uniqueRoomTypes)
	
	/*uniqueRoomCapacities*/
	let uniqueRoomCapacities = state.rooms.map(room=>{
		return room.capacity
	})
	uniqueRoomCapacities = [...new Set(uniqueRoomCapacities)]

	return <RoomContext.Provider
	 			value={{
					 ...state,
					 getRoom: getRoom,
					 uniqueRoomTypes,
					 filterdata,
					 setFilterdata,
					 filteredRooms,
					 uniqueRoomCapacities
				}}>
                {props.children}
           </RoomContext.Provider>;
};

export default RoomProvider;
