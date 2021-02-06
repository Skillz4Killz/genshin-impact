import { addReactions, Message, removeUserReaction } from "../../../deps.ts";
import { needReaction } from "../../utils/collectors.ts";
import { Embed } from "../../utils/Embed.ts";
import { createSubcommand, editEmbed, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("help", {
  name: "food",
  aliases: ["dish", "dishes"],
  guildOnly: true,
      execute: async function (message) {
        const firstEmbed = new Embed()
        .setTitle("Help Food")
        .setDescription([
          "**Food/Dishes ⭐**",
          "🔹 `p!food sunsettia`",
          "🔹 `p!food apple`",
          "🔹 `p!food definitelynotbarfood`",
          "🔹 `p!food popsteas`",
          "🔹 `p!food survivalgrilledfish`",
          "🔹 `p!food outriderschampionsteak`",
          "🔹 `p!food fruityskewers`",
          "🔹 `p!food qiankunmorameat`",
          "🔹 `p!food stir-friedfilet`",
          "🔹 `p!food grilledtigerfish`",
          "🔹 `p!food teyvatfriedegg`",
          "🔹 `p!food steak`",
          "🔹 `p!food radishveggiesoup`",
          "🔹 `p!food mondstadtgrilledfish`",
          "🔹 `p!food chicken-mushroomskewer`",
          "🔹 `p!food flash-friedfilet`",
          "🔹 `p!food teyvatcharredegg`"
        ])
        .setFooter("Page 1/4")
        .setTimestamp()
        .setColor("RANDOM");
    
        const secondEmbed = new Embed()
        .setTitle("Help Food")
        .setDescription([
          "**Food/Dishes ⭐⭐**",
          "🔹 `p!food stoneharbordelicacies`",
          "🔹 `p!food fish-flavoredtoast`",
          "🔹 `p!food all-delicacyparcels`",
          "🔹 `p!food coldnoodleswithmountaindelicacies`",
          "🔹 `p!food spicystew`",
          "🔹 `p!food noodleswithmountaindelicacies`",
          "🔹 `p!food goulash`",
          "🔹 `p!food rockinriffinchicken`",
          "🔹 `p!food derweisheitletzterschluss`",
          "🔹 `p!food mysteriousbolognese`",
          "🔹 `p!food lighter-than-airpancake`",
          "🔹 `p!food applecider`",
          "🔹 `p!food berrymintburst`",
          "🔹 `p!food wolfhookjuice`",
          "🔹 `p!food almondtofu`",
          "🔹 `p!food lotusseedandbirdeggsoup`",
          "🔹 `p!food crystalshrimp`",
          "🔹 `p!food teacreakpancake`",
          "🔹 `p!food northernsmokedchicken`",
          "🔹 `p!food flamingredbolognese`",
          "🔹 `p!food fishermansstoast`",
          "🔹 `p!food creamstew`",
          "🔹 `p!food satisfyingsalad`",
          "🔹 `p!food sweetmadame`",
          "🔹 `p!food matsutakemeatrolls`",
          "🔹 `p!food jueyunchilichicken`",
          "🔹 `p!food jewelrysoup`",
          "🔹 `p!food friedradishballs`",
          "🔹 `p!food vegetarianabalone`",
          "🔹 `p!food morameat`"
          ])
          .setFooter("Page 2/4")
          .setTimestamp()
          .setColor("RANDOM");

          const thirdEmbed = new Embed()
        .setTitle("Help Food")
        .setDescription([
          "**Food/Dishes ⭐⭐⭐**",
          "🔹 `p!food prosperouspeace`",
          "🔹 `p!food universalpeace`",
          "🔹 `p!food sunshinesprat`",
          "🔹 `p!food slow-cookedbambooshootsoup`",
          "🔹 `p!food bambooshootsoup`",
          "🔹 `p!food woodlanddream`",
          "🔹 `p!food jueyunguoba`",
          "🔹 `p!food adventurersbreakfastsandwich`",
          "🔹 `p!food lotusflowercrisp`",
          "🔹 `p!food qingcestirfry`",
          "🔹 `p!food aprizecatch`",
          "🔹 `p!food lotusflowercrisp`",
          "🔹 `p!food triple-layeredconsomme`",
          "🔹 `p!food goldenshrimpballs`",
          "🔹 `p!food northernapplestew`",
          "🔹 `p!food comeandgetit`",
          "🔹 `p!food squirrelfish`",
          "🔹 `p!food barbatosratatouille`",
          "🔹 `p!food pileemup`",
          "🔹 `p!food sauteedmatsutake`",
          "🔹 `p!food zhongyuanchopsuey`",
          "🔹 `p!food stickyhoneyroast`",
          "🔹 `p!food mushroompizza`",
          "🔹 `p!food mondstadthashbrown`",
          "🔹 `p!food coldcutplatter`",
          "🔹 `p!food callalilyseafoodsoup`",
          "🔹 `p!food nutritiousmeal`",
          "🔹 `p!food notomorrow`",
          "🔹 `p!food abuoyantbreeze`",
          "🔹 `p!food invigoratingpizza`",
          "🔹 `p!food dieheiligesinfonie`",
          "🔹 `p!food onceuponatimeinmondstadt`",
          "🔹 `p!food wanminrestaurantsboiledfish`",
          "🔹 `p!food puppy-pawhashbrown`",
          "🔹 `p!food holywater`",
          "🔹 `p!food crabhamandveggiebake`",
          ])
          .setFooter("Page 2/4")
          .setTimestamp()
          .setColor("RANDOM");

          const fourthEmbed = new Embed()
        .setTitle("Help Food")
        .setDescription([
          "**Food/Dishes ⭐⭐⭐⭐**",
          "🔹 `p!food tianshumeat`",
          "🔹 `p!food moonpie`",
          "🔹 `p!food goldencrab`",
          "🔹 `p!food jadeparcels`",
          "",
          "**Food/Dishes ⭐⭐⭐⭐⭐**",
          "🔹 `p!food adeptustemptation`",
          ])
          .setFooter("Page 4/4")
          .setTimestamp()
          .setColor("RANDOM");


      createPagination(message, [
        firstEmbed,
        secondEmbed,
        thirdEmbed,
        fourthEmbed
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
  