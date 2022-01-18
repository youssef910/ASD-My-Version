import React from "react";
import { Grid, Box, Heading, List, Text, Button, Image } from "grommet";
import { Checkmark } from "grommet-icons";
import girlImage from "../../images/autistic-little-girl-close-up-2021-09-24-04-06-23-utc.jpg";
import "../Home.css";
import { Link } from "react-router-dom";
const HomeSec1 = () => {
	return (
		<Grid
			rows="medium"
			columns={["45%", "55%"]}
			areas={[["welcome", "images"]]}
			gap="small"
		>
			<Box pad={"medium"} gridArea="welcome">
				<Heading size="medium" style={{ fontFamily: "Roboto Slab" }} level="2">
					Welcome to
					<br /> SENsation Life
				</Heading>
				<List
					style={{ fontFamily: "Nexa Text Demo" }}
					data={[
						{ name: "Supporting Families" },
						{ name: "Empowering Neurodiverse Families" },
					]}
					pad="small"
					border={false}
				>
					{(datum) => (
						<Box direction="row-responsive" gap="small" align="left">
							<Checkmark
								style={{ backgroundColor: "#FFF8F3", borderRadius: "50%" }}
								size="medium"
							/>
							<Text size="small">{datum.name}</Text>
						</Box>
					)}
				</List>

				<Box align="left" height="100px" width="290px" pad="medium">
					<Button
						style={{
							borderRadius: "0",
							fontFamily: "Ambit SemiBold",
							size: "16px",
						}}
						as={Link}
						to="/register"
						primary
						label="Click here to Register"
						onClick={() => {}}
						color={"#1E6DD0"}
					/>{" "}
				</Box>
			</Box>

			<Box gridArea="images" className="images-Box">
				<Box className="child colored-box"></Box>
				<Image src={girlImage} className="child image" />
			</Box>
		</Grid>
	);
};

export default HomeSec1;
