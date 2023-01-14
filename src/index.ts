import { createConfig, createServer, OpenAPI } from "express-zod-api";
import fs from "fs";
import { routing } from "./routes";

const config = createConfig({
  server: {
    listen: 8090, // port or socket
  },
  cors: true,
  logger: {
    level: "debug",
    color: true,
  },
});

createServer(config, routing);

const yamlString = new OpenAPI({
  routing, // the same routing and config that you use to start the server
  config,
  version: "1.2.3",
  title: "Example API",
  serverUrl: "https://example.com",
}).getSpecAsYaml();

fs.writeFileSync("openapi.yml", yamlString);
