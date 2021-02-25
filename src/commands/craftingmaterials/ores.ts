import { createPagination } from "../../utils/pagination.ts";
import { Embed } from "../../utils/Embed.ts";
import { createSubcommand } from "../../utils/helpers.ts";

createSubcommand("material", {
  name: "ore",
  aliases: ["ironchunk", "whiteironchunk", "crystalchunk", "magicalcrystalchunk"],
  arguments: [
    { name: "page", defaultValue: 1 },
  ],
  guildOnly: true,
  execute: async function (message) {
    const firstEmbed = new Embed()
      .setTitle("Iron Chunk") 
      .setDescription([
        "**Item type:** Forging Material",
        "",
        "**Source:**",
        "🔹 Found in the wild\n🔹 Sold by Shitou",
        "",
        "**Description:**",
        "This iron chunk can be turned into a multitude of handy items in the hands of a skilled craftsman.",
        "",
        "**More Info:**",
        "Their respawn time is 24 hours."
      ])
      .addField("Used for forging:", "🔹 Adepti Seeker's Stove\n🔹 Enhancement Ore")
      .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/f/f0/Item_Iron_Chunk.png/revision/latest/scale-to-width-down/256?cb=20201117072515")
      .setFooter("Page 1/4")
      .setTimestamp()
      .setColor("RANDOM");

    const secondEmbed = new Embed()
    .setTitle("White Iron Chunk")
      .setDescription([
        "**Item type:** Forging Material",
        "",
        "**Source:**",
        "🔹 Found in the wild\n🔹 Sold by Shitou\n🔹 Expeditions: Whispering Woods, Dadaupa Gorge and Yaoguang Shoal",
        "",
        "**Description:**",
        "An uncut crystal. Only professional craftsmanship can bring out its true value.",
        "",
        "**More Info:**",
        "Their respawn time is 48 hours."
      ])
      .addField("Used for forging:", "🔹 Fine Enhancement Ore\n🔹 Compound Bow\n🔹 Crescent Pike\n🔹 Iron Sting\n🔹 Mappa Mare\n🔹 Prototype Amber\n🔹 Prototype Archaic\n🔹 Prototype Crescent\n🔹 Prototype Rancour\n🔹 Prototype Starglitter\n🔹 Whiteblind")
      .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/d/d5/Item_White_Iron_Chunk.png/revision/latest/scale-to-width-down/256?cb=20201117072609")
      .setFooter("Page 2/4")
      .setTimestamp()
      .setColor("RANDOM");
      

    const thirdEmbed = new Embed()
    .setTitle("Crystal Chunk")
    .setDescription([
        "**Item type:** Forging Material",
        "",
        "**Source:**",
        "🔹 Found in the wild\n🔹 Sold by Shitou\n🔹 Expeditions: Whispering Woods, Dadaupa Gorge and Yaoguang Shoal",
        "",
        "**Description:**",
        "An uncut crystal. Only professional craftsmanship can bring out its true value.",
        "",
        "**More Info:**",
        "Their respawn time is 72 hours."
    ])
    .addField("Used for forging/crafting:", "🔹 Anemoculus Resonance Stone\n🔹 Geoculus Resonance Stone\n🔹 Mystic Enhancement Ore\n🔹 Portable Waypoint\n🔹 Anemo Treasure Compass\n🔹 Compound Bow\n🔹 Crescent Pike\n🔹 Frostbearer\n🔹 Geo Treasure Compass\n🔹 Iron Sting\n🔹 Mappa Mare\n🔹 Prototype Amber\n🔹 Prototype Archaic\n🔹 Prototype Crescent\n🔹 Prototype Rancour\n🔹 Prototype Starglitter\n🔹 Snow-Tombed Starsilver\n🔹 Whiteblind\n🔹 Wind Catcher")
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/6/6e/Item_Crystal_Chunk.png/revision/latest/scale-to-width-down/256?cb=20201117072628")
    .setFooter("Page 3/4")
    .setTimestamp()
    .setColor("RANDOM");

    const fourthEmbed = new Embed()
    .setTitle("Magical Crystal Chunk")
    .setDescription([
        "**Item type:** Forging Material",
        "",
        "**Source:**",
        "🔹 Found in the wild",
        "",
        "**Description:**",
        "These crystal chunks can be refined into Weapon EXP materials by using Original Resin. Crystals from mines that were eroded by the energy of the Ley Lines cannot be processed by ordinary means.",
        "",
        "**More Info:**",
        "Spawns after reaching Adventurer Rank 35.\nTheir respawn time is 24 hours."
    ])
    .addField("Used for forging:", "🔹 Mystic Enhancement Ore")
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/8/85/Item_Magical_Crystal_Chunk.png/revision/latest/scale-to-width-down/256?cb=20201117072711")
    .setFooter("Page 4/4")
    .setTimestamp()
    .setColor("RANDOM");

    createPagination(message, [
      firstEmbed,
      secondEmbed,
      thirdEmbed,
      fourthEmbed,
    ]);
  },
});