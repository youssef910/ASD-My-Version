import React from "react";
import { Box, Main, Grid, Avatar, Button, Text } from "grommet";
import colors from "../../utilities/colors";
import logo from "../../utilities//images/Logo.jpeg";
import { Link } from "react-router-dom";
import "../../App.css";
function LogoAndReg() {
	return (
		<Box border={"bottom"}>
			{" "}
			<Main
				background="light-4"
				elevation="large"
				background={colors.black}
				pad="small"
			>
				<Grid
					fill
					areas={[
						{ name: "logo", start: [0, 0], end: [0, 0] },
						{ name: "button", start: [1, 0], end: [1, 0] },
					]}
					columns={["small", "flex"]}
					rows={["flex"]}
					gap="small"
				>
					<Box gridArea="logo">
						<Avatar
							src={logo}
							round="false"
							overflow={"shown"}
							style={{ width: "153px" }}
						/>
					</Box>
					<Box gridArea="button" gap="medium" direction="row-reverse">
						<Link to="#">
							<Button
								alignSelf="end"
								style={{
									borderRadius: "0",
									fontFamily: "ambitsemibold_italic",
									size: "10px",
								}}
								hoverIndicator
								size="medium"
								primary
								color={colors.lightBg}
								label="Get Started"
							/>
						</Link>
						<Text size="small">Do Want to be part of us?</Text>
					</Box>
				</Grid>
			</Main>
		</Box>
	);
}

export default LogoAndReg;
