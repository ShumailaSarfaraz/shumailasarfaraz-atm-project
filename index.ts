import inquirer from "inquirer";
import chalk, { backgroundColorNames } from "chalk";

let mybalance = 10000;
let myPin = 123456;

let pinanswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: (chalk.red("enter your pin")),
            type: "number",
        }
    ]
   
    ); 
if (pinanswer.pin === myPin) {
    console.log(chalk.blue("correct pin number !!!"));

let operationAns = await inquirer.prompt(
    [
        {
            name: "operation",
            message: (chalk.green("please select option")),
            type: "list",
            choices: ["withdraw", "check balance"],
        }
    ]
    
    );
    
    if (operationAns.operation === "withdraw"){
        
let amountAns = await inquirer.prompt(
    [
        {
            name: "amount",
            message: (chalk.yellow("enter amount to withdraw")),
            type: "number",
        }
    ]
    
    );
    // =, -=, +=
    mybalance -= amountAns.amount;
    
    console.log(chalk.red("Your remaining balance is: " + mybalance))
    if (operationAns <= mybalance) {
        
    }
    
} else if (operationAns.operation === "check balance") {
    console.log(chalk.black("Your balance is: " + mybalance));
};

} 

else {
    console.log(chalk.green("incorrect pin number !!!"));
}
