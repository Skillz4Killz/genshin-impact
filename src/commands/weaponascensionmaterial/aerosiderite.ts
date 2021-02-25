import { createPagination } from "../../utils/pagination.ts";
import { Embed } from "../../utils/Embed.ts";
import { createSubcommand } from "../../utils/helpers.ts";

createSubcommand("material", {
  name: "aerosiderite",
  aliases: ["pieceofaerosiderite", "grainofaerosiderite", "bitofaerosiderite", "chunkofaerosiderite"],
  arguments: [
    { name: "page", defaultValue: 1 },
  ],
  guildOnly: true,
  execute: async function (message) {
    const firstEmbed = new Embed()
      .setTitle("Aerosiderite")
      .setDescription([
        "**Item type:** Weapon Ascension Material",
        "",
        "**Source:**",
        "🔹 Hidden Palace of Lianshan Formula *(Wednesday/Saturday/Sunday)*\n🔹 Purchased from the Souvenir Shop in Liyue\n🔹 Crafting",
        "",
        "**Aerosiderite** is used for the following weapon ascensions:"
      ])
      .addField("⭐⭐⭐", "Black Tassel\nSkyrider Greatsword\nSkyrider Sword", true)
      .addField("⭐⭐⭐⭐", "Compound Bow\nIron Sting\nMappa Mare\nPrototype Archaic\nPrototype Starglitter\nSerpent Spine", true)
      .addField("⭐⭐⭐⭐⭐", "Memory of Dust\nVortex Vanquisher", true)
      .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/0/0d/Item_Piece_of_Aerosiderite.png/revision/latest/scale-to-width-down/256?cb=20210109215813")
      .setFooter("Page 1/5")
      .setTimestamp()
      .setColor("RANDOM");

    const secondEmbed = new Embed()
    .setTitle("Grain of Aerosiderite")
      .setDescription([
        "**Rarity:** ⭐⭐",
        "",
        "**Item type:** Weapon Ascension Material",
        "",
        "**Source:**",
        "🔹 Hidden Palace of Lianshan Formula *(Wednesday/Saturday/Sunday)*\n🔹 Purchased from the Souvenir Shop in Liyue",
        "",
        "**Description:**",
        "A black meteor once fell beyond Liyue's Sea of Clouds, said to have fallen to vanquish a monster. However, it was stained by powerful tainted blood, so this item no longer possesses the pure power of Rex Lapis."
      ])
      .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/4/47/Item_Grain_of_Aerosiderite.png/revision/latest/scale-to-width-down/256?cb=20210109220930")
      .setFooter("Page 2/5")
      .setTimestamp()
      .setColor("RANDOM");
      

    const thirdEmbed = new Embed()
    .setTitle("Piece of Aerosiderite")
    .setDescription([
      "**Rarity:** ⭐⭐⭐",
      "",
      "**Item type:** Weapon Ascension Material",
      "",
      "**Source:**",
      "🔹 Hidden Palace of Lianshan Formula *(Wednesday/Saturday/Sunday)*\n🔹 Crafting: 3x Grain of Aerosiderite, 125 Mora",
      "",
      "**Description:**",
      "The coastal nations of Teyvat refer to the region beyond the protection of The Seven as the Dark Sea. It is said many defeated gods refused to live under the new order of The Seven, so they fled to remote islands and became evil gods. However, their powers came from the same source as Rex Lapis, separate from this all-devouring darkness."
    ])
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/0/0d/Item_Piece_of_Aerosiderite.png/revision/latest/scale-to-width-down/256?cb=20210109215813")
    .setFooter("Page 3/5")
    .setTimestamp()
    .setColor("RANDOM");

    const fourthEmbed = new Embed()
    .setTitle("Bit of Aerosiderite")
    .setDescription([
      "**Rarity:** ⭐⭐⭐⭐",
      "",
      "**Item type:** Weapon Ascension Material",
      "",
      "**Source:**",
      "🔹 Hidden Palace of Lianshan Formula *(Wednesday/Saturday/Sunday)*\n🔹 Crafting: 3x Piece of Aerosiderite, 350 Mora",
      "",
      "**Description:**",
      "The coastal nations of Teyvat refer to the region beyond the protection of The Seven as the Dark Sea. It is said many defeated gods refused to live under the new order of The Seven, so they fled to remote islands and became evil gods. However, their powers came from the same source as Rex Lapis, separate from this all-devouring darkness."
    ])
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/1/17/Item_Bit_of_Aerosiderite.png/revision/latest/scale-to-width-down/256?cb=20210109215827")
    .setFooter("Page 4/5")
    .setTimestamp()
    .setColor("RANDOM");

    const fifthEmbed = new Embed()
    .setTitle("Chunk of Aerosiderite")
    .setDescription([
      "**Rarity:** ⭐⭐⭐⭐⭐",
      "",
      "**Item type:** Weapon Ascension Material",
      "",
      "**Source:**",
      "🔹 Hidden Palace of Lianshan Formula *(Wednesday/Saturday/Sunday)*\n🔹 Crafting: 3x Bit of Aerosiderite, 1.075 Mora",
      "",
      "**Description:**",
      "When Khaenri'ah was destroyed, a great sinner created endless monsters with alien, dark blood flowing through their veins. They rampaged across the land, destroying all in their paths. Their lives were mutations, caused by powers beyond this world. The black serpentine dragon Durin that attacked Mondstadt was such a mutation."
    ])
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/4/48/Item_Chunk_of_Aerosiderite.png/revision/latest/scale-to-width-down/256?cb=20210109215819")
    .setFooter("Page 5/5")
    .setTimestamp()
    .setColor("RANDOM");

    createPagination(message, [
      firstEmbed,
      secondEmbed,
      thirdEmbed,
      fourthEmbed,
      fifthEmbed,
    ]);
  },
});