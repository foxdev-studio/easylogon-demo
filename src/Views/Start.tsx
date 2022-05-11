import React from "react";
import { Depths, Link, MessageBar, MotionAnimations, PrimaryButton, Stack, Text } from "@fluentui/react";
import INavProps from "../Interfaces/INavProps";
import { Strings } from "../Services/LocalizationService";

export default class Start extends React.Component<INavProps>
{
	public render() : JSX.Element
	{
		return (
			<Stack
				verticalAlign="center" horizontalAlign="center"
				verticalFill horizontal
				className="container"
				styles={ { root: { animation: MotionAnimations.slideUpIn, gridGap: "60px" } } } >

				<Stack className="containerItem" tokens={ { childrenGap: 20, maxWidth: 600 } }>
					<Text variant="xxLarge">{ Strings.startTitle }</Text>
					<Stack>
						<Text variant="xLarge">{ Strings.startHeader }</Text>
						<Text>{ Strings.startSubheader }</Text>
					</Stack>
					<Text variant="xLarge">{ Strings.startFactsHeader }:</Text>
					<ul>
						<li>{ Strings.startFact1 }</li>
						<li>{ Strings.startFact2 }</li>
						<li>{ Strings.startFact3 }</li>
						<li>{ Strings.startFact4 }</li>
						<li>{ Strings.startFact5 }</li>
						<li>{ Strings.startFact6 }</li>
					</ul>
					<Text>{ Strings.startFactOfThem }</Text>
					<ul>
						<li>{ Strings.startFact7 }</li>
						<li>{ Strings.startFact8 }</li>
						<li>{ Strings.startFact9 }</li>
					</ul>
					<Text variant="tiny">{ Strings.startFactsSource }: <Link target="_blank" href="https://storage.googleapis.com/gweb-uniblog-publish-prod/documents/PasswordCheckup-HarrisPoll-InfographicFINAL.pdf">Google</Link></Text>
				</Stack>

				<Stack className="containerItem" tokens={ { childrenGap: 10, maxWidth: 600 } } >
					<Text variant="xxLarge">{ Strings.startPrereqHeader }</Text>
					<Stack
						tokens={ { childrenGap: 20, padding: 20 } }
						styles={ { root: { boxShadow: Depths.depth8, borderRadius: 6 } } } >

						<Stack tokens={ { childrenGap: 10 } }>
							<Text variant="large">{ Strings.startPrereq1TitleP1 } <Link target="_blank" href="https://ezlog.app/#download">{ Strings.startPrereq1TitleP2 }</Link> { Strings.startPrereq1TitleP3 }</Text>
							<MessageBar>{ Strings.startPrereq1CaptionP1 } <b>Android</b> { Strings.startPrereq1CaptionP2 }</MessageBar>
						</Stack>

						<Stack>
							<Text variant="large">{ Strings.startPrereq2Title }</Text>
							<Text>{ Strings.startPrereq2Caption }</Text>
						</Stack>

						<Stack horizontalAlign="center">
							<Text variant="mediumPlus">{ Strings.startPrereqLogin }: test-user@example.com</Text>
							<Text variant="mediumPlus">{ Strings.startPrereqPassword }: .tSYRc:eYP_868p</Text>
						</Stack>

						<Stack horizontalAlign="center">
							<PrimaryButton text={ Strings.startPrereqStart } onClick={ () => this.props.onNext() } />
						</Stack>
					</Stack>
				</Stack>
			</Stack>
		);
	}
}