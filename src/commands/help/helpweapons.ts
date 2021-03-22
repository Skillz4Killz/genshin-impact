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
        `🔹 \`${prefix}weapon messenger\``,
        `🔹 \`${prefix}weapon ravenbow\``,
        `🔹 \`${prefix}weapon recurvebow\``,
        `🔹 \`${prefix}weapon sharpshootersoath\``,
        `🔹 \`${prefix}weapon slingshot\``,
        "",
        `🔹 \`${prefix}weapon blackcliffwarbow\``,
        `🔹 \`${prefix}weapon compoundbow\``,
        `🔹 \`${prefix}weapon favoniuswarbow\``,
        `🔹 \`${prefix}weapon prototypecrescent\``,
        `🔹 \`${prefix}weapon rust\``,
        `🔹 \`${prefix}weapon sacrificialbow\``,
        `🔹 \`${prefix}weapon thestringless\``,
        `🔹 \`${prefix}weapon theviridescenthunt\``,
        `🔹 \`${prefix}weapon windblumeode\``,
        "",
        `🔹 \`${prefix}weapon amosbow\``,
        `🔹 \`${prefix}weapon elegyfortheend\``,
        `🔹 \`${prefix}weapon skywardharp\``,
      ])
      .setTimestamp()
      .setFooter("Page 1/5");

    const second = new Embed()
      .setTitle("Polearms")
      .setDescription([
        `🔹 \`${prefix}weapon blacktassel\``,
        `🔹 \`${prefix}weapon halberd\``,
        `🔹 \`${prefix}weapon whitetassel\``,
        "",
        `🔹 \`${prefix}weapon blackcliffpole\``,
        `🔹 \`${prefix}weapon crescentpike\``,
        `🔹 \`${prefix}weapon deathmatch\``,
        `🔹 \`${prefix}weapon dragonsbane\``,
        `🔹 \`${prefix}weapon dragonspinespear\``,
        `🔹 \`${prefix}weapon favoniuslance\``,
        `🔹 \`${prefix}weapon lithicspear\``,
        `🔹 \`${prefix}weapon prototypestarglitter\``,
        `🔹 \`${prefix}weapon royalspear\``,
        "",
        `🔹 \`${prefix}weapon primordialjadewinged-spear\``,
        `🔹 \`${prefix}weapon skywardspine\``,
        `🔹 \`${prefix}weapon staffofhoma\``,
        `🔹 \`${prefix}weapon vortexvanquisher\``,
      ])
      .setTimestamp()
      .setFooter("Page 2/5");

    const third = new Embed()
      .setTitle("Claymores")
      .setDescription([
        `🔹 \`${prefix}weapon bloodtaintedgreatsword\``,
        `🔹 \`${prefix}weapon debateclub\``,
        `🔹 \`${prefix}weapon ferrousshadow\``,
        `🔹 \`${prefix}weapon quartz\``,
        `🔹 \`${prefix}weapon skyridergreatsword\``,
        `🔹 \`${prefix}weapon whiteirongreatsword\``,
        "",
        `🔹 \`${prefix}weapon blackcliffslasher\``,
        `🔹 \`${prefix}weapon favoniusgreatsword\``,
        `🔹 \`${prefix}weapon lithicblade\``,
        `🔹 \`${prefix}weapon prototypearchaic\``,
        `🔹 \`${prefix}weapon rainslasher\``,
        `🔹 \`${prefix}weapon royalgreatsword\``,
        `🔹 \`${prefix}weapon sacrificialgreatsword\``,
        `🔹 \`${prefix}weapon serpentspine\``,
        `🔹 \`${prefix}weapon snow-Tombedstarsilver\``,
        `🔹 \`${prefix}weapon thebell\``,
        `🔹 \`${prefix}weapon whiteblind\``,
        "",
        `🔹 \`${prefix}weapon skywardpride\``,
        `🔹 \`${prefix}weapon theunforged\``,
        `🔹 \`${prefix}weapon wolfsgravestone\``,
      ])
      .setTimestamp()
      .setFooter("Page 3/5");

    const fourth = new Embed()
      .setTitle("Swords")
      .setDescription([
        `🔹 \`${prefix}weapon coolsteel\``,
        `🔹 \`${prefix}weapon darkironsword\``,
        `🔹 \`${prefix}weapon filletblade\``,
        `🔹 \`${prefix}weapon harbingerofdawn\``,
        `🔹 \`${prefix}weapon skyridersword\``,
        `🔹 \`${prefix}weapon travelershandysword\``,
        "",
        `🔹 \`${prefix}weapon blackclifflongsword\``,
        `🔹 \`${prefix}weapon favoniussword\``,
        `🔹 \`${prefix}weapon festeringdesire\``,
        `🔹 \`${prefix}weapon ironsting\``,
        `🔹 \`${prefix}weapon lionsrRoar\``,
        `🔹 \`${prefix}weapon prototyperancour\``,
        `🔹 \`${prefix}weapon royallongsword\``,
        `🔹 \`${prefix}weapon sacrificialsword\``,
        `🔹 \`${prefix}weapon swordofdescension\``,
        `🔹 \`${prefix}weapon theblacksword\``,
        `🔹 \`${prefix}weapon theflute\``,
        "",
        `🔹 \`${prefix}weapon aquilafavonia\``,
        `🔹 \`${prefix}weapon primordialjadecutter\``,
        `🔹 \`${prefix}weapon skywardblade\``,
        `🔹 \`${prefix}weapon summitshaper\``,
      ])
      .setTimestamp()
      .setFooter("Page 4/5");

    const fifth = new Embed()
      .setTitle("Catalysts")
      .setDescription([
        `🔹 \`${prefix}weapon emeraldorb\``,
        `🔹 \`${prefix}weapon magicguide\``,
        `🔹 \`${prefix}weapon otherworldlystory\``,
        `🔹 \`${prefix}weapon thrillingtalesofdragonslayers\``,
        `🔹 \`${prefix}weapon twinnephrite\``,
        "",
        `🔹 \`${prefix}weapon blackcliffagate\``,
        `🔹 \`${prefix}weapon eyeofperception\``,
        `🔹 \`${prefix}weapon favoniuscodex\``,
        `🔹 \`${prefix}weapon frostbearer\``,
        `🔹 \`${prefix}weapon mappamare\``,
        `🔹 \`${prefix}weapon prototypeamber\``,
        `🔹 \`${prefix}weapon royalgrimoire\``,
        `🔹 \`${prefix}weapon sacrificialfragments\``,
        `🔹 \`${prefix}weapon solarpearl\``,
        `🔹 \`${prefix}weapon thewidsith\``,
        "",
        `🔹 \`${prefix}weapon lostprayertothesacredwinds\``,
        `🔹 \`${prefix}weapon memoryofdust\``,
        `🔹 \`${prefix}weapon skywardatlas\``,
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
