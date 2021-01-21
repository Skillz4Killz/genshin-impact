import { botCache } from "../../deps.ts";
import { Embed } from "../utils/Embed.ts";
import { createCommand, sendEmbed } from "../utils/helpers.ts";

createCommand({
  name: "gadgetlist",
  aliases: ["gl"],
  arguments: [
    { name: "page", type: "number", defaultValue: 1 },
  ],
  guildOnly: true,
  execute: async function (message, args) {

    const embed = new Embed()
      .setTitle("Gadgetlist")
      .setDescription([
        `⭐⭐⭐`,
        "Geoculus Resonance Stone 🔹 Anemoculus Resonance Stone 🔹 Adepti Seeker's Stove 🔹 Warming Bottle",
        "",
        `⭐⭐⭐⭐`,
        "Condensed Resin 🔹 Wind Catcher 🔹 NRE (Menu 30) 🔹 Geo Treasure Compass 🔹 Anemo Treasure Compass 🔹 Portable Waypoint 🔹 Kamera 🔹 Mini Seelie: Curcuma 🔹 Mini Seelie: Dayflower 🔹 Mini Seelie: Rosé 🔹 Treasure-Seeking Seelie",
        "",
        "If you want to search for gadget infos, type `p!gadget (name)`\nThe gadget name has to be lower case and without spacing. For example `p!gadget windcatcher`",
      ])

      await sendEmbed(message.channelID, embed).catch(console.log);

},
});