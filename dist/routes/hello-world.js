"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorldEndpoint = void 0;
const express_zod_api_1 = require("express-zod-api");
const express_zod_api_2 = require("express-zod-api");
const hello_dto_1 = require("src/dto/hello-dto");
exports.helloWorldEndpoint = express_zod_api_1.defaultEndpointsFactory.build({
    method: "get",
    input: hello_dto_1.HelloRequestSchema,
    output: express_zod_api_2.z.object({
        greetings: express_zod_api_2.z.string(),
    }),
    handler: ({ input: { name }, options, logger }) => __awaiter(void 0, void 0, void 0, function* () {
        logger.debug("Options:", options); // middlewares provide options
        return { greetings: `Hello, ${name || "World"}. Happy coding!` };
    }),
});
//# sourceMappingURL=hello-world.js.map