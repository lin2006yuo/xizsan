"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const htmlparser2_1 = require("htmlparser2");
class htmlparser {
    parse(rawhtml) {
        return new Promise((resolve, reject) => {
            const handler = new htmlparser2_1.DomHandler((err, dom) => {
                if (err)
                    reject(err);
                else
                    resolve(dom);
            });
            const parser = new htmlparser2_1.Parser(handler);
            parser.write(rawhtml);
            parser.end();
        });
    }
}
exports.default = htmlparser;
// const parser = new Parser(
//   {
//     onopentag(name, attribs) {
//       if (name === "script" && attribs.type === "text/javascript") {
//         console.log("JS! Hooray!")
//       }
//     },
//     ontext(text) {
//       console.log("-->", text)
//     },
//     onclosetag(tagname) {
//       if (tagname === "script") {
//         console.log("That's it?!")
//       }
//     }
//   },
//   { decodeEntities: true }
// )
// parser.write(
//   "Xyz <script type='text/javascript'>var foo = '<<bar>>';</ script>"
// )
// parser.end()
