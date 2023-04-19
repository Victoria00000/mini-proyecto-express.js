const http = require("http"); //Alternativa ES: import { createServer } from "http";

const server = http.createServer((request, response) => {
  const html = "<h2>Hello World</h2>";
  response.end(html);
});

const PORT = 3000; //const PORT = process.env.PORT || 3000; Normalmente está en una variable de entorno

server.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
