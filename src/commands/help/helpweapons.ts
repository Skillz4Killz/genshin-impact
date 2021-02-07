import { addReactions, Message, removeUserReaction } from "../../../deps.ts";
import { needReaction } from "../../utils/collectors.ts";
import { Embed } from "../../utils/Embed.ts";
import { createSubcommand, editEmbed, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("help", {
  name: "weapons",
  aliases: ["weapon"],
  arguments: [
    { name: "page", type: "number", defaultValue: 1 },
  ],
  guildOnly: true,
  execute: async function (message, args) {
    const first = new Embed()
      .setTitle("Bows")
      .setDescription([
        "🔹 `p!help sharpshootersoath`",
        "🔹 `p!help slingshot`",
        "🔹 `p!help ravenbow`",
        "🔹 `p!help messenger`",
        "🔹 `p!help recurvebow`",
        "",
        "🔹 `p!help compoundbow`",
        "🔹 `p!help blackcliffwarbow`",
        "🔹 `p!help theviridescenthunt`",
        "🔹 `p!help prototypecrescent`",
        "🔹 `p!help sacrificialbow`",
        "🔹 `p!help rust`",
        "🔹 `p!help thestringless`",
        "🔹 `p!help favoniuswarbow`",
        "",
        "🔹 `p!help amosbow`",
        "🔹 `p!help skywardharp`",
      ])
      .setTimestamp()
      .setFooter("Page 1/5")

    const second = new Embed()
      .setTitle("Polearms")
      .setDescription([
        "🔹 `p!help halberd`",
        "🔹 `p!help blacktassel`",
        "🔹 `p!help whitetassel`",
        "",
        "🔹 `p!help crescentpike`",
        "🔹 `p!help deathmatch`",
        "🔹 `p!help royalspear`",
        "🔹 `p!help favoniuslance`",
        "🔹 `p!help dragonspinespear`",
        "🔹 `p!help prototypestarglitter`",
        "🔹 `p!help dragonsbane`",
        "🔹 `p!help blackcliffpole`",
        "🔹 `p!help lithicspear`",
        "",
        "🔹 `p!help vortexvanquisher`",
        "🔹 `p!help skywardspine`",
        "🔹 `p!help primordialjadewinged-spear`",
        "🔹 `p!help staffofhoma`",
      ])
      .setTimestamp()
      .setFooter("Page 2/5")

    const third = new Embed()
      .setTitle("Claymores")
      .setDescription([
        "🔹 `p!help whiteirongreatsword`",
        "🔹 `p!help skyridergreatsword`",
        "🔹 `p!help quartz`",
        "🔹 `p!help ferrousshadow`",
        "🔹 `p!help debateclub`",
        "🔹 `p!help bloodtaintedgreatsword`",
        "",
        "🔹 `p!help blackcliffslasher`",
        "🔹 `p!help whiteblind`",
        "🔹 `p!help snow-Tombedstarsilver`",
        "🔹 `p!help sacrificialgreatsword`",
        "🔹 `p!help serpentspine`",
        "🔹 `p!help thebell`",
        "🔹 `p!help royalgreatsword`",
        "🔹 `p!help rainslasher`",
        "🔹 `p!help prototypearchaic`",
        "🔹 `p!help favoniusgreatsword`",
        "🔹 `p!help lithicblade`",
        "",
        "🔹 `p!help The Unforged`",
        "🔹 `p!help Wolf's Gravestone`",
        "🔹 `p!help Skyward Pride`",
      ])
      .setTimestamp()
      .setFooter("Page 3/5")

    const fourth = new Embed()
      .setTitle("Swords")
      .setDescription([
        "🔹 `p!help skyridersword`",
        "🔹 `p!help filletblade`",
        "🔹 `p!help travelershandysword`",
        "🔹 `p!help harbingerofdawn`",
        "🔹 `p!help darkironsword`",
        "🔹 `p!help coolsteel`",
        "",
        "🔹 `p!help blackclifflongsword`",
        "🔹 `p!help sacrificialsword`",
        "🔹 `p!help swordofdescension`",
        "🔹 `p!help favoniussword`",
        "🔹 `p!help theblacksword`",
        "🔹 `p!help theflute`",
        "🔹 `p!help royallongsword`",
        "🔹 `p!help prototyperancour`",
        "🔹 `p!help lionsrRoar`",
        "🔹 `p!help ironsting`",
        "🔹 `p!help festeringdesire`",
        "",
        "🔹 `p!help summitshaper`",
        "🔹 `p!help aquilafavonia`",
        "🔹 `p!help skywardblade`",
        "🔹 `p!help primordialjadecutter`",
      ])
      .setTimestamp()
      .setFooter("Page 4/5")

    const fifth = new Embed()
      .setTitle("Catalysts")
      .setDescription([
        "🔹 `p!help Magic Guide`",
        "🔹 `p!help Thrilling Tales of Dragon Slayers`",
        "🔹 `p!help Twin Nephrite`",
        "🔹 `p!help Otherworldly Story`",
        "🔹 `p!help Emerald Orb`",
        "",
        "🔹 `p!help Solar Pearl`",
        "🔹 `p!help Eye of Perception`",
        "🔹 `p!help The Widsith`",
        "🔹 `p!help Frostbearer`",
        "🔹 `p!help Sacrificial Fragments`",
        "🔹 `p!help Royal Grimoire`",
        "🔹 `p!help Prototype Amber`",
        "🔹 `p!help Mappa Mare`",
        "🔹 `p!help Favonius Codex`",
        "🔹 `p!help Blackcliff Agate`",
        "",
        "🔹 `p!help Lost Prayer to the Sacred Winds`",
        "🔹 `p!help Memory of Dust`",
        "🔹 `p!help Skyward Atlas`",
      ])
      .setTimestamp()
      .setFooter("Page 5/5")

      createPagination(message, [
        first,
        second,
        third,
        fourth,
        fifth
      ]);
    },
  });
  
  export async function createPagination(
    message: Message,
    embeds: Embed[],
    page = 1,
  ): Promise<void> {
    if (embeds.length === 0) {
      return;
    }
  
    const { channelID, author } = message;
  
    let currentPage: number = page - 1;
  
    let embedMessage = await sendEmbed(channelID, embeds[currentPage]);
  
    if (!embedMessage) {
      return;
    }
  
    if (embeds.length <= 1) {
      return;
    }
  
    try {
      addReactions(
        embedMessage.channelID,
        embedMessage.id,
        ["⏮️", "◀️", "▶️", "⏭️"],
        true,
      );
    } catch (e) {
      console.error(e);
      return;
    }
  
    while (true) {
      if (!embedMessage) {
        return;
      }
      const reaction = await needReaction(author.id, embedMessage.id);
  
      if (!reaction) {
        return;
      }
  
      if (
        !(removeUserReaction(
          message.channelID,
          embedMessage.id,
          reaction,
          message.author.id,
        ).catch(console.error))
      ) {
        return;
      }
  
      if (reaction === "◀️") {
        currentPage--;
      } else if (reaction === "▶️") {
        currentPage++;
      } else if (reaction === "⏮️") {
        currentPage = 0;
      } else if (reaction === "⏭️") {
        currentPage = embeds.length - 1;
      } else {
        continue;
      }
  
      if (currentPage < 0) {
        currentPage = 0;
      }
  
      if (currentPage > embeds.length - 1) {
        currentPage = embeds.length - 1;
      }
  
      if (!embedMessage) {
        return;
      }
  
      if (
        !(await editEmbed(embedMessage, embeds[currentPage]).catch(console.error))
      ) {
        return;
      }
    }
  }
  