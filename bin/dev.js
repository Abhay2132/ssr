import fs from "node:fs";
import path from "node:path"
import { compile } from "./babel.js";
import http from "http";
import  {networkInterfaces} from "os";
import pkg from 'react-dom/server';
const { renderToReadableStream } = pkg;

const port = 3000;
const log = console.log

const r = path.resolve();
const j = (...a) => path.join(...a);

const read = (file) => fs.readFileSync(file).toString()
const index = read(path.join(r,"src", "index.jsx"))

http.createServer(async(req, res) => {
	let index = (await import(j(r, "build", "index.js"))).default;
	const stream = await renderToReadableStream( index, {
		bootstrapScriptContent: read(j(r,"build", "bootstrap.js"))
	});
	
	res.writeHead(200, {
		"Content-Type" : "text/html"
	});
	stream.pipe(res);
})
.listen(port, () => {
	let ni = networkInterfaces();
    let ms = 8;
    log("Server is onine xD");
    log("  MODE %s : %s", " ".repeat(ms - 4),  "dev");
    for (let key in ni)
      ni[key].forEach((item, i) => {
        if (item.family == "IPv4")
          log("  %s %s : http://%s:%i",key," ".repeat(ms - key.length),item.address,port);
      });
    log();
})