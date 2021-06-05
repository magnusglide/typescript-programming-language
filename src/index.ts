const path = require("path");
const fs = require("fs");
import Lexer from "./Lexer";
import Parser from "./Parser";

const folder = "./code";
const extenstion = ".txt";
let files: String[] = [];

fs.readdirSync(folder).forEach((file: String) => {
  files.push(file);
});

const targetFiles: String[] = files.filter((file) => {
  return path.extname(file).toLowerCase() === extenstion;
});

targetFiles.forEach((file) => {
  console.log(`${file} output:`)
  let lexer = new Lexer(fs.readFileSync(folder + "/" + file, "utf8"));
  lexer.lexAnalysis();

  const parser = new Parser(lexer.tokenList);

  const rootNode = parser.parseCode();

  parser.run(rootNode);
});

const code = `sum ASSIGN 5 MINUS 9;
              sumtwo ASSIGN 0 MINUS 6;
              LOG sum;
              LOG sumtwo;
              LOG sum MINUS sumtwo PLUS (205 PLUS 3);`;

if (code != null) {
  console.log(`String variable output:`)

  const lexer = new Lexer(code);

  lexer.lexAnalysis();

  const parser = new Parser(lexer.tokenList);

  const rootNode = parser.parseCode();

  parser.run(rootNode);
}
