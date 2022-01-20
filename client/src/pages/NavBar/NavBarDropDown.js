import React, { useState } from "react";
import { Grommet, Menu } from "grommet";

import colors from "../../utilities/colors";

import "../../App.css";

const NavBarDropDown = ({ items }) => {
	return (
		<Menu
			style={{
				fontFamily: "roboto_slabregular",
				fontSize: "20px",
				// fontWeight: "normal",
			}}
			hoverIndicator={{ background: colors.blue, color: "red" }}
			icon={false}
			dropProps={{
				align: { top: "bottom" },
				fontFamily: "ambitsemibold",
				// fontSize: "14px",
			}}
			label={items.label}
			items={items.taps}
		/>
	);
};

export default NavBarDropDown;
