import { parsePrefix } from "../../monitors/commandHandler.ts";
import { Embed } from "../../utils/Embed.ts";
import { createSubcommand, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("list", {
  name: "gadgets",
  arguments: [
    { name: "page", type: "number", defaultValue: 1 },
  ],
  guildOnly: true,
  execute: async function (message, args) {
    const prefix = parsePrefix(message.guildID);
    const embed = new Embed()
      .setTitle("Gadgetlist")
      .setDescription([
        "",
        `*If you want to search for gadget infos, type \`${prefix}gadget (name)\`\nThe gadget name has to be lower case and without spacing.\nFor example \`${prefix}gadget windcatcher\`*`,
        "",
      ])
      .addField("Rarity: ⭐⭐⭐⭐", "🔹 Anemo Treasure Compass\n🔹 Condensed Resin\n🔹 Geo Treasure Compass\n🔹 Kamera\n🔹 Mini Seelie: Curcuma\n🔹 Mini Seelie: Dayflower\n🔹 Mini Seelie: Rosé\n🔹 NRE (Menu 30)\n🔹 Parametric Transformer\n🔹 Portable Waypoint\n🔹 Treasure-Seeking Seelie\n🔹 Wind Catcher", true)
      .addField("Rarity: ⭐⭐⭐", "🔹 Adepti Seeker's Stove\n🔹 Anemoculus Resonance Stone\n🔹 Geoculus Resonance Stone\n🔹 Warming Bottle", true)
      .setTimestamp()

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
