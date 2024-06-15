#! /usr/bin/env node 
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
let myBalance = 10000;
let myPin = 1234;
// print welcome message
console.log(chalk_1.default.rgb(254, 219, 101)("\n\tWELCOME  TO  ATM  MACHINE\n\t"));
let pinAnswer = await inquirer_1.default.prompt([
    {
        name: "pin",
        type: "number",
        message: "\nENTER YOUR PIN : "
    }
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk_1.default.rgb(0, 255, 0)("\nPIN IS CORRECT,  LOGIN SUCCESSFULLY!"));
    console.log(chalk_1.default.rgb(255, 255, 0)(`\nYOUR CURRENT ACCOUNT BALANCE IS ${myBalance}\n`));
    let operationAnswer = await inquirer_1.default.prompt([
        {
            name: "operation",
            type: "list",
            choices: ["\nWITHDRAW AMOUNT", "\nCHECK BALANCE"],
            message: "\nSELECT YOUR OPERATION :"
        }
    ]);
    if (operationAnswer.operation === "\nWITHDRAW AMOUNT") {
        let withdrawAnswer = await inquirer_1.default.prompt([
            {
                name: "withdrawMethod",
                type: "list",
                message: "\nSELECT WITHDRAW METHOD : ",
                choices: ["\nFAST CASH", "\nENTER AMOUNT"]
            }
        ]);
        if (withdrawAnswer.withdrawMethod === "\nFAST CASH") {
            let fastCashAnswer = await inquirer_1.default.prompt([
                {
                    name: "fastCash",
                    type: "list",
                    message: "\nSELECT FAST CASH AMOUNT : \n",
                    choices: [1000, 3000, 5000, 7000, 10000]
                }
            ]);
            if (fastCashAnswer.fastCash > myBalance) {
                console.log(chalk_1.default.rgb(255, 0, 0)("\nINSUFFICIENT BALANCE"));
            }
            else if (myBalance -= fastCashAnswer.fastCash) {
                console.log(chalk_1.default.rgb(255, 0, 255)(`\n${fastCashAnswer.fastCash} WITHDRAW SUCCESSFULLY`));
                console.log(chalk_1.default.rgb(0, 255, 127)(`\nYOUR REMAINING BALANCE IS : ${myBalance}`));
            }
        }
        else if (withdrawAnswer.withdrawMethod === "\nENTER AMOUNT") {
            let amountAnswer = await inquirer_1.default.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "\nENTER THE AMOUNT TO WITHDRAW : "
                }
            ]);
            if (amountAnswer.amount > myBalance) {
                console.log(chalk_1.default.rgb(220, 20, 60)("\nINSUFFICIENT BALANCE"));
            }
            else {
                myBalance -= amountAnswer.amount;
                console.log(chalk_1.default.rgb(0, 255, 127)(`\n${amountAnswer.amount}  WITHDRAW SUCCESSFULLY`));
                console.log(chalk_1.default.rgb(225, 128, 0)(`\nYOUR REMAINING BALANCE IS : ${myBalance}`));
            }
        }
    }
    else if (operationAnswer.operation === "\nCHECK BALANCE") {
        console.log(chalk_1.default.rgb(0, 255, 255)(`\nYOUR ACCOUNT BALANCE IS : ${myBalance}`));
    }
}
else {
    console.log(chalk_1.default.rgb(255, 0, 0)("\nPIN IS INCORRECT , TRY AGAIN!"));
}
console.log(chalk_1.default.rgb(218, 165, 32)("\n PRESENTING  BY  ABDUL  REHMAN\n"));
