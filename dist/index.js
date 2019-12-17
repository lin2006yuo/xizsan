"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const htmlparser_1 = __importDefault(require("./htmlparser"));
const root = process.cwd();
const html = fs_1.default.readFileSync(path_1.default.resolve(root, "src/index.vue"), "utf-8");
const parser = new htmlparser_1.default();
parser.parse(html).then(ast => {
    console.log(ast);
});
