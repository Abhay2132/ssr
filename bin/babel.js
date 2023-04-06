import fs from "node:fs";

const config = {
  "presets": [
    [
      "@babel/preset-react",
      {
        "pragma": "dom", // default pragma is React.createElement (only in classic runtime)
        "pragmaFrag": "DomFrag", // default is React.Fragment (only in classic runtime)
        "throwIfNamespace": false, // defaults to true
        "runtime": "classic" // defaults to classic
        // "importSource": "custom-jsx-library" // defaults to react (only in automatic runtime)
      }
    ]
  ]
}

export function compile (code, dest) {
	let a = babel.transform(index, config)
	if(dest) return fs.writeFileSync(dest)
	return a.code;
}