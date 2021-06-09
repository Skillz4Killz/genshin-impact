import { Embed } from "../../../utils/Embed.ts";
import { createSubcommand, sendEmbed } from "../../../utils/helpers.ts";

createSubcommand("abyss-floor", {
  name: "6",
  aliases: ["six"],
  guildOnly: true,
  execute: async function (message, args) {
    const embed = new Embed()
      .setTitle("Spiral Abyss Floor 6")
      .setDescription(
        "**Ley Line Disorder:**\n• Using an Elemental Burst increases all party members' ATK and DEF by 6%. Max 10 stacks. At 5 stacks and above, increases character Normal Attack SPD and Movement SPD by an additional 30%.",
      )
      .setImage("https://i.imgur.com/0LLOzD1.png")
      .addBlankField()
      .setColor("RANDOM")
      .setTimestamp();

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
