var https = require("https");

function getAndPrintHTML() {
  var info = [];
  var requestOptions = {
    host: 'sytatris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function(response) {
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

getAndPrintHTML();
