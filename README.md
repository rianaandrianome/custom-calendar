## Tools and plugins used

### Node version 
node version 10.16.3

Reasons: 
Always choose a node version with an even number marked LTS (Long-Term Support) because it is :
* stable : most of the functionalities offered are already used by many developers and are working well, 
an new and not stable version would sometimes include new features that are not yet perfect and can cause problems while developping
*  extended support : the version is constantly being maintained, 
support continously fix bugs are provide patches to improve the stability of the version
* and provide a reliable platform for applications of any scale.

### EsLint and Prettier plugins used to flag programming errors, bugs, stylistic errors, and suspicious constructs during development
"eslint" : for identifying and reporting syntax errors, bugs etc in the code 
"eslint-plugin-react" : provide React specific linting rules for ESLint
"eslint-config-airbnb" : contains eslint rules to flag code not following the [airbnb coding conventions](https://github.com/airbnb/javascript/tree/master/react)
"eslint-plugin-import" : provide linting for import/export syntax, and prevent issues with misspelling of file paths and import names.
"eslint-plugin-jsx-a11y" : checker for accessibility rules on JSX elements.
"eslint-plugin-react-hooks" : enforces the [Rules of Hooks](https://reactjs.org/docs/hooks-rules.html)

"prettier": opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules
"eslint-config-prettier": Turns off all rules that are unnecessary or might conflict with Prettier. So we can use together with some other config. (eslint)
"eslint-plugin-prettier": Runs Prettier as an ESLint rule and reports differences as individual ESLint issues.
"@typescript-eslint/eslint-plugin" : ESLint plugin which provides lint rules for TypeScript codebases.
"@typescript-eslint/parser": parser which leverages TypeScript ESTree to allow for ESLint to lint TypeScript source code.

"eslint-config-airbnb-typescript": airbnb rules for both JS and TS files
"eslint-plugin-jest": ESLint plugin for Jest