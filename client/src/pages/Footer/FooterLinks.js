import React from "react";
import {
	Footer,
	Anchor,
	Text,
	Box,
	MaskedInput,
	Grid,
	ResponsiveContext,
} from "grommet";
import colors from "../../utilities/colors";
import { MailOption } from "grommet-icons";
const mailtoHref =
	"mailto:support@example.com?subject=SendMail&body=Description";
import LinkedAnchor from "./LinkedAnchor";
let aboutLinks = [
	{
		title: "Our Story",
		link: "#",
	},
	{ title: "Team", link: "#" },
];
let resourcesLinks = [
	{
		title: "Timetables",
		link: "#",
	},
	{ title: "Referrals", link: "#" },
	{ title: "useFull Link", link: "#" },
];
const FooterLinks = () => {
	return (
		<Footer
			pad={"small"}
			height={"small"}
			justify="around"
			background={colors.black}
			gap="medium"
		>
			<Box direction="row" gap="xlarge">
				<Box gap="medium" pad="medium">
					<Text
						weight="bold"
						size="large"
						fontFamily="ambitsemibold"
						fontSize="25"
					>
						About
					</Text>
					<Box gap="small">
						{aboutLinks.map((x, i) => (
							<LinkedAnchor key={x.title} title={x.title} link={x.link} />
						))}
					</Box>
				</Box>
				<Box gap="medium" pad="medium">
					<Text
						weight="bold"
						size="large"
						fontFamily="ambitsemibold"
						fontSize="25"
					>
						Resources
					</Text>
					<Box gap="small">
						{resourcesLinks.map((x, i) => (
							<LinkedAnchor key={x.title} title={x.title} link={x.link} />
						))}
					</Box>
				</Box>
				<Box gap="medium" pad={"medium"}>
					<Text
						weight="bold"
						size="large"
						fontFamily="ambitsemibold"
						fontSize="25"
					>
						Help
					</Text>
					<Box>
						<LinkedAnchor title="FAQ" link="#" />
					</Box>
				</Box>
			</Box>

			<Box direction="row-responsive" gap="xsmall">
				<Box align="center" gap="small">
					<Text border={"bottom"} weight="normal">
						Our Email Address
					</Text>
					<Anchor color={"white"} href={mailtoHref}>
						<Box direction="row" gap="small" border={"top"}>
							<MailOption />
							<Text weight={"lighter"} alignSelf="center">
								info@sensational-life.com
							</Text>{" "}
						</Box>
					</Anchor>
				</Box>
			</Box>
		</Footer>
	);
};

export default FooterLinks;
