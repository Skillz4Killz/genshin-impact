import { createCommand, createSubcommand } from "../utils/helpers.ts";

createSubcommand("info", {
    name: "material",
    arguments: [{ name: "subcommand", type: "subcommand" }],
  });