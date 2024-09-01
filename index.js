const http = require('http');
const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer({});
const server = http.createServer((req, res) => {
  proxy.web(req, res, { target: 'http://node4.lunes.host:1120' });
});
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log('Proxy server is running on http://localhost:8080');
});
