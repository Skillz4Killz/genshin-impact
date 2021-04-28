import { parsePrefix } from "../../monitors/commandHandler.ts";
import { Embed } from "../../utils/Embed.ts";
import { createSubcommand } from "../../utils/helpers.ts";

createSubcommand("list", {
  name: "chars",
  aliases: ["character"],
  guildOnly: true,
  execute: async function (message) {
    const prefix = parsePrefix(message.guildID);
    await message.reply({
      embed: new Embed()
        .setTitle("List Character")
        .addField(
          "<:Pyro:798483485832249354> Pyro",
          "<:Amber:798579318262988810> Amber\n<:Bennett:798579139430973500> Bennett\n<:Diluc:798579247945613332> Diluc\n<:HuTao:815190067441696818> Hu Tao\n<:Klee:798578917464080404> Klee\n<:Xiangling:798578032935436329> Xiangling\n<:Xinyan:798577406427529246> Xinyan\n<:Yanfei:836969987428057098> Yanfei",
          true,
        )
        .addField(
          "<:Hydro:798483587157983282> Hydro",
          "<:Barbara:798579079221215272> Barbara\n<:Mona:798582495674105876> Mona\n<:Childe:798579167843057665> Tartaglia\n<:Xingqiu:798577525265399838> Xingqiu",
          true,
        )
        .addField(
          "<:Geo:798483630740865044> Geo",
          "<:Albedo:798579345916559370> Albedo\n<:Ningguang:798571977120022578> Ningguang\n<:Noelle:798578667508072458> Noelle\n<:Zhongli:798577390577254441> Zhongli",
          true,
        )
        .addBlankField()
        .addField(
          "<:Electro:798483560205385799> Electro",
          "<:Beidou:798579120479928360> Beidou\n<:Fischl:798579031381114890> Fischl\n<:Keqing:798578899956006914> Keqing\n<:Lisa:798578725716361267> Lisa\n<:Razor:798578623900024862> Razor",
          true,
        )
        .addField(
          "<:Cryo:798483525052530719> Cryo",
          "<:Chongyun:798579223241162792> Chongyun\n<:Diona:798582510480785409> Diona\n<:Eula:837064959207669760> Eula\n<:Ganyu:798579013084774504> Ganyu\n<:Kaeya:798578983775240242> Kaeya\n<:Qiqi:798578651145830401> Qiqi\n<:Rosaria:820653132500828160> Rosaria",
          true,
        )
        .addField(
          "<:Anemo:798483595781341194> Anemo",
          "<:Jean:798578932031029308> Jean\n<:Sucrose:798578072756158475> Sucrose\n<:Venti:798578059891834890> Venti\n<:Xiao:798578017197883412> Xiao",
          true,
        )
        .addBlankField()
        .addField(
          "<:Dendro:798483507076399184> Dendro",
          "NA",
          true,
        )
        .setColor("RANDOM"),
    }).catch(console.log);
  },
});
