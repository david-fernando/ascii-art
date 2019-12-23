const gm = require("gm");
const fileSystem = require('fs')
const fileList = require("../data/fileList.js")
const converter = require("./convertToArray.js");

let arrayOfObjects = converter.convertToArray(fileList.ready_images);

let subArray = arrayOfObjects.map((array, index)=>{return converter.convertToArray(arrayOfObjects[index])})

function loadFile(convertImagetoAscii){
	return arrayOfObjects.map((array, index)=>{
		return subArray[index].map((internalArray, subIndex)=>{
			fileSystem.readFileSync(subArray[index][subIndex].url);
			gm(subArray[index][subIndex].url)
			.toBuffer('PNG',function (error, image) {
				if (error) return new Error("error");
			   convertImagetoAscii(image);
		})
		});
	})

}

module.exports.loadFile = loadFile
