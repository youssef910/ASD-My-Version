import { Button } from "grommet";

let customStyle = {
	fontFamily: "Roboto-Slab",
	fontSize: "24px",
	color: "#0A2229",
	borderRadius: "5px",
	backGround: "#F4DFD0",
};
const customButton = (label) => (
	<Button
		fill
		hoverIndicator
		style={customStyle}
		primary
		color="#F4DFD0"
		size="medium"
		label={label}
	/>
);
export const items = {
	about: {
		label: "ABOUT",
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
		label: "RESOURCES",
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
