import React from "react";
import { MotionAnimations, Stack, Text } from "@fluentui/react";
import Sandbox from "../../Components/Sandbox";
import INavProps from "../../Interfaces/INavProps";
import SandboxThree from "../../Components/Sandboxes/SandboxThree";
import { Strings } from "../../Services/LocalizationService";

export default class ScenarioThree extends React.Component<INavProps>
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
					<Text variant="xxLarge">{ Strings.scenario3Header }</Text>
					<Stack>
						<Text variant="xLarge">{ Strings.scenarioObjective }</Text>
						<Text>{ Strings.scenario3Objective }</Text>
					</Stack>

					<Text>{ Strings.scenario3description1 }</Text>
					<Text>{ Strings.scenario3description2 }</Text>
					<Text>{ Strings.scenario3description3 }</Text>

					<Text variant="xLarge">{ Strings.scenarioSteps }</Text>
					<ol>
						<li>{ Strings.scenarioStep1 }</li>
						<li>{ Strings.scenario3step2 }</li>
						<li>{ Strings.scenario3step3 }</li>
						<li>{ Strings.scenario3step4 }</li>
					</ol>
				</Stack>

				<Stack className="containerItem" tokens={ { maxWidth: 600 } }>
					<Sandbox ref={ this._sandboxRef } onNext={ (n) => this.props.onNext(n) }>
						<SandboxThree context={ this._sandboxRef } />
					</Sandbox>
				</Stack>
			</Stack>
		);
	}
}