import React from "react";
import { MotionAnimations, Stack, Text } from "@fluentui/react";
import Sandbox from "../../Components/Sandbox";
import SandboxOne from "../../Components/Sandboxes/SandboxOne";
import INavProps from "../../Interfaces/INavProps";
import { Strings } from "../../Services/LocalizationService";

export default class ScenarioOne extends React.Component<INavProps>
{
	private _sandboxRef : React.RefObject<Sandbox> = React.createRef();

	public render() : JSX.Element
	{
		return (
			<Stack
				verticalAlign="center" horizontalAlign="center"
				verticalFill horizontal
				className="container"
				styles={ { root: { animation: MotionAnimations.fadeIn, gridGap: "60px" } } } >

				<Stack className="containerItem" tokens={ { childrenGap: 20, maxWidth: 600 } }>
					<Text variant="xxLarge">{ Strings.scenario1Header }</Text>
					<Stack>
						<Text variant="xLarge">{ Strings.scenarioObjective }</Text>
						<Text>{ Strings.scenario1Objective }</Text>
					</Stack>
					<Text>{ Strings.scenario1description1 }</Text>
					<Text>{ Strings.scenario1description2 }</Text>
					<Text>{ Strings.scenario1description3 }</Text>
					<Text variant="xLarge">{ Strings.scenarioSteps }</Text>
					<ol>
						<li>{ Strings.scenarioStep1 }</li>
						<li>{ Strings.scenario1step2 }</li>
						<li>{ Strings.scenario1step3 }</li>
						<li>{ Strings.scenario1step4 }</li>
						<li>{ Strings.scenario1step5 }</li>
					</ol>
				</Stack>

				<Stack className="containerItem" tokens={ { maxWidth: 600 } }>
					<Sandbox ref={ this._sandboxRef } onNext={ (n) => this.props.onNext(n) }>
						<SandboxOne context={ this._sandboxRef } />
					</Sandbox>
				</Stack>
			</Stack>
		);
	}
}