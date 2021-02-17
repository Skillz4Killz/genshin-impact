import { createPagination } from "../../tasks/pagination.ts";
import { Embed } from "../../utils/Embed.ts";
import { createSubcommand, editEmbed, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("list", {
  name: "domains",
  arguments: [
    { name: "page", defaultValue: 1 },
  ],
  guildOnly: true,
  execute: async function (message) {
    const firstEmbed = new Embed()
      .setTitle("Domain List")
      .setDescription([
        "",
        "__**Trounce Domains**__",
        "",
        "**Confront Stormterror**",
        "**Enter the Golden House**",
        "",
        "",
        "__**Domains of Forgery**__",
        "",
        "**Cecilia Garden**",
        "Rec. Elements: <:Cryo:798483525052530719> <:Pyro:798483485832249354> <:Electro:798483560205385799>",
        "",
        "**Hidden Palace of Lianshan Formula**",
        "Rec. Elements: <:Cryo:798483525052530719> <:Pyro:798483485832249354>",
        "",
        "",
        "__**Domains of Mastery**__",
        "",
        "**Taishan Mansion**",
        "Rec. Elements: <:Hydro:798483587157983282> <:Cryo:798483525052530719> <:Electro:798483560205385799>",
        "",
        "**Forsaken Rift**",
        "Rec. Elements: <:Pyro:798483485832249354> <:Electro:798483560205385799>"
      ])
      .setFooter("Page 1/4")
      .setColor("RANDOM");

    const secondEmbed = new Embed()
      .setTitle("Domain List")
      .setDescription([
        "",
        "__**Domains of Blessing**__",
        "",
        "**Domain of Guyun**",
        "Rec. Elements: <:Electro:798483560205385799>",
        "",
        "**Midsummer Courtyard**",
        "Rec. Elements: <:Pyro:798483485832249354>",
        "",
        "**Valley of Remembrance**",
        "Rec. Elements: None",
        "",
        "**Hidden Palace of Zhou Formula**",
        "Rec. Elements: <:Cryo:798483525052530719>",
        "",
        "**Peak of Vindagnyr**",
        "Rec. Elements: <:Pyro:798483485832249354> <:Electro:798483560205385799> <:Geo:798483630740865044> <:Anemo:798483595781341194>",
        "",
        "**Clear Pool and Mountain Cavern**",
        "Rec. Elements: <:Geo:798483630740865044>",
      ])
      .setFooter("Page 2/4")
      .setColor("RANDOM");

    const thirdEmbed = new Embed()
      .setTitle("Domains of Blessing")
      .setDescription([
        "",
        "__**One-Time Domains**__",
        "",
        "**Elemental Trial**",
        "Rec. Elements: None",
        "",
        "**Temple of the Falcon**",
        "Rec. Elements: <:Pyro:798483485832249354>",
        "",
        "**Temple of the Wolf**",
        "Rec. Elements: <:Pyro:798483485832249354> <:Electro:798483560205385799>",
        "",
        "**Temple of the Lion**",
        "Rec. Elements: <:Electro:798483560205385799>",
        "",
        "**Eagle's Gate**",
        "Rec. Elements: <:Pyro:798483485832249354> <:Electro:798483560205385799>",
        "",
        "**Domain of Forsaken Ruins**",
        "Rec. Elements: <:Geo:798483630740865044> <:Electro:798483560205385799>",
        "",
        "**Domain of the Wayward Path**",
        "Rec. Elements: <:Geo:798483630740865044>",
        "",
        "**Voyage to the Sanguine Sky**",
        "Rec. Elements: <:Pyro:798483485832249354> <:Electro:798483560205385799> <:Cryo:798483525052530719> <:Anemo:798483595781341194>",
        "",
        "**Hidden Palace of Guizang Formula**",
        "Rec. Elements: None",
        "",
        "**Travels of the Moonlit Venturer**",
        "Rec. Elements: <:Geo:798483630740865044> <:Anemo:798483595781341194>",
      ])
      .setFooter("Page 3/4")
      .setColor("RANDOM");

      const fourthEmbed = new Embed()
      .setTitle("Domains of Blessing")
      .setDescription([
        "",
        "__**Story Domains**__",
        "",
        "**Lost Treasure of Arcadia**",
        "Rec. Elements: <:Cryo:798483525052530719> <:Electro:798483560205385799>",
        "",
        "**The Reward for Courage is Flight**",
        "Rec. Elements: <:Pyro:798483485832249354>",
        "",
        "**Find the Stolen Book**",
        "Rec. Elements: None",
        "",
        "**Cloud Retainer's Abode**",
        "Rec. Elements: <:Pyro:798483485832249354>",
        "",
        "**Karma-Heavy Cavern**",
        "Rec. Elements: None",
        "",
        "**The Great Adventurer Stanley**",
        "Rec. Elements: <:Pyro:798483485832249354> <:Electro:798483560205385799> <:Cryo:798483525052530719> <:Anemo:798483595781341194>",
        "",
        "**Abyssal Traces**",
        "Rec. Elements: <:Cryo:798483525052530719>",
        "",
        "**Retrieve the Treasure**",
        "Rec. Elements: None",
        "",
        "**Hunt Down the Abyss Mage**",
        "Rec. Elements: None",
        "",
        "**The Wonderful World Of Mr. Cyclops**",
        "Rec. Elements: <:Hydro:798483587157983282>",
        "",
        "**Of Mysteries and Salt**",
        "Rec. Elements: <:Geo:798483630740865044>",
        "",
        "**Ascension Domain**",
        "Rec. Elements: <:Pyro:798483485832249354> <:Electro:798483560205385799> <:Anemo:798483595781341194> <:Hydro:798483587157983282>",
      ])
      .setFooter("Page 4/4")
      .setColor("RANDOM");

    createPagination(message, [firstEmbed, secondEmbed, thirdEmbed, fourthEmbed]);
  },
});