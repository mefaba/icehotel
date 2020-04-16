import React from "react";
import "./hero.scss";

const HeroUnit = ({ children, heroImageStyle}) => {
	return (
		<div>
			<div className={`hero-default`} style={heroImageStyle}>
				<div className="hero-text">
					<h1 style={{ fontSize: "50px" }}>{children}</h1>
				</div>
			</div>
		</div>
	);
};

export default HeroUnit;
