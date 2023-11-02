const chalk=require('chalk')
console.log("Chalk NPM Package")
console.log(chalk.blue('Hello world!'));
console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));
console.log(chalk.bgRed('Hello') + ' World' + chalk.bgGreenBright('!'));
console.log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));