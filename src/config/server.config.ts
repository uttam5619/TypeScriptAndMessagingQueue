import express from 'express';

const serverInstance = express();

const StartServer = async ()=>{

    const port = process.env.PORT || 7058
    serverInstance.listen(port, ()=>{
        console.log(`server listening on ${port}`)
    })
}
export {
    StartServer
}