import React from "react";
import { MotionAnimations, Stack, Text } from "@fluentui/react";
import Sandbox from "../../Components/Sandbox";
import INavProps from "../../Interfaces/INavProps";
import SandboxTwo from "../../Components/Sandboxes/SandboxTwo";
import { Strings } from "../../Services/LocalizationService";

export default class ScenarioTwo extends React.Component<INavProps>
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
					<Text variant="xxLarge">{ Strings.scenario2Header }</Text>
					<Stack>
						<Text variant="xLarge">{ Strings.scenarioObjective }</Text>
						<Text>{ Strings.scenario2Objective }</Text>
					</Stack>

					<Text>{ Strings.scenario2description1 }</Text>
					<Text>{ Strings.scenario2description2 }</Text>
					<Text>{ Strings.scenario2description3 }</Text>

					<Text variant="xLarge">{ Strings.scenarioSteps }</Text>
					<ol>
						<li>{ Strings.scenarioStep1 }</li>
						<li>{ Strings.scenario2step2 }</li>
						<li>{ Strings.scenario2step3 }</li>
						<li>{ Strings.scenario2step4 }</li>
						<li>{ Strings.scenario2step5 }</li>
						<li>{ Strings.scenario2step6 }</li>
					</ol>
				</Stack>

				<Stack className="containerItem" tokens={ { maxWidth: 600 } }>
					<Sandbox ref={ this._sandboxRef } onNext={ (n) => this.props.onNext(n) }>
						<SandboxTwo context={ this._sandboxRef } />
					</Sandbox>
				</Stack>
			</Stack>
		);
	}
}