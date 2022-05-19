import React from "react";
import { ActionButton, PrimaryButton, Stack, Text, TextField } from "@fluentui/react";
import ISandboxProps from "../../Interfaces/ISandboxProps";
import { Strings } from "../../Services/LocalizationService";

interface IStates
{
	login : string;
	password : string;
	loginError?: string;
	passwordError?: string;
}

export default class SandboxTwo extends React.Component<ISandboxProps, IStates>
{
	constructor(props : ISandboxProps)
	{
		super(props);
		this.state =
		{
			login: "",
			password: "",
			loginError: null,
			passwordError: null
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

	private OnTyping(event : React.KeyboardEvent<HTMLInputElement>) : boolean
	{
		console.log(event);
		if (event.ctrlKey && (event.key === "v" || event.key === "a" || event.key === "x"))
			return true;

		if (event.key === "Backspace" || event.key === "Delete" || event.key === "Tab" ||
			event.metaKey || event.altKey || event.ctrlKey || event.shiftKey)
			return true;

		event.preventDefault();
		return false;
	}

	public render() : JSX.Element
	{
		return (
			<Stack tokens={ { childrenGap: 10 } } >
				<Text variant="xLarge">{ Strings.sandboxLoginHeader }</Text>

				<TextField
					placeholder={ Strings.sandboxEmail } required autoComplete="chrome-off" onKeyDown={ this.OnTyping }
					value={ this.state.login } onChange={ (_, e) => this.setState({ ...this.state, login: e }) }
					errorMessage={ this.state.loginError } />
				<TextField
					placeholder={ Strings.sandboxPassword } required autoComplete="chrome-off" onKeyDown={ this.OnTyping }
					type="password" canRevealPassword
					value={ this.state.password } onChange={ (_, e) => this.setState({ ...this.state, password: e }) }
					errorMessage={ this.state.passwordError } />

				<Stack horizontalAlign="end" tokens={ { childrenGap: 10 } }>
					<PrimaryButton text={ Strings.sandboxLogin } onClick={ () => this.OnSubmit() } />
				</Stack>

				<Stack horizontalAlign="center">
					<ActionButton iconProps={ { iconName: "Lightbulb" } } text={ Strings.sandbox2hint } />
				</Stack>
			</Stack>
		);
	}
}