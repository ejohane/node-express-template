import { Routing } from "express-zod-api";
import { helloWorldEndpoint } from "./hello-world";

export const routing: Routing = {
  v1: {
    hello: helloWorldEndpoint,
  },
};
