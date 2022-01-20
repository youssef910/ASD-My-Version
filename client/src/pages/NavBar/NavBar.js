import React from "react";
import { Header, Avatar, Nav, Anchor, Grommet } from "grommet";
import { Link } from "react-router-dom";
import { items } from "./Items";
import logo from "../../utilities//images/Logo.jpeg";
import NavBarDropDown from "./NavBarDropDown";
import colors from "../../utilities/colors";
import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";
import "../../App.css";

const customTheme = deepMerge(grommet, {
	anchor: {
		extend: {
			fontFamily: "oboto_slabregular",
			padding: "13px",
		},
		color: colors.black,
		hover: {
			textDecoration: "none",
			extend: { background: `${colors.blue}`, color: "white" },
		},
	},
});
const NavBar = () => {
	return (
		<Grommet theme={customTheme}>
			<Header border={"bottom"} gap="xsmall" background={colors.lightBg}>
				<Nav direction="row">
					<Avatar
						src={logo}
						round="false"
						overflow={"shown"}
						style={{ width: "153px" }}
					/>
					<Anchor
						as={Link}
						size="20px"
						weight="300"
						to="/"
						label="Home"
						alignSelf="center"
					/>
					<NavBarDropDown items={items.about} />
					<NavBarDropDown items={items.resources} />
					<Anchor
						as={Link}
						size="20px"
						weight="300"
						to="/"
						label="Contact"
						alignSelf="center"
					/>
				</Nav>
			</Header>
		</Grommet>
	);
};

export default NavBar;
