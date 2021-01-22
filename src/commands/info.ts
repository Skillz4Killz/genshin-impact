import { createCommand } from "../utils/helpers.ts";

createCommand({
    name: "info material",
    arguments: [{ name: "subcommand", type: "subcommand" }],
  });