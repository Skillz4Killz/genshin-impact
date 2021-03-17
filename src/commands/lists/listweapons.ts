import { botCache, Message, removeUserReaction } from "../../../deps.ts";
import { parsePrefix } from "../../monitors/commandHandler.ts";
import { needReaction } from "../../utils/collectors.ts";
import { Embed } from "../../utils/Embed.ts";
import { createSubcommand } from "../../utils/helpers.ts";

createSubcommand("list", {
  name: "weapons",
  arguments: [
    { name: "page", type: "number", defaultValue: 1 },
  ],
  guildOnly: true,
  execute: async function (message, args) {
    const prefix = parsePrefix(message.guildID);
    const first = new Embed()
      .setTitle("Bows")
      .setDescription([
        "",
        `*If you want to search for weapon infos, type \`${prefix}weapon (name)\`\nThe weaponname has to be lower case and without spacing.\nFor example \`${prefix}weapon skyridergreatsword\`*`,
        "",
      ])
      .addField(
        "Rarity: ⭐⭐⭐⭐⭐",
        "🔹 Amos' Bow\n🔹 Elegy for the End\n🔹 Skyward Harp",
        true,
      )
      .addField(
        "Rarity: ⭐⭐⭐⭐",
        "🔹 Blackcliff Warbow\n🔹 Compound Bow\n🔹 Favonius Warbow\n🔹 Prototype Crescent\n🔹 Rust\n🔹 Sacrificial Bow\n🔹 The Stringless\n🔹 The Viridescent Hunt\n🔹 Windblume Ode",
        true,
      )
      .addBlankField()
      .addField(
        "Rarity: ⭐⭐⭐",
        "🔹 Messenger\n🔹 Raven Bow\n🔹 Recurve Bow\n🔹 Sharpshooter's Oath\n🔹 Slingshot",
        true,
      )
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/4/44/Weapon_Hunter%27s_Bow.png/revision/latest/scale-to-width-down/128?cb=20201116034023",
      )
      .setFooter("1️⃣ Bow, 2️⃣ Polearm, 3️⃣ Claymore, 4️⃣ Sword, 5️⃣ Catalyst")
      .setTimestamp();

    const second = new Embed()
      .setTitle("Polearms")
      .setDescription([
        "",
        `*If you want to search for weapon infos, type \`${prefix}weapon (name)\`\nThe weaponname has to be lower case and without spacing.\nFor example \`${prefix}weapon skyridergreatsword\`*`,
        "",
      ])
      .addField(
        "Rarity: ⭐⭐⭐⭐⭐",
        "🔹 Primordial Jade Winged-Spear\n🔹 Skyward Spine\n🔹 Staff of Homa\n🔹 Vortex Vanquisher",
        true,
      )
      .addField(
        "Rarity: ⭐⭐⭐⭐",
        "🔹 Blackcliff Pole\n🔹 Crescent Pike\n🔹 Deathmatch\n🔹 Dragon's Bane\n🔹 Dragonspine Spear\n🔹 Favonius Lance\n🔹 Lithic Spear\n🔹 Prototype Starglitter\n🔹 Royal Spear",
        true,
      )
      .addBlankField()
      .addField(
        "Rarity: ⭐⭐⭐",
        "🔹 Black Tassel\n🔹 Halberd\n🔹 White Tassel",
        true,
      )
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/f/fc/Weapon_Beginner%27s_Protector.png/revision/latest/scale-to-width-down/128?cb=20201116033115",
      )
      .setFooter("1️⃣ Bow, 2️⃣ Polearm, 3️⃣ Claymore, 4️⃣ Sword, 5️⃣ Catalyst")
      .setTimestamp();

    const third = new Embed()
      .setTitle("Claymores")
      .setDescription([
        "",
        `*If you want to search for weapon infos, type \`${prefix}weapon (name)\`\nThe weaponname has to be lower case and without spacing.\nFor example \`${prefix}weapon skyridergreatsword\`*`,
        "",
      ])
      .addField(
        "Rarity: ⭐⭐⭐⭐⭐",
        "🔹 Skyward Pride\n🔹 The Unforged\n🔹 Wolf's Gravestone",
        true,
      )
      .addField(
        "Rarity: ⭐⭐⭐⭐",
        "🔹 Blackcliff Slasher\n🔹 Favonius Greatsword\n🔹 Lithic Blade\n🔹 Prototype Archaic\n🔹 Rainslasher\n🔹 Royal Greatsword\n🔹 Sacrificial Greatsword\n🔹 Serpent Spine\n🔹 Snow-Tombed Starsilver\n🔹 The Bell\n🔹 Whiteblind",
        true,
      )
      .addBlankField()
      .addField(
        "Rarity: ⭐⭐⭐",
        "🔹 Bloodtainted Greatsword\n🔹 Debate Club\n🔹 Ferrous Shadow\n🔹 Quartz\n🔹 Skyrider Greatsword\n🔹 White Iron Greatsword",
        true,
      )
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/4/4c/Weapon_Waster_Greatsword.png/revision/latest/scale-to-width-down/128?cb=20201120001015",
      )
      .setFooter("1️⃣ Bow, 2️⃣ Polearm, 3️⃣ Claymore, 4️⃣ Sword, 5️⃣ Catalyst")
      .setTimestamp();

    const fourth = new Embed()
      .setTitle("Swords")
      .setDescription([
        "",
        `*If you want to search for weapon infos, type \`${prefix}weapon (name)\`\nThe weaponname has to be lower case and without spacing.\nFor example \`${prefix}weapon skyridergreatsword\`*`,
        "",
      ])
      .addField(
        "Rarity: ⭐⭐⭐⭐⭐",
        "🔹 Aquila Favonia\n🔹 Primordial Jade Cutter\n🔹 Skyward Blade\n🔹 Summit Shaper",
        true,
      )
      .addField(
        "Rarity: ⭐⭐⭐⭐",
        "🔹 Blackcliff Longsword\n🔹 Favonius Sword\n🔹 Festering Desire\n🔹 Iron Sting\n🔹 Lion's Roar\n🔹 Prototype Rancour\n🔹 Royal Longsword\n🔹 Sacrificial Sword\n🔹 Sword of Descension\n🔹 The Black Sword\n🔹 The Flute",
        true,
      )
      .addBlankField()
      .addField(
        "Rarity: ⭐⭐⭐",
        "🔹 Cool Steel\n🔹 Dark Iron Sword\n🔹 Fillet Blade\n🔹 Harbinger of Dawn\n🔹 Skyrider Sword\n🔹 Traveler's Handy Sword",
        true,
      )
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/2/2f/Weapon_Dull_Blade.png/revision/latest/scale-to-width-down/128?cb=20201119235841",
      )
      .setFooter("1️⃣ Bow, 2️⃣ Polearm, 3️⃣ Claymore, 4️⃣ Sword, 5️⃣ Catalyst")
      .setTimestamp();

    const fifth = new Embed()
      .setTitle("Catalysts")
      .setDescription([
        "",
        `*If you want to search for weapon infos, type \`${prefix}weapon (name)\`\nThe weaponname has to be lower case and without spacing.\nFor example \`${prefix}weapon skyridergreatsword\`*`,
        "",
      ])
      .addField(
        "Rarity: ⭐⭐⭐⭐⭐",
        "🔹 Lost Prayer to the Sacred Winds\n🔹 Memory of Dust\n🔹 Skyward Atlas",
        true,
      )
      .addField(
        "Rarity: ⭐⭐⭐⭐",
        "🔹 Blackcliff Agate\n🔹 Eye of Perception\n🔹 Favonius Codex\n🔹 Frostbearer\n🔹 Mappa Mare\n🔹 Prototype Amber\n🔹 Royal Grimoire\n🔹 Sacrificial Fragments\n🔹 Solar Pearl\n🔹 The Widsith",
        true,
      )
      .addBlankField()
      .addField(
        "Rarity: ⭐⭐⭐",
        "🔹 Emerald Orb\n🔹 Magic Guide\n🔹 Otherworldly Story\n🔹 Thrilling Tales of Dragon Slayers\n🔹 Twin Nephrite",
        true,
      )
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/c/cf/Weapon_Apprentice%27s_Notes.png/revision/latest/scale-to-width-down/128?cb=20201119233859",
      )
      .setFooter("1️⃣ Bow, 2️⃣ Polearm, 3️⃣ Claymore, 4️⃣ Sword, 5️⃣ Catalyst")
      .setTimestamp();

    const pages = {
      1: { page: 1, embed: first, emoji: "1️⃣" },
      2: { page: 2, embed: second, emoji: "2️⃣" },
      3: { page: 3, embed: third, emoji: "3️⃣" },
      4: { page: 4, embed: fourth, emoji: "4️⃣" },
      5: { page: 5, embed: fifth, emoji: "5️⃣" },
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

    const emojis = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣"];
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
        message.author.id,
      ).catch(console.info))
    ) {
      return;
    }

    const selectedPage = Object.values(pages).find((page) =>
      page?.emoji === reaction
    );
    if (!selectedPage) return;

    return botCache.commands
      .get("list")?.subcommands?.get("weapons")
      ?.execute?.(message, {
        page: selectedPage.page,
        msg: response,
      });
  },
});
