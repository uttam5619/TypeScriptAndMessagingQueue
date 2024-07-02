import Redis from "ioredis"

const redisConfig = {
    port: parseInt(process.env.REDIS_PORT || "6379"),
    host: process.env.REDIS_HOST
}

const redisConnection =  new Redis(redisConfig)

export default redisConnection
