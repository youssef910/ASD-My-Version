import React from "react";
import {
	Button,
	Card,
	CardHeader,
	Heading,
	Grid,
	Markdown,
	Box,
} from "grommet";
import colors from "../../utilities/colors";
import "../../App.css";
import { Link } from "react-router-dom";
const membersSays = [
	{
		head: "Kate - UK",
		p: `“Thank you so much this is great. I
home school my daughter due to her
high anxiety, so this will be used all
time”
`,
	},
	{
		head: "Anonymous",
		p: `“This group has given me the courage
to go against the system and fight to
get my daughter the help needs.”
`,
	},
	{
		head: "SENsational Life",
		p: `“So happy that our closed parent
support group has such an impact.
Come on and over join us.”
`,
	},
];

const HomeSec5 = () => {
	return (
		// <Grommet theme={theme}>
		<Box
			justifyContent="center"
			pad={"medium"}
			gap="medium"
			background={colors.blue}
		>
			<Heading level="3" alignSelf="center" textAlign="center" margin="none">
				What Our Beloved Members Say
			</Heading>
			<Grid
				justifyContent="around"
				columns={{
					count: 3,
					size: "auto",
				}}
				gap="medium"
			>
				{membersSays.map((x) => (
					<Card
						pad="medium"
						key={x.head}
						justifyContent="around"
						margin={"medium"}
						background={"white"}
					>
						<CardHeader
							style={{ fontFamily: "roboto_slabregular", size: "48px" }}
							size="medium"
						>
							{x.head}
						</CardHeader>
						<Markdown style={{ fontFamily: "nexa_demolight", size: "20px" }}>
							{x.p}
						</Markdown>
					</Card>
				))}
			</Grid>
			<Box alignSelf="center">
				<Link to="/register">
					<Button
						alignSelf="center"
						style={{
							borderRadius: "0",
							fontFamily: "ambitsemibold",
							size: "24px",
						}}
						primary
						color={colors.black}
						label="Click here to Register"
					></Button>
				</Link>
			</Box>
		</Box>
		// </Grommet>
	);
};

export default HomeSec5;
