var getHTML = require("./http-functions.js");

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse(html) {
  var infoReverse = html.split("").reverse().join("");
  console.log(infoReverse);
}

getHTML(requestOptions, printReverse);