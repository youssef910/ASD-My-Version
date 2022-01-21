import React, { useState, useEffect } from "react";
import { Grid, Box, Text } from "grommet";
import { Down } from "grommet-icons";
import colors from "../../utilities/colors";
import "../../App.css";
const colorsGroup = ["green", "blue", "purple"];
const HomeSec2scrollDown = () => {
	const [colorIndex, setColorIndex] = useState(0);

	useEffect(() => {
		setInterval(() => {
			setColorIndex((i) => (i + 1) % colorsGroup.length);
		}, 500);
	}, []);

	return (
		<Grid
			rows={["medium"]}
			columns={["100%"]}
			areas={[["scrollDown"]]}
			height={"80px"}
		>
			<Box gridArea="scrollDown" align="center" className="images-Box">
				<Text color={colors.blue}>SCROLL DOWN</Text>
				<Down pad="small" color={colorsGroup[colorIndex]} />
				<Down pad="small" color={colorsGroup[colorIndex + 1]} />
			</Box>
		</Grid>
	);
};

export default HomeSec2scrollDown;
