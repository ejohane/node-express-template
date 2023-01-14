"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloRequestSchema = void 0;
const express_zod_api_1 = require("express-zod-api");
exports.HelloRequestSchema = express_zod_api_1.z.object({
    name: express_zod_api_1.z.string(),
});
//# sourceMappingURL=hello-dto.js.map