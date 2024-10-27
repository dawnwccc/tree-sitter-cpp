const Parser = require("tree-sitter")
const CPP_LANGUAGE = require("./src")

let cpp_code = `
// 全局作用域内联函数定义
inline int globalInlineFunction(int x, int y) {
    return x * y;
}
`

const parser = new Parser()
parser.setLanguage(CPP_LANGUAGE)

const tree = parser.parse(cpp_code)
console.log(tree.rootNode.toString())