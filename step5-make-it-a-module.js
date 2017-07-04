var https = require("https");

function printHTML(html) {
  console.log(html);
}

module.exports = function getHTML(options, callback=printHTML) {
  var info = "";
  var aRequestOptions = options;

  https.get(aRequestOptions, function(response) {
    response.setEncoding("utf8");
    response.on('data', function(data) {
      info += data;
    });
    response.on('end', function() {
      console.log('Response stream complete.');
      callback(info);
    });
  });
}
