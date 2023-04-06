import babel from "@babel/core"
import fs from "node:fs";
import vm from "vm";
import {format} from "prettier"

const b = (str) => format(str, { useTabs : true, parser: "babel" });
// -> "foo()"
const config = {
  "presets": [
    ["@babel/preset-react"]
  ]
}

let re = /import(.*?)React from "react"/g
export function compile (data, dest) {
	let a = babel.transform(data, config)
	let code = b(a.code.replace(/(\/\*#__PURE__\*\/)/g, ""))
	if(!re.test(code)) code = "import * as React from \"react\";\n" + code;
	
	if(dest) return fs.writeFileSync(dest, code);
	return code;
}

function createREfromStr (str ) {
	
}