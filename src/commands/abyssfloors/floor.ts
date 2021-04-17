import { createSubcommand } from "../../utils/helpers.ts";

createSubcommand("abyss", {
  name: "floor",
  arguments: [{ name: "subcommand", type: "subcommand", required: true }],
  guildOnly: true,
  execute: async function () {},
});
