let acorn = require("acorn");
const parsed = acorn.parse("function main(a, b) { c = a + b; return c }", {ecmaVersion: 2020})


const {input, body} = extractInputsAndBody(parsed.body)
flattenBody(iniput, body)


function extractInputsAndBody(code) {
  inputs = []

  for (node of code) {
    node.params.forEach(param => { inputs.push(param.name) })
  }
  console.log(inputs)

  let returned = false

  let body = []
  let block = code[0].body
  if (block.type != 'BlockStatement') {
    throw new Error("Only block statement supported")
  }
  console.dir(block.body)
  for (statement of block.body) {
    if(statement.type != 'ExpressionStatement' && statement.type != 'ReturnStatement') {
      throw new Error("Unsupported statement")
    }
    if(returned){
      throw new Error("Return has to be the last expression")
    }
    if (statement.type == "ExpressionStatement") {
      body.push(statement.expression)
    }
    if (statement.type == 'ReturnStatement') {
      returned = true
    }
  }
  return { inputs, body }
}

function flattenBody(body) {
  let output = []
  for (statement of body) {
    output.push(flattenStatement(statement))
  }
  return output
}

