import React, { useState, useEffect } from "react";
import items from "../data.js";

export const RoomContext = React.createContext();

const RoomProvider = (props) => {
	const [state, setState] = useState({
		rooms: [],
		sortedRooms: [],
		featuredRooms: [],
		loading: true
	});

	useEffect(() => {
		let rooms = formatData(items);
		let featuredRooms = rooms.filter((room) => {
			return room.featured === true;
		});
		setState({
			...state,
			rooms: rooms,
			sortedRooms: rooms,
			featuredRooms: featuredRooms,
			loading: false,
		});
		/* console.log("state: is ", state); */
		/* return () => {
			null;
		}; */// eslint-disable-next-line
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

	return <RoomContext.Provider value={{...state}}>
                {props.children}
           </RoomContext.Provider>;
};

export default RoomProvider;
