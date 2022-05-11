import React from "react";
import { ActionButton, Depths, FontSizes, Icon, ITheme, MotionAnimations, PrimaryButton, Stack, Text } from "@fluentui/react";
import INavProps from "../Interfaces/INavProps";
import { GetCurrentTheme } from "../Services/ThemeService";
import { Strings } from "../Services/LocalizationService";

enum SandboxState
{
	Initial,
	Running,
	Finished
}

interface IStates
{
	state : SandboxState;
	time : number;
}

export default class Sandbox extends React.Component<INavProps, IStates>
{
	constructor(props : INavProps)
	{
		super(props);
		this.state =
		{
			state: SandboxState.Initial,
			time: 0
		}
	}

	private OnStart() : void
	{
		this.setState({ state: SandboxState.Running, time: new Date().getTime() });
		console.log("Sandbox started");
	}

	public OnFinished() : void
	{
		let elapsedTime : number = new Date().getTime() - this.state.time;
		this.setState({ state: SandboxState.Finished, time: elapsedTime / 1000 });
		console.log("Elapsed time (sec):", elapsedTime);
	}

	public render() : JSX.Element
	{
		let theme : ITheme = GetCurrentTheme();

		return (
			<Stack tokens={ { childrenGap: 10 } } >
				<Text variant="xxLarge">{ Strings.sandbox }</Text>
				<Stack
					tokens={ { padding: 20 } }
					styles={ { root: { boxShadow: Depths.depth8, borderRadius: 6 } } } >

					{ this.state.state === SandboxState.Initial &&
						<Stack
							horizontalAlign="center"
							tokens={ { childrenGap: 20 } }
							styles={ { root: { animation: MotionAnimations.fadeIn } } } >

							<Icon styles={ { root: { fontSize: FontSizes.size68 } } } iconName="Stopwatch" />
							<Text variant="large" styles={ { root: { textAlign: "center" } } }>{ Strings.sandboxStartHeader }</Text>
							<Text styles={ { root: { textAlign: "center" } } }>{ Strings.sandboxStartSubheader }</Text>
							<PrimaryButton text={ Strings.sandboxStart } onClick={ () => this.OnStart() } />
						</Stack>
					}

					{ this.state.state === SandboxState.Running &&
						<Stack styles={ { root: { animation: MotionAnimations.fadeIn } } } >
							{ this.props.children }
						</Stack>
					}

					{ this.state.state === SandboxState.Finished &&
						<Stack
							horizontalAlign="center"
							tokens={ { childrenGap: 20 } }
							styles={ { root: { animation: MotionAnimations.fadeIn } } } >

							<Icon styles={ { root: { fontSize: FontSizes.size68, color: theme.semanticColors.successIcon } } } iconName="Completed" />
							<Text variant="xLarge" styles={ { root: { textAlign: "center", color: theme.semanticColors.successIcon } } }>{ Strings.sandboxFinishHeader }</Text>
							{ this.props.onNext &&
								<ActionButton text={ Strings.sandboxFinishNext } iconProps={ { iconName: "ChevronRight" } } onClick={ () => this.props.onNext(this.state.time) } />
							}
						</Stack>
					}
				</Stack>
			</Stack>
		);
	}
}