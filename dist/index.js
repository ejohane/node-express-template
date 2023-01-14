"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_zod_api_1 = require("express-zod-api");
const routes_1 = require("./routes");
const config = (0, express_zod_api_1.createConfig)({
    server: {
        listen: 8090, // port or socket
    },
    cors: true,
    logger: {
        level: "debug",
        color: true,
    },
});
(0, express_zod_api_1.createServer)(config, routes_1.routing);
//# sourceMappingURL=index.js.map