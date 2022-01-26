import React from "react";
import { Grid, Box, Heading, Text, Button, Image } from "grommet";
import AboutImage from "../../utilities/images/supporting-elderly-woman.jpg";
import "../../App.css";
import { Link } from "react-router-dom";
import colors from "../../utilities/colors";

const WhatWeDo = () => {
	return (
		<Grid
			rows={["large"]}
			columns={["50%", "50%"]}
			areas={[["WhatWeDo", "images"]]}
			gap="small"
			height={"80vh"}
			style={{ background: colors.baleBlue }}
		>
			<Box gridArea="images" alignContent="left" className="images-Box">
				<Box className="child colored-box-whatWeDo"></Box>
				<Image src={AboutImage} className="child image-whatWeDo" />
			</Box>
			<Box
				align="right"
				pad={"medium"}
				alignContent="center"
				gridArea="WhatWeDo"
				gap='medium'
			>
				<Heading alignSelf="center" fontFamily="roboto_slabregular" size="56px">
					What We Do?
				</Heading>
				<Text fontFamily="nexa-demolight" size="25px" alignSelf="center">
					We are provide advice, signposting, tips
					<br /> and products to help support parents of
					<br />
					autistic children on their autism journey
					<br /> within the neurodiverse family.
				</Text>
				<Box alignSelf="center" height="100px" pad="medium">
					<Link to="/about">
						<Button
							style={{
								borderRadius: "0",
								fontFamily: "ambitsemibold",
							}}
							size="large"
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

export default WhatWeDo;
