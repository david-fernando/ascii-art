const converter = require("../modules/convertToArray.js");

const fileList = {
	unedited_images:{
		laranja:{
			first_image:{
				url: "./images/laranja/orange1.png",
				new_name: "first_image.png",
				new_url: "./laranja"
			},
			second_image:{
				url: "./images/laranja/orange2.png",
				new_name: "second_image.png",
				new_url: "./laranja"
			},
			third_image:{
				url: "./images/laranja/orange3.png",
				new_name: "third_image.png",
				new_url: "./laranja"
			}
		},
		banana:{
			first_image:{
				url: "./images/banana/banana1.png",
				new_name: "first_image.png",
				new_url: "./banana"
			},
			second_image:{
				url: "./images/banana/banana2.png",
				new_name: "second_image.png",
				new_url: "./banana"
			},
			third_image:{
				url: "./images/banana/banana3.png",
				new_name: "third_image.png",
				new_url: "./banana"
			},
			fourth_image: {
				url: "./images/banana/banana4.png",
				new_name: "fourth_image.png",
				new_url: "./banana"
			}
		},
		maça:{
			first_image:{
				url: "./images/maça/apple1.png",
				new_name: "first_image.png",
				new_url: "./maça"
			},
			second_image:{
				url: "./images/maça/apple2.png",
				new_name: "second_image.png",
				new_url: "./maça"
			},
			third_image:{
				url: "./images/maça/apple3.png",
				new_name: "third_image.png",
				new_url: "./maça"
			}
		}
	},
	ready_images:{
		laranja:{
			first_image:{
				url: "./edited_images/laranja/first_image.png"
			},
			second_image:{
				url: "./edited_images/laranja/second_image.png"
			},
			third_image:{
				url: "./edited_images/laranja/third_image.png"
			}
		},
		banana:{
			first_image:{
				url: "./edited_images/banana/first_image.png"
			},
			second_image:{
				url: "./edited_images/banana/second_image.png"
			},
			third_image:{
				url: "./edited_images/banana/third_image.png"
			},
			fourth_image: {
				url: "./edited_images/banana/fourth_image.png"
			}
		},
		maça:{
			first_image:{
				url: "./edited_images/maça/first_image.png"
			},
			second_image:{
				url: "./edited_images/maça/second_image.png"
			},
			third_image:{
				url: "./edited_images/maça/third_image.png"
			}
		}
	}
}

module.exports = fileList;