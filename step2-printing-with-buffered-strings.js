function getAndPrintHTML() {

  var https = require("https");

  var info = [];

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function(response) {

    // set encoding of received data to utf-8
    response.setEncoding("utf8");

    // the callback is invoked when a data chunk is received
    response.on('data', function(data) {
      // info += data;
      info.push(data);
    });

    response.on('end', function() {
      console.log("Response stream complete.");
      for(var content of info) {
        console.log("Content: ", content);
      }
    });
  });
}

getAndPrintHTML();
