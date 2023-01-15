import { defaultEndpointsFactory, withMeta } from "express-zod-api";
import { getHelloWorldHandler } from "../handlers/hello-world-handlers";
import { HelloRequestSchema, HelloResponseSchema } from "../dto/hello-dto";

export const helloWorldEndpoint = defaultEndpointsFactory.build({
  method: "get",
  input: withMeta(HelloRequestSchema).example({
    name: "Erik",
  }),
  output: withMeta(HelloResponseSchema).example({
    greetings: "Greetings Erik!",
  }),
  handler: getHelloWorldHandler,
  description: "Hello World",
});
