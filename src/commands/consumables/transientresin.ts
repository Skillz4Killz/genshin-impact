import { Embed } from "../../utils/Embed.ts";
import { createSubcommand, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("material", {
  name: "transientresin",
  guildOnly: true,
  execute: async function (message, args) {
    const embed = new Embed()
      .setTitle("Transient Resin")
      .setDescription([
        `**Rarity:** ⭐⭐⭐⭐`,
        "",
        "**Item type:** Consumables",
        "",
        "**Used for:**\nTransient Resin is similar to Fragile Resin, but it decomposes with time. The expiration time will be calculated from the Monday after this item is obtained, and it will disappear seven days from then.",
        "",
        "**Source:**\n🔹 Exchange via Realm Currency",
        "",
        "**Description:**",
        "An item that can be used to replenish Original Resin. Once used, it will replenish 60 Original Resin. Once obtained, it will automatically dissipate after a period of time."
      ])
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/f/f6/Item_Transient_Resin.png/revision/latest/scale-to-width-down/256?cb=20210428025433",
      )
      .setTimestamp()
      .setColor("RANDOM");

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
