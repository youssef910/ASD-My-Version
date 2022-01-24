import React from "react";
import { Grid, Box, Heading, Text, Button, Image } from "grommet";
import AboutImage from "../../utilities/images/supporting-elderly-woman.jpg";
import "../../App.css";
import { Link } from "react-router-dom";
import colors from "../../utilities/colors";

const HomeSec4 = () => {
	return (
		<Grid
			rows={["medium"]}
			columns={["45%", "55%"]}
			areas={[["about", "images"]]}
			gap="small"
			height={"450px"}
			style={{ background: "#A4E4DB" }}
		>
			<Box gridArea="images" alignContent="left" className="images-Box3">
				<Box className="child colored-box3"></Box>
				<Image src={AboutImage} className="child image3" />
			</Box>
			<Box align="right" pad={"medium"} alignContent="center" gridArea="about">
				<Heading
					alignSelf="center"
					style={{ fontFamily: "oboto_slabregular", size: "48px" }}
				>
					What We Do?
				</Heading>
				<Text alignSelf="center">
					We are provide advice, signposting, tips
					<br /> and products to help support parents of
					<br />
					autistic children on their autism journey
					<br /> within the neurodiverse family.
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

export default HomeSec4;
