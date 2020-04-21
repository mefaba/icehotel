import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
/* import Container from "react-bootstrap/Container"; */
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import "./navbar.scss";

const NavbarUnit = () => {
	return (
		<>
			<div className="navbar-container">
				<Navbar className="navbar flex justify-content-center" expand="lg" variant="dark">
					<Navbar.Brand id="icehotel-navbar-brand" as={Link} to={"/"}>
						ICEHOTEL
					</Navbar.Brand>
					<Navbar.Toggle>
						<IoMdMenu />
					</Navbar.Toggle>
					<Navbar.Collapse>
						<Nav className="mr-auto flex justify-content-center align-items-center">
							<Nav.Link as={Link} to="/">
								Home
							</Nav.Link>
							<Nav.Link as={Link} to="/rooms">
								Rooms
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		</>
	);
};

export default NavbarUnit;
