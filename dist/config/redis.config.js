"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ioredis_1 = __importDefault(require("ioredis"));
const redisConfig = {
    port: parseInt(process.env.REDIS_PORT || "6379"),
    host: process.env.REDIS_HOST
};
const connectRedis = () => {
    const redisConnectionInstance = new ioredis_1.default(redisConfig);
    redisConnectionInstance.on('connect', () => {
        console.log(`Successfully connected to Redis`);
    });
    redisConnectionInstance.on('error', (error) => {
        console.log(`failed to connect to Redis`);
        console.log(`Redis connection error:${error.message}`);
    });
};
exports.default = connectRedis;
