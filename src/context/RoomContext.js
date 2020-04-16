import React, { useState } from 'react'

export const RoomContext = React.createContext();

const RoomProvider = (props) => {
    const [state, setState] = useState({
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading: true
    })


    return (
        <RoomContext.Provider value="hello">
            {props.children}
        </RoomContext.Provider>
    )
}

export default RoomProvider
