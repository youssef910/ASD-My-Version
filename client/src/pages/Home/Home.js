import React from "react";

import "./Home.css";
import FAQButton from "./FAQButton";
import WelcomeHP from "./WelcomeHP";
import ScrollDownHP from "./ScrollDownHP";
import AboutUs from "./AboutUsHP";
import WhatWeDo from "./WhatWeDoHP";
import MemberSays from "./MemberSaysPH";
import Subscribe from "./SubscribeHP";
const Home = () => {
	return (
		<div>
			<WelcomeHP />
			<ScrollDownHP />
			<AboutUs />
			<WhatWeDo />
			<MemberSays />
			<Subscribe />
			<FAQButton />
		</div>
	);
};

export default Home;
