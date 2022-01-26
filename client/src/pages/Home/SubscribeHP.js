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
			rows={["large"]}
			columns={["50%", "50%"]}
			areas={[["about", "images"]]}
			gap="small"
			height={"80vh"}
			style={{ background: colors.peag }}
		>
			<Box gridArea="images" alignContent="left" className="images-Box">
				<Box className="child colored-box-subscribe"></Box>
				<Image src={AboutImage} className="child image-subscribe" />
			</Box>
			<Box align="right" pad={"medium"} alignContent="center" gridArea="about">
				<Heading
					alignSelf="center"
					fontFamily="roboto_slabregular"
					fontSize="56px"
				>
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
								color="white"
							/>
						}
						width={"50rem"}
						placeholder="what is your email address?"
						value={email}
						size="medium"
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
