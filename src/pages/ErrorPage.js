import React from "react";
import HeroUnit from "./../components/Hero/HeroUnit";
import { Link } from "react-router-dom";

const title = "404";
const subtitle = "Page not found";

const heroImageStyle = {
	margin: "40px",
	border: "5px solid pink",
	color: "red",
	background: "rgb(27.1, 27.1, 39.2)",
};

const ErrorPage = () => {
	return (
		<>
			<HeroUnit heroImageStyle={heroImageStyle}>
				<div className="banner">
					<h1>{title}</h1>
					<div />
					<p>{subtitle}</p>
					<Link to="/" className="btn-primary">
						Return Home
					</Link>
				</div>
			</HeroUnit>
		</>
	);
};

export default ErrorPage;
