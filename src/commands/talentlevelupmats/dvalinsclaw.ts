import { Embed } from "../../utils/Embed.ts";
import { createSubcommand, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("material", {
  name: "dvalinsclaw",
  guildOnly: true,
  execute: async function (message, args) {
    const embed = new Embed()
      .setTitle("Dvalin's Claw")
      .setDescription([
        `**Rarity:** ⭐⭐⭐⭐⭐`,
        "",
        "**Item type:** Talent Level-Up Material",
        "",
        "Dvalin's Claw is used to level talents for the following characters:",
        "<:lisa:843214509706444840> Lisa\n<:noelle:843214509380599850> Noelle\n<:razor:843215534711242813> Razor\n<:xiangling:843214509643923496> Xiangling",
        "",
        "**Source:**",
        "🔹 Lv. 70+ Stormterror Challenge Reward",
        "",
        "**Description:**",
        "A claw from the Dragon of the East.\nAs it had once torn through the flesh of the shadow dragon Durin, it used to contain his vicious poison. However, thanks to your purification and healing, it is no longer toxic.",
      ])
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/a/a8/Item_Dvalin%27s_Claw.png/revision/latest/scale-to-width-down/256?cb=20210106070324",
      )
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/a/a8/Item_Dvalin%27s_Claw.png/revision/latest/scale-to-width-down/256?cb=20210106070324",
      )
      .setColor("RANDOM")
      .setTimestamp();

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
