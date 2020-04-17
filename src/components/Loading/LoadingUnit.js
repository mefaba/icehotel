import React from "react";
import "./loading.scss";

const LoadingUnit = () => {
	return (
		<div className="loading-main">
			<div className="loader">
				<div className="loader__bar"></div>
				<div className="loader__bar"></div>
				<div className="loader__bar"></div>
				<div className="loader__bar"></div>
				<div className="loader__bar"></div>
				<div className="loader__ball"></div>
			</div>
		</div>
	);
};

export default LoadingUnit;
