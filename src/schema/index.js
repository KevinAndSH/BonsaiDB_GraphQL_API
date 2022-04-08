const fs = require("fs")
const path = require("path")

let schemaString = ""

fs.readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== path.basename(__filename)) && (file.slice(-8) === '.graphql')
  })
  .forEach(file => {
    const content = fs.readFileSync(path.join(__dirname, file))
    schemaString += content
  })


module.exports = schemaString
