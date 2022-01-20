import React from "react";
import { Menu } from "grommet";

import colors from "../../utilities/colors";

import "../../App.css";

const NavBarDropDown = ({ items }) => {
	return (
		<Menu
			style={{
				fontFamily: "roboto_slabregular",
				fontSize: "20px",
			}}
			hoverIndicator={{ background: colors.blue, color: "white" }}
			icon={false}
			dropProps={{
				align: { top: "bottom" },
				fontFamily: "ambitsemibold",
				background: colors.lightBg,
			}}
			label={items.label}
			items={items.taps}
		/>
	);
};

export default NavBarDropDown;
