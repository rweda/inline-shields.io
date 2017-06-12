const fs = require("fs-extra");

const [ a, b, c ] = require("./package.json").version.split(".");
const version = `${a}.${("00"+b).slice -3}${("00"+c).slice -3}`;

const out = "public";

const script = require("./package.json").main;
const meta = script.replace(".js", ".meta.js");
const user = script.replace(".js", ".user.js");

// @match entries
const match = [
];

// @grant entries
const grant = [
];

const { repo } = require("./package.json").repository.url.match(/github.com\/([^\/]+\/[^\/]+)/).slice(1);
const ghPages = `https://raw.githubusercontent.com/${repo}/gh-pages/`;

const header = `\
// ==UserScript==
// @name         ${require("./package.json").shortName || require("./package.json").name}
// @namespace    ${require("./package.json").namespace}
// @version      ${version}
// @description  ${require("./package.json").description}
// @author       ${require("./package.json").author}
${match.map(m => `// @match        ${m}`).join("\n")}
${grant.map(g => `// @grant        ${g}`).join("\n")}
// @updateURL    ${ghPages}/${meta}
// @downloadURL  ${ghPages}/${user}
// ==/UserScript==
`;

const mkdir = fs.ensureDir(out);

Promise
  .all([
    fs.readFile(script, "utf8"),
    mkdir,
  ])
  .then(([contents]) => fs.writeFile(`${out}/${user}`, `${header}\n${contents}`))
  .then(() => console.log(`Wrote ${user}`));

mkdir
  .then(() => fs.writeFile(`${out}/${meta}`, header))
  .then(() => console.log(`Wrote ${meta}`));
