import { parsePrefix } from "../../monitors/commandHandler.ts";
import { Embed } from "../../utils/Embed.ts";
import { createCommand } from "../../utils/helpers.ts";

createCommand({
  name: "birthday",
  aliases: ["bday", "birthdays"],
  guildOnly: true,
  execute: async function (message) {
    const prefix = parsePrefix(message.guildID);
    await message.reply({
      embed: new Embed()
        .setTitle("Birthdays")
        .addField("January", "18. <:Diona:798582510480785409> Diona", true)
        .addField(
          "February",
          "14. <:Beidou:798579120479928360> Beidou\n24. <:Rosaria:817836681138274315> Rosaria\n29. <:Bennett:798579139430973500> Bennett",
          true,
        )
        .addField(
          "March",
          "03. <:Qiqi:798578651145830401> Qiqi\n14. <:Jean:798578932031029308> Jean\n21. <:Noelle:798578667508072458> Noelle",
          true,
        )
        .addBlankField()
        .addField(
          "April",
          "17. <:Xiao:798578017197883412> Xiao\n30. <:Diluc:798579247945613332> Diluc",
          true,
        )
        .addField("May", "27. <:Fischl:798579031381114890> Fischl", true)
        .addField(
          "June",
          "09. <:Lisa:798578725716361267> Lisa\n16. <:Venti:798578059891834890> Venti",
          true,
        )
        .addBlankField()
        .addField(
          "July",
          "05. <:Barbara:798579079221215272> Barbara\n15. <:HuTao:815190067441696818> Hu Tao\n20. <:Childe:798579167843057665> Tartaglia\n27. <:Klee:798578917464080404> Klee",
          true,
        )
        .addField(
          "August",
          "10. <:Amber:798579318262988810> Amber\n26. <:Ningguang:798571977120022578> Ningguang\n31. <:Mona:798582495674105876> Mona",
          true,
        )
        .addField(
          "September",
          "07. <:Chongyun:798579223241162792> Chongyun\n09. <:Razor:798578623900024862> Razor\n13. <:Albedo:798579345916559370> Albedo\n28. <:Ayaka:797753205483372594> Ayaka",
          true,
        )
        .addBlankField()
        .addField(
          "October",
          "09. <:Xingqiu:798577525265399838> Xingqiu\n16. <:Xinyan:798577406427529246> Xinyan",
          true,
        )
        .addField(
          "November",
          "02. <:Xiangling:798578032935436329> Xiangling\n20. <:Keqing:798578899956006914> Keqing\n26. <:Sucrose:798578072756158475> Sucrose\n30. <:Kaeya:798578983775240242> Kaeya",
          true,
        )
        .addField(
          "December",
          "02. <:Ganyu:798579013084774504> Ganyu\n31. <:Zhongli:798577390577254441> Zhongli",
          true,
        )
        .setTimestamp()
        .setThumbnail(
          "https://static.wikia.nocookie.net/gensin-impact/images/c/cb/Item_Cake_for_Traveler.png/revision/latest?cb=20201202044033",
        )
        .setColor("RANDOM"),
    }).catch(console.log);
  },
});
