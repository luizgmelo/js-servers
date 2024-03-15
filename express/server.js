const express = require('express');
const server = express();

server.get("/", (req, res) => {
  res.send("<h1>Home</h1>")
})

server.get("/contato", (req, res) => {
  res.send(
    `
    <h1>Contato</h1>
    <form action="/contato" method="POST">
      <label for="email">Email:</label>
      <input type="email" name="email" id="email"></input>
      <label for="mensagem">Mensagem:</label>
      <textarea name="mensagem" id="mensagem"></textarea>
      <input type="submit" value="Enviar">
    </form>
    `
  )
})

server.post("/contato", (req, res) => {
  res.send('<h1>Precisamos aprender a pegar os dados que o usuário digitou</h1>')
})

server.listen(3000, () => {
  console.log("O sevidor está de pé em http://localhost:3000");
  console.log("Para desligar o servidor: ctrl + c");
})
