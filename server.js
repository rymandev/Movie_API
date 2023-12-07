const http = require("http"),
    fs = require("fs"),
    url = require("url");

http.createServer((request, response) => {
    let addr = request.url,
        q = new URL(addr, "http://localhost:8080" + request.headers.host),
        filepath = "";

fs.appendFile("log.txt", "URL: " + addr + "\nTimestamp: " + new Date() + "\n\n", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Added to log.");
    }
    });

fs.readFile(filePath, (err, data) => {
if (err) {
    throw err;
}
    
if (q.pathname.includes("documentation")) {
    filepath = (__dirname + "/documentation.html");
    } else {
    filepath = "index.html";
    }

    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(data);
    response.end();

    });

}).listen(8080);
console.log("My test server is running on Port 8080.");
