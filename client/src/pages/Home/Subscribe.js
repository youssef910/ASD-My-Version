import React, { useState } from "react";
import { Grid, Box, Heading, Image, Form, TextInput } from "grommet";
import { FormNext } from "grommet-icons";
import AboutImage from "../../utilities/images/supporting-elderly-woman.jpg";
import "../../App.css";

import colors from "../../utilities/colors";

const Subscribe = () => {
	const [email, setEmail] = useState("");
	const handleEmail = (e) => {
		setEmail(e.target.value);
	};
	const handleSubmitEmail = (e) => {
		e.preventDefault();
		console.log(email);
		setEmail("");
	};
	return (
		<Grid
			rows={["medium"]}
			columns={["45%", "55%"]}
			areas={[["about", "images"]]}
			gap="small"
			height={"450px"}
			style={{ background: colors.peag }}
		>
			<Box gridArea="images" alignContent="left" className="images-Box">
				<Box className="child colored-box5"></Box>
				<Image src={AboutImage} className="child image5" />
			</Box>
			<Box align="right" pad={"medium"} alignContent="center" gridArea="about">
				<Heading alignSelf="center" style={{ fontFamily: "oboto_slabregular" }}>
					Subscribe to <br />
					our newsletter
				</Heading>

				<Form
					style={{ fontFamily: "ambitsemibold_italic" }}
					onSubmit={handleSubmitEmail}
					onChange={handleEmail}
				>
					<TextInput
						icon={
							<FormNext
								background={colors.black}
								style={{ backgroundColor: colors.black }}
								size="medium"
								pad="medium"
								color="white"
							/>
						}
						placeholder="what is your email address?"
						value={email}
						size="small"
						type="email"
						reverse
						style={{ backgroundColor: "white" }}
						onChange={handleEmail}
					/>
				</Form>
			</Box>
		</Grid>
	);
};

export default Subscribe;
