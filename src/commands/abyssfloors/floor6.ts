import { Embed } from "../../utils/Embed.ts";
import { createSubcommand, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("abyss", {
  name: "floor6",
  guildOnly: true,
  execute: async function (message, args) {
    const embed = new Embed()
      .setTitle("Spiral Abyss Floor 6")
      .setDescription(
        "Enemy Level 60\n\n**Ley Line Disorder:**\n• Using an Elemental Burst increases all party members' ATK and DEF by 6%. Max 10 stacks. At 5 stacks and above, increases character Normal Attack SPD and Movement SPD by an additional 30%.",
      )
      .addField(
        "Chamber 1 (First Half)",
        "Remaining challenge time longer than 30/60/120 sec.\n\n<:CryoSlime:812702015213142068> 4x Cryo Slime\n<:LargeCryoSlime:812702014966333441> 1x Large Cryo Slime\n<:CryoWhopperflower:833043770320617492> 5x Cryo Whopperflower\n<:ElectroHilichurl:833037499488141312> 3x Electro Hilichurl Shooter\n<:Hilichurl:812702015389564978> 4x Hilichurl Fighter",
        true,
      )
      .addField(
        "Chamber 1 (Second Half)",
        "Remaining challenge time longer than 30/60/120 sec.\n\n<:PyroSlime:812702015074467941> 4x Pyro Slime\n<:LargePyroSlime:812702015410274395> 1x Large Pyro Slime\n<:PyroWhopperflower:833044378763264030> 5x Pyro Whopperflower\n<:AnemoSamachurl:833047925378383884> 2x Anemo Samachurl<:CryoHilichurl:812979713848246318> 2x Cryo Hilichurl Shooter\n<:Hilichurl:812702015389564978> 2x Hilichurl Fighter",
        true,
      )
      .addBlankField()
      .addField(
        "Chamber 2 (First Half)",
        "Remaining challenge time longer than 90/180/270 sec.\n\n<:Hilichurl:812702015389564978> Rock Shield Hilichurl Guard\n<:Hilichurl:812702015389564978> 2x Wooden Shield Hilichurl Guard\n<:PyroHilichurl:832996252525396000> 4x Pyro Hilichurl Grenadier\n<:PyroHilichurl:832996252525396000> 2x Hilichurl Berserker\n<:ElectroHilichurl:833037499488141312> 3x Electro Hilichurl Shooter\n<:HydroSamachurl:812678780732571660> 2x Hydro Samachurl\n<:Mitachurl:812972562875154482> 2x Wooden Shield Mitachurl\n<:Mitachurl:812972562875154482> 3x Blazing Axe Mitachurl\n<:Mitachurl:812972562875154482> 1x Rock Shieldwall Mitachurl\n<:CryoAbyssMage:812702015196758036> 1x Cryo Abyss Mage",
        true,
      )
      .addField(
        "Chamber 2 (Second Half)",
        "Remaining challenge time longer than 90/180/270 sec.\n\n<:PyroSlime:812702015074467941> 10x Pyro Slime\n<:LargePyroSlime:812702015410274395> 6x Large Pyro Slime\n<:PyroHilichurl:832996252525396000> 1x Pyro Hilichurl Shooter\n<:CryoHilichurl:812979713848246318> 1x Cryo Hilichurl Shooter\n<:ElectroHilichurl:833037499488141312> 5x Electro Hilichurl Shooter\n<:DendroSamachurl:833049316758782042> 2x Dendro Samachurl\n<:AnemoSamachurl:833047925378383884> 3x Anemo Samachurl",
        true,
      )
      .addBlankField()
      .addField(
        "Chamber 3 (First Half)",
        "Remaining challenge time longer than 120/240/330 sec.\n\n<:Hilichurl:812702015389564978> 2x Rock Shield Hilichurl Guard\n<:CryoHilichurl:812979713848246318> 2x Cryo Hilichurl Shooter\n<:GeoSamachurl:833049976988237874> 1x Geo Samachurl\n<:StonehideLawachurl:833050228541227029> 1x Stonehide Lawachurl",
        true,
      )
      .addField(
        "Chamber 3 (Second Half)",
        "Remaining challenge time longer than 120/240/330 sec.\n\n<:LargePyroSlime:812702015410274395> 6x Large Pyro Slime\n<:PyroAbyssMage:812702015024136254> 3x Pyro Abyss Mage",
        true,
      )
      .addBlankField()
      .setColor("RANDOM")
      .setTimestamp();

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
