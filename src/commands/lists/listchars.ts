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
          "<:amber:843214509044269126> Amber\n<:bennett:843214508952125470> Bennett\n<:diluc:843214508956713000> Diluc\n<:hutao:843215307581554771> Hu Tao\n<:klee:843214509393182731> Klee\n<:xiangling:843214509643923496> Xiangling\n<:xinyan:843214509609844796> Xinyan\n<:yanfei:843214509761101854> Yanfei",
          true,
        )
        .addField(
          "<:Hydro:798483587157983282> Hydro",
          "<:barbara:843214508830883860> Barbara\n<:mona:843214509610500106> Mona\n<:tartaglia:843214509760839710> Tartaglia\n<:xingqiu:843214509489127445> Xingqiu",
          true,
        )
        .addField(
          "<:Geo:798483630740865044> Geo",
          "<:albedo:843214508462047353> Albedo\n<:ningguang:843214509606961272> Ningguang\n<:noelle:843214509380599850> Noelle\n<:zhongli:843214509605650442> Zhongli",
          true,
        )
        .addBlankField()
        .addField(
          "<:Electro:798483560205385799> Electro",
          "<:beidou:843214508793266297> Beidou\n<:fischl:843214510005551105> Fischl\n<:keqing:843214509719420928> Keqing\n<:lisa:843214509706444840> Lisa\n<:razor:843215534711242813> Razor",
          true,
        )
        .addField(
          "<:Cryo:798483525052530719> Cryo",
          "<:chongyun:843214508876496917> Chongyun\n<:diona:843214992958423071> Diona\n<:eula:843214509929398293> Eula\n<:ganyu:843215307745394728> Ganyu\n<:kaeya:843214509606567936> Kaeya\n<:qiqi:843214509463175229> Qiqi\n<:rosaria:820651981210386432> Rosaria",
          true,
        )
        .addField(
          "<:Anemo:798483595781341194> Anemo",
          "<:jean:843214509283868724> Jean\n<:sucrose:843214509534347285> Sucrose\n<:venti:843214509615480842> Venti\n<:xiao:843214509686128680> Xiao",
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
