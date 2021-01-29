import { Embed } from "../../utils/Embed.ts";
import { createSubcommand, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("help", {
  name: "materials",
  aliases: ["material"],
  guildOnly: true,
  execute: async function (message) {
    const embed = new Embed()
      .setTitle("Help Material")
      .setDescription([
        "**Ascension Gems**",
        "🔹 `p!material [agnidusagate | agndius | aa]`",
        "🔹 `p!material [brilliantdiamond | diamond | bd]`",
        "🔹 `p!material [prithivatopaz | prithi | pv]`",
        "🔹 `p!material [vajradaamethyst | vajrada | va]`",
        "🔹 `p!material [varunadalazurite | varunada | vl]`",
        "🔹 `p!material [vayudaturquoise | vayuda | vt]`",
        "",
        "**Talent Level-Up Materials**",
        "🔹 `p!material [ballad | teachingsofballad | guidetoballad | philosophiesofballad]`",
        "🔹 `p!material [diligence | teachingsofdiligence | guidetodiligence | philosophiesofdiligence]`",
        "🔹 `p!material [freedom | teachingsoffreedom | guidetofreedom | philosophiesoffreedom]`",
        "🔹 `p!material [gold | teachingsofgold | guidetogold | philosophiesofgold]`",
        "🔹 `p!material [prosperity | teachingsofprosperity | guidetoprosperity | philosophiesofprosperity]`",
        "🔹 `p!material [resistance | teachingsofresistance | guidetoresistance | philosophiesofresistance]`",
        "",
        "🔹 `p!material crownofinsight`",
        "🔹 `p!material dvalinsclaw`",
        "🔹 `p!material dvalinsplume`",
        "🔹 `p!material dvalinssigh`",
        "🔹 `p!material ringofboreas`",
        "🔹 `p!material shadowofthewarriors`",
        "🔹 `p!material [shardofafoullegacy | foullegacy]`",
        "🔹 `p!material [spiritlocketofboreas | spiritlocket]`",
        "🔹 `p!material [tuskofmonoceroscaeli | tuskofmonoceros | monoceroscaeli | monoceros]`",
      ])
      .setColor("RANDOM");

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
