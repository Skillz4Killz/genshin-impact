import { botCache, Message, removeUserReaction } from "../../../deps.ts";
import { needReaction } from "../../utils/collectors.ts";
import { Embed } from "../../utils/Embed.ts";
import { createSubcommand } from "../../utils/helpers.ts";

createSubcommand("domain", {
  name: "ridgewatch",
  arguments: [
    { name: "page", type: "number", defaultValue: 1 },
  ],
  guildOnly: true,
  execute: async function (message, args) {
    const first = new Embed()
      .setTitle("Ridge Watch Overview")
      .setDescription([
        "**Location**",
        "Bishui Plain, Liyue",
        "",
        "**Required Adventurer Rank**",
        "30/35/40/45",
        "",
        "**Recommended Party Level**",
        "59/69/80/90",
        "",
        "**Recommended Elements**",
        "<:Hydro:798483587157983282> <:Cryo:798483525052530719> <:Geo:798483630740865044>",
        "",
        "**Ley Line Disorder**",
        "Level 1-4:",
        "A backlash will occur when opponents hit a character protected by a shield, unleashing a shockwave originating at the attacking opponent's position that deals one instance of AoE DMG. Can occur once every 2s.",
      ])
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/a/af/Peak_of_Vindagnyr.png/revision/latest/scale-to-width-down/310?cb=20210129032543",
      )
      .setTimestamp()
      .setFooter("Page 1/3 • 1️⃣ Overview, 2️⃣ Rewards, 3️⃣ Enemies");

    const second = new Embed()
      .setTitle("Ridge Watch Rewards")
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/d/d4/Domain_Ridge_Watch.png/revision/latest/scale-to-width-down/310?cb=20210428062805",
      )
      .setTimestamp()
      .setFooter("Page 2/3 • 1️⃣ Overview, 2️⃣ Rewards, 3️⃣ Enemies");

    const third = new Embed()
      .setTitle("Ridge Watch Enemies")
      .addField(
        "Ridge Watch I",
        "*Defeat 10 enemies in less than 6:00 minutes*\n\n<:PyroSlime:812702015074467941> 2x Pyro Slime\n<:LargePyroSlime:812702015410274395> 4x Large Pyro Slime\n<:PyroHilichurl:832996252525396000> 4x Hilichurl Berserker",
        true,
      )
      .addField(
        "Ridge Watch II",
        "*Defeat 10 enemies in less than 5:00 minutes*\n\n<:PyroHilichurl:832996252525396000> 4x Hilichurl Berserker\n<:Mitachurl:812972562875154482> 3x Blazing Ace Mitachurl\n<:LargePyroSlime:812702015410274395> 1x Large Pyro Slime",
        true,
      )
      .addBlankField()
      .addField(
        "Ridge Watch III",
        "*Defeat 10 enemies in less than 6:00 minutes*\n\n<:LargePyroSlime:812702015410274395> 5x Large Pyro Slimen\n<:Mitachurl:812972562875154482> 4x Blazing Ace Mitachurln\n<:Mitachurl:812972562875154482> 1x Rock Shieldwall Mitachurl",
        true,
      )
      .addField(
        "Ridge Watch IV",
        "*Defeat 10 enemies in less than 5:00 minutes*\n\n<:Geovishap:833066179903094825> 1x Geovishap (Hydro)\n<:Geovishap:833066179903094825> 1x Geovishap (Electro)",
        true,
      )
      .setFooter("Page 3/3 • 1️⃣ Overview, 2️⃣ Rewards, 3️⃣ Enemies")
      .setTimestamp();

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
      .get("domain")?.subcommands?.get("ridgewatch")
      ?.execute?.(message, {
        character: args.character,
        page: selectedPage.page,
        msg: response,
      });
  },
});

interface HelpArgs {
  command?: string;
}
