import { createCommand } from "../utils/helpers.ts";

createCommand({
  name: "test",
  arguments: [{ name: "subcommand", type: "subcommand" }]
  
})