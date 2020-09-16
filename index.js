const server = require("./api/server")

const port = process.allowedNodeEnvironmentFlags.PORT || 3000;

server.listen(port, () =>{
    console.log(`The server is running on port ${port}`)
})