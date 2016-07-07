/**
 * @desc http本地服务器
 * @author Jafeney
 * @dateTime 2016-07-05
 **/

let http = require('http'),
    url = require('url'),
    fs = require('fs'),
    path = require('path'),
    types = require('./types');

const PORT = 3000;

http.createServer((req, res) => {
    let pathName = url.parse(req.url).pathname;
    let realPath = path.join(".", pathName);
    let ext = path.extname(realPath);

    ext = ext ? ext.slice(1) : 'unknown';

    fs.exists(realPath, (exists) => {
        if (!exists) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.write("This request URL " + pathName + " is not found on this server.");
            res.end()
        } else {
            fs.readFile(realPath, "binary", (err, file) => { 
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end()
                } else {
                    let contentType = types[ext] || 'text/plain';
                    res.writeHead(200, { 'Content-Type': contentType });
                    res.write(file, "binary");
                    res.end()
                }
            })
        }
    })
}).listen(PORT);

console.log("Server running at port: " + PORT + '.');
