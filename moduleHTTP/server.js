// importer le module HTTP
const http = require('http')
// console.log(http);


const server = http.createServer((request, response) => {

  // console.log(request);
  // console.log(response);

})

server.listen(8080, () => console.log("Mon serveur écoute le port : 8080"))