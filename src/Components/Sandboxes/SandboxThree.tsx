import React from "react";
import { PrimaryButton, Stack, Text, TextField } from "@fluentui/react";
import ISandboxProps from "../../Interfaces/ISandboxProps";
import { Strings } from "../../Services/LocalizationService";

interface IStates
{
	loginError?: string;
	passwordError?: string;
}

export default class SandboxThree extends React.Component<ISandboxProps, IStates>
{
	constructor(props : ISandboxProps)
	{
		super(props);
		this.state =
		{
			loginError: null,
			passwordError: null
		};
	}

	componentDidMount() : void
	{
		var script = document.createElement("script");
		script.src = "https://easylogon.foxdev.studio/ezlog.js";
		script.defer = true;
		script.async = true;
		document.body.appendChild(script);
	}

	private OnSubmit() : void
	{
		let newState : IStates = this.state;
		newState.loginError = null;
		newState.passwordError = null;

		let login : string = document.querySelector<HTMLInputElement>("input[name=field1]").value;
		let password : string = document.querySelector<HTMLInputElement>("input[name=field2]").value;

		if (login.toLocaleLowerCase() !== "test-user@example.com")
			newState.loginError = Strings.sandboxLoginError;

		if (password !== ".tSYRc:eYP_868p")
			newState.passwordError = Strings.sandboxPasswordError;

		if (login === "")
			newState.loginError = Strings.sandboxEmptyField;

		if (password === "")
			newState.passwordError = Strings.sandboxEmptyField;

		this.setState(newState);

		// if (newState.loginError === null && newState.passwordError === null)
			this.props.context.current.OnFinished();
	}

	public render() : JSX.Element
	{
		return (
			<Stack tokens={ { childrenGap: 10 } } >
				<Text variant="xLarge">{ Strings.sandboxLoginHeader }</Text>

				<TextField
					placeholder={ Strings.sandboxEmail } name="field1" required
					errorMessage={ this.state.loginError } />
				<TextField
					placeholder={ Strings.sandboxPassword } name="field2" required
					type="password" canRevealPassword
					errorMessage={ this.state.passwordError } />

				<Stack horizontalAlign="end" tokens={ { childrenGap: 10 } }>
					<PrimaryButton text={ Strings.sandboxLogin } name="btn1" onClick={ () => this.OnSubmit() } />
				</Stack>

				<div className="ezl-container" data-widgettype="button" data-login="input[name=field1]" data-password="input[name=field2]" data-submit="button[name=btn1]" />
			</Stack>
		);
	}
}