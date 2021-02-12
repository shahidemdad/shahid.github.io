const http = require('http');
const hostname = 'localhost';
const port = 3000;
const server = http.createServer((req, res) => {

    // console.log(req);
    const {url} = req;
    console.log(url);
    if (url === '/transitions') {
        const transitions = { 1: 'one', 2: 'two', 3: "three"};
        res.setHeader('Content-Type','application/json');
        res.write(JSON.stringify(transitions))
    }
    res.end(' Welcome to Node!');
});
server.listen(port, hostname, () => {
    console.log(`server running at ${hostname}:${port}`)
});