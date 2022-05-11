import React from "react";
import { ActionButton, Depths, FontSizes, FontWeights, ITheme, MotionAnimations, PrimaryButton, Stack, Text } from "@fluentui/react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { GetCurrentTheme } from "../Services/ThemeService";
import { Strings } from "../Services/LocalizationService";

interface IResultRecord
{
	Name : string;
	Value : number;
}

export default class Result extends React.Component<{ records : number[] }>
{
	public render() : JSX.Element
	{
		let theme : ITheme = GetCurrentTheme();

		let data : IResultRecord[] = this.props.records.map((value, index) =>
			({
				Name: `${Strings.scenario} ${index + 1}`,
				Value: Number.parseFloat(value.toFixed(2))
			}));

		return (
			<Stack
				verticalAlign="center" horizontalAlign="center"
				verticalFill horizontal
				className="container"
				styles={ { root: { animation: MotionAnimations.fadeIn, gridGap: "60px" } } } >

				<Stack className="containerItem" tokens={ { childrenGap: 20, maxWidth: 600 } }>
					<Text variant="xxLarge">{ Strings.resultsTitle }</Text>
					<Stack>
						<Text variant="xLarge">{ Strings.resultsHeader }</Text>
						<Text>{ Strings.resultsSubheader }</Text>
					</Stack>

					<Text variant="xLarge">{ Strings.resultsUserHeader }</Text>
					<ul>
						<li>{ Strings.resultsUser1 }</li>
						<li>{ Strings.resultsUser2 }</li>
						<li>{ Strings.resultsUser3 }</li>
						<li>{ Strings.resultsUser4 }</li>
					</ul>

					<Text variant="xLarge">{ Strings.resultsDevHeader }</Text>
					<ul>
						<li>{ Strings.resultsDev1 }</li>
						<li>{ Strings.resultsDev2 }</li>
						<li>{ Strings.resultsDev3 }</li>
					</ul>

					<Stack horizontal wrap tokens={ { childrenGap: 10 } }>
						<ActionButton
							text={ Strings.tryAgain } iconProps={ { iconName: "Refresh" } }
							styles={ { root: { height: 32 } } }
							onClick={ () => window.location.reload() } />
						<PrimaryButton text={ Strings.learnMore } href="https://easylogon.foxdev.studio" />
					</Stack>
				</Stack>

				<Stack className="containerItem" tokens={ { childrenGap: 10, maxWidth: 600 } }>
					<Text variant="xxLarge">{ Strings.results }</Text>
					<Stack
						tokens={ { childrenGap: 20, padding: 20 } }
						styles={ { root: { boxShadow: Depths.depth8, borderRadius: 6 } } } >

						<ResponsiveContainer height={ 80 } width="100%">
							<BarChart
								layout="vertical"
								barCategoryGap={ 5 }
								data={ data }
								margin={ { right: 30, left: 25 } } >

								<XAxis type="number" hide scale="linear" />
								<YAxis
									type="category" dataKey="Name" scale="auto"
									axisLine={ false } tickLine={ false }
									tick={ { fill: theme.palette.neutralPrimary, width: 100, fontWeight: FontWeights.semibold } } />

								<Bar dataKey="Value" radius={ 4 } label={ { position: "right", fill: theme.palette.neutralPrimary } } fill={ theme.palette.themePrimary } />
							</BarChart>
						</ResponsiveContainer>

						{ data[0].Value > data[1].Value ?
							<Stack>
								<Text variant="large">{ Strings.resultsUserHeader2 }</Text>
								<Text>{ Strings.userResultP1 } <b style={ { fontSize: FontSizes.large, color: theme.semanticColors.successIcon } }>{ Math.round(100 - data[1].Value / data[0].Value * 100) }% { Strings.userResultP2 }</b> { Strings.userResultP3 }</Text>
							</Stack>
							:
							<>
								<Text>{ Strings.userResultAlt1 }</Text>
								<Text>{ Strings.userResultAlt2 }</Text>
							</>
						}

						{ data[0].Value > data[2].Value &&
							<Stack>
								<Text variant="large">{ Strings.resultsDevHeader2 }</Text>
								<Text>{ Strings.devResultP1 } <b style={ { fontSize: FontSizes.large, color: theme.semanticColors.successIcon } }>{ Math.round(100 - data[2].Value / data[0].Value * 100) }% { Strings.devResultP2 }</b> { Strings.devResultP3 }</Text>
							</Stack>
						}
					</Stack>
				</Stack>
			</Stack>
		);
	}
}