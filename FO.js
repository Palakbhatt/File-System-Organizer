// We will be creating a File System Organizer//
//Features of the Project -
//If you have numerous Files in a folder and they are not Properly arranged
//So you can use this tool to arrange them in specific directory according to their extension
// like text files will go into text File Folder .exe files will go into application folder and so on
// so at the end you will have a arranged set of files in specific folders

const helpModule = require('./commands/help')
const organizeModule = require('./commands/organize')
const treeModule = require('./commands/tree')
let inputArr = process.argv.slice(2);

//[Node FO.js tree folderpath]

let command = inputArr[0]; // tree, organize, help

switch (command) {

    case 'tree':
        //console.log('Tree Implemented')
        treeModule.treeKey(inputArr[1])
        break;
    case 'organize':
        organizeModule.organizeKey(inputArr[1])
        break;
    case 'help':
        helpModule.helpKey()
        break;

    default:
        console.log("Please enter a valid command");
        break;

}