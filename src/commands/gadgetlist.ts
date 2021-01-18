import { Embed } from "../utils/Embed.ts";
import { createCommand } from "../utils/helpers.ts";

createCommand({
  name: "gadgetlist",
  aliases: ["gl"],
  arguments: [
    { name: "page", type: "number", defaultValue: 1 },
  ],
  guildOnly: true,
  execute: function (message) {

    const embed = new Embed()
      .setTitle("Gadgetlist")
      .setDescription([
        `*⭐⭐⭐`,
        "Geoculus Resonance Stone 🔸 Anemoculus Resonance Stone 🔸 Adepti Seeker's Stove 🔸 Warming Bottle",
        "",
        `*⭐⭐⭐⭐`,
        "Condensed Resin 🔸 Wind Catcher 🔸 NRE (Menu 30) 🔸 Geo Treasure Compass 🔸 Anemo Treasure Compass 🔸 Portable Waypoint 🔸 Kamera 🔸 Mini Seelie: Curcuma 🔸 Mini Seelie: Dayflower 🔸 Mini Seelie: Rosé 🔸 Treasure-Seeking Seelie",
        "",
        "If you want to search for gadget infos, type `p!gadget (name)`\nThe gadgetname has to be lower case and without spacing. For example `p!gadget windcatcher`",
      ])

},
});