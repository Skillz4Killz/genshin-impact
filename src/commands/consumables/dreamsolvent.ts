import { Embed } from "../../utils/Embed.ts";
import { createSubcommand, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("material", {
  name: "dreamsolvent",
  guildOnly: true,
  execute: async function (message, args) {
    const embed = new Embed()
      .setTitle("Dream Solvent")
      .setDescription([
        `**Rarity:** ⭐⭐⭐⭐`,
        "",
        "**Item type:** Consumables",
        "",
        "**Used for:**\nDream Solvent is an item that allows the conversion of 5 star Talent Level-Up Materials",
        "",
        "**Source:**\n🔹 Reward for completing Trounce Domains and Wolf of the North Challenge",
        "",
        "**Description:**",
        "An item capable of changing Character Level-Up Materials obtained from memories and trials into whatever form is needed.\nPeople once believed that spirits and memories had some material form. If someone dreamed of heaven before waking up clutching a flower, then that blossom must have been made from such a fantasy. Dream Solvent dissolves that which is obtained from memory and transforms it into some other dream.\nIndeed, blows traded with the strong are stepping stones towards becoming stronger yourself."
      ])
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/5/5d/Item_Dream_Solvent.png/revision/latest/scale-to-width-down/256?cb=20210428025403",
      )
      .setTimestamp()
      .setColor("RANDOM");

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
