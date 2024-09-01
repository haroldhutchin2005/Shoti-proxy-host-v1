const http = require('http');
const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer({});
const server = http.createServer((req, res) => {
  proxy.web(req, res, { target: 'http://de01.uniplex.xyz:5611' });
});
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log('Proxy server is running on http://localhost:8080');
});
