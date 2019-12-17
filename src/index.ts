import fs from "fs"
import path, { dirname } from "path"

import htmlparser from "./htmlparser"

const root = process.cwd()
const html = fs.readFileSync(path.resolve(root,"src/index.vue"), "utf-8")
const parser = new htmlparser()
parser.parse(html).then(ast => {
  console.log(ast)
})