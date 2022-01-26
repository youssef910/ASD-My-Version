import React from "react";
import { Grid, Box, Heading, Text, Button, Image } from "grommet";
import AboutImage from "../../utilities/images/about-us-concept-2021-08-31-16-59-05-utc.jpg";
import { Link } from "react-router-dom";
import colors from "../../utilities/colors";
const AboutUs = () => {
	return (
		<Grid
			rows={["large"]}
			columns={["50%", "50%"]}
			areas={[["images", "about"]]}
			gap="small"
			height={"80vh"}
			style={{ background: colors.lightBg }}
		>
			<Box gridArea="images" alignContent="left" className="images-Box">
				<Box className="child colored-box-About"></Box>
				<Image src={AboutImage} className="child image-About" />
			</Box>
			<Box gap="large" pad={"medium"} gridArea="about">
				<Heading alignSelf="center" fontFamily="roboto_slabregular" size="56px">
					About Us
				</Heading>
				<Text fontFamily="nexa-demolight" size="25px" alignSelf="center">
					SENsational Life: Autism and
					<br /> Family support was founded by
					<br /> Kelly-anne Smith, who has over
					<br /> 20 years experience of SEN; both <br />
					professionally and personally.
				</Text>
				<Box alignSelf="center" height="100px" pad="medium">
					<Link to="/about">
						<Button
							style={{
								borderRadius: "0",
								fontFamily: "ambitsemibold",
							}}
							size="large"
							hoverIndicator={{ background: "dark-2" }}
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

export default AboutUs;
