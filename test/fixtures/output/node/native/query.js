var http = require("http");

var options = {
  "method": "GET",
  "hostname": "mockbin.com",
  "port": null,
  "path": "/har?key=value&baz=abc&foo=bar&foo=baz",
  "headers": {}
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

req.end();
