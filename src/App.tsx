import React from "react";
import { ActionButton, CommandButton, Dialog, FontClassNames, Image, ITheme, Link, Stack, Text, ThemeProvider } from "@fluentui/react";
import "./App.scss";
import logo from "./logo.svg";
import Start from "./Views/Start";
import ScenarioOne from "./Views/Scenarios/ScenarioOne";
import ScenarioTwo from "./Views/Scenarios/ScenarioTwo";
import ScenarioThree from "./Views/Scenarios/ScenarioThree";
import Result from "./Views/Result";
import { GetCurrentTheme } from "./Services/ThemeService";
import { Strings } from "./Services/LocalizationService";

enum AvailableViews
{
	Start = 0,
	Secnario1 = 1,
	Scenario2 = 2,
	Scenario3 = 3,
	Result = 4
}

interface IStates
{
	currentView : AvailableViews;
	records : number[];
	haveInternet : boolean;
	theme : ITheme;
}

export default class App extends React.Component<any, IStates>
{
	constructor(props : any)
	{
		super(props);
		this.state =
		{
			currentView: AvailableViews.Start,
			records: [],
			haveInternet: true,
			theme: GetCurrentTheme()
		};

		document.querySelector("head meta[name=theme-color]").setAttribute("content", this.state.theme.palette.white);

		window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () =>
		{
			let theme = GetCurrentTheme();
			this.setState({ ...this.state, theme });
			document.querySelector("head meta[name=theme-color]").setAttribute("content", theme.palette.white);
		});
	}

	async componentDidMount() : Promise<void>
	{
		window.addEventListener("load", () => this.setState({ ...this.state, haveInternet: navigator.onLine }));
		window.addEventListener("online", () => this.setState({ ...this.state, haveInternet: navigator.onLine }));
		window.addEventListener("offline", () => this.setState({ ...this.state, haveInternet: navigator.onLine }));
	}

	OnNext(elapsedTime : number) : void
	{
		this.setState({ ...this.state, currentView: this.state.currentView + 1, records: [...this.state.records, elapsedTime] });
	}

	public render() : JSX.Element
	{
		return (
			<ThemeProvider theme={ this.state.theme }>
				<Stack verticalFill tokens={ { padding: "10px 20px", childrenGap: 20 } } className={ FontClassNames.medium }>

					<Stack grow>
						{ this.state.currentView === AvailableViews.Start &&
							<Start onNext={ () => this.setState({ ...this.state, currentView: AvailableViews.Secnario1 }) } />
						}
						{ this.state.currentView === AvailableViews.Secnario1 &&
							<ScenarioOne onNext={ (e) => this.OnNext(e) } />
						}
						{ this.state.currentView === AvailableViews.Scenario2 &&
							<ScenarioTwo onNext={ (e) => this.OnNext(e) } />
						}
						{ this.state.currentView === AvailableViews.Scenario3 &&
							<ScenarioThree onNext={ (e) => this.OnNext(e) } />
						}
						{ this.state.currentView === AvailableViews.Result &&
							<Result records={ this.state.records } />
						}
					</Stack>

					<Dialog
						hidden={ this.state.haveInternet }
						dialogContentProps={
							{
								title: Strings.offlineTitle,
								subText: Strings.offlineMessage
							} } >
					</Dialog>

					<Stack horizontalAlign="center">
						<CommandButton
							text={ Strings.langLabel } iconProps={ { iconName: "LocaleLanguage" } }
							menuProps={
								{
									items:
									[
										{ key: "en", text: Strings.langAlt, href: Strings.langHref }
									]
								}
							} />
					</Stack>

					<Stack horizontalAlign="center" tokens={ { childrenGap: 5, padding: 10 } }>
						<Image src={ logo } width={ 100 }/>
						<ActionButton href="https://easylogon.foxdev.studio" iconProps={ { iconName: "Home" } } text={ Strings.homepageLink } />
						<Text variant="small">©{ new Date().getFullYear() } <Link target="_blank" href="https://foxdev.studio">FoxDev Studio</Link>. { Strings.copyrightCaption }</Text>
					</Stack>
				</Stack>
			</ThemeProvider>
		);
	}
}