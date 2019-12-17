import fs from "fs"
import path from "path"

import htmlparser from "./htmlparser"

const root = process.cwd()
const html = fs.readFileSync(path.resolve(root,"mock/template/index.vue"), "utf-8")
const parser = new htmlparser()
parser.parse(html).then(ast => {
  console.log(ast)
})