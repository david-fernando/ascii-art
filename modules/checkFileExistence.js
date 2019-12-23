const fileSystem = require("fs");
const fileList = require("../data/fileList.js");
const converter = require("./convertToArray.js");

let arrayOfObjects = converter.convertToArray(fileList.ready_images);

let subArray = arrayOfObjects.map((array, index)=>{return converter.convertToArray(arrayOfObjects[index])})

function checkFileExistsSync(){
    let flag = true;
    try{
        arrayOfObjects.map((array, index)=>{
            subArray[index].map((interanlArray, subIndex)=>{
                fileSystem.accessSync(subArray[index][subIndex].url, fileSystem.F_OK);
            })
        })
    
    }catch(error){
        flag = false
    }
    return flag;
  }

module.exports.checkFileExistsSync = checkFileExistsSync;