const http = require('http');

const hostname = 'localhost'
const port = 3000

const server = http.createServer((req, res) => {
  const resp = [];
  resp['/'] = "<h1>Home</h1>";
  resp['/contato'] = "<h1>Contato</h1>";
  resp['semUrl'] = "<h1>URL sem resposta definida!</h1>"

  res.end(resp[req.url] || resp['semUrl'])

})

server.listen(port, hostname, () => {
  console.log('Servidor de pé em: http://localhost:3000')
  console.log('Para desligar o nosso servidor: ctrl + c')
})
