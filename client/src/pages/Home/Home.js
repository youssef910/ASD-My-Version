import React from "react";

import "../../App.css";
import HomeSec1 from "./HomeSec1";
import HomeSec2scrollDown from './HomeSec2scrollDown';

const Home = () => {
	return (
		<div>
			<HomeSec1 style={{margin:"50px"}}/>
			<HomeSec2scrollDown/>
		</div>
	);
};

export default Home;
