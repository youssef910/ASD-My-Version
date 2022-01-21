import React from "react";
import { Grid, Box, Heading, Text, Button, Image } from "grommet";
import AboutImage from "../../utilities/images/about-us-concept-2021-08-31-16-59-05-utc.jpg";
import "../../App.css";
import { Link } from "react-router-dom";
import colors from "../../utilities/colors";
const HomeSec3 = () => {
	return (
		<Grid
			rows={["medium"]}
			columns={["55%", "40%"]}
			areas={[["images", "about"]]}
			gap="small"
			height={"450px"}
		>
			<Box gridArea="images" alignContent="left" className="images-Box2">
				<Box className="child colored-box2"></Box>
				<Image src={AboutImage} className="child image2" />
			</Box>
			<Box align="right" pad={"medium"} alignContent="center" gridArea="about">
				<Heading
					alignSelf="center"
					style={{ fontFamily: "oboto_slabregular", size: "48px" }}
				>
					About Us
				</Heading>
				<Text alignSelf="center">
					SENsational Life: Autism and
					<br /> Family support was founded by
					<br /> Kelly-anne Smith, who has over
					<br /> 20 years experience of SEN; both <br />
					professionally and personally.
				</Text>
				<Box alignSelf="center" height="100px" width="290px" pad="medium">
					<Link to="/about">
						<Button
							style={{
								borderRadius: "0",
								fontFamily: "ambitsemibold",
								size: "24px",
							}}
							primary
							color={colors.black}
							label="Read More"
							onClick={() => {}}
						/>{" "}
					</Link>
				</Box>
			</Box>
		</Grid>
	);
};

export default HomeSec3;
