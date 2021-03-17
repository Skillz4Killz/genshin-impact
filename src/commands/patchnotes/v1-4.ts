import { Embed } from "../../utils/Embed.ts";
import { createSubcommand } from "../../utils/helpers.ts";
import { createPagination } from "../../utils/pagination.ts";

createSubcommand("patchnotes", {
  name: "1.4",
  aliases: ["1-1"],
  arguments: [
    { name: "page", defaultValue: 1 },
  ],
  guildOnly: true,
  execute: async function (message) {
    const firstEmbed = new Embed()
      .setTitle("Update Notes Version 1.4")
      .setDescription([
        "**Release Date:** 17. March 2021",
        "",
        "**Download Size:**",
        "PC: 4,3 GB",
        "Smartphone: NA",
        "Playstation: NA",
        "Switch: NA",
        "",
        "",
      ])
      .setThumbnail(
        "",
      )
      .setFooter("Page 1/11")
      .setTimestamp()
      .setColor("RANDOM");

    const secondEmbed = new Embed()
      .setTitle("Update Notes Version 1.4")
      .setDescription([
        "Dear Travelers,",
        "To ensure all Travelers have the best-possible Genshin Impact experience, our developers will soon begin performing update maintenance. After this is complete, the game will update to a new version.",
        "",
        "After Travelers install the new game client, they will be able to continue playing. It is recommended to install the update over a Wi-Fi connection owing to the large file size.",
        "",
        "While the update maintenance is in progress, Travelers will be unable to log in to the game. Please take note of the update time and schedule your game time accordingly to avoid losing your progress. We hope Travelers will bear with us during the disruption. > <",
      ])
      .setFooter("Page 2/11")
      .setTimestamp()
      .setColor("RANDOM");

    const thirdEmbed = new Embed()
      .setTitle("Update Notes Version 1.4")
      .setDescription([
        "**〓Update Schedule〓**",
        "Update maintenance begins 2021/03/17 06:00 (UTC+8) and is estimated to take 5 hours.\n*(Note: Precise timings are subject to change. Players may also experience disruption outside of this period.)*",
        "",
        "**〓How to Update Game Client〓**",
        "PC: Close the game, open the Genshin Impact Launcher, and click Update.",
        "iOS: Open the App Store and tap Update.",
        "Android: Open the game and follow the directions on-screen. (Alternatively, you may open Google Play and tap Update.)",
        "PS4: Highlight Genshin Impact from the PS4 Home Screen and press the OPTIONS button > Check for Update.",
        "Please do not hesitate to contact Customer Service if you encounter any issues installing the new version. We will do our very best to resolve the issue.",
        "",
        "**〓Compensation〓**",
        "Maintenance Compensation: Primogems ×300",
        "*(60 Primogems for every hour the servers are down. No change to compensation amount if the update is completed early.)*",
      ])
      .setFooter("Page 3/11")
      .setTimestamp()
      .setColor("RANDOM");

    const fourthEmbed = new Embed()
      .setTitle("Update Notes Version 1.4")
      .setDescription([
        "**〓Eligibility〓**",
        "All Travelers who have reached Adventure Rank 5 or above by 2021/03/17 06:00 (UTC+8)",
        "Our developers will distribute compensation to Travelers via in-game mail within 5 hours after the update maintenance is finished. Please log in and claim it before Version 1.4 ends. The mail will expire after 30 days, so don't forget to claim the attached compensation in time.",
        "",
        "**〓Update Details〓**",
        "**I. New Character**",
        "4-Star Character 'horny Benevolence' Rosaria (Cryo)",
        "◇ Vision: Cryo",
        "◇ Weapon: Polearm",
        "◇ A sister of the church, though you wouldn't know it if it weren't for her attire. Known for her sharp, cold words and manner, she often works alone.",
        "◆ Elemental Skill 'Ravaging Confession': Quickly maneuvers behind the enemy (except for some large enemies) and unleashes an attack that deals Cryo DMG. Elemental Burst 'Rites of Termination': Casts an Ice Lance into the ground that deals periodic bouts of AoE Cryo DMG.",
      ])
      .setFooter("Page 4/11")
      .setTimestamp()
      .setColor("RANDOM");

    const fifthEmbed = new Embed()
      .setTitle("Update Notes Version 1.4")
      .setDescription([
        "**II. New Equipment**",
        "◇ New Weapons: Elegy for the End (5-Star Bow), The Alley Flash (4-Star Sword), Wine and Song (4-Star Catalyst), Alley Hunter (4-Star Bow), Windblume Ode (4-Star Bow)",
        "",
        "◆ Take part in the Invitation of Windblume event for a chance to obtain the event-exclusive weapon, Windblume Ode.",
        "",
        "◆ During the Event Wish 'Epitome Invocation,' from after the Version 1.4 update – 2021/04/06 15:59, the event-exclusive 5-star bow Elegy for the End, 5-star sword Skyward Blade, event-exclusive 4-star sword The Alley Flash, and event-exclusive 4-star catalyst Wine and Song will have their Wish drop rates greatly increased!",
        "*Alley Hunter (Bow) will appear in a future Event Wish.",
        "",
        "",
        "**III. New Events**",
        "Take part in Version 1.4's flagship event 'Invitation of Windblume' for a chance to obtain the bow, Windblume Ode.",
        "◆ Gameplay Duration: 2021/03/19 10:00 – 2021/04/05 03:59",
        "◆ Event Shop Duration: 2021/03/19 10:00 – 2021/04/12 03:59",
        "◆ Event Rules: Take part in challenges during the Windblume Festival to obtain two currencies: Festive Tour Tickets and Peculiar Collab Coupons. Spend these currencies at the Event Shop to purchase the event-exclusive weapon Windblume Ode and its exclusive refinement material 'The Visible Winds,' as well as the Crown of Insight and more.",
      ])
      .setFooter("Page 5/11")
      .setTimestamp()
      .setColor("RANDOM");

    const sixthEmbed = new Embed()
      .setTitle("Update Notes Version 1.4")
      .setDescription([
        "**〓Festive Anecdotes〓**",
        "Act I: 2021/03/19 10:00 – 2021/04/05 03:59",
        "Act II: 2021/03/22 04:00 – 2021/04/05 03:59",
        "Act III: 2021/03/25 04:00 – 2021/04/05 03:59",
        "Act IV: 2021/03/28 04:00 – 2021/04/05 03:59",
        "",
        "◆ A series of Windblume Festival quests will become available during the event period. Four acts of 'Festive Anecdotes' will unlock over the course of the event, each bringing new quests. ",
        "Complete these quests to win rewards including Primogems, Character EXP Materials, and Mora.",
        "More events to follow during Version 1.4.",
        "",
        "",
        "**IV. New Game Feature**",
        "New Feature: Hangout Events",
        "◆ After the Version 1.4 update, the new 'Hangout Events' feature will be added to the game. Travelers who reach the required Adventure Rank and complete the prerequisite quests will be able to unlock Hangout Events for Barbara, Noelle, Chongyun, and Bennett using Story Keys. (Each Hangout Event requires 2 Story Keys to unlock.)",
        "The Hangout Events feature unlocks at Adventure Rank 26. Story Keys are obtained by completing Daily Commissions (1 Story Key is awarded for every 8 commissions completed.)",
      ])
      .setFooter("Page 6/11")
      .setTimestamp()
      .setColor("RANDOM");

    const seventhEmbed = new Embed()
      .setTitle("Update Notes Version 1.4")
      .setDescription([
        "V. New Quests",
        "New Archon Quest",
        "◇ You hear from Ganyu and Lan that the Treasure Hoarders of Mondstadt and Liyue have banded together and plan to get involved in some ruins associated with the Abyss Order. Fearing the chaos that the Treasure Hoarders might cause through their involvement, you take up the commission and investigate...",
        "",
        "◆ The Archon Quest 'Chapter I: Act IV - We Will Be Reunited' will become available at a later date. Stay tuned for more information.",
        "",
        "New World Quests",
        "◆ A total of 8 world quests will become available over the course of the Windblume Festival.",
        "◆ Complete these quests to win Mora, Character EXP Materials, and more!",
        "※ Windblume Festival world quests will no longer be available after the event ends on 2021/04/05 03:59.",
        "",
        "",
        "**VI. Other Additions**",
        "**● Gameplay**",
        "New Elite Monster: Abyss Herald - Wicked Torrents (In Version 1.4, this monster will only appear in the Archon Quest)",
        "New Gadgets: Windblume Festival Commemorative Balloon, Windsong Lyre, Endora",
        "",
        "New Recipes:",
        "○ Crispy Potato Shrimp Platter, Mint Jelly, Mint Salad, Minty Meat Rolls, Golden Chicken Burger, Golden Fried Chicken, Fragrant Mashed Potatoes",
        "New Namecards: 'Travel Notes: Windblume' and 'Rosaria: Indenture'",
        "New Achievements: Additions to the 'Wonders of the World' category",
        "Parametric Transformer: Now lets you add various ores as materials",
        "Liyue NPC Changshun: Now additionally sells Potatoes, Sugar, Cheese, Cor Lapis, and Electro Crystal",
        "Liyue NPC Bolai: Now additionally sells Apples, Sunsettias, Fish, and Starconches",
      ])
      .setFooter("Page 7/11")
      .setTimestamp()
      .setColor("RANDOM");

    const eighthEmbed = new Embed()
      .setTitle("Update Notes Version 1.4")
      .setDescription([
        "**● System**",
        "Adjust World Level: After reaching World Level 5, the option to lower your World Level will be unlocked. Using this function, you can lower your World Level by 1. Each time you change your World Level, whether lowering it by 1 or restoring your World Level, you will be unable to change your World Level again for the following 24 hours.",
        "After reaching Adventure Rank 60, any further Adventure EXP you receive will be converted to Mora at a rate of 10 Mora per Adventure EXP point.",
        "Adds a new events/new content summary page to the mobile version of the game.",
        "",
        "**● Co-Op Mode**",
        "In Co-Op Mode, Travelers can now see the idle animations of teammates' characters.",
        "",
        "",
        "**VII. Adjustments & Optimizations**",
        "**● System**",
        "Spiral Abyss",
        "Starting from the first time that the Blessing of the Abyssal Moon changes after updating to Version 1.4, the two Blessings of the Abyssal Moon will be as follows:",
        "○ Period I: Windward Moon",
        "Characters possess an ATK-increasing Windward Aura that can increase their ATK by a maximum of 60%. For every opponent who steps within the Aura, the Aura's effect is decreased by 25%. When 4 or more opponents are within the Aura, this effect will not provide an ATK increase.",
      ])
      .setFooter("Page 8/11")
      .setTimestamp()
      .setColor("RANDOM");

    const ninethEmbed = new Embed()
      .setTitle("Update Notes Version 1.4")
      .setDescription([
        "○ Period II: Skyward Moon",
        "Hitting an opponent with a Plunging Attack decreases their DEF by 40% for 10s.",
        "※ There will be no change to the reset times of the Spiral Abyss and Blessing of the Abyssal Moon. These remain the first and sixteenth days of each month, respectively.",
        "Increases the maximum quantity of Condensed Resin that may be held. Travelers may now hold up to 5 Condensed Resin at any one time.",
        "",
        "Optimizes the order of item drops: More valuable items will appear earlier in the list.",
        "Optimizes the cooking function: After unlocking Auto Cook, the option Cook Manually remains.",
        "Optimizes the Spiral Abyss challenge: Challenges can be restarted mid-stage; Elemental ",
        "",
        "Resonance effects can be viewed from the character selection screen; adds the option to exit before entering the next floor.",
        "Cooking, crafting, and forging functions remember your previous character selection.",
        "Optimizes Xiao's expression when casting his Elemental Skill.",
        "",
        "Optimizes the visual effect in Co-Op Mode when the camera makes contact with a teammate or NPC.",
        "Optimizes camera close-up transitions in some domains and quests.",
        "Optimizes the Original Resin replenishment screen: Travelers can view the quantity of Fragile Resin they own and decide which item to replenish Original Resin with more easily.",
      ])
      .setFooter("Page 9/11")
      .setTimestamp()
      .setColor("RANDOM");

    const tenthEmbed = new Embed()
      .setTitle("Update Notes Version 1.4")
      .setDescription([
        "When you first download the game client on a mobile device, only the voice-over resources corresponding to your device's system language will be downloaded initially by default. ",
        "*(Example: Devices where the system language is set to English will download only English voice-over resources by default.) When you update the game client on a mobile device, voice-over resources will be downloaded for both the voice-over language corresponding to your device's system language and the currently selected voice-over language in the game. (Example: If your device's system language is set to English and you have selected Japanese voice-over in the game, both English and Japanese voice-over resources will be downloaded when you update the game.)*",
        "",
        "Travelers can download any additional voice-over languages they wish to use from within the game.",
      ])
      .setFooter("Page 10/11")
      .setTimestamp()
      .setColor("RANDOM");

    const eleventhEmbed = new Embed()
      .setTitle("Update Notes Version 1.4")
      .setDescription([
        "**● Audio**",
        "The Chinese voice artist for Amber is changed.",
        "Adjusts the Chinese and Japanese voice-over for certain characters.",
        "Adjusts the English voice-over for certain NPCs.",
        "Adds Chinese voice-over for certain characters.",
        "",
        "Adds dialogue voice-over to the Oceanid boss fight as well as certain sound effects for Oceanid Creatures.",
        "Optimizes the sound effects for certain character skills and environments.",
        "Optimizes the playback setting for the sound effect when characters take damage.",
        "",
        "",
        "**● Other**",
        "Adjusts the appearance of Rosaria.",
        "Fixes an issue whereby some characters who have not hit a target with an attack can jump while returning to a standby pose and thus perform a Plunging Attack.",
        "*Additional Note: We are paying close attention to the possible impact of other operations that can produce the same effect. If we have plans to change them in the future, we will announce that as soon as possible.",
      ])
      .setFooter("Page 11/11")
      .setTimestamp()
      .setColor("RANDOM");

    createPagination(message, [
      firstEmbed,
      secondEmbed,
      thirdEmbed,
      fourthEmbed,
      fifthEmbed,
      sixthEmbed,
      seventhEmbed,
      eighthEmbed,
      ninethEmbed,
      tenthEmbed,
      eleventhEmbed,
    ]);
  },
});
