import { createTheme, getTheme, ITheme, Theme } from "@fluentui/react";

export function GetCurrentTheme() : ITheme
{
	return window.matchMedia("(prefers-color-scheme: dark)").matches ? DarkTheme : getTheme();
}

export const DarkTheme : Theme = createTheme(
	{
		palette:
		{
			themePrimary: "#69afe5",
			themeLighterAlt: "#040709",
			themeLighter: "#111c25",
			themeLight: "#203545",
			themeTertiary: "#3f698a",
			themeSecondary: "#5d9bca",
			themeDarkAlt: "#77b7e8",
			themeDark: "#8bc2ec",
			themeDarker: "#a8d1f1",
			neutralLighterAlt: "#3c3c3c",
			neutralLighter: "#444444",
			neutralLight: "#515151",
			neutralQuaternaryAlt: "#595959",
			neutralQuaternary: "#5f5f5f",
			neutralTertiaryAlt: "#7a7a7a",
			neutralTertiary: "#c8c8c8",
			neutralSecondary: "#d0d0d0",
			neutralPrimaryAlt: "#dadada",
			neutralPrimary: "#ffffff",
			neutralDark: "#f4f4f4",
			black: "#f8f8f8",
			white: "#323130"
		},
		semanticColors:
		{
			successIcon: "#92c353",
			successBackground: "#393d1b",
			errorIcon: "#f1707b",
			errorBackground: "#442726",
			errorText: "#f1707b",
			infoBackground: "#41403e",
			infoIcon: "#c8c6c4",
			messageText: "#f3f2f1",
			messageLink: "#69afe5",
			messageLinkHovered: "#a8d1f1"
		}
	});