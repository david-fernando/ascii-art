const imageToAscii = require("image-to-ascii");
const loadImage = require("./modules/loadImage.js");
const editImage = require("./modules/editImages.js");
const checkFileExist = require("./modules/checkFileExistence.js")

if(checkFileExist.checkFileExistsSync()){
	loadImage.loadFile(image_to_ascii);
}else{
	console.log("Saving images to referenced location ...")
	editImage.edit();
	setTimeout(function(){
		(function doSomething(x) {
			console.log("Loading the images ...") 
			loadImage.loadFile(image_to_ascii); })();
	}, 4000);
}

function image_to_ascii(image) {
	imageToAscii(image, {
	colored: false,
	pixels: ':|*¨',
	size_options: {
		screen_size: {
			width: 50,
			height: 20
		}
	}
}, (error, converted) =>{
	console.log(error || converted);
})
}
