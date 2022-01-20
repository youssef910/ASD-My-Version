import React from "react";
import { Anchor } from "grommet";
import { User } from "grommet-icons";
import colors from "../../utilities/colors";
import { Link } from "react-router-dom";

const LoginButton = () => {
	return (
		<Anchor
			icon={<User color={colors.black} />}
			as={Link}
			size="18px"
			weight="300"
			to="/register"
			reverse
			label="LOGIN"
			alignSelf="center"
		/>
	);
};

export default LoginButton;
