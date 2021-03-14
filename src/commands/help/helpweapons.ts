import { parsePrefix } from "../../monitors/commandHandler.ts";
import { Embed } from "../../utils/Embed.ts";
import { createSubcommand } from "../../utils/helpers.ts";
import { createPagination } from "../../utils/pagination.ts";

createSubcommand("help", {
  name: "weapons",
  aliases: ["weapon"],
  arguments: [
    { name: "page", type: "number", defaultValue: 1 },
  ],
  guildOnly: true,
  execute: async function (message, args) {
    const prefix = parsePrefix(message.guildID);
    const first = new Embed()
      .setTitle("Bows")
      .setDescription([
        `🔹 \`${prefix}help messenger\``,
        `🔹 \`${prefix}help ravenbow\``,
        `🔹 \`${prefix}help recurvebow\``,
        `🔹 \`${prefix}help sharpshootersoath\``,
        `🔹 \`${prefix}help slingshot\``,
        "",
        `🔹 \`${prefix}help blackcliffwarbow\``,
        `🔹 \`${prefix}help compoundbow\``,
        `🔹 \`${prefix}help favoniuswarbow\``,
        `🔹 \`${prefix}help prototypecrescent\``,
        `🔹 \`${prefix}help rust\``,
        `🔹 \`${prefix}help sacrificialbow\``,
        `🔹 \`${prefix}help thestringless\``,
        `🔹 \`${prefix}help theviridescenthunt\``,
        "",
        `🔹 \`${prefix}help amosbow\``,
        `🔹 \`${prefix}help skywardharp\``,
      ])
      .setTimestamp()
      .setFooter("Page 1/5");

    const second = new Embed()
      .setTitle("Polearms")
      .setDescription([
        `🔹 \`${prefix}help blacktassel\``,
        `🔹 \`${prefix}help halberd\``,
        `🔹 \`${prefix}help whitetassel\``,
        "",
        `🔹 \`${prefix}help blackcliffpole\``,
        `🔹 \`${prefix}help crescentpike\``,
        `🔹 \`${prefix}help deathmatch\``,
        `🔹 \`${prefix}help dragonsbane\``,
        `🔹 \`${prefix}help dragonspinespear\``,
        `🔹 \`${prefix}help favoniuslance\``,
        `🔹 \`${prefix}help lithicspear\``,
        `🔹 \`${prefix}help prototypestarglitter\``,
        `🔹 \`${prefix}help royalspear\``,
        "",
        `🔹 \`${prefix}help primordialjadewinged-spear\``,
        `🔹 \`${prefix}help skywardspine\``,
        `🔹 \`${prefix}help staffofhoma\``,
        `🔹 \`${prefix}help vortexvanquisher\``,
      ])
      .setTimestamp()
      .setFooter("Page 2/5");

    const third = new Embed()
      .setTitle("Claymores")
      .setDescription([
        `🔹 \`${prefix}help bloodtaintedgreatsword\``,
        `🔹 \`${prefix}help debateclub\``,
        `🔹 \`${prefix}help ferrousshadow\``,
        `🔹 \`${prefix}help quartz\``,
        `🔹 \`${prefix}help skyridergreatsword\``,
        `🔹 \`${prefix}help whiteirongreatsword\``,
        "",
        `🔹 \`${prefix}help blackcliffslasher\``,
        `🔹 \`${prefix}help favoniusgreatsword\``,
        `🔹 \`${prefix}help lithicblade\``,
        `🔹 \`${prefix}help prototypearchaic\``,
        `🔹 \`${prefix}help rainslasher\``,
        `🔹 \`${prefix}help royalgreatsword\``,
        `🔹 \`${prefix}help sacrificialgreatsword\``,
        `🔹 \`${prefix}help serpentspine\``,
        `🔹 \`${prefix}help snow-Tombedstarsilver\``,
        `🔹 \`${prefix}help thebell\``,
        `🔹 \`${prefix}help whiteblind\``,
        "",
        `🔹 \`${prefix}help skywardpride\``,
        `🔹 \`${prefix}help theunforged\``,
        `🔹 \`${prefix}help wolfsgravestone\``,
      ])
      .setTimestamp()
      .setFooter("Page 3/5");

    const fourth = new Embed()
      .setTitle("Swords")
      .setDescription([
        `🔹 \`${prefix}help coolsteel\``,
        `🔹 \`${prefix}help darkironsword\``,
        `🔹 \`${prefix}help filletblade\``,
        `🔹 \`${prefix}help harbingerofdawn\``,
        `🔹 \`${prefix}help skyridersword\``,
        `🔹 \`${prefix}help travelershandysword\``,
        "",
        `🔹 \`${prefix}help blackclifflongsword\``,
        `🔹 \`${prefix}help favoniussword\``,
        `🔹 \`${prefix}help festeringdesire\``,
        `🔹 \`${prefix}help ironsting\``,
        `🔹 \`${prefix}help lionsrRoar\``,
        `🔹 \`${prefix}help prototyperancour\``,
        `🔹 \`${prefix}help royallongsword\``,
        `🔹 \`${prefix}help sacrificialsword\``,
        `🔹 \`${prefix}help swordofdescension\``,
        `🔹 \`${prefix}help theblacksword\``,
        `🔹 \`${prefix}help theflute\``,
        "",
        `🔹 \`${prefix}help aquilafavonia\``,
        `🔹 \`${prefix}help primordialjadecutter\``,
        `🔹 \`${prefix}help skywardblade\``,
        `🔹 \`${prefix}help summitshaper\``,
      ])
      .setTimestamp()
      .setFooter("Page 4/5");

    const fifth = new Embed()
      .setTitle("Catalysts")
      .setDescription([
        `🔹 \`${prefix}help emeraldorb\``,
        `🔹 \`${prefix}help magicguide\``,
        `🔹 \`${prefix}help otherworldlystory\``,
        `🔹 \`${prefix}help thrillingtalesofdragonslayers\``,
        `🔹 \`${prefix}help twinnephrite\``,
        "",
        `🔹 \`${prefix}help blackcliffagate\``,
        `🔹 \`${prefix}help eyeofperception\``,
        `🔹 \`${prefix}help favoniuscodex\``,
        `🔹 \`${prefix}help frostbearer\``,
        `🔹 \`${prefix}help mappamare\``,
        `🔹 \`${prefix}help prototypeamber\``,
        `🔹 \`${prefix}help royalgrimoire\``,
        `🔹 \`${prefix}help sacrificialfragments\``,
        `🔹 \`${prefix}help solarpearl\``,
        `🔹 \`${prefix}help thewidsith\``,
        "",
        `🔹 \`${prefix}help lostprayertothesacredwinds\``,
        `🔹 \`${prefix}help memoryofdust\``,
        `🔹 \`${prefix}help skywardatlas\``,
      ])
      .setTimestamp()
      .setFooter("Page 5/5");

    createPagination(message, [
      first,
      second,
      third,
      fourth,
      fifth,
    ]);
  },
});
