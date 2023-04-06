export default function Root () {
	return (
		<html>
			<head>
				<title>SSR</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</head>
			<body>
				<div id="root"><App/></div>
			</body>
		</html>
	)
}

function App () {
	return (
		<h1> Hello Abhay ! </h1>
	)
}