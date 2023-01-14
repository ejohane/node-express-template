import { defaultEndpointsFactory } from "express-zod-api";
import { getHelloWorldHandler } from "../handlers/hello-world-handlers";
import { HelloRequestSchema, HelloResponseSchema } from "../dto/hello-dto";

export const helloWorldEndpoint = defaultEndpointsFactory.build({
  method: "get",
  input: HelloRequestSchema,
  output: HelloResponseSchema,
  handler: getHelloWorldHandler,
});
