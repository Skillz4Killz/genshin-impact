import { botCache, Message, removeUserReaction } from "../../../../../deps.ts";
import { needReaction } from "../../../../utils/collectors.ts";
import { Embed } from "../../../../utils/Embed.ts";
import { createSubcommand } from "../../../../utils/helpers.ts";

console.log(createSubcommand("character-guide", {
  name: "amber",
  arguments: [
    { name: "subcommand", type: "subcommand", required: false },
    { name: "page", type: "number", defaultValue: 1 },
  ],
  guildOnly: true,
  execute: async function (message, args) {
    console.log("start guide amber");
    const first = new Embed()
      .setTitle("Amber Weapons")
      .setDescription("https://tinyurl.com/genshinbuilds")
      .addField(
        "DPS",
        `1. Amos' Bow [R2+] (5⭐)\n2. Prototype Crescent [R5] (4⭐)\n3. Amos' Bow (5⭐)\n4. Skyward Harp (5⭐)\n5. Sharpshooter's Oath [R5] (3⭐)\n6. Prototype Crescent (4⭐)\n7. Sharpshooter's Oath (3⭐)\n8. Blackcliff Warbow (4⭐)\n9. Compound Bow (4⭐)\n10. Messenger (3⭐)`,
        true,
      )
      .addField(
        "Support",
        `1. Elegy for the End (5⭐)\n2. The Stringless (4⭐)\n3. Favonius Warbow (4⭐)\n4. Sacrificial Bow (4⭐)`,
        true,
      )
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/0/00/Character_Amber_Portrait.png/revision/latest/scale-to-width-down/303?cb=20200914160851",
      )
      .setTimestamp()
      .setFooter(
        "Page 1/3 • 1️⃣ Weapons, 2️⃣ Artifacts & Talents, 3️⃣ Notes",
      );

    const second = new Embed()
      .setTitle("Amber Artifacts")
      .setDescription("https://tinyurl.com/genshinbuilds")
      .addField(
        "DPS",
        `1. Wanderer's Troupe (4)\n2. Crimson Witch of Flames (2), Wanderer's Troupe (2)\n3. Gladiator's Finale (2) Martial Artist / Brave Heart (2)\n4. Brave Heart / Martial Artist / Resolution of Soujourner (2-pcs Hybrid)`,
        true,
      )
      .addField(
        "Artifact Stats",
        `**Main Stats**\nSands - ATK%\nGoblet - Pyro DMG\nCirclet - Crit DMG\n\n**Sub Stats**\n1. Crit DMG\n2. ATK%\n3. Energy Recharge\n4. Elemental Mastery\n5. Flat ATK`,
        true,
      )
      .addBlankField()
      .addField(
        "Support",
        `1. Noblesse Oblige (4)\n2. Noblesse Oblige (2) The Exile/Scholar (2)\n3. Noblesse Oblige (2) Crimson Witch of Flames (2)\n4. The Exile (4)`,
        true,
      )
      .addField(
        "Artifact Stats",
        `**Main Stats**\nSands - Energy Recharge / ATK% / Elemental Mastery\nGoblet - Pyro DMG\nCirclet - Crit Rate / DMG\n\n**Sub Stats**\n1. Energy Recharge\n2. ATK%\n3. Crit Rate / DMG\n4. Elemental Mastery\n5. Flat ATK`,
        true,
      )
      .addBlankField()
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/0/00/Character_Amber_Portrait.png/revision/latest/scale-to-width-down/303?cb=20200914160851",
      )
      .setTimestamp()
      .setFooter(
        "Page 2/3 • 1️⃣ Weapons, 2️⃣ Artifacts & Talents, 3️⃣ Notes",
      );

    const third = new Embed()
      .setTitle("Cecilia Garden Enemies")
      .setDescription(
        "**DPS**\nThis playstyle will be focused onto maximizing Amber's charged shot damage on enemies weak spots, while crit will be guaranteed when you land your shot on a weak spot.\nThe Amber DPS Build aims to utilise Amber's Ascension 4 Talent, which increases ATK by 15% for 10s after hitting a weak spot.\nArcher charge attacks are imbued with their aligned-element, that's why Pyro damage is desired, as it adds damage to Amber's Charged Shot, Skill and Burst.\nDespite Blackcliff Bow being a very conditional weapon, when facing against a crowd (while you're properly levelled), you'll be quickly stacking up ATK as you kill, while being able to make use of the Crit Damage second stat the whole time.\n\n**Support**\nAmber support can be utilised even at very low levels, her burst only requiring 40 energy and applies Pyro rapidly, while also having a taunt ability included.\nAs she grows in constellation she'll be giving more utility bonuses, an extra Baron Bunny, manual detonation, burst giving movement speed and ATK bonuses by 15% for 10s.\n\nhttps://tinyurl.com/genshinbuilds",
      )
      .setFooter(
        "Page 3/3 • 1️⃣ Weapons, 2️⃣ Artifacts & Talents, 3️⃣ Notes",
      )
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/0/00/Character_Amber_Portrait.png/revision/latest/scale-to-width-down/303?cb=20200914160851",
      )
      .setTimestamp();

    console.log("end guide amber");

    const pages = {
      1: { page: 1, embed: first, emoji: "1️⃣" },
      2: { page: 2, embed: second, emoji: "2️⃣" },
      3: { page: 3, embed: third, emoji: "3️⃣" },
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

    const emojis = ["1️⃣", "2️⃣", "3️⃣"];
    // ADD THE REACTIONS
    if (!args.msg) await response.addReactions(emojis, true).catch(console.log);

    // HANDLE PAGINATION
    const reaction = await needReaction(message.author.id, response.id, {
      filter: (userID, reaction) =>
        message.author.id === userID && page.emoji !== reaction,
    }).catch(console.log);
    if (!reaction) return;

    const selectedPage = Object.values(pages).find((page) =>
      page?.emoji === reaction
    );
    if (!selectedPage) return;

    if (
      !(removeUserReaction(
        message.channelID,
        response.id,
        reaction,
        message.author.id,
      ).catch(console.log))
    ) {
      return;
    }

    return botCache.commands
      .get("character")?.subcommands?.get("guide")?.subcommands?.get("amber")
      ?.execute?.(message, {
        page: selectedPage.page,
        msg: response,
      });
  },
}));
