import React from "react";
import { Footer, Anchor, Text, Box, MaskedInput, Grid } from "grommet";
import colors from "../../utilities/colors";
import { MailOption } from "grommet-icons";
const mailtoHref =
	"mailto:support@example.com?subject=SendMail&body=Description";
const FooterLinks = () => {
	return (
		<Footer
			pad={"small"}
			height={"small"}
			justify="around"
			background={colors.black}
		>
			<Box direction="row" gap="xlarge">
				<Box gap="medium" pad="medium">
					<Text weight="bold" size="small">
						About
					</Text>
					<Box gap="small">
						<Anchor weight={"small"} color={"white"}>
							{" "}
							Our Story
						</Anchor>
						<Anchor weight={"small"} color={"white"}>
							Team
						</Anchor>
					</Box>
				</Box>
				<Box gap="medium" pad="medium">
					<Text weight="bold" size="small">
						Resources
					</Text>
					<Box gap="small">
						<Anchor weight={"small"} color={"white"}>
							{" "}
							Timetables
						</Anchor>
						<Anchor weight={"small"} color={"white"}>
							{" "}
							Referrals
						</Anchor>
						<Anchor weight={"small"} color={"white"}>
							{" "}
							useFull Link
						</Anchor>
					</Box>
				</Box>
				<Box gap="medium" pad={"medium"}>
					<Text weight="bold" size="small">
						Help
					</Text>
					<Box>
						<Anchor weight={"small"} color={"white"}>
							FAQ
						</Anchor>
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
