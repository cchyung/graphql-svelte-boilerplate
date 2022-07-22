/* eslint-disable */
import fs from "fs";
import { readdir, readFile } from "fs/promises";
import { resolve } from "path";

// https://stackoverflow.com/questions/5827612/node-js-fs-readdir-recursive-directory-search
async function* getFiles(dir) {
	const dirents = await readdir(dir, { withFileTypes: true });
	for (const dirent of dirents) {
		const res = resolve(dir, dirent.name);
		if (dirent.isDirectory()) {
			yield* getFiles(res);
		} else {
			yield res;
		}
	}
}

(async () => {
	fs.readFile(
		"./node_modules/@apollo/client/package.json",
		"utf8",
		(err, data) => {
			const result = data.replace(
				/\"dependencies\":/,
				'"exports":{".":{"node":"./main.cjs.js","default":"./index.js"},"./cache":{"node":"./cache/cache.cjs.js","default":"./cache/index.js"},"./core":{"node":"./core/core.cjs.js","default":"./core/index.js"},"./link/schema":{"node":"./link/schema/schema.cjs.js","default":"./link/schema/index.js"},"./link/context":{"node":"./link/context/context.cjs.js","default":"./link/context/index.js"},"./link/http":{"node":"./link/http/http.cjs.js","default":"./link/http/index.js"}},\n"dependencies":'
			);
			fs.writeFile(
				"./node_modules/@apollo/client/package.json",
				result,
				() => {}
			);
		}
	);
})();
