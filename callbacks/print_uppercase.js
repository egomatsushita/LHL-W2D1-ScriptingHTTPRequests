var getHTML = require("./http-functions.js");

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase(html) {
  var infoUpperCase = html.toUpperCase();
  console.log(infoUpperCase);
}

getHTML(requestOptions, printUpperCase);