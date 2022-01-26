import React from "react";
import { Button, Box } from "grommet";
import { Link } from "react-router-dom";
import colors from "../../utilities/colors";
function FAQButton() {
	return (
		<Box
			height="medium"
			background={colors.lightBg}
			justify="center"
			align="center"
			height="75vh"
		>
			<Link to="#">
				<Button
					style={{
						borderRadius: "0",
						fontFamily: "ambitsemibold",
						size: "24px",
					}}
					size="large"
					hoverIndicator={{ background: colors.baleBlue }}
					primary
					color={colors.blue}
					label="Frequently Asked Questions"
				/>
			</Link>
		</Box>
	);
}

export default FAQButton;
