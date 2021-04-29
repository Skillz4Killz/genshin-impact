import { Embed } from "../../utils/Embed.ts";
import { createSubcommand, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("material", {
  name: "vialofadeptalspeed",
  guildOnly: true,
  execute: async function (message, args) {
    const embed = new Embed()
      .setTitle("Vial of Adeptal Speed")
      .setDescription([
        `**Rarity:** ⭐⭐⭐⭐`,
        "",
        "**Item type:** Consumables",
        "",
        "**Used for:**\nVial of Adeptal Speed an item used to complete a furnishing immediately.",
        "",
        "**Source:**\n🔹 Exchange via Realm Currency",
        "",
        "**Description:**",
        "A small bottle that seals some adeptal energy within. Will immediately complete a furnishing when used."
      ])
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/5/5e/Item_Vial_of_Adeptal_Speed.png/revision/latest/scale-to-width-down/256?cb=20210428025440",
      )
      .setTimestamp()
      .setColor("RANDOM");

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
