import babel from "@babel/core"
import fs from "node:fs";
import path from "node:path"
import { compile } from "./babel.js";
import pkg from 'react-dom/server';
const { renderToReadableStream } = pkg;

const port = 3000;
const log = console.log

const r = path.resolve();
const j = (...a) => path.join(...a);

const read = (file) => fs.readFileSync(file).toString()
const index = read(path.join(r,"src", "index.jsx"))

const buildDir = j(r,"build");
if(fs.existsSync(buildDir)) fs.rmSync(buildDir, { recursive : true})
if(!fs.existsSync(buildDir)) fs.mkdirSync(buildDir, { recursive : true})

readDir(path.join(r, "src"), (file) => {
	if(!file.endsWith(".jsx")) return;
	compile(
		read(file), 
		j(buildDir, path.basename(file).slice(0,-1))
	);
});

function readDir(dir, cb){
	if(!fs.statSync(dir).isDirectory()) return cb && cb(dir);
	let files = fs.readdirSync(dir);
	files.forEach(file => readDir(path.join(dir,file), cb));
}