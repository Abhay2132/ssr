import * as React from "react";
export default function Root() {
	return React.createElement(
		"html",
		null,
		React.createElement(
			"head",
			null,
			React.createElement("title", null, "SSR"),
			React.createElement("meta", {
				name: "viewport",
				content: "width=device-width, initial-scale=1.0",
			})
		),
		React.createElement(
			"body",
			null,
			React.createElement(
				"div",
				{
					id: "root",
				},
				React.createElement(App, null)
			)
		)
	);
}
function App() {
	return React.createElement("h1", null, " Hello Abhay ! ");
}
