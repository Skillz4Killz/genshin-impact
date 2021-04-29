import { parsePrefix } from "../../monitors/commandHandler.ts";
import { Embed } from "../../utils/Embed.ts";
import { createSubcommand } from "../../utils/helpers.ts";
import { createPagination } from "../../utils/pagination.ts";

createSubcommand("help", {
  name: "food",
  aliases: ["dish", "dishes"],
  guildOnly: true,
  execute: async function (message) {
    const prefix = parsePrefix(message.guildID);
    const firstEmbed = new Embed()
      .setTitle("Help Food")
      .setDescription([
        "**Food/Dishes ⭐**",
        `🔹 \`${prefix}food apple\``,
        `🔹 \`${prefix}food chicken-mushroomskewer\``,
        `🔹 \`${prefix}food definitelynotbarfood\``,
        `🔹 \`${prefix}food flash-friedfilet\``,
        `🔹 \`${prefix}food fruityskewers\``,
        `🔹 \`${prefix}food grilledtigerfish\``,
        `🔹 \`${prefix}food mintjelly\``,
        `🔹 \`${prefix}food mondstadtgrilledfish\``,
        `🔹 \`${prefix}food outriderschampionsteak\``,
        `🔹 \`${prefix}food popsteas\``,
        `🔹 \`${prefix}food qiankunmorameat\``,
        `🔹 \`${prefix}food radishveggiesoup\``,
        `🔹 \`${prefix}food steak\``,
        `🔹 \`${prefix}food stir-friedfilet\``,
        `🔹 \`${prefix}food sunsettia\``,
        `🔹 \`${prefix}food survivalgrilledfish\``,
        `🔹 \`${prefix}food teyvatcharredegg\``,
        `🔹 \`${prefix}food teyvatfriedegg\``,
      ])
      .setFooter("Page 1/4")
      .setTimestamp()
      .setColor("RANDOM");

    const secondEmbed = new Embed()
      .setTitle("Help Food")
      .setDescription([
        "**Food/Dishes ⭐⭐**",
        `🔹 \`${prefix}food all-delicacyparcels\``,
        `🔹 \`${prefix}food almondtofu\``,
        `🔹 \`${prefix}food applecider\``,
        `🔹 \`${prefix}food berrymintburst\``,
        `🔹 \`${prefix}food coldnoodleswithmountaindelicacies\``,
        `🔹 \`${prefix}food crabroetofu\``,
        `🔹 \`${prefix}food creamstew\``,
        `🔹 \`${prefix}food crystalshrimp\``,
        `🔹 \`${prefix}food derweisheitletzterschluss\``,
        `🔹 \`${prefix}food fish-flavoredtoast\``,
        `🔹 \`${prefix}food fishermansstoast\``,
        `🔹 \`${prefix}food flamingredbolognese\``,
        `🔹 \`${prefix}food friedradishballs\``,
        `🔹 \`${prefix}food ghostlymarch\``,
        `🔹 \`${prefix}food goulash\``,
        `🔹 \`${prefix}food jewelrysoup\``,
        `🔹 \`${prefix}food jueyunchilichicken\``,
        `🔹 \`${prefix}food lighter-than-airpancake\``,
        `🔹 \`${prefix}food lotusseedandbirdeggsoup\``,
        `🔹 \`${prefix}food matsutakemeatrolls\``,
        `🔹 \`${prefix}food mintsalad\``,
        `🔹 \`${prefix}food morameat\``,
        `🔹 \`${prefix}food myway\``,
        `🔹 \`${prefix}food mysteriousbolognese\``,
        `🔹 \`${prefix}food noodleswithmountaindelicacies\``,
        `🔹 \`${prefix}food northernsmokedchicken\``,
        `🔹 \`${prefix}food rockinriffinchicken\``,
        `🔹 \`${prefix}food satisfyingsalad\``,
        `🔹 \`${prefix}food spicystew\``,
        `🔹 \`${prefix}food stir-friedfishnoodles\``,
        `🔹 \`${prefix}food stoneharbordelicacies\``,
        `🔹 \`${prefix}food sweetdream\``,
        `🔹 \`${prefix}food sweetmadame\``,
        `🔹 \`${prefix}food teacreakpancake\``,
        `🔹 \`${prefix}food vegetarianabalone\``,
        `🔹 \`${prefix}food wolfhookjuice\``,
      ])
      .setFooter("Page 2/4")
      .setTimestamp()
      .setColor("RANDOM");

    const thirdEmbed = new Embed()
      .setTitle("Help Food")
      .setDescription([
        "**Food/Dishes ⭐⭐⭐**",
        `🔹 \`${prefix}food abuoyantbreeze\``,
        `🔹 \`${prefix}food adventurersbreakfastsandwich\``,
        `🔹 \`${prefix}food aprizecatch\``,
        `🔹 \`${prefix}food bambooshootsoup\``,
        `🔹 \`${prefix}food barbatosratatouille\``,
        `🔹 \`${prefix}food callalilyseafoodsoup\``,
        `🔹 \`${prefix}food coldcutplatter\``,
        `🔹 \`${prefix}food comeandgetit\``,
        `🔹 \`${prefix}food crabhamandveggiebake\``,
        `🔹 \`${prefix}food crispychickenburger\``,
        `🔹 \`${prefix}food crispypotatoshrimpplatter\``,
        `🔹 \`${prefix}food curedporkdryhotpot\``,
        `🔹 \`${prefix}food dieheiligesinfonie\``,
        `🔹 \`${prefix}food fragrantmashedpotatoes\``,
        `🔹 \`${prefix}food goldenfriedchicken\``,
        `🔹 \`${prefix}food goldenshrimpballs\``,
        `🔹 \`${prefix}food holywater\``,
        `🔹 \`${prefix}food invigoratingpizza\``,
        `🔹 \`${prefix}food jueyunguoba\``,
        `🔹 \`${prefix}food lotusflowercrisp\``,
        `🔹 \`${prefix}food lotusflowercrisp\``,
        `🔹 \`${prefix}food mintymeatrolls\``,
        `🔹 \`${prefix}food mondstadthashbrown\``,
        `🔹 \`${prefix}food mushroompizza\``,
        `🔹 \`${prefix}food northernapplestew\``,
        `🔹 \`${prefix}food notomorrow\``,
        `🔹 \`${prefix}food nutritiousmeal\``,
        `🔹 \`${prefix}food onceuponatimeinmondstadt\``,
        `🔹 \`${prefix}food pileemup\``,
        `🔹 \`${prefix}food prosperouspeace\``,
        `🔹 \`${prefix}food puppy-pawhashbrown\``,
        `🔹 \`${prefix}food qingcestirfry\``,
        `🔹 \`${prefix}food sauteedmatsutake\``,
        `🔹 \`${prefix}food slow-cookedbambooshootsoup\``,
        `🔹 \`${prefix}food squirrelfish\``,
        `🔹 \`${prefix}food stickyhoneyroast\``,
        `🔹 \`${prefix}food sunshinesprat\``,
        `🔹 \`${prefix}food triple-layeredconsomme\``,
        `🔹 \`${prefix}food universalpeace\``,
        `🔹 \`${prefix}food wanminrestaurantsboiledfish\``,
        `🔹 \`${prefix}food woodlanddream\``,
        `🔹 \`${prefix}food zhongyuanchopsuey\``,
      ])
      .setFooter("Page 2/4")
      .setTimestamp()
      .setColor("RANDOM");

    const fourthEmbed = new Embed()
      .setTitle("Help Food")
      .setDescription([
        "**Food/Dishes ⭐⭐⭐⭐**",
        `🔹 \`${prefix}food fingerlickingoodggoldenchicken\``,
        `🔹 \`${prefix}food goldenchickenburger\``,
        `🔹 \`${prefix}food goldencrab\``,
        `🔹 \`${prefix}food jadeparcels\``,
        `🔹 \`${prefix}food moonpie\``,
        `🔹 \`${prefix}food stormcrestpie\``,
        `🔹 \`${prefix}food tianshumeat\``,
        "",
        "**Food/Dishes ⭐⭐⭐⭐⭐**",
        `🔹 \`${prefix}food adeptustemptation\``,
      ])
      .setFooter("Page 4/4")
      .setTimestamp()
      .setColor("RANDOM");

    createPagination(message, [
      firstEmbed,
      secondEmbed,
      thirdEmbed,
      fourthEmbed,
    ]);
  },
});
