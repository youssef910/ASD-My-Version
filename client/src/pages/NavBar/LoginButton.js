import React from "react";
import { Anchor } from "grommet";
import { User } from "grommet-icons";
import { Link } from "react-router-dom";

const LoginButton = () => {
	return (
		<Anchor
			icon={<User />}
			as={Link}
			weight="300"
			to="/register"
			reverse
			label="LOGIN"
		/>
	);
};

export default LoginButton;
