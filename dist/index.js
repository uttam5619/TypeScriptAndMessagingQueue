"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const server_config_js_1 = require("./config/server.config.js");
(0, dotenv_1.config)();
(0, server_config_js_1.StartServer)();
