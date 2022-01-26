import React from "react";
import { Text, Footer, Box, Anchor, Button } from "grommet";
import { Instagram, FacebookOption, Twitter } from "grommet-icons";
import colors from "../../utilities/colors";
import LinkedAnchor from "./LinkedAnchor";
import { Link } from "react-router-dom";
const Media = () => (
	<Box direction="row" pad={"left"} gap="small" justify="center">
		<Button
			hoverIndicator
			href="https://www.facebook.com/"
			icon={<FacebookOption size="medium" color="white" />}
		/>
		<Button
			hoverIndicator
			href="https://twitter.com/"
			icon={<Twitter size="medium" color="white" />}
		/>
		<Button
			hoverIndicator
			href="https://www.instagram.com/"
			icon={<Instagram size="medium" color="white" />}
		/>
	</Box>
);

function Social() {
	return (
		<div>
			<Footer background={colors.black} pad="medium">
				<Media />
				<Box direction="row" gap="medium" alignSelf="end">
					<LinkedAnchor title="Terms & Conditions" link="#" />
					<LinkedAnchor title="Privacy Policy" link="#" />
				</Box>
			</Footer>
		</div>
	);
}

export default Social;
