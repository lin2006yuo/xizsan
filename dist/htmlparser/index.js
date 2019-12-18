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
    toString(ast) {
        return htmlparser2_1.DomUtils.getOuterHTML(ast);
    }
}
exports.default = htmlparser;
