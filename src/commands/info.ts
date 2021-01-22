import { createCommand } from "../utils/helpers.ts";

createCommand({
    name: "info",
    arguments: [{ name: "subcommand", type: "subcommand" }],
  });