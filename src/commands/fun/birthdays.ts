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
        .addField(
          "January",
          "18. <:diona:843214992958423071> Diona\n24. <:Rosaria:820653132500828160> Rosaria",
          true,
        )
        .addField(
          "February",
          "14. <:beidou:843214508793266297> Beidou\n29. <:bennett:843214508952125470> Bennett",
          true,
        )
        .addField(
          "March",
          "03. <:qiqi:843214509463175229> Qiqi\n14. <:jean:843214509283868724> Jean\n21. <:noelle:843214509380599850> Noelle",
          true,
        )
        .addBlankField()
        .addField(
          "April",
          "17. <:xiao:843214509686128680> Xiao\n30. <:diluc:843214508956713000> Diluc",
          true,
        )
        .addField("May", "27. <:fischl:843214510005551105> Fischl", true)
        .addField(
          "June",
          "09. <:lisa:843214509706444840> Lisa\n16. <:venti:843214509615480842> Venti",
          true,
        )
        .addBlankField()
        .addField(
          "July",
          "05. <:barbara:843214508830883860> Barbara\n15. <:hutao:843215307581554771> Hu Tao\n20. <:tartaglia:843214509760839710> Tartaglia\n27. <:klee:843214509393182731> Klee\n28. <:yanfei:843214509761101854> Yanfei",
          true,
        )
        .addField(
          "August",
          "10. <:amber:843214509044269126> Amber\n26. <:ningguang:843214509606961272> Ningguang\n31. <:mona:843214509610500106> Mona",
          true,
        )
        .addField(
          "September",
          "07. <:chongyun:843214508876496917> Chongyun\n09. <:razor:843215534711242813> Razor\n13. <:albedo:843214508462047353> Albedo\n28. <:Ayaka:797753205483372594> Ayaka",
          true,
        )
        .addBlankField()
        .addField(
          "October",
          "09. <:xingqiu:843214509489127445> Xingqiu\n16. <:xinyan:843214509609844796> Xinyan\n25. <:eula:843214509929398293> Eula",
          true,
        )
        .addField(
          "November",
          "02. <:xiangling:843214509643923496> Xiangling\n20. <:keqing:843214509719420928> Keqing\n26. <:sucrose:843214509534347285> Sucrose\n30. <:kaeya:843214509606567936> Kaeya",
          true,
        )
        .addField(
          "December",
          "02. <:ganyu:843215307745394728> Ganyu\n31. <:zhongli:843214509605650442> Zhongli",
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
