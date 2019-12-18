import { Parser, DomHandler, DomUtils } from "htmlparser2"

class htmlparser {
  parse(rawhtml: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const handler = new DomHandler((err, dom) => {
        if(err) reject(err)
        else resolve(dom)
      })

      const parser = new Parser(handler)
      parser.write(rawhtml)
      parser.end()
    })
  }
  toString(ast: any): string {
    return DomUtils.getOuterHTML(ast)
  }
}

export default htmlparser