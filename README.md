This is not really a programming language, because of how little it can do, but it has a Lexer, a Parser and it can create an Abstract Syntax Tree.
Right now this language can create variables, assign values to variables, add and subtract variables and numbers with or without parentheses () and can log in console.

Commands (more about token types in TokenType.ts):

NUMBER: 0-9 - numbers

VARIABLE: [a-z] - lowercase letters

SEMICOLON: ; - every comand should end with a semicolon

ASSIGN: write ASSIGN instead of =

LOG: write LOG instead of console.log / print / printf

PLUS: write PLUS instead of +

MINUS: write MINUS instead of -

LPAR: just a normal (

RPAR: just a normal )


You can write code in a string variable in index.ts (variable name is "code") or in .txt files in folder "code". Files from the code folder will be executed first and than the string variable.

Requirements:
node (i have version 12)
npm (i have version 6)

How to run:

1. install git repo and open it
2. run "npm install" in project folder to install all node modules
3. run "npm start" in project folder to start index.ts file with nodemon
4. write code in a txt file in code folder or in string variable (there is example code already)
5. every time you save index.ts file - it will compile the code

And the last thing - this project was created thanks to a great course from a very smart teacher. I alone wouldn't have enough time to read about all the things important for this project in the nearest future.


https://user-images.githubusercontent.com/76588711/120903870-11e40300-c649-11eb-83a3-ce287ac8964a.mp4


https://user-images.githubusercontent.com/76588711/120903874-245e3c80-c649-11eb-9647-501e87901680.mp4


