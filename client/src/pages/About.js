import { Heading } from "grommet";
import colors from "../utilities/colors";
import React from "react";

import {
	Anchor,
	Box,
	Button,
	Card,
	CardBody,
	CardFooter,
	Collapsible,
	Grommet,
	Image,
	Paragraph,
} from "grommet";
import { FormDown, FormUp, Favorite, ShareOption } from "grommet-icons";

const theme = {
	global: {
		font: {
			family: `Comic Sans MS, -apple-system,
         BlinkMacSystemFont, 
        "Segoe UI", 
         Roboto`,
		},
	},
	card: {
		elevation: "none",
		background: "light-2",
		footer: {
			pad: "medium",
		},
	},
};

const About = () => (
	<main role="main">
		<Grommet theme={theme}>
			<Box pad="medium" align="start">
				<Card elevation="large" width="medium">
					<CardBody height="small">
						<Image
							fit="cover"
							src="//v2.grommet.io/assets/IMG_4245.jpg"
							a11yTitle="bridge"
						/>
					</CardBody>
					<Box pad={{ horizontal: "medium" }} responsive={false}>
						<Heading level="3" margin={{ vertical: "medium" }}>
							Bridge
						</Heading>
						<Paragraph margin={{ top: "none" }}>
							A structure carrying a road, path, railroad, or canal across a
							river, ravine, road, railroad, or other obstacle.
						</Paragraph>
					</Box>
					<CardFooter>
						<Box direction="row" align="center" gap="small">
							<Button
								// icon={<FavoriteE />}
								hoverIndicator
								// onClick={() => {
								// 	setFavorite(!favorite);
								// }}
							/>
							<Button icon={<ShareOption color="plain" />} hoverIndicator />
							<Anchor
								href="https://www.collinsdictionary.com/us/dictionary/english/bridge"
								label="Learn More"
							/>
						</Box>
						{/* <ExpandButton onClick={() => setOpen(!open)} /> */}
					</CardFooter>
					<Collapsible open={open}>
						<Paragraph margin="medium" color="dark-3">
							The greatest bridge builders of antiquity were the ancient Romans.
							The Romans built arch bridges and aqueducts that could stand in
							conditions that would damage or destroy earlier designs. Some
							stand today.
						</Paragraph>
					</Collapsible>
				</Card>
			</Box>
		</Grommet>
	</main>
);

export default About;
