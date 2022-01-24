import React from "react";
import { Text, Footer, Box, Anchor, Button } from "grommet";
import { Instagram, FacebookOption, Twitter } from "grommet-icons";
import colors from "../../utilities/colors";

const Media = () => (
	<Box direction="row" pad={"left"} gap="small" justify="center">
		<Button
			hoverIndicator
			href="https://www.facebook.com/"
			icon={<FacebookOption size="small" color="white" />}
		/>
		<Button
			hoverIndicator
			href="https://twitter.com/"
			icon={<Twitter size="small" color="white" />}
		/>
		<Button
			hoverIndicator
			href="https://www.instagram.com/"
			icon={<Instagram size="small" color="white" />}
		/>
	</Box>
);

function Social() {
	return (
		<div>
			<Footer background={colors.black} pad="small">
				<Media />
				<Box direction="row" gap="small" alignSelf="end">
					<Text hoverIndicator textAlign="end" size="xsmall">
						Terms & Conditions
					</Text>
					<Text hoverIndicator textAlign="end" size="xsmall">
						Privacy Policy
					</Text>
				</Box>
			</Footer>
			;
		</div>
	);
}

export default Social;
