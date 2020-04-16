import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { IoMdMenu } from "react-icons/io";
import {Link} from 'react-router-dom'
import "./navbar.scss";

const NavbarUnit = () => {
	return (
		<>
			<Navbar className="navbar flex justify-content-center" expand="lg">
				<Navbar.Brand as={Link} to={"/"}>ICEHOTEL</Navbar.Brand>
				<Navbar.Toggle><IoMdMenu /></Navbar.Toggle>
				<Navbar.Collapse>
					<Nav className="mr-auto flex justify-content-center align-items-center">
						<Nav.Link as={Link} to="/">Home</Nav.Link>
						<Nav.Link as={Link} to="/rooms">Rooms</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};

export default NavbarUnit;
