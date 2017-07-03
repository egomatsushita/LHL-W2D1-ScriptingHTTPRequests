var https = require("https");

function getAndPrintHTML(options) {
  var info = [];

  var aRequestOptions = options;

  https.get(aRequestOptions, function(response) {
    // set encoding of received data to utf-8
    response.setEncoding("utf8");
    // the callback is invoked when a data chunk is received
    response.on('data', function(data) {
      info.push(data);
    });

    response.on('end', function() {
      for(var data of info) {
        console.log(data);
      }
      console.log("Response stream complete.");
    });
  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);