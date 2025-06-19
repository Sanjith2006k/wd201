const http = require("http");
const fs = require("fs");

let homeContent = "";
let projectContent = "";
let registercontent = "";

fs.readFile("home.html", (err, home) => {
  if (err) {
    throw err;
  }
  homeContent = home;
});

fs.readFile("project.html", (err, project) => {
  if (err) {
    throw err;
  }
  projectContent = project;
});
fs.readFile("registration.html", (err, register) => {
  if (err) {
    throw err;
  }
  registercontent = register;
});
function hello(server) {
  http
    .createServer((request, response) => {
      let url = request.url;
      response.writeHeader(200, { "Content-Type": "text/html" });
      switch (url) {
        case "/project":
          response.write(projectContent);
          response.end();
          break;
        case "/registration":
          response.write(registercontent);
          response.end;
        default:
          response.write(homeContent);
          response.end();
          break;
      }
    })
    .listen(server);
}

const minimist = require("minimist");
const args = minimist(process.argv.slice(2));
const port = parseInt(args.port);
if (port % 10 === 0 && port > 999) {
  hello(port);
} else {
  console.log("Invalid port!!!");
}
