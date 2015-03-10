var http = require("http");

var options = {
  "method": "POST",
  "hostname": "mockbin.com",
  "port": null,
  "path": "/har?",
  "headers": {
    "Content-Type": "application/json"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body);
  });
});

req.write("{\"foo\": \"bar\"}");
req.end();
