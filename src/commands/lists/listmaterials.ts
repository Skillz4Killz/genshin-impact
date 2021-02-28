import { botCache, Message, removeUserReaction } from "../../../deps.ts";
import { needReaction } from "../../utils/collectors.ts";
import { Embed } from "../../utils/Embed.ts";
import { createSubcommand } from "../../utils/helpers.ts";

createSubcommand("list", {
  name: "materials",
  aliases: ["mats"],
  arguments: [
    { name: "page", type: "number", defaultValue: 1 },
  ],
  execute: async function (message, args) {
    const first = new Embed()
      .setTitle("Overview")
      .setDescription([
        `1️⃣ Overview`,
        `2️⃣ Character EXP Material‎s & Weapon Enhancement Material‎s`,
        `3️⃣ Character Ascension Materials`,
        `4️⃣ Talent Level-Up Materials`,
        `5️⃣ Weapon Ascension Materials`,
        `6️⃣ Forging Materials`,
        `7️⃣ Local Specialty`,
        `8️⃣ Cooking Ingredients`,
        `9️⃣ Other`,
      ])
      .setTimestamp()
      .setColor("RANDOM");

    const second = new Embed()
      .setTitle("Character EXP Material‎s & Weapon Enhancement Material‎s")
      .addField("[⭐⭐⭐⭐]", "**Character EXP Material‎s\n**🔹 Heros Wit\n\n**Weapon Enhancement Material‎s**\n🔹 Festering Dragon Marrow", true)
      .addField("[⭐⭐⭐]", "**Character EXP Material‎s**\n🔹 Adventurer's Experience\n\n**Weapon Enhancement Material‎s**\n🔹 Mystic Enhancement Ore", true)
      .addBlankField()
      .addField("[⭐⭐]", "**Character EXP Material‎s**\n🔹 Wanderer's Advice\n\n**Weapon Enhancement Material‎s**\n🔹 Fine Enhancement Ore", true)
      .addField("[⭐]", "**Weapon Enhancement Material‎s**\n🔹 Enhancement Ore", true)
      .setTimestamp()
      .setColor("RANDOM");

    const third = new Embed()
      .setTitle("Character Ascension Materials")
      .addField("[⭐⭐⭐⭐⭐]", "🔹 Agnidus Agate Gemstone\n🔹 Brilliant Diamond Gemstone\n🔹 Prithiva Topaz Gemstone\n🔹 Shivada Jade Gemstone\n🔹 Vajrada Amethyst Gemstone\n🔹 Varunada Lazurite Gemstone\n🔹 Vayuda Turquoise Gemstone", true)
      .addField("[⭐⭐⭐⭐]", "🔹 Brilliant Diamond Chunk\n🔹 Vayuda Turquoise Chunk\n🔹 Shivada Jade Chunk\n🔹 Vajrada Amethyst Chunk\n🔹 Prithiva Topaz Chunk\n🔹 Varunada Lazurite Chunk\n🔹 Agnidus Agate Chunk\n🔹 Hoarfrost Core\n🔹 Lightning Prism\n🔹 Basalt Pillar\n🔹 Cleansing Heart\n🔹 Everflame Seed", true)
      .addBlankField()
      .addField("[⭐⭐⭐]", "🔹 Brilliant Diamond Fragment\n🔹 Vayuda Turquoise Fragment\n🔹 Shivada Jade Fragment\n🔹 Vajrada Amethyst Fragment\n🔹 Prithiva Topaz Fragment\n🔹 Varunada Lazurite Fragment\n🔹 Agnidus Agate Fragment", true)
      .addField("[⭐⭐]", "🔹 Brilliant Diamond Sliver\n🔹 Vayuda Turquoise Sliver\n🔹 Shivada Jade Sliver\n🔹 Vajrada Amethyst Sliver\n🔹 Prithiva Topaz Sliver\n🔹 Varunada Lazurite Sliver\n🔹 Agnidus Agate Sliver", true)
      .addBlankField()
      .setTimestamp()
      .setFooter("1️⃣ Overview")
      .setColor("RANDOM");

    const fourth = new Embed()
      .setTitle("Talent Level-Up Materials")
      .addField("[⭐⭐⭐⭐⭐]", "🔹 Crown of Insight\n🔹 Ring of Boreas\n🔹 Dvalin's Claw\n🔹 Dvalin's Plume\n🔹 Dvalin's Sigh\n🔹 Shadow of the Warrior\n🔹 Shard of a Foul Legacy\n🔹 Spirit Locket of Boreast\n🔹 Tail of Boreas\n🔹 Tusk of Monoceros Caeli", true)
      .addField("[⭐⭐⭐⭐]", "🔹 Philosophies of Prosperity\n🔹 Philosophies of Resistance\n🔹 Philosophies of Ballad\n🔹 Philosophies of Diligence\n🔹 Philosophies of Freedom\n🔹 Philosophies of Gold", true)
      .addBlankField()
      .addField("[⭐⭐⭐]", "🔹 Guide to Ballad\n🔹 Guide to Diligence🔹 Guide to Freedom\n🔹 Guide to Gold\n🔹 Guide to Prosperity\n🔹 Guide to Resistance", true)
      .addField("[⭐⭐]", "🔹 Teachings of Ballad\n🔹 Teachings of Diligence\n🔹 Teachings of Freedom\n🔹 Teachings of Gold\n🔹 Teachings of Prosperity\n🔹 Teachings of Resistance", true)
      .addBlankField()
      .setTimestamp()
      .setFooter("1️⃣ Overview")
      .setColor("RANDOM");

    const fifth = new Embed()
    .setTitle("Weapon Ascension Materials")
      .addField("[⭐⭐⭐⭐⭐]", "🔹 Boreal Wolf's Nostalgia\n🔹 Chunk of Aerosiderite\n🔹 Divine Body from Guyun\n🔹 Dream of the Dandelion Gladiator\n🔹 Mist Veiled Primo Elixir\n🔹 Scattered Piece of Decarabian's Dream", true)
      .addField("[⭐⭐⭐⭐]", "🔹 Bit of Aerosiderite\n🔹 Boreal Wolf's Broken Fang\n🔹 Fragment of Decarabian's Epic\n🔹 Mist Veiled Gold Elixir\n🔹 Relic from Guyun\n🔹 Shackles of the Dandelion Gladiator", true)
      .addBlankField()
      .addField("[⭐⭐⭐]", "🔹 Boreal Wolf's Cracked Tooth\n🔹 Chains of the Dandelion Gladiator\n🔹 Debris of Decarabian's City\n🔹 Lustrous Stone from Guyun\n🔹 Mist Veiled Mercury Elixir\n🔹 Piece of Aerosiderite", true)
      .addField("[⭐⭐]", "🔹 Boreal Wolf's Milk Tooth\n🔹 Fetters of the Dandelion Gladiator\n🔹 Grain of Aerosiderite\n🔹 Luminous Sands from Guyun\n🔹 Mist Veiled Lead Elixir\n🔹 Tile of Decarabian's Tower", true)
      .addBlankField()
      .setTimestamp()
      .setFooter("1️⃣ Overview")
      .setColor("RANDOM");

    const sixth = new Embed()
    .setTitle("Forging Materials")
      .addField("[⭐⭐⭐⭐⭐]", "🔹 Northlander Bow Prototype\n🔹 Northlander Catalyst Prototype\n🔹 Northlander Claymore Prototype\n🔹 Northlander Polearm Prototype\n🔹 Northlander Sword Prototype\n🔹 Scattered Piece of Decarabian's Dream", true)
      .addField("[Other]", "🔹 Crystal Chunk\n🔹 Iron Chunk\n🔹 Magical Crystal Chunk\n🔹 White Iron Chunk", true)
      .addBlankField()
      .setTimestamp()
      .setFooter("1️⃣ Overview")
      .setColor("RANDOM");

    const seventh = new Embed()
    .setTitle("Local Specialty")
      .addField("[Mondstadt]", "🔹 Calla Lily\n🔹 Cecilia\n🔹 Dandelion Seed\n🔹 Philanemo Mushroom\n🔹 Small Lamp Grass\n🔹 Valberry\n🔹 Windwheel Aster\n🔹 Wolfhook", true)
      .addField("[Liyue]", "🔹 Cor Lapis\n🔹 Glaze Lily\n🔹 Jueyun Chili\n🔹 Noctilucous Jade\n🔹 Qingxin\n🔹 Silk Flower\n🔹 Starconch\n🔹 Violetgrass", true)
      .addBlankField()
      .setTimestamp()
      .setFooter("1️⃣ Overview")
      .setColor("RANDOM");

    const eighth = new Embed()
    .setTitle("Cooking Ingredients")
      .addField("\u200B", "🔹 Almond\n🔹 Bacon\n🔹 Bamboo Shoot\n🔹 Berry\n🔹 Bird Egg\n🔹 Butter\n🔹 Cabbage\n🔹 Calla Lily\n🔹 Carrot\n🔹 Cheese\n🔹 Chilled Meat\n🔹 Crab\n\n🔹 Crab Roe\n🔹 Cream\n🔹 Fish\n🔹 Flour\n🔹 Fowl\n🔹 Ham\n🔹 Jam\n🔹 Jueyun Chili\n🔹 Lotus Head\n🔹 Matsutake\n🔹 Milk\n", true)
      .addField("\u200B", "🔹 Mint\n🔹 Mushroom\n🔹 Onion\n🔹 Pepper\n🔹 Pinecone\n🔹 Potato\n🔹 Qingxinn🔹 Radish\n🔹 Raw Meat\n🔹 Rice\n🔹 Salt\n🔹 Sausage\n🔹 Shrimp Meat\n\n🔹 Small Lamp Grass\n🔹 Smoked Fowl\n🔹 Snapdragon\n🔹 Sugar\n🔹 Sweet Flower\n🔹 Tofu\n🔹 Tomato\n🔹 Violetgrass\n🔹 Wheat", true)
      .addBlankField()
      .setTimestamp()
      .setFooter("1️⃣ Overview")
      .setColor("RANDOM");

    const nineth = new Embed()
    .setTitle("Other")
      .addField("\u200B", "🔹 Dust of Azoth", true)
      .addBlankField()
      .setTimestamp()
      .setFooter("1️⃣ Overview")
      .setColor("RANDOM");

    const pages = {
      1: { page: 1, embed: first, emoji: "1️⃣" },
      2: { page: 2, embed: second, emoji: "2️⃣" },
      3: { page: 3, embed: third, emoji: "3️⃣" },
      4: { page: 4, embed: fourth, emoji: "4️⃣" },
      5: { page: 5, embed: fifth, emoji: "5️⃣" },
      6: { page: 6, embed: sixth, emoji: "6️⃣" },
      7: { page: 7, embed: seventh, emoji: "7️⃣" },
      8: { page: 8, embed: eighth, emoji: "8️⃣" },
      9: { page: 9, embed: nineth, emoji: "9️⃣" },
    } as Record<
      number,
      { page: number; embed: Embed; emoji: string } | undefined
    >;

    const page = pages[args.page];
    if (!page) return;

    // SEND FIRST EMBED
    const response = args.msg
      ? await (args.msg as Message).edit({ embed: page.embed }).catch(
        console.log,
      )
      : await message.reply({ embed: page.embed }).catch(console.log);
    if (!response) return;

    const emojis = [
      "1️⃣",
      "2️⃣",
      "3️⃣",
      "4️⃣",
      "5️⃣",
      "6️⃣",
      "7️⃣",
      "8️⃣",
      "9️⃣",
    ];
    // ADD THE REACTIONS
    if (!args.msg) await response.addReactions(emojis, true).catch(console.log);

    // HANDLE PAGINATION
    const reaction = await needReaction(message.author.id, response.id, {
      filter: (userID, reaction) =>
        message.author.id === userID && page.emoji !== reaction,
    }).catch(console.log);
    if (!reaction) return;

    if (
      !(removeUserReaction(
        message.channelID,
        response.id,
        reaction,
        message.author.id
      ).catch(console.info))
    ) {
      return;
    }

    const selectedPage = Object.values(pages).find((page) =>
      page?.emoji === reaction
    );
    if (!selectedPage) return;
    return botCache.commands
      .get("list")?.subcommands?.get("materials")
      ?.execute?.(message, {
        page: selectedPage.page,
        msg: response,
      });
  },
});

interface HelpArgs {
  command?: string;
}
