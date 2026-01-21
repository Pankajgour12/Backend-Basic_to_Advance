const http = require('http');
const fs = require('fs');

const PORT = 3000;





const server = http.createServer((req, res) => {
   
    const log = `${new Date().toISOString()}  - ${req.method} & New Request Received  ${req.url}\n`;
    fs.appendFile('request.txt', log, (err) => {
        if (err) throw err;
        console.log('Request logged');
    });
    res.end('Incoming request logged\n');

});

server.listen(Port, () => {
    console.log(`server is running or `);
    console.log(`Server running at http://localhost:${PORT}/`);
});
