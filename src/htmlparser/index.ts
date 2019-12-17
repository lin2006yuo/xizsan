import { Parser, DomHandler } from "htmlparser2"

class htmlparser {
  parse(rawhtml: string): Promise<object> {
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
}

export default htmlparser

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
