import Redis from "ioredis"

const redisConfig = {
    port: parseInt(process.env.REDIS_PORT || "6379"),
    host: process.env.REDIS_HOST
}

const connectRedis =() => {

    const redisConnectionInstance =  new Redis(redisConfig)
    redisConnectionInstance.on('connect',()=>{
        console.log(`Successfully connected to Redis`)
    })
    redisConnectionInstance.on('error',(error)=>{
        console.log(`failed to connect to Redis`)
        console.log(`Redis connection error:${error.message}`)
    })
    
}

export default connectRedis
