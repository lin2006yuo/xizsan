import fs from 'fs'
import path from 'path'

import htmlparser from './htmlparser'
import { DomUtils } from 'htmlparser2'

const root = process.cwd()
const html = fs.readFileSync(
  path.resolve(root, 'mock/template/index.vue'),
  'utf-8'
)
const parser = new htmlparser()
parser.parse(html).then(ast => {
  console.log(ast)
  debugger
  let styleElem
  for(let elem of ast) {
    if(elem.tagName === 'style') styleElem = elem
  }

  console.log(parser.toString(styleElem))
})
