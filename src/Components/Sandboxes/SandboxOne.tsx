import React from "react";
import { Callout, Link, PrimaryButton, Stack, Text, TextField } from "@fluentui/react";
import ISandboxProps from "../../Interfaces/ISandboxProps";
import { Strings } from "../../Services/LocalizationService";

interface IStates
{
	login : string;
	password : string;
	loginError?: string;
	passwordError?: string;
	showHint : boolean;
}

export default class SandboxOne extends React.Component<ISandboxProps, IStates>
{
	constructor(props : ISandboxProps)
	{
		super(props);
		this.state =
		{
			login: "",
			password: "",
			loginError: null,
			passwordError: null,
			showHint: false
		};
	}

	private OnSubmit() : void
	{
		let newState : IStates = this.state;
		newState.loginError = null;
		newState.passwordError = null;

		if (newState.login.toLocaleLowerCase() !== "test-user@example.com")
			newState.loginError = Strings.sandboxLoginError;

		if (newState.password !== ".tSYRc:eYP_868p")
			newState.passwordError = Strings.sandboxPasswordError;

		if (newState.login === "")
			newState.loginError = Strings.sandboxEmptyField;

		if (newState.password === "")
			newState.passwordError = Strings.sandboxEmptyField;

		this.setState(newState);

		if (newState.loginError === null && newState.passwordError === null)
			this.props.context.current.OnFinished();
	}

	private OnPaste(event : React.ClipboardEvent<HTMLInputElement>) : boolean
	{
		event.preventDefault();
		return false;
	}

	public render() : JSX.Element
	{
		return (
			<Stack tokens={ { childrenGap: 10 } } >
				<Text variant="xLarge">{ Strings.sandboxLoginHeader }</Text>

				<TextField
					placeholder={ Strings.sandboxEmail } required autoComplete="chrome-off" onPaste={ this.OnPaste }
					value={ this.state.login } onChange={ (_, e) => this.setState({ ...this.state, login: e }) }
					errorMessage={ this.state.loginError } />
				<TextField
					placeholder={ Strings.sandboxPassword } required autoComplete="chrome-off" onPaste={ this.OnPaste }
					type="password" canRevealPassword
					value={ this.state.password } onChange={ (_, e) => this.setState({ ...this.state, password: e }) }
					errorMessage={ this.state.passwordError } />

				<Stack horizontalAlign="end" tokens={ { childrenGap: 10 } }>
					<Link id="credentialHintLink" onClick={ () => this.setState({ ...this.state, showHint: true })}>{ Strings.sandbox1forgotPassword }</Link>
					<PrimaryButton text={ Strings.sandboxLogin } onClick={ () => this.OnSubmit() } />
				</Stack>

				{ this.state.showHint &&
					<Callout
						onDismiss={ () => this.setState({ ...this.state, showHint: false }) }
						target="#credentialHintLink" >

						<Stack tokens={ { padding: 20 } } styles={ { root: { userSelect: "none" } } }>
							<Text>{ Strings.startPrereqLogin }: test-user@example.com</Text>
							<Text>{ Strings.startPrereqPassword }: .tSYRc:eYP_868p</Text>
						</Stack>
					</Callout>
				}
			</Stack>
		);
	}
}