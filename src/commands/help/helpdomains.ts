import { Embed } from "../../utils/Embed.ts";
import { createSubcommand, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("help", {
  name: "domain",
  aliases: ["domains"],
  guildOnly: true,
  execute: async function (message) {
    const embed = new Embed()
      .setTitle("Help Domains")
      .setDescription([
        "🔹 `p!domain ceciliagarden`",
        "🔹 `p!domain [clearpoolandmountaincavern | clearpool | mountaincavern]`",
        "🔹 `p!domain [domainofguyun | guyun]`",
        "🔹 `p!domain forsakenrift`",
        "🔹 `p!domain [hiddenpalaceoflianshanformula | lianshanformula]`",
        "🔹 `p!domain [hiddenpalaceofzhouformula | zhouformula]`",
        "🔹 `p!domain midsummercourtyard`",
        "🔹 `p!domain [peakofvindagnyr | vindagnyr]`",
        "🔹 `p!domain taishanmansion`",
        "🔹 `p!domain [valleyofremembrance | remembrance]`",
      ])
      .setTimestamp()
      .setColor("RANDOM")

      await sendEmbed(message.channelID, embed).catch(console.log);
    },
  });