import React from "react";
import { Grid, Box, Heading, List, Text, Button, Image } from "grommet";
import { Checkmark } from "grommet-icons";
import girlImage from "../../utilities/images/autistic-little-girl-close-up-2021-09-24-04-06-23-utc.jpg";
import "../../App.css";
import { Link } from "react-router-dom";
import colors from "../../utilities/colors";
import { size } from "polished";
const HomeSec1 = () => {
	return (
		<Grid
			rows={["medium", "large"]}
			columns={["45%", "50%"]}
			areas={[["welcome", "images"]]}
			gap="small"
		>
			<Box pad={"medium"} gridArea="welcome">
				<Heading style={{ fontFamily: "oboto_slabregular", size: "48px" }}>
					Welcome to SENsation Life
				</Heading>
				<List
					style={{ fontFamily: "nexa_demolight" }}
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
								style={{
									backgroundColor: colors.peag,
									borderRadius: "50%",
								}}
								size="medium"
							/>
							<Text size="small">{datum.name}</Text>
						</Box>
					)}
				</List>

				<Box align="left" height="100px" width="290px" pad="medium">
					<Link to="/register">
						<Button
							style={{
								borderRadius: "0",
								fontFamily: "ambitsemibold",
								size: "24px",
							}}
							primary
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

export default HomeSec1;
