import React from "react";
import { Grid, Box, Heading, List, Text, Button, Image } from "grommet";
import { Checkmark } from "grommet-icons";
import girlImage from "../../utilities/images/autistic-little-girl-close-up-2021-09-24-04-06-23-utc.jpg";
import { Link } from "react-router-dom";
import colors from "../../utilities/colors";

const WelcomeHP = () => {
	return (
		<Grid
			rows={["large"]}
			columns={["50%", "50%"]}
			areas={[["welcome", "images"]]}
			height={"75vh"}
			style={{ height: "100", background: colors.lightBg }}
		>
			<Box gap="Large" pad={"medium"} gridArea="welcome">
				<Heading fontSize="56" fontFamily=" roboto_slabregular">
					Welcome to <br /> SENsation Life
				</Heading>
				<List
					data={[
						{ name: "Supporting Families." },
						{ name: "Empowering Neurodiverse Families." },
					]}
					pad="small"
					border={false}
				>
					{(datum) => (
						<Box direction="row-responsive" gap="small" align="left">
							<Checkmark
								size="medium"
								style={{
									backgroundColor: colors.peag,
									borderRadius: "50%",
								}}
							/>
							<Text
								style={{ lineHeight: "26px" }}
								fontFamily="nexa-demolight"
								size="25px"
							>
								{datum.name}
							</Text>
						</Box>
					)}
				</List>

				<Box align="left" pad="large">
					<Link to="/register">
						<Button
							style={{
								borderRadius: "0",
								fontFamily: "ambitsemibold",
								fontSize: "25px",
							}}
							size="large"
							fill="horizontal"
							primary
							hoverIndicator={{ background: colors.baleBlue }}
							color={colors.blue}
							label="Click here to Register"
							onClick={() => {}}
						/>{" "}
					</Link>
				</Box>
			</Box>

			<Box gridArea="images" className="images-Box">
				<Box className="child colored-box"></Box>
				<Image src={girlImage} className="child image" />
			</Box>
		</Grid>
	);
};

export default WelcomeHP;
