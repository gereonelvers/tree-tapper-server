const http = require('http');
const PORT = 80;

let totalTrees = 50;
let goalTrees = 100;
let adFactor = 0.5;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({
        "totalTrees": totalTrees,
        "goalTrees": goalTrees,
        "adFactor": adFactor
        }
    ));
});

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
