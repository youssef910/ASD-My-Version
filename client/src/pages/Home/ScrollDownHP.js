import React, { useState, useEffect } from "react";
import { Grid, Box, Text } from "grommet";
import { Down } from "grommet-icons";
import colors from "../../utilities/colors";


const colorsGroup = ["green", "blue", "purple"];
const ScrollDownHP = () => {
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
			height={"25vh"}
			style={{ background: colors.lightBg }}
		>
			<Box gridArea="scrollDown" align="center">
				<Text size="45px" fontFamily=" roboto_slabregular" color={colors.blue}>
					SCROLL DOWN
				</Text>
				<Down pad="small" color={colorsGroup[colorIndex]} />
				<Down pad="small" color={colorsGroup[colorIndex + 1]} />
			</Box>
		</Grid>
	);
};

export default ScrollDownHP;
