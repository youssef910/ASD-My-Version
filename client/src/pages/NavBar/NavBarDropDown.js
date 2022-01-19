import React, { useState } from "react";
import { Menu } from "grommet";

const NavBarDropDown = ({ items }) => {
	return (
		<Menu
			style={{
				fontFamily: "Roboto-Slab",
				fontSize: "20px",
				color: "#0A2229",
				fontWeight: "normal",
				margin:"0"
			}}
			hoverIndicator={{ background: "#1E6DD0" }}
			icon={false}
			dropProps={{
				align: { top: "bottom" },
			}}
			label={items.label}
			items={items.taps}
		/>
	);
};

export default NavBarDropDown;
