import { botCache, Message } from "../../deps.ts";
import { needReaction } from "../utils/collectors.ts";
import { Embed } from "../utils/Embed.ts";
import { createCommand } from "../utils/helpers.ts";

createCommand({
  name: "weapontype",
  aliases: ["wt"],
  arguments: [
    { name: "page", type: "number", defaultValue: 1 },
  ],
  guildOnly: true,
  execute: async function (message, args) {

    const first = new Embed()
      .setTitle("Weapontypes")
      .setDescription([
        `1️⃣ Weapontypelist`,
        "",
        `2️⃣ Bow`,
        `3️⃣ Polearm`,
        `4️⃣ Claymore`,
        `5️⃣ Sword`,
        `6️⃣ Catalyst`,
      ])
      .setThumbnail("https://i.imgur.com/2rWapam.jpg")

      const second = new Embed()
      .setTitle("Bows")
      .setDescription([
        "⭐⭐⭐",
        "Sharpshooter's Oath 🔸 Slingshot 🔸 Raven Bow 🔸 Messenger 🔸 Recurve Bow",
        "",
        "⭐⭐⭐⭐",
        "Compound Bow 🔸 Blackcliff Warbow 🔸 The Viridescent Hunt 🔸 Prototype Crescent 🔸 Sacrificial Bow 🔸 Rust 🔸 The Stringless 🔸 Favonius Warbow",
        "",
        "⭐⭐⭐⭐⭐",
        "Amos' Bow 🔸 Skyward Harp",
        "",
        "If you want to search for weapon infos, type `p!weapon (name)`\nThe weaponname has to be lower case and without spacing. For example `p!weapon ravenbow`",
        "",
        `1️⃣ Weapontypelist`,
        `2️⃣ Bow`,
        `3️⃣ Polearm`,
        `4️⃣ Claymore`,
        `5️⃣ Sword`,
        `6️⃣ Catalyst`,
      ])
      .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/4/44/Weapon_Hunter%27s_Bow.png/revision/latest/scale-to-width-down/128?cb=20201116034023")

    const third = new Embed()
      .setTitle("Polearms")
      .setDescription([
        "⭐⭐⭐",
        "Halberd 🔸 Black Tassel 🔸 White Tassel",
        "",
        "⭐⭐⭐⭐",
        "Crescent Pike 🔸 Deathmatch-Royal Spear 🔸 Favonius Lance 🔸 Dragonspine Spear 🔸 Prototype Starglitter 🔸 Dragon's Bane 🔸 Blackcliff Pole",
        "",
        "⭐⭐⭐⭐⭐",
        "Vortex Vanquisher 🔸 Skyward Spine 🔸 Primordial Jade Winged-Spear",
        "",
        "If you want to search for weapon infos, type `p!weapon (name)`\nThe weaponname has to be lower case and without spacing. For example `p!weapon blacktassel`",
        "",
        `1️⃣ Weapontypelist`,
        `2️⃣ Bow`,
        `3️⃣ Polearm`,
        `4️⃣ Claymore`,
        `5️⃣ Sword`,
        `6️⃣ Catalyst`,
      ])
      .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/f/fc/Weapon_Beginner%27s_Protector.png/revision/latest/scale-to-width-down/128?cb=20201116033115")

    const fourth = new Embed()
      .setTitle("Claymores")
      .setDescription([
        "⭐⭐⭐",
        "White Iron Greatsword 🔸 Skyrider Greatsword 🔸 Quartz 🔸 Ferrous Shadow 🔸 Debate Club 🔸 Bloodtainted Greatsword",
        "",
        "⭐⭐⭐⭐",
        "Blackcliff Slasher 🔸 Whiteblind 🔸 Snow-Tombed Starsilver 🔸 Sacrificial Greatsword 🔸 Serpent Spine 🔸 The Bell 🔸 Royal Greatsword 🔸 Rainslasher 🔸 Prototype Archaic 🔸 Favonius Greatsword",
        "",
        "⭐⭐⭐⭐⭐",
        "The Unforged 🔸 Wolf's Gravestone 🔸 Skyward Pride",
        "",
        "If you want to search for weapon infos, type `p!weapon (name)`\nThe weaponname has to be lower case and without spacing. For example `p!weapon skyridergreatsword`",
        "",
        `1️⃣ Weapontypelist`,
        `2️⃣ Bow`,
        `3️⃣ Polearm`,
        `4️⃣ Claymore`,
        `5️⃣ Sword`,
        `6️⃣ Catalyst`,
      ])
      .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/4/4c/Weapon_Waster_Greatsword.png/revision/latest/scale-to-width-down/128?cb=20201120001015")

      const fifth = new Embed()
      .setTitle("Swords")
      .setDescription([
        "⭐⭐⭐",
        "Skyrider Sword 🔸 Fillet Blade 🔸 Traveler's Handy Sword 🔸 Harbinger of Dawn 🔸 Dark Iron Sword 🔸 Cool Steel",
        "",
        "⭐⭐⭐⭐",
        "Blackcliff Longsword 🔸 Sacrificial Sword 🔸 Sword of Descension 🔸 Favonius Sword 🔸 The Black Sword 🔸 The Flute 🔸 Royal Longsword 🔸 Prototype Rancour 🔸 Lion's Roar 🔸 Iron Sting 🔸 Festering Desire",
        "",
        "⭐⭐⭐⭐⭐",
        "Summit Shaper 🔸 Aquila Favonia 🔸 Skyward Blade",
        "",
        "If you want to search for weapon infos, type `p!weapon (name)`\nThe weaponname has to be lower case and without spacing. For example `p!weapon skyridersword`",
        "",
        `1️⃣ Weapontypelist`,
        `2️⃣ Bow`,
        `3️⃣ Polearm`,
        `4️⃣ Claymore`,
        `5️⃣ Sword`,
        `6️⃣ Catalyst`,
      ])
      .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/2/2f/Weapon_Dull_Blade.png/revision/latest/scale-to-width-down/128?cb=20201119235841")

      const sixth = new Embed()
      .setTitle("Catalysts")
      .setDescription([
        "⭐⭐⭐",
        "Magic Guide 🔸 Thrilling Tales of Dragon Slayers 🔸 Twin Nephrite 🔸 Otherworldly Story 🔸 Emerald Orb",
        "",
        "⭐⭐⭐⭐",
        "Solar Pearl 🔸 Eye of Perception 🔸 The Widsith 🔸 Frostbearer 🔸 Sacrificial Fragments 🔸 Royal Grimoire 🔸 Prototype Amber 🔸 Mappa Mare 🔸 Favonius Codex 🔸 Blackcliff Agate",
        "",
        "⭐⭐⭐⭐⭐",
        "Lost Prayer to the Sacred Winds 🔸 Memory of Dust 🔸 Skyward Atlas",
        "",
        "If you want to search for weapon infos, type `p!weapon (name)`\nThe weaponname has to be lower case and without spacing. For example `p!weapon memoryofdust`",
        "",
        `1️⃣ Weapontypelist`,
        `2️⃣ Bow`,
        `3️⃣ Polearm`,
        `4️⃣ Claymore`,
        `5️⃣ Sword`,
        `6️⃣ Catalyst`,
      ])
      .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/c/cf/Weapon_Apprentice%27s_Notes.png/revision/latest/scale-to-width-down/128?cb=20201119233859")

    const pages = {
      1: { page: 1, embed: first, emoji: "1️⃣" },
      2: { page: 2, embed: second, emoji: "2️⃣" },
      3: { page: 3, embed: third, emoji: "3️⃣" },
      4: { page: 4, embed: fourth, emoji: "4️⃣" },
      5: { page: 5, embed: fifth, emoji: "5️⃣" },
      6: { page: 6, embed: sixth, emoji: "6️⃣" },
    } as Record<number, { page: number; embed: Embed; emoji: string } | undefined>;

    const page = pages[args.page];
    if (!page) return;

    // SEND FIRST EMBED
    const response = args.msg
      ? await (args.msg as Message).edit({ embed: page.embed }).catch(console.log)
      : await message.reply({ embed: page.embed }).catch(console.log);
    if (!response) return;

    const emojis = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣"];
    // ADD THE REACTIONS
    if (!args.msg) await response.addReactions(emojis, true).catch(console.log);

    // HANDLE PAGINATION
    const reaction = await needReaction(message.author.id, response.id, {
      filter: (userID, reaction) => message.author.id === userID && page.emoji !== reaction,
    }).catch(console.log);
    if (!reaction) return;

    const selectedPage = Object.values(pages).find((page) => page?.emoji === reaction);
    if (!selectedPage) return;

    return botCache.commands
    .get("weapontype")
    ?.execute?.(message, { character: args.character, page: selectedPage.page, msg: response });
},
});