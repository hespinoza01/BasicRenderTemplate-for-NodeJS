const http = require('http'),
      render = require('../BasicRenderTemplate');

const PORT = 8080;


console.log(`Start server, listen in http://localhost:${PORT}`);

http.createServer((req, res) => {
  let response = render.render('./test/index.html', {nameUser: 'Harold', currentDay: 'today'});
  console.log(response);
  res.writeHead(200, {'ContenType': 'text/html'});
  res.write(response);
  res.end();
}).listen(PORT);
