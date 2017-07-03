var https = require("https");

function getHTML(options, callback) {
  var info = "";
  var aRequestOptions = options;

  https.get(aRequestOptions, function(response) {
    response.setEncoding("utf8");
    response.on('data', function(data) {
      // info.push(data);
      info += data;
    });
    response.on('end', function() {
      callback(info);
    })
  })
}

function printHTML(html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);