// type handler = typeof Handler<z.output<ProbableIntersection<MIN, IN>>, z.input<OUT>, OPT>

import { Handler } from "express-zod-api/dist/endpoint";
import { HelloRequest } from "../dto/hello-dto";

export const getHelloWorldHandler: Handler<HelloRequest, any, any> = async ({
  input,
  options,
  logger,
}) => {
  const name = input.name;
  logger.debug("Options:", options); // middlewares provide options
  return { greetings: `Hello, ${name || "World"}. Happy coding!` };
};
