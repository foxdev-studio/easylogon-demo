import ReactDOM from "react-dom";
import App from "./App";
import { initializeIcons, mergeStyles } from "@fluentui/react";
import reportWebVitals from "./reportWebVitals";
import { Strings } from "./Services/LocalizationService";

initializeIcons();

UpdateLocale();

// Inject some global styles
mergeStyles({
	":global(body, html, #root, #root > div)": {
		margin: 0,
		padding: 0,
		height: "100vh",
		userSelect: "none"
	}
});

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

function UpdateLocale() : void
{
	// CIS countries languages ()
	let ruLanguages : string[] = [ "ru", "uk", "be", "kk", "ky", "ab", "mo", "my", "uz" ];

	if (window.location.pathname.startsWith("/en"))
		return;

	if (ruLanguages.includes(navigator.language.substring(0, 2)) || window.location.pathname.startsWith("/ru"))
		Strings.setLanguage("ru");
}