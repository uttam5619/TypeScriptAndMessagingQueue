import express from 'express';

const serverInstance = express();

const redisConfigDetails = {
    port:process.env.REDIS_PORT,
    host: process.env.REDIS_HOST
}

const StartServer = async ()=>{

    const port = process.env.PORT || 7058
    serverInstance.listen(port, ()=>{
        console.log(`server listening on ${port}`)
    })
}
export {
    redisConfigDetails,
    StartServer
}