#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"
import  chalkAnimation from "chalk-animation"



const sleep =()=>{
    return new Promise ((res)=>{
        setTimeout(res ,2000);

    })
}
async function welcom(){
    let  rainbowchalkTitle =chalkAnimation.rainbow('Lets start calculation:');
    await sleep();
    rainbowchalkTitle.stop();
}
await welcom();

async function askQuestions(){
  const answers= await inquirer
    .prompt([
    /* Pass your questions in here */

    {
        type: 'number',
        name: 'num1',
        message: "Enter the first number:",

    },
    {
        type: 'number',
        name: 'num2',
        message: "Enter the second  number:",
    },
    {
        
            type:'list',
            name : "operator",
            message: "which operation you want to perfoam ? \n",
            choices: ['addition', 'subtraction', 'multiplication', 'division']
        },
    
  ]);
 
    if 
    (answers.operator=='addition'){
        console.log(chalk.green(`${answers.num1} + ${answers.num2} = ${answers.num1 +  answers.num2}`));
    } 

    else if
    (answers.operator=='subtraction'){
        console.log(chalk.green(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`));
    }

    else if 
    (answers.operator=='multiplication'){
        console.log(chalk.green(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`));
    }
        else if
         (answers.operator=='division'){
        console.log(chalk.green(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`));
    }

  
};

//  await askQuestions();
async function startAgaine(){
    do {
         await askQuestions();
        
        var againe=inquirer
        .prompt({
            type : "input",
            name: "restart",
            message : "Do you want to continue ?  Press: y or n :"


    })
    }while((await againe).restart=='y' || (await againe).restart== "Y"|| (await againe).restart=="YES" || (await againe).restart== "yes");
 }
 startAgaine();


 


