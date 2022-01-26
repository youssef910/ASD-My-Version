import React from "react";
import { Anchor } from "grommet";


const LinkedAnchor = ({ title, link }) => {
	return (
		<Anchor
			href={link}
			weight={"small"}
			color={"white"}
			size="medium"
			style={{ fontFamily: "nexa_demolight" }}
			label={title}
		/>
	);
};

export default LinkedAnchor;
