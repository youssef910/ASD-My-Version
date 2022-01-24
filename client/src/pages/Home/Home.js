import React from "react";

import "../../App.css";
import HomeSec1 from "./HomeSec1";
import HomeSec2scrollDown from "./HomeSec2scrollDown";
import HomeSec3 from "./HomeSec3";
import HomeSec4 from "./HomeSec4";
import HomeSec5 from "./HomeSec5";
import Subscribe from "./Subscribe";
const Home = () => {
	return (
		<div>
			<HomeSec1 style={{ margin: "50px" }} />
			<HomeSec2scrollDown />
			<HomeSec3 />
			<HomeSec4 />
			<HomeSec5 />
			<Subscribe />
		</div>
	);
};

export default Home;
