import React, { useContext } from "react";
import "./App.css";
import { Switch, Route} from "react-router-dom";
import ErrorPage from './pages/ErrorPage';
import SingleRoomPage from './pages/SingleRoomPage';
import HomePage from './pages/HomePage';
import RoomsPage from './pages/RoomsPage';
import NavbarUnit from './components/Navbar/NavbarUnit.js';
import { RoomContext } from './context/RoomContext';

function App() {
  const value = useContext(RoomContext)
	return (
      <div>
        {value}
        <NavbarUnit />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/rooms/" component={RoomsPage} />
          <Route exact path="/rooms/:rname" component={SingleRoomPage} /> 
          <Route component={ErrorPage} />
        </Switch>
      </div>
  )
}


export default App;