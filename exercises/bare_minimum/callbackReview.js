/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, nextInstructions) {
  // TODO
  fs.readFile(filePath, 'utf8', function(err, contents){
    if(err){
      nextInstructions(err);
    } else {
      var firstLine = contents.split('\r\n');
      nextInstructions(undefined, firstLine[0]);
    }
  })
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, nextInstructions) {
  // TODO
  //nextInstructions();
  //console.log(request.get(url));
  request(url, function(err, response, contents){
    if(err){
      nextInstructions(err);
    } else {
      var statCode = response.statusCode;
      nextInstructions(undefined, statCode);
    }
  })
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
