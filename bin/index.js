import babel from "@babel/core"
import fs from "node:fs";
import path from "node:path"
import { trans } from "./babel";
import http from "http";

const r = path.resolve();
const read = (file) => fs.readFileSync(file).toString()
const index = read(path.join(r,"src", "index.jsx"))

http.createServer((req, res) 
