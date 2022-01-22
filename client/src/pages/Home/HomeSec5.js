import React from "react";
import { Grid, Box, Heading, Text, Button, Image } from "grommet";
import AboutImage from "../../utilities/images/cute-girl-with-down-syndrome-in-mothers-arms-2021-09-24-04-06-20-utc.jpg";
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
			style={{ background: colors.lightBg }}
		>
			<Box gridArea="images" alignContent="left" className="images-Box">
				<Box className="child colored-box4"></Box>
				<Image src={AboutImage} className="child image4" />
			</Box>
			<Box align="right" pad={"medium"} alignContent="center" gridArea="about">
				<Heading
					alignSelf="center"
					style={{ fontFamily: "oboto_slabregular", size: "48px" }}
				>
					We support you
				</Heading>
				<Text alignSelf="center">
					If you are a parent of any autistic child
					<br /> (whether officially diagnosed on the long
					<br />
					winded journey or just have some
					<br /> concerns),then this is the group for you!
				</Text>
				<Box alignSelf="center" height="100px" width="290px" pad="medium">
					<Link to="/register">
						<Button
							style={{
								borderRadius: "0",
								fontFamily: "ambitsemibold",
								size: "24px",
							}}
							primary
							color={colors.black}
							label="Join Us"
							onClick={() => {}}
						/>{" "}
					</Link>
				</Box>
			</Box>
		</Grid>
	);
};

export default HomeSec4;
