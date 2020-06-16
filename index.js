const server = require('./server');

const PORT = process.env.PORT || 6000;

server.listen(PORT, () =>{
    console.log(`\n== API running on port ${PORT} ==\n`);
})
