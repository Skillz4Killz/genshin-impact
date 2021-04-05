import { createCommand } from "../../../utils/helpers.ts";

// List all invites and their uses if no user was provided.
// If user was provided, list his invites with uses.
createCommand({
  name: "invites",
  guildOnly: true,
  arguments: [{ name: "subcommand", type: "subcommand" }],
});
