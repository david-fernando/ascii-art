function convertToArray(fileObject){
	  return Object.values(fileObject).reduce((accumulator, item) => (
	  	[...accumulator, ...([item])]), []);
}

module.exports.convertToArray = convertToArray;