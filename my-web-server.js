const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(function (req,res) {
  res.writeHead(200,{'Content-type':'text/html'})
  res.end('yuying')
})

server.listen(port,hostname,()=>{
  console.log(`server running at http://${hostname}:${port}`)
})