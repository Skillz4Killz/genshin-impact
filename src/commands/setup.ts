import { sendDirectMessage, Message } from "../../deps.ts";
import { db } from "../database/database.ts";
import { needMessage, needReaction } from "../utils/collectors.ts";
import { createCommand } from "../utils/helpers.ts";

export const characters = new Map([
  ["zhongli", { name: "Zhongli", emoji: "<:Zhongli:798577390577254441>", category: "Geo" }],
  ["xinyan", { name: "Xinyan", emoji: "<:Xinyan:798577406427529246>", category: "Pyro" }],
  ["xingqiu", { name: "Xingqiu", emoji: "<:Xingqiu:798577525265399838>", category: "Hydro" }],
  ["xiangling", { name: "Xiangling", emoji: "<:Xiangling:798578032935436329>", category: "Pyro" }],
  ["venti", { name: "Venti", emoji: "<:Venti:798578059891834890>", category: "Anemo" }],
  ["sucrose", { name: "Sucrose", emoji: "<:Sucrose:798578072756158475>", category: "Anemo" }],
  ["razor", { name: "Razor", emoji: "<:Razor:798578623900024862>", category: "Electro" }],
  [
    "qiqi",
    {
      name: "Qiqi",
      description: "",
      emoji: "<:Qiqi:798578651145830401>",
      thumbnail: "",
      image: "",
      color: "",
      category: "Cryo",
      stars: "⭐⭐⭐⭐⭐",
      vision: "<:Cryo:798483525052530719> Cryo",
      weapon: "Sword",
      nation: "None",
      affilation: "None",
      specialDish: "None",
      constellation: "None",
      birthday: "None",
      activeTalents: [{ name: "", description: "" }],
      passiveTalents: [{ name: "", description: "" }],
      constellations: [{ name: "", description: "" }],
    },
  ],
  ["noelle", { name: "Noelle", emoji: "<:Noelle:798578667508072458>", category: "Geo" }],
  [
    "ningguang",
    {
      name: "Ningguang",
      emoji: "<:Ningguang:798571977120022578>",
      category: "Geo",
      description: "The Tianquan of Liyue Qixing. Her wealth is unsurpassed in all of Teyvat.",
      thumbnail:
        "https://images-ext-1.discordapp.net/external/UU37uUkE9qDn3iWoLhG4oB46AVBgrTFMD0YGiegB498/https/api.genshin.dev/characters/ningguang/portrait?width=815&height=1139",
      image: "",
      color: "",
      stars: "⭐⭐⭐⭐",
      vision: "<:Geo:798483630740865044> Geo",
      weapon: "Catalyst",
      nation: "None",
      affilation: "None",
      specialDish: "None",
      constellation: "None",
      birthday: "None",
      activeTalents: [
        {
          name: "Sparkling Scatter",
          description:
            "Normal Attack\nShoots gems that deal Geo DMG.\n\nUpon hit, this grants Ningguang 1 Star Jade.\nCharged Attack\nConsumes a certain amount of Stamina to fire off a giant gem that deals Geo DMG.\n\nIf Ningguang has any Star Jades, unleashing a Charged Attack will cause the Star Jades to be fired at the enemy as well, dealing additional DMG.\nPlunging Attack\nGathering the might of Geo, Ningguang plunges towards the ground from mid-air, damaging all enemies in her path. Deals AoE Geo DMG upon impact with the ground.",
        },
        {
          name: "Jade Screen",
          description:
            "Ningguang creates a Jade Screen out of gold, obsidian and her great opulence, dealing AoE Geo DMG.\nJade Screen\n\nBlocks enemy projectiles.\nEndurance scales based on Ningguang's Max HP.\n\nJade Screen is considered a Geo Construct and can be used to block certain attacks, but cannot be climbed. Only one Jade Screen may exist at any one time.",
        },
        {
          name: "Elemental Burst",
          description:
            "Gathering a great number of gems, Ningguang scatters them all at once, sending homing projectiles at her enemies that deal massive Geo DMG.\n\nIf Starshatter is cast when a Jade Screen is nearby, the Jade Screen will fire additional gem projectiles at the same time.",
        },
      ],
      passiveTalents: [
        {
          name: "Backup Plan",
          description: "When Ningguang is in possession of Star Jades, her Charged Attack does not consume Stamina.",
        },
        {
          name: "Strategic Reserve",
          description: "A character that passes through the Jade Screen will gain a 12% Geo DMG Bonus for 10s.",
        },
        {
          name: "Trove of Marvelous Treasure",
          description:
            "Displays the location of nearby ore veins (Iron Ore, White Iron Ore, Crystal Ore, and Magical Crystal Ore) on the mini-map.",
        },
      ],
      constellations: [
        {
          name: "Piercing Fragments",
          description: "When a Normal Attack hits, it deals AoE DMG.",
        },
        {
          name: "Shock Effect",
          description: "When Jade Screen is shattered, its CD will reset.\nCan occur once every 6s.",
        },
        {
          name: "Majesty be the Array of Stars",
          description: "Increases the Level of Starshatter by 3.\nMaximum upgrade level is 15.",
        },
        {
          name: "Exquisite be the Jade, Outshining All the Beneath",
          description: "Jade Screen increases nearby characters' Elemental RES by 10%.",
        },
        {
          name: "Invincible be the Jade Screen",
          description: "Increase the Level of Jade Screen by 3.\nMaximum upgrade level is 15.",
        },
        {
          name: "Grandeur be the Seven Stars",
          description: "When Starshatter is used, Ningguang gains 7 Star Jades.",
        },
      ],
    },
  ],
  ["lisa", { name: "Lisa", emoji: "<:Lisa:798578725716361267>", category: "Electro" }],
  ["klee", { name: "Klee", emoji: "<:Klee:798578917464080404>", category: "Pyro" }],
  ["keqing", { name: "Keqing", emoji: "<:Keqing:798578899956006914>", category: "Electro" }],
  ["kaeya", { name: "Kaeya", emoji: "<:Kaeya:798578983775240242>", category: "Cryo" }],
  ["jean", { name: "Jean", emoji: "<:Jean:798578932031029308>", category: "Anemo" }],
  ["ganyu", { name: "Ganyu", emoji: "<:Ganyu:798579013084774504>", category: "Cryo" }],
  ["fischl", { name: "Fischl", emoji: "<:Fischl:798579031381114890>", category: "Electro" }],
  ["diluc", { name: "Diluc", emoji: "<:Diluc:798579247945613332>", category: "Pyro" }],
  ["chongyun", { name: "Chongyun", emoji: "<:Chongyun:798579223241162792>", category: "Cryo" }],
  ["childe", { name: "Childe", emoji: "<:Childe:798579167843057665>", category: "Hydro" }],
  ["bennett", { name: "Bennett", emoji: "<:Bennett:798579139430973500>", category: "Pyro" }],
  ["beidou", { name: "Beidou", emoji: "<:Beidou:798579120479928360>", category: "Electro" }],
  ["barbara", { name: "Barbara", emoji: "<:Barbara:798579079221215272>", category: "Hydro" }],
  ["amber", { name: "Amber", emoji: "<:Amber:798579318262988810>", category: "Pyro" }],
  ["albedo", { name: "Albedo", emoji: "<:Albedo:798579345916559370>", category: "Geo" }],
  ["mona", { name: "Mona", emoji: "<:Mona:798582495674105876>", category: "Hydro" }],
  ["diona", { name: "Diona", emoji: "<:Diona:798582510480785409>", category: "Cryo" }],
]);

createCommand({
  name: "setup",
  execute: async function (message) {
    if (message.guildID) {
      const dm = await sendDirectMessage(
        message.author.id,
        "Thanks for letting me guide you through the setup of your profile!"
      ).catch(async (error) => {
        // DMS MAY BE BLOCKED
        await message
          .alertReply("You may have your DM's blocked or too many users are using the bot at the moment.")
          .catch(console.log);

        console.log(error);
      });

      await message.delete().catch(console.log);
      if (!dm) return;
    } else {
      // WELCOME USER
      await sendDirectMessage(
        message.author.id,
        "Thanks for letting me guide you through the setup of your profile!"
      ).catch(console.log);
    }

    const ownedCharacters = [];

    // LOOP OVER ALL CHARACTERS ASKING THE USER IF THEY OWN THIS CHARACTER.
    for (const character of characters.values()) {
      // SENDS THE QUESTION TO THE USER
      const hasCharQuestion = await sendDirectMessage(
        message.author.id,
        `Do you own **${character.name}**? ${character.emoji}`
      ).catch(console.log);
      // SOMETHING WENT WRONG AND COULD NOT SEND MESSAGE
      if (!hasCharQuestion) return;

      // ADDS THE REACTIONS USER WILL ADD
      await hasCharQuestion.addReactions(["✅", "❌"]).catch(console.log);
      // WAITS FOR USER TO GIVE A REACTION.
      const hasChar = await needReaction(message.author.id, hasCharQuestion.id).catch(console.log);
      // IF THEY DON'T OWN SKIP TO NEXT CHARACTER
      if (!hasChar || hasChar === "❌") continue;

      // SINCE THE USER OWNS THIS CHARACTERS WE CAN ASK FOR MORE INFO
      await sendDirectMessage(
        message.author.id,
        [
          `Nice! You own ${character.name}, now let's figure out the constellation.`,
          "",
          // wolf what do i ask?
          "On what constellation is your character? Between 0-6",
        ].join("\n")
      ).catch(console.log);

      // WAIT FOR CONSTELLATION LEVEL RESPONSE
      const constellationLevel = await needMessage(message.author.id, hasCharQuestion.channelID, {
        filter: validateNumberFilter,
      }).catch(console.log);
      // THE USER PROVIDED NO VALID RESPONSE IN THE TIME GIVEN
      if (!constellationLevel) {
        await sendDirectMessage(message.author.id, "Cancelling setup...").catch(console.log);
        // CANCEL OUT
        return;
      }

      // ADD TO ARRAY WHICH WE SAVE TO DATABASE LATER
      ownedCharacters.push({ name: character.name, constellationLevel: Number(constellationLevel.content) });
    }

    // ALL CHARACTER QUESTIONS ARE COMPLETE
    await sendDirectMessage(
      message.author.id,
      "Niceuh! All the character profiles are complete. Only couple more things to go."
    ).catch(console.log);

    // ASK FOR USER UID
    const needUID = await sendDirectMessage(
      message.author.id,
      "What is your UID? Type `skip` if you do not want to provide one."
    ).catch(console.log);
    if (!needUID) return;

    // WAIT FOR A RESPONSE FROM USER
    const uidResponse = await needMessage(message.author.id, needUID.channelID);
    let uid = "Not Available";
    // IF NO RESPONSE GIVEN ERROR OUT
    if (!uidResponse) {
      await sendDirectMessage(message.author.id, "Cancelling setup...").catch(console.log);
      return;
    } else {
      // ONLY CHECK IF THE UID IS NOT SKIP
      if (uidResponse.content !== "skip") {
        // VALIDATE THE PROVIDED UID
        if (Number(uidResponse.content)) {
          // A VALID UID WAS PROVIDED SO SET IT
          uid = uidResponse.content;
        } else {
          await sendDirectMessage(message.author.id, "The UID provided was invalid, skipping...").catch(console.log);
        }
      }
    }

    // ASK FOR WORLD LEVEL
    await sendDirectMessage(message.author.id, "What is your World Level? Between 0-8").catch(console.log);

    // WAIT FOR A RESPONSE FROM USER
    const worldLevelResponse = await needMessage(message.author.id, needUID.channelID, {
      // MAX IS 8. MIN IS 0
      filter: (msg) => validateNumberFilter(msg, 8),
    });
    if (!worldLevelResponse && worldLevelResponse !== 0) {
      await sendDirectMessage(message.author.id, "A world level was not provided, defaulting to 0.").catch(console.log);
    }

    // ASK FOR ADVENTURER RANK
    await sendDirectMessage(message.author.id, "What is your Adventurer Rank? Between 1-60").catch(console.log);

    // WAIT FOR A RESPONSE FROM USER
    const adventurerRankResponse = await needMessage(message.author.id, needUID.channelID, {
      // MAX IS 60. MIN IS 1
      filter: (msg) => validateNumberFilter(msg, 60, 1),
    });
    if (!adventurerRankResponse) {
      await sendDirectMessage(message.author.id, "An adventurer rank was not provided, defaulting to 1.").catch(
        console.log
      );
    }

    // ALL Q&A IS COMPLETE!
    await db.users
      .update(message.author.id, {
        uid,
        characters: ownedCharacters,
        adventurerRank: Number(adventurerRankResponse.content) || 0,
        worldLevel: Number(worldLevelResponse.content) || 1,
      })
      .catch(console.log);

    return sendDirectMessage(message.author.id, "Your profile setup is complete.");
  },
});

/** Validates if a message content is a number between two numbed.
 *
 * max defaults to 6
 *
 * min defaults to 0
 */
function validateNumberFilter(message: Message, max = 6, min = 0) {
  // VALIDATE THAT THE RESPONSE IS A NUMBER
  const number = Number(message.content);
  // IF NOT A VALID NUMBER IGNORE THIS MESSAGE
  if ((!number && number !== 0) || number < min || number > max) {
    sendDirectMessage(
      message.author.id,
      "That was not a valid number, please try again. The number must be between 0-6"
    ).catch(console.log);
    return false;
  }

  return true;
}
