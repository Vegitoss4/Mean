const http = require('http');
const app = require('./backend/app');

const normalizePort = val =>{
    var port = parseInt(val, 10);

    if(isNaN(port)){
        //named pipe
        return val;

    }
    if(port >= 0) {
        //port number
        return port;
    }
    return false;
};
const onError = error => {
    if(error.syscall !== "listen"){
        throw error;

    }
    const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
    switch (error.code){
        case "EACCES":
        console.error(bind + " requires elevated privileges");
        process.exit(1);
        break;
    }
};

