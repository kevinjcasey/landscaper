console.log(`Hello! You are starting a landscaping business! (No one envies you)`)

//==================
//variables
//==================

let playerMoney = 0
let currentTool = 0



const teeth = {
    cost: 0,
    purchased: true,
    earn: 1
}
const scissors = {
    name: "scissors",
    cost: 5,
    purchased: false,
    earn: 5
}
const pushMower = {
    name: "pushMower",
    cost: 25,
    purchased: false,
    earn: 50
}
const electricMower = {
    name: "electricMower",
    cost: 250,
    purchased: false,
    earn: 100
}        
const students = {
    name: "students",
    cost: 500,
    purchased: false,
    earn: 250,
}

const tools = [teeth, scissors, pushMower, electricMower, students]

//==============
// cut grass function
//==============

const cutGrass = () => {
    playerMoney += tools[currentTool].earn
    alert(`You cut the grass with ${tools[currentTool].name}. You earned ${tools[currentTool].earn} dollars. You currently have ${playerMoney} dollars.`);
}

const upgradeTool = () => {
    if (playerMoney >= tools[currentTool + 1].cost) {
    currentTool += 1 
    }
}

const playerVictory = () => {
    playerTool.name === "students" && playerMoney >= 1000;
}


// ================
// tool upgrade section
// ================

// if (tools.length) {

const toolCost = upgradeTool.cost


if (playerMoney >= toolCost) {
    const toolUpgrade = prompt(`Would you like to upgrade to ${upgradeTool.name}? The cost is ${upgradeTool.cost} dollars and will earn you ${upgradeTool.earn} dollars per cut. Y or N? `)
    // why aren't my alerts wrapping?
        cutGrass()
} 
// Need to figure out next step after tool is upgraded.

// =====================
// Below is all sections I initially tried but abandoned
// =====================

// const userToolChoice = () => {
//     const toolChoice = prompt(`You currently own ${playerTools}. What tool would you like to use? `);
//     console.log(toolChoice);
//     if (toolChoice === playerTools) {
//     console.log(`You chose ${playerTools} and earned ${teeth.earn} dollar`);
//     console.log(`You currently have ${playerMoney} dollars`)   
//     } 
// }
// userToolChoice()

//==========================
// player money gains (or something, idfk)
//==========================

//=======================
//buy tool section
//=======================

// const buyTool = () => {
//     // if (playerMoney <= 5) {
//     // console.log(`You currently have ${playerMoney} dollars`)
//     const toolBuy = prompt(`You currently have ${playerMoney}`)
//     if (playerMoney >= 5) {
//      console.log(`You currently have ${playerMoney} dollars. Would you like to buy scissors?`);
//  } else if (playerMoney >= 25) {
//      console.log(`You currently have ${playerMoney} dollars. Would you like to buy a push mower?`);
//  } else if (playerMoney >= 50) {
//      console.log(`You currently have ${playerMoney} dollars. Would you like to buy an electric mower?`)
//  } else if (playerMoney >= 250) {
//     console.log(`You currently have ${playerMoney} dollars. Would you like to buy an electric mower?`);
//  } else if (playerMoney >= 500) {
//      console.log((`You currently have ${playerMoney} dollars. Would you like to hire a team of starving students?`));
//  } 
// }




