import React, { useState } from "react";
import { Grommet, Menu } from "grommet";

import colors from "../../utilities/colors";

import "../../App.css";
import { transparentize } from "polished";

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
				background: colors.lightBg,
			}}
			label={items.label}
			items={items.taps}
		/>
	);
};

export default NavBarDropDown;
