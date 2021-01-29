import { Embed } from "../../utils/Embed.ts";
import { createSubcommand, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("help", {
  name: "edit",
  guildOnly: true,
  execute: async function (message) {
    const embed = new Embed()
      .setTitle("Help Edit")
      .setDescription([
        "🔹 `p!edit uid (new UID)`",
        "🔹 `p!edit [ar | adventurerrank] (1-60)`",
        "🔹 `p!edit [wl | worldlevel] (0-8)`",
        "🔹 `p!edit [char | character] (char name) (constellation 0-6)`",
        "With editing a character you're also able to add a new character.",
      ])
      .setColor("RANDOM");

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
