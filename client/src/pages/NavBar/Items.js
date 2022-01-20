import { Button } from "grommet";
import colors from "../../utilities/colors";
import "../../App.css";
let customStyle = {
	fontFamily: "ambitsemibold",
	color: colors.black,
	fontSize: "20px",
	borderRadius: "5px",
};
const customButton = (label) => (
	<Button
		fill
		hoverIndicator
		style={customStyle}
		primary
		color={colors.peag}
		size="medium"
		label={label}
	/>
);
export const items = {
	about: {
		label: "About",
		taps: [
			{
				label: customButton("What is Autism"),
				href: "/",
				justify: "center",
			},
			{
				label: customButton("Signs and Symptoms"),
				href: "/about/this/site",
				justify: "center",
			},
			{
				label: customButton("Additional Support"),
				href: "#",
				justify: "center",
			},
			{
				label: customButton("Our Events"),
				href: "#",
				justify: "center",
			},
		],
	},
	resources: {
		label: "Resources",
		taps: [
			{
				label: customButton("Timetables"),
				href: "/",
				justify: "center",
			},
			{
				label: customButton("Referral"),
				href: "/about/this/site",
				justify: "center",
			},
			{
				label: customButton("Edutainment"),
				href: "#",
				justify: "center",
			},
			{
				label: customButton("Advice"),
				href: "#",
				justify: "center",
			},
			{
				label: customButton("Useful Links"),
				href: "#",
				justify: "center",
			},
		],
	},
};
