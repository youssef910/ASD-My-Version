import React from "react";
import { Header, Avatar, Nav, Anchor } from "grommet";
import { Link } from "react-router-dom";
import { items } from "./Items";
import logo from "../../images/Logo.jpeg";
import NavBarDropDown from "./NavBarDropDown";
const NavBar = () => {
	return (
		<Header border={"bottom"} gap="small ">
			<Nav direction="row">
				<Avatar
					src={logo}
					round="false"
					overflow={"shown"}
					style={{ width: "153px" }}
				/>
				<Anchor
					style={{
						fontFamily: "Roboto-Slab",
						fontSize: "20px",
						color: "#0A2229",
					}}
					as={Link}
					to="/"
					label="Home"
					color={"black"}
					margin={{ fontWeight: "bold", top: "small" }}
				/>
				<NavBarDropDown items={items.about} />
				<NavBarDropDown items={items.resources} />
				<Anchor
					style={{
						fontFamily: "Roboto-Slab",
						fontSize: "20px",
						color: "#0A2229",
						fontWeight:"normal"
					}}
					as={Link}
					to="/"
					label="Contact"
					color="black"
					margin={{ top: "small" }}
				/>
			</Nav>
		</Header>
	);
};

export default NavBar;
