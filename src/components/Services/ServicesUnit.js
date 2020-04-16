import React from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import "./services.css"


const title = "Services";

const services = [
	{
		icon: <FaCocktail />,
		title: "Free Cocktails",
		info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
	},
	{
		icon: <FaHiking />,
		title: "Endless Hiking",
		info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
	},
	{
		icon: <FaShuttleVan />,
		title: "Free Shuttle",
		info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
	},
	{
		icon: <FaBeer />,
		title: "Strongest Beer",
		info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
	},
];

const ServicesUnit = () => {
	return (
		<section className="services">
			<div className="section-title">
				<h4>{title}</h4>
				<div />
			</div>
			<div className="services-center">
				{services.map((item) => {
					return (
						<article key={`item-${item.title}`} className="service">
							<span>{item.icon}</span>
							<h6>{item.title}</h6>
							<p>{item.info}</p>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default ServicesUnit;
