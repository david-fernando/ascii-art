const jimp  = require("jimp");
const fileList = require("../data/fileList.js");
const converter = require("./convertToArray.js");

let arrayOfObjects = converter.convertToArray(fileList.unedited_images);
let subArray = arrayOfObjects.map((array, index)=>{return converter.convertToArray(arrayOfObjects[index])})

function edit(){
	return arrayOfObjects.map((array, index)=>{
		return subArray[index].map((internalArray, subIndex)=>{
			jimp.read(subArray[index][subIndex].url)
  		  	 .then(image => {
  	           return image
  	             .resize(350, 300)
  	             .write(`./edited_images/${subArray[index][subIndex].new_url}/${subArray[index][subIndex].new_name}`)
  		     })
  		     .catch(error =>{
  			   console.error(error);
  		     })
		});
	})
}

module.exports.edit = edit
