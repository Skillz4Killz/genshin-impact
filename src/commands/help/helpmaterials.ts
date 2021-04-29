import { parsePrefix } from "../../monitors/commandHandler.ts";
import { Embed } from "../../utils/Embed.ts";
import { createSubcommand } from "../../utils/helpers.ts";
import { createPagination } from "../../utils/pagination.ts";

createSubcommand("help", {
  name: "materials",
  aliases: ["material"],
  guildOnly: true,
  execute: async function (message) {
    const prefix = parsePrefix(message.guildID);
    const firstEmbed = new Embed()
      .setTitle("Help Material")
      .setDescription([
        "**Ascension Gems**",
        `🔹 \`${prefix}material [agnidusagate | agndius | aa]\``,
        `🔹 \`${prefix}material [brilliantdiamond | diamond | bd]\``,
        `🔹 \`${prefix}material [prithivatopaz | prithi | pv]\``,
        `🔹 \`${prefix}material [vajradaamethyst | vajrada | va]\``,
        `🔹 \`${prefix}material [varunadalazurite | varunada | vl]\``,
        `🔹 \`${prefix}material [vayudaturquoise | vayuda | vt]\``,
        "",
        "**Talent Level-Up Materials**",
        `🔹 \`${prefix}material [ballad | teachingsofballad | guidetoballad | philosophiesofballad]\``,
        `🔹 \`${prefix}material [diligence | teachingsofdiligence | guidetodiligence | philosophiesofdiligence]\``,
        `🔹 \`${prefix}material [freedom | teachingsoffreedom | guidetofreedom | philosophiesoffreedom]\``,
        `🔹 \`${prefix}material [gold | teachingsofgold | guidetogold | philosophiesofgold]\``,
        `🔹 \`${prefix}material [prosperity | teachingsofprosperity | guidetoprosperity | philosophiesofprosperity]\``,
        `🔹 \`${prefix}material [resistance | teachingsofresistance | guidetoresistance | philosophiesofresistance]\``,
        `🔹 \`${prefix}material crownofinsight\``,
        `🔹 \`${prefix}material dvalinsclaw\``,
        `🔹 \`${prefix}material dvalinsplume\``,
        `🔹 \`${prefix}material dvalinssigh\``,
        `🔹 \`${prefix}material ringofboreas\``,
        `🔹 \`${prefix}material shadowofthewarriors\``,
        `🔹 \`${prefix}material [shardofafoullegacy | foullegacy]\``,
        `🔹 \`${prefix}material [spiritlocketofboreas | spiritlocket]\``,
        `🔹 \`${prefix}material [tuskofmonoceroscaeli | tuskofmonoceros | monoceroscaeli | monoceros]\``,
      ])
      .setFooter("Page 1/3")
      .setTimestamp()
      .setColor("RANDOM");

    const secondEmbed = new Embed()
      .setTitle("Help Material")
      .setDescription([
        "**Weapon Ascension Material**",
        `🔹 \`${prefix}material [aerosiderite | pieceofaerosiderite | grainofaerosiderite | bitofaerosiderite | chunkofaerosiderite]\``,
        `🔹 \`${prefix}material [boreal | borealwolf | borealwolfs | borealwolfsmilktooth | borealwolfsbrokenfang | borealwolfscrackedtooth | borealwolfsnostalgia | milktooth | brokenfang | crackedtooth | nostalgia]\``,
        `🔹 \`${prefix}material [dandeliongladiator | fettersofthedandeliongladiator | chainsofthedandeliongladiator | shacklesofthedandeliongladiator | dreamofthedandeliongladiator]\``,
        `🔹 \`${prefix}material [mistveiled | mistveiledleadelixir | mistveiledmercuryelixir | mistveiledgoldelixir | mistveiledprimoelixir]\``,
        "",
        "**Character EXP Material**",
        `🔹 \`${prefix}material [wanderersadvice | adventurersexperience | heroswit]\``,
        "",
        "**Weapon Enhancement Material**",
        `🔹 \`${prefix}material enhancementore\``,
        `🔹 \`${prefix}material [festeringdragonmarrow | festeringdragon | dragonmarrow]\``,
      ])
      .setFooter("Page 2/3")
      .setTimestamp()
      .setColor("RANDOM");

    const thirdEmbed = new Embed()
      .setTitle("Help Material")
      .setDescription([
        "**Common Ascension Material**",
        `🔹 \`${prefix}material [arrowhead | firmarrowhead | sharparrowhead | weatheredarrowhead]\``,
        `🔹 \`${prefix}material [boneshard | fragileboneshard | sturdyboneshard | fossilizedboneshard]\``,
        `🔹 \`${prefix}material [chaos | chaoscircuit | chaosdevice | chaoscircuit]\``,
        `🔹 \`${prefix}material [deadleyline | deadleylinebranch | deadleylineleaves | leylinesprouts]\``,
        `🔹 \`${prefix}material [fatuiinsignia | recruitsinsignia | sergeantsinsignia | lieutenantsinsignia]\``,
        `🔹 \`${prefix}material [horn | heavyhorn | blackbronzehorn | blackcrystalhorn]\``,
        `🔹 \`${prefix}material [mask | damagedmask | stainedmask | omniousmask]\``,
        `🔹 \`${prefix}material [mistgrass | mistgrasspollen | mistgrasswick]\``,
        `🔹 \`${prefix}material [nectar | whopperflowernectar | shimmeringnectar | energynectar]\``,
        `🔹 \`${prefix}material [sacrificialknife | hunterssacrificialknife | agentssacrificialknife | Inspectorssacrificialknife]\``,
        `🔹 \`${prefix}material [slime | slimecondensate | slimesecretions | slimeconcentrate]\``,
        `🔹 \`${prefix}material [treasurehoarderinsignia | silverraveninsignia | goldenraveninsignia | raveninsignia]\``,
        "",
        "**Forging Material**",
        `🔹 \`${prefix}material [northlander | northlanderbowbillet | northlandercatalystbillet | northlanderclaymorebillet | northlanderpolearmbillet | northlanderswordbillet | northlanderbow | northlandercatalyst | northlanderclaymore | northlanderpolearm | northlandersword]\``,
        `🔹 \`${prefix}material [ore | ironchunk | whiteironchunk | crystalchunk | magicalcrystalchunk]\``,
        "",
        "**Other**",
        `🔹 \`${prefix}material dreamsolvent\``,
        `🔹 \`${prefix}material dustofazoth\``,
        `🔹 \`${prefix}material transientresin\``,
        `🔹 \`${prefix}material vialofadeptalspeed\``,
      ])
      .setFooter("Page 3/3")
      .setTimestamp()
      .setColor("RANDOM");

    createPagination(message, [
      firstEmbed,
      secondEmbed,
      thirdEmbed,
    ]);
  },
});
