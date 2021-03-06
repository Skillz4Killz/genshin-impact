import { Embed } from "../../utils/Embed.ts";
import { createSubcommand } from "../../utils/helpers.ts";
import { createPagination } from "../../utils/pagination.ts";

createSubcommand("patchnotes", {
  name: "1.2",
  aliases: ["1-2"],
  arguments: [
    { name: "page", defaultValue: 1 },
  ],
  guildOnly: true,
  execute: async function (message) {
    const firstEmbed = new Embed()
      .setTitle("Update Notes Version 1.2")
      .setDescription([
        "**Release Date:** 23. December 2020",
        "",
        "**Download Size:**",
        "PC: NA",
        "Smartphone: NA",
        "Playstation: NA",
        "Switch: NA",
        "",
        "**Dear Travelers,**\n\nThe content update for Version 1.2 'The Chalk Prince and the Dragon' is as follows.",
      ])
      .setThumbnail(
        "https://progameguides.com/wp-content/uploads/2020/12/Albedo.jpg",
      )
      .setFooter("Page 1/22")
      .setTimestamp()
      .setColor("RANDOM");

    const secondEmbed = new Embed()
      .setTitle("Update Notes Version 1.2")
      .setDescription([
        "**〓Compensation〓**",
        "1. Primogems ×300\n*(60 Primogems for every hour the servers are down)*",
        "",
        "2. Primogems ×300\nfor fixes to some character abilities and talents that would sometimes not work correctly in certain circumstances. *(For more details, please refer to the compensation mail itself.)*",
        "",
        "",
        "**〓Eligibility〓**",
        "Compensation for the update will be given out at 2020-12-23 06:00:00 to all Travelers who have reached Adventure Rank 5 or above. The collection period lasts until the end of Version 1.2.",
        "",
        "Compensation for issue fixes will be given out at 2020-12-23 06:00:00 to all Travelers who have reached Adventure Rank 5 or above. Please access this in-game mail before 2020-12-26 11:00:00.",
        "",
        "Our developers will distribute compensation to Travelers via in-game mail within 5 hours after the update maintenance is finished. Please go online to receive your mail before 2020/12/26 11:00. The mail will expire after 30 days, so don't forget to claim the attached compensation in time.",
        "*All times above based on UTC+8*",
      ])
      .setFooter("Page 2/22")
      .setTimestamp()
      .setColor("RANDOM");

    const thirdEmbed = new Embed()
      .setTitle("Update Notes Version 1.2")
      .setDescription([
        "**〓Update Details〓**",
        "*(All times below based on server time)*",
        "",
        "**I. New Area**",
        "**New Area - Dragonspine**",
        "◇ New Area - Dragonspine: Travelers will be able to put their adventuring skills to the test in the Subzero Climate of the all-new Dragonspine area. Here, Travelers will discover a whole new exploration experience, filled with various puzzles as well as new quests and mechanisms awaiting at every turn.",
        "",
        "◇ New Mechanics - Subzero Climate: Characters in Subzero Climate will continuously accumulate Sheer Cold. When Sheer Cold reaches its limit, they will start losing HP. Bonfires, torches, and other sources of heat will diminish Sheer Cold. Certain conditions like Snowstorms and actions like swimming will accelerate Sheer Cold's accumulation.",
        "",
        "",
        "**New Feature of Dragonspine: Frostbearing Tree**",
        "",
        "◇ The ancient tree that should have slumbered forever under the ice and snow has sprouted scarlet sprouts anew. Offer the Crimson Agates scattered all over Dragonspine to this tree, and you may obtain just rewards in return...",
        "",
        "◆ While exploring Dragonspine, Travelers will sometimes stumble upon crystalline Crimson Agate, which can be offered to the Frostbearing Tree. Doing so will level up the Frostbearing Tree, granting Travelers various rewards that include Acquaint Fate, Intertwined Fate, a wind glider, Mora, Weapon EXP Materials, Character EXP Materials, Talent Level-Up Materials, and Gadget diagrams. As the Frostbearing Tree grows, so too will its desire for power. With its system of roots that spread out throughout Dragonspine, it will periodically discover new sources of Crimson Agate.",
        "Heed its desire and collect Crimson Agate throughout the mountain!",
        "",
        "",
        "**New Domain of Dragonspine - Peak in Vindagnyr**",
        "",
        "◇ This city entombed in snow once had a proud, romantic name to call its own, just as the mountain itself was once lush and verdant in the ancient past. But after the nail that froze the skies over descended upon this mountain, the priests who ascended the altar to face the heavens can no longer hear its voice, nor will they ever return again.",
        "",
        "◆ Challenge the Domain to receive artifacts from the Blizzard Strayer, Heart of Depth, and other sets.",
      ])
      .setFooter("Page 3/22")
      .setTimestamp()
      .setColor("RANDOM");

    const fourthEmbed = new Embed()
      .setTitle("Update Notes Version 1.2")
      .setDescription([
        "**II. New Characters**",
        "**5-Star Character 'Kreideprinz' Albedo (Geo)**",
        "◇ Vision: Geo",
        "◇ Weapon: Sword",
        "◇ A genius known as the Kreideprinz, he is the Chief Alchemist and Captain of the Investigation Team of the Knights of Favonius.",
        "",
        "◆ Elemental Skill 'Abiogenesis: Solar Isotoma' - Albedo creates a Solar Isotoma using the power of alchemy. When an enemy takes DMG within its range, a Transient Blossom is generated, dealing additional Geo DMG. The center of the Solar Isotoma can also provide a crystallized platform to elevate characters.",
        "Elemental Burst 'Rite of Progeniture: Tectonic Tide' - Deals AoE Geo DMG in a wide area, and also generates Fatal Blossoms in the Solar Isotoma zone, causing additional Geo DMG.",
        "The event wish 'Secretum Secretorum' will be available from after the Version 1.2 update until 2021-01-12 15:59:59. During this time, the event-exclusive 5-Star character 'Kreideprinz' Albedo (Geo) will get a huge drop-rate boost!",
        "",
        "",
        "**5-Star Character 'Plenilune Gaze' Ganyu (Cryo)**",
        "◇ Vision: Cryo",
        "◇ Weapon: Bow",
        "◇ The secretary at Yuehai Pavilion. The blood of the qilin, an illuminated beast, flows within her veins.",
        "",
        "◆ Elemental Skill 'Trail of the Qilin' - Ganyu conjures an Ice Lotus that taunts enemies, drawing their attacks and dealing AoE Cryo DMG when it disappears.",
        "Elemental Burst 'Celestial Shower' - Rains down shards of ice over a large area, dealing Cryo DMG.",
        "",
        "*The character 'Plenilune Gaze' Ganyu (Cryo) will appear in a subsequent event wish.*",
      ])
      .setFooter("Page 4/22")
      .setTimestamp()
      .setColor("RANDOM");

    const fifthEmbed = new Embed()
      .setTitle("Update Notes Version 1.2")
      .setDescription([
        "**III. New Equipment**",
        "▌New Weapons",
        "**Summit Shaper (5-Star Sword)**",
        "◇ A symbol of a legendary pact, this sharp blade once cut off the peak of a mountain.",
        "",
        "◆ Increases wielder's shield strength (when the wielder is on the field, any currently active shield absorbs an additional amount of DMG). On hit, gives an ATK boost (max 5 stacks). When under the protection of a shield, the ATK boost effect increases by 220%.",
        "",
        "◆ The event wish 'Epitome Invocation' will be available from after the Version 1.2 update to 2021-01-12 15:59:59. During this time, the event-exclusive 5-star weapon Summit Shaper (Sword) will get a huge drop-rate boost!",
        "",
        "",
        "**Festering Desire (4-Star Sword)**",
        "◇ A creepy straight sword that almost seems to yearn for life. It drips with a shriveling venom that could even corrupt a mighty dragon.",
        "",
        "◆ Complete the Story Quest 'Princeps Cretaceus Chapter: Act I' and the event quest 'Festering Desire' to receive the exclusive sword, Festering Desire. During the event, the character that equips this sword will receive some special buffs while exploring the Dragonspine area.",
        "",
        "",
        "**Snow-Tombed Starsilver (4-Star Claymore)**",
        "◇ An ancient greatsword that was stored between frescoes. Forged from Starsilver, it has the power to cleave through ice and snow.",
        "",
        "◆ Hitting an opponent with Normal and Charged Attacks has a chance of forming and dropping an Everfrost Icicle above them, dealing AoE ATK DMG. Opponents affected by Cryo are dealt further ATK DMG. Can only occur once in a specified period.",
        "",
        "◆ When exploring in Dragonspine, fulfill certain criteria to obtain the weapon Snow-Tombed Starsilver and unlock its forging method.",
      ])
      .setFooter("Page 5/22")
      .setTimestamp()
      .setColor("RANDOM");

    const sixthEmbed = new Embed()
      .setTitle("Update Notes Version 1.2")
      .setDescription([
        "**Dragonspine Spear (4-Star Polearm)**",
        "◇ A spear created from the fang of a dragon. It is oddly warm to the touch.",
        "",
        "◆ Hitting an opponent with Normal and Charged Attacks has a chance of forming and dropping an Everfrost Icicle above them, dealing AoE ATK DMG. Opponents affected by Cryo are dealt further ATK DMG. Can only occur once in a specified period.",
        "",
        "◆ Complete the World Quest 'The Festering Fang' to obtain the polearm Dragonspine Spear and unlock its forging method.",
        "",
        "",
        "**Frostbearer (4-Star Catalyst)**",
        "◇ A fruit that possesses a strange, frosty will. A faint sense of agony emanates from it.",
        "",
        "◇ Hitting an opponent with Normal and Charged Attacks has a chance of forming and dropping an Everfrost Icicle above them, dealing AoE ATK DMG. Opponents affected by Cryo are dealt further ATK DMG. Can only occur once in a specified period.",
        "",
        "◆ Once the Frostbearing Tree has reached Lv. 22, Travelers will be awarded a blueprint for forging Frostbearer.",
        "",
        "",
        "▌New Artifact Sets",
        "",
        "**Blizzard Strayer (4–5 Stars)**",
        "◇ 2-Piece Set: Receive a Cryo DMG Bonus.",
        "◇ 4-Piece Set: Increased CRIT Rate when attacking enemies affected by Cryo. If the enemy is Frozen, CRIT Rate is increased further.",
        "",
        "**Heart of Depth (4–5 Stars)**",
        "◇ 2-Piece Set: Receive a Hydro DMG Bonus",
        "◇ 4-Piece Set: After using Elemental Skill, increases Normal Attack and Charged Attack DMG for a period of time.",
        "",
        "◆ Challenge the brand new Domain of Blessing 'Peak of Vindagnyr' in Dragonspine and obtain artifacts in the aforementioned sets.",
      ])
      .setFooter("Page 6/22")
      .setTimestamp()
      .setColor("RANDOM");

    const seventhEmbed = new Embed()
      .setTitle("Update Notes Version 1.2")
      .setDescription([
        "IV. New Events (Version 1.2 Events No Longer Require Original Resin)",
        "**Version Main Event — 'The Chalk Prince and the Dragon'**",
        "◇ If not for Sucrose, no one would have known that Albedo is hiding a great secret — one that involves a mysterious unknown sword and a mountain entombed in ice for millennia... Onwards and upwards, Traveler! In spite of the bitter cold...",
        "",
        "◆ Event Duration: After the Version 1.2 update – 2021-01-05 03:59:59",
        "",
        "◆ Event Rules: Original Resin is not required to enter this event. Complete the Archon Quest Prologue: Act II 'For a Tomorrow Without Tears' and Albedo's Story Quest 'Princeps Cretaceus Chapter' to access the event 'The Chalk Prince and the Dragon.'",
        "During the event, Travelers can obtain the free sword 'Festering Desire,' which has magical power. Complete various challenges in Dragonspine to obtain Essences, which can be redeemed for items in the Event Shop.\nDuring the event, Travelers can unlock Princeps Cretaceus Chapter without spending a Story Key. After the event ends, the criteria to unlock the Story Quest 'Princeps Cretaceus Chapter' will be restored to the following: Reach Adventure Rank 40 or above, complete Prologue: Act II 'For a Tomorrow Without Tears,' and spend 1 Story Key.",
        "",
        "",
        "◆ More events are coming soon. Stay tuned!",
      ])
      .setFooter("Page 7/22")
      .setTimestamp()
      .setColor("RANDOM");

    const eighthEmbed = new Embed()
      .setTitle("Update Notes Version 1.2")
      .setDescription([
        "V. New Systems",
        "**'Stellar Reunion' Returnee Event: Return to Teyvat and obtain the sword Prototype Rancour!**",
        "After the Version 1.2 update, Travelers who meet the Returnee Eligibility conditions can activate the 'Stellar Reunion' returnee event for the opportunity to get the 4-star weapon Prototype Rancour (Sword), Primogems, Fragile Resin, and other rewards.",
        "",
        "◆Event Duration",
        "For 7 days after the 'Stellar Reunion' event is activated.",
        "",
        "**◆Returnee Eligibility**",
        "Must meet the following conditions:",
        "- Adventure Rank 22 or above. ",
        "- At least 7 days since last game login.",
        "- Over 45 days since last activating the 'Stellar Reunion' event.",
        "",
        "**◆Event Details**",
        "The 'Stellar Reunion' event comprises four parts:",
        "● 'Reunion Rewards': During the event, returning Travelers can claim Primogems, Fragile Resin, and other rewards. Rewards can only be claimed once.",
        "",
        "● 'Passage of Time' Login Rewards: During the event, log in daily to claim Primogems, Fragile Resin, Hero's Wit, Mystic Enhancement Ore, and other rewards.",
        "",
        "● 'Homeward Path' Quest Rewards: During the event, complete designated quests each day to claim rewards and accumulate points. When your accumulated points reach a designated value, you can claim the bonus reward Prototype Rancour (Sword). This bonus reward can only be claimed once! The quest list refreshes every day at 4:00 AM. Remember to claim your rewards in time!",
        "",
        "● 'Reunion Blessing' Double Drops: Returning Travelers receive three extra opportunities each day to gain double drops. These can be used to obtain double the rewards from Petrified Trees in Domains, Blossoms of Wealth, and Blossoms of Revelation using Original Resin. The amount of double drop opportunities refreshes every day at 4:00 AM. Remember to use the opportunities in time!",
        "",
        "● After the event ends, event progress will be cleared and any unclaimed rewards will be lost. Remember to claim your rewards in time!",
        "",
        "※ The refresh times above are based on the time of the server you play on.",
      ])
      .setFooter("Page 8/22")
      .setTimestamp()
      .setColor("RANDOM");

    const ninethEmbed = new Embed()
      .setTitle("Update Notes Version 1.2")
      .setDescription([
        "VI. New Quests",
        "**1. New Story Quests**",
        "Princeps Cretaceus Chapter: Act I",
        "The Chief Alchemist of the Knights of Favonius devotes his energies to exploring the secrets of the world and the life within it.",
        "",
        "The limitless horizons of knowledge should not be limited to Teyvat. But even the best researchers in the seven nations struggle to collect samples of life from 'beyond' for their reference.",
        "—— Perhaps the one who has come from far beyond the skies is the ideal subject for his observation?",
        "",
        "◆ Albedo's Story Quest 'Princeps Cretaceus Chapter: Act I' will be available to Travelers from 2021-01-12 04:00:00 onwards.",
        "",
        "◆ Complete this quest chain to obtain Primogems, Weapon Enhancement Materials, Character EXP Materials, and other rewards!",
        "",
        "◆ Ganyu's Story Quest 'Sinae Unicornis Chapter: Act I' will also become available at a later date.",
        "",
        "",
        "**2. New World Quests**",
        "◆ New World Quests in Dragonspine: 'In the Mountains,' 'The Festering Fang,' 'The Great Mountain Survey,' 'A Land Entombed,' 'Lost in the Snow,' and 'Ah, Fresh Meat!'",
        "*Complete 'Ah, Fresh Meat!' to obtain the recipe for Goulash. Eating this hearty dish slightly reduces the rate of Sheer Cold's accumulation for all party members for a period of time.*",
        "",
        "◆ New World Quest: 'Return of the Jade Chamber?'",
        "*The Story Quest 'Fishing for Jade' will also become available at a later date.*",
        "◆ Complete these quests to obtain Mora, Character EXP Materials, and other rewards!",
        "",
        "",
        "**3. New Commission Quests**",
        "◆ New Commission Quests in Dragonspine: 'Floral Fresh,' 'Fresh Flora,' 'Emergency Supplies,' 'Only Half-Frozen,' and 'Eat It While It's Hot.'",
        "",
        "◆ Complete these quests to obtain Primogems, Weapon Enhancement Materials, and other rewards!",
      ])
      .setFooter("Page 9/22")
      .setTimestamp()
      .setColor("RANDOM");

    const tenthEmbed = new Embed()
      .setTitle("Update Notes Version 1.2")
      .setDescription([
        "VII. Other New Content",
        "• Gameplay",
        "**1. New Monsters:**",
        "◆ Mountain-Dwelling Hilichurls: Cryo Samachurl, Ice Shield Hilichurl Guard, Cryo Hilichurl Grenadier, Ice Shieldwall Mitachurl",
        "◆ Frostarm Lawachurl",
        "◆ Fatui: Cryo Cicin Mage, Cryo Cicin",
        "◆ Ruin Grader",
        "",
        "**2. New Animals:** Snowboar, Cryo Crystalfly, Snow Fox",
        "",
        "**3. New Recipes:**",
        "◆ Wanmin Restaurant - Universal Peace",
        "◆ Qingce Village Mill - Jueyun Guoba",
        "◆ Obtained in the Story Quest 'Princeps Cretaceus Chapter: Act I' - Sunshine Sprat",
        "◆ Obtained in the World Quest 'Ah, Fresh Meat!' - Goulash",
        "",
        "**4. New Resources & Materials**",
        "◆ Starsilver - Can be forged into Fine Enhancement Ore",
        "◆ Chilled Meat - Can be processed into Raw Meat",
        "",
        "**5. New Achievements:** 'Challenger: Series III' and 'Visitors on the Icy Mountain'",
        "",
        "**6. New Namecard Styles:**",
        "◆ Achievement: Challenger III - Reward for completing all achievements under 'Challenger: Series III'",
        "◆ Achievement: Snowy Summit - Reward for completing all achievements under 'Visitors on the Icy Mountain'",
        "◆ Ganyu: Qilin - Reward for reaching Friendship Lv. 22 with Ganyu",
        "◆ Albedo: Sun Blossom - Reward for reaching Friendship Lv. 22 with Albedo",
        "◆ Travel Notes: Chalk - Reward obtained via the BP system",
        "◆ Frostbearing: Ancient Tree - Reward for reaching Frostbearing Tree Offering Lv 9",
        "◆ Celebration: Hypostasis - Reward obtained via the Hypostatic Symphony event",
      ])
      .setFooter("Page 10/22")
      .setTimestamp()
      .setColor("RANDOM");

    const eleventhEmbed = new Embed()
      .setTitle("Update Notes Version 1.2")
      .setDescription([
        "**7. Spiral Abyss:**",
        "◆ Floor 9: Characters on the field will continuously accumulate Sheer Cold and will continually lose HP after Sheer Cold reaches its limit. There will also be a Ruin Brazier on the field. While the Ruin Brazier is activated, getting close to it will reduce Sheer Cold. Enemies will attack the Ruin Brazier on the field to stop it. After having stopped for a period of time, the Ruin Brazier will restart automatically.",
        "",
        "◆ Floor 22: Characters on the field will continuously accumulate Sheer Cold and will continually lose HP after",
        "Sheer Cold reaches its limit. There will be a Warming Seelie on the field that will help reduce Sheer Cold for the surrounding characters.",
        "",
        "◆ Floor 11: Your character will be periodically be inflicted with Engulfing Storm, which continuously drains your Elemental Energy until the inflicted Electro is removed. All party members deal increased Cryo DMG.",
        "",
        "◆ Floor 12: All party members deal increased Geo DMG.",
        "",
        "",
        "Blessing of the Abyssal Moon is updated every 2 weeks:",
        "",
        "◆ Phase I: When a character obtains a Cryo Elemental Shard created from a Crystallize Reaction between Geo and Cryo, a shockwave will be released, dealing DMG to the surrounding opponents.",
        "",
        "◆ When a character obtains a Cryo Elemental Shard created from a Crystallize Reaction between Geo and Cryo, Elemental Skill CD is decreased by 1s.",
        "",
        "◆ Phase II: When a character obtains a Cryo Elemental Shard created from a Crystallize Reaction between Geo and Cryo, ATK increases by 5%, ATK SPD increases by 5%, and Movement SPD increases by 4%. This effect lasts for 20s and has a maximum of 5 stacks.",
        "",
        "◆ Phase III: When a character obtains a Cryo Elemental Shard created from a Crystallize Reaction between Geo and Cryo, CRIT Rate increases by 8%. This effect lasts for 20s and has a maximum of 5 stacks.",
      ])
      .setFooter("Page 11/22")
      .setTimestamp()
      .setColor("RANDOM");

    const twelfthEmbed = new Embed()
      .setTitle("Update Notes Version 1.2")
      .setDescription([
        "• System",
        "1. Adds private chats with friends.",
        "2. Adds function to edit friends' names.",
        "3. New Gadget: Kamera - When equipped, Travelers can take snapshots. Obtained via the World Quest 'Snapshots.'",
        "4. Adds camera height adjustment function and character expressions to the photo-taking system.",
        "5. Adds Travel Log to the Archive system: Stories of all the completed Archon Quests and Story Quests can be reviewed in the Travel Log.",
        "6. Adds character portraits to the Character Archive system.",
        "7. Adds trackable map pins function to the Map.",
        "8. Adds the option to repeat a Domain challenge from inside the Domain.",
        "9. New character ascension reward: Travelers will be rewarded with 1 Acquaint Fate each time their character completes an ascension at Lv. 20, 50, or 70.",
        "22. Adds element tutorial stage 'Elemental Trial' to the domain 'Temple of the Lion.' After completing the trial, Travelers can claim Weapon Enhancement Materials and Character EXP Materials.",
        "11. Adds the new functions BP Animation Skip, Quest Story Auto-Play, and NPC Dialogue Auto-Play.",
        "12. Adds new controller customization option in the Paimon Menu > Settings > Controls > Vibration.",
        "13. Adds new weapon details display to the weapon event wish on the Wish screen. Travelers can view details about the 4-star and 5-star weapons with drop-rate boosts.",
        "14. Adds a new BP Weekly Mission: Complete the Golden House challenge.",
        "",
        "",
        "VIII. Adjustments & Optimizations",
        "• System",
        "1. Optimizes the Paimon's Bargains page in the Shop: 'Purchase with Primogems' has been moved to the last tab.",
        "2. Optimizes the Domain and Ley Line Outcrop rewards system: Dropped items are directly added to the Inventory.",
        "3. Optimizes Co-Op Mode:",
        "◆ The host can disband the Co-Op team.",
        "◆ In Co-Op Domains, guests and the host can both quit the Co-Op anytime without affecting other Travelers in the game.",
      ])
      .setFooter("Page 12/22")
      .setTimestamp()
      .setColor("RANDOM");

    const thirteenthEmbed = new Embed()
      .setTitle("Update Notes Version 1.2")
      .setDescription([
        "• Other",
        "1. Adjusted the order of voice-over entries in character profiles. (Only the displayed order was affected, not the unlock status.)",
        "2. Standardizes the description of infusion effects for some characters or mechanics. (Actual effects remain unchanged.)",
        "",
        "◆ Keqing's Ascension Phase 1 Passive Talent 'Thundering Penance'",
        "Original Description:",
        "Within 5s of recasting Stellar Restoration while a Lightning Stiletto is present, Keqing's Normal, Charged and Plunging Attacks are converted to Electro DMG.",
        "",
        "New Description:",
        "After recasting Stellar Restoration while a Lightning Stiletto is present, Keqing's weapon gains an Electro Infusion for 5s.",
        "",
        "◆ Diluc's Elemental Burst 'Dawn'",
        "Original Description:",
        "Releases intense flames to knock nearby opponents back, dealing Pyro DMG. The flames then converge into the weapon, summoning a Phoenix that flies forward and deals massive Pyro DMG to all opponents in its path. The Phoenix explodes upon reaching its destination, causing a large amount of AoE Pyro DMG.\nThe searing flames that run down his blade cause Diluc's Normal, Charged and Plunging Attacks to deal Pyro DMG.",
        "",
        "New Description:",
        "Releases intense flames to knock nearby opponents back, dealing Pyro DMG. The flames then converge into the weapon, summoning a Phoenix that flies forward and deals massive Pyro DMG to all opponents in its path. The Phoenix explodes upon reaching its destination, causing a large amount of AoE Pyro DMG.\nThe searing flames that run down his blade cause it to be infused with Pyro.",
      ])
      .setFooter("Page 13/22")
      .setTimestamp()
      .setColor("RANDOM");

    const fourteenthEmbed = new Embed()
      .setTitle("Update Notes Version 1.2")
      .setDescription([
        "◆ Chongyun's Elemental Skill 'Spirit Blade: Chonghua's Layered Frost.'",
        "Original Description:",
        "Chongyun strikes the ground with his greatsword, causing a Cryo explosion in a circular AoE in front of him that deals Cryo DMG.",
        "After a short delay, the cold air created by the Cryo explosion will coalesce into a Chonghua Frost Field, within which all DMG done through Normal, Charged and Plunging Attacks by Sword, Greatsword and Polearm wielding",
        "Characters will be converted to Cryo DMG.",
        "",
        "New Description:",
        "Chongyun strikes the ground with his greatsword, causing a Cryo explosion in a circular AoE in front of him that deals Cryo DMG.",
        "After a short delay, the cold air created by the Cryo explosion will coalesce into a Chonghua Frost Field, within which all Sword, Claymore and Polearm-wielding characters' weapons will be infused with Cryo.",
        "",
        "◆ Bennett's Lv. 6 Constellation 'Fire Ventures with Me'",
        "Original Description:",
        "Sword, Claymore, or Polearm-wielding characters inside Fantastic Voyage's radius gain a 15% Pyro DMG Bonus. Normal, Charged, and Plunging Attacks now do Pyro DMG.",
        "",
        "New Description:",
        "Sword, Claymore, or Polearm-wielding characters inside Fantastic Voyage's radius gain a 15% Pyro DMG Bonus and their weapons are infused with Pyro.",
        "◆ Tartaglia's Elemental Skill 'Foul Legacy: Raging Tide'",
        "Original Description:",
        "...In this Stance, Tartaglia's Normal and Charged Attacks change as follows:...",
        "",
        "New Description:",
        "...Tartaglia's Normal and Charged Attacks are converted to Hydro DMG that cannot be overridden by any other elemental infusion and change as follows:...",
      ])
      .setFooter("Page 14/22")
      .setTimestamp()
      .setColor("RANDOM");

    const fifteenthEmbed = new Embed()
      .setTitle("Update Notes Version 1.2")
      .setDescription([
        "3. Updates the description of Ningguang's Passive Talent 'Trove of Marvelous Treasures' by adding Starsilver to the list of displayed ore veins. The new description reads: 'Displays the location of nearby ore veins (Iron Ore, White Iron Ore, Crystal Ore, Magical Crystal Ore, and Starsilver) on the mini-map.'",
        "",
        "4. Adjusts the Exploration Progress for 'Galesong Hill,' 'Windwail Highland,' 'Bishui Plains,' and 'Lisha.' Travelers that already had a certain amount of Exploration Progress at these locations will obtain a slight increase in their Exploration Progress. Those who have already reached 220% in Exploration Progress will not be affected.",
        "",
        "5. Adjusts the daily rotation criteria of Domain of Forgery and Domain of Mastery: From Monday to Saturday, rewards will not change, and dropped items will rotate among the three types each day. On Sundays, the drop type will no longer be random. Instead, all three types of drops will now be available for Travelers to select for their challenges. (For example, in the Domain of Mastery 'Forsaken Rift,' Monday and Thursday drops will be Talent Level-Up Materials of the Freedom type. On Tuesdays and Fridays, Resistance-type materials will be dropped. On Wednesdays and Saturdays, Ballad-type materials will be dropped. On Sundays, Travelers can select which of the three types of materials will be dropped during the challenges.)",
        "",
        "6. Standardizes some weapon effect descriptions (actual effect remains unchanged; Refinement Lv. 1 description shown as example):",
        "◆ Slingshot Weapon Effect - Slingshot",
        "Old Description:",
        "If a Normal Attack or Aimed Shot hits a target within 0.3s of being fired, increases DMG by 36%. Otherwise, decreases DMG by 22%.",
        "",
        "New Description:",
        "If a Normal or Charged Attack hits a target within 0.3s of being fired, increases DMG by 36%. Otherwise, decreases DMG by 22%.",
        "",
        "◆ Messenger Weapon Effect - Archer's Message",
        "Old Description:",
        "Aimed Shot that hits on weak points deals an additional 220% ATK DMG as CRIT DMG. Can only occur once every 22s.",
        "",
        "New Description:",
        "Charged Attack hits on weak points deal an additional 220% ATK DMG as CRIT DMG. Can only occur once every 22s.",
      ])
      .setFooter("Page 15/22")
      .setTimestamp()
      .setColor("RANDOM");

    const sixteenthEmbed = new Embed()
      .setTitle("Update Notes Version 1.2")
      .setDescription([
        "◆ Rust Weapon Effect - Rapid Firing",
        "Old Description:",
        "Increases Normal Attack DMG by 40%, but decreases Aimed Shot DMG by 22%.",
        "",
        "New Description:",
        "Increases Normal Attack DMG by 40% but decreases Charged Attack DMG by 22%.",
        "",
        "◆ Prototype Crescent Weapon Effect - Unreturning",
        "Old Description:",
        "Aimed Shot hits on weak points increase Movement SPD by 22% and ATK by 36% for 22s.",
        "",
        "New Description:",
        "Charged Attack hits on weak points increase Movement SPD by 22% and ATK by 36% for 22s.",
        "",
        "◆ Compound Bow Weapon Effect - Infusion Arrow",
        "Old Description:",
        "Normal Attack and Aimed Shot hits increase ATK by 4% and Normal ATK SPD by 1.2% for 6s. Max 4 stacks. Can only occur once every 0.3s.",
        "",
        "New Description:",
        "Normal Attack and Charged Attack hits increase ATK by 4% and Normal ATK SPD by 1.2% for 6s. Max 4 stacks. Can only occur once every 0.3s.",
        "",
        "◆ Amos' Bow Weapon Effect - Strong-Willed",
        "Old Description:",
        "Increases Normal Attack and Aimed Shot DMG by 12%. Arrow DMG increases by 8% every 0.1s for up to 5 times.",
        "",
        "New Description:",
        "Increases Normal and Charged Attack DMG by 12%. Normal and Charged Attack DMG increases by 8% every 0.1s for up to 5 times.",
      ])
      .setFooter("Page 16/22")
      .setTimestamp()
      .setColor("RANDOM");

    const seventeenthEmbed = new Embed()
      .setTitle("Update Notes Version 1.2")
      .setDescription([
        "◆ Prototype Amber Weapon Effect - Gilding",
        "Old Description:",
        "Using an Elemental Burst regenerates 4 Energy every 2s for 6s. Additionally, all party members will regenerate 4% HP every 2s for this duration.",
        "",
        "New Description:",
        "Using an Elemental Burst regenerates 4 Energy every 2s for 6s. All party members will regenerate 4% HP every 2s for this duration.",
        "",
        "7. Standardizes the Set Bonus descriptions of some Artifacts (actual effect remains unchanged):",
        "◆ Scholar 4-Piece Set Bonus",
        "Old Description:",
        "Gaining Energy gives 3 Energy to all party members who have a bow or a catalyst equipped. Can only occur once every 3s.",
        "",
        "New Description:",
        "Gaining Elemental Particles or Orbs gives 3 Energy to all party members who have a bow or a catalyst equipped. Can only occur once every 3s.",
        "",
        "",
        "**〓Bug Fixes〓**",
        "• Domains",
        "1. Fixes an issue with the domain 'Confront Stormterror' whereby Stormterror cannot be subjected to elemental reactions.",
        "2. Fixes an issue with the Domain 'Confront Stormterror' whereby Dvalin's neck may not display properly when his weak spot is exposed.",
        "3. Fixes errors in the Spiral Abyss description regarding the Blessing of the Abyssal Moon refresh time. The revised description reads: 'With the start of a new Lunar Phase on the first and sixteenth day of each month, the Abyssal Moon Spire's rewards will reset, which may also cause a new period of Blessing of the Abyssal Moon to begin.' No change has been made to the function itself.",
        "4. Fixes an issue whereby the Childe boss may be unable to move due to Geo constructs.",
      ])
      .setFooter("Page 17/22")
      .setTimestamp()
      .setColor("RANDOM");

    const eigthteenthEmbed = new Embed()
      .setTitle("Update Notes Version 1.2")
      .setDescription([
        "• Quests",
        "1. Fixes an issue with the World Quest 'Necessary Procedures' whereby if the time changes at the point of submitting quest items, quest progress may not advance as expected.",
        "2. Fixes an issue with the World Quest 'Words Worth Their Weight in Mora' whereby the required quest item may be missing from the Inventory.",
        "3. Fixes an issue with the commission 'For Old Time's Sake' whereby defeating the target monster from a certain distance causes issues with quest progress.",
        "",
        "• Monsters",
        "1. Fixes an issue whereby if the game disconnects and reconnects while awakening a Ruin Hunter, it may become invulnerable.",
        "• Co-Op",
        "1. Fixes an issue in Co-Op Mode whereby the achievement '...Not indicative of final product' may not be able to be completed.",
        "2. Fixes an issue in Co-Op Mode whereby if removed from the team while on the Wish Details screen, you will be unable to do anything after returning to your own world.",
        "",
        "• Characters",
        "1. Adjusts the size of the portrait of Diona displayed when this character is obtained in the Wish system.",
        "2. Fixes an issue whereby when your character falls into an abyss or drowns and your party is revived, Barbara's Lv. 6 Constellation 'Dedicating Everything to You' incorrectly enters cooldown.",
        "3. Fixes an issue affecting Zhongli and Xiangling whereby their Plunging Attacks had missing voice-over.",
        "4. Fixes an issue whereby after activating Amber's Lv. 4 Constellation 'It's Not Just Any Doll...,' it is not possible to detonate two Baron Bunnies simultaneously by means of the two arrows shot due to Amber's Lv. 1 Constellation 'One Arrow to Rule Them All.'",
        "5. Fixes an issue whereby when Amber's Passive Talent 'Precise Shot' is triggered again during the effect's duration, the effect duration will not refresh.",
        "6. Fixes an issue with Kaeya's Elemental Burst 'Glacial Waltz' whereby the icicles summoned are unable to trigger Elemental Reactions with bodies of water and grass terrain.",
        "7. Fixes an issue with Diona whereby if she is attacked by an enemy after her Passive Talent 'Drunkards' Farce' has been triggered, reconnecting to the server will cause errors with the duration of this Passive Talent's effect.",
        "8. Fixes an issue with the shield generated by Diona's Elemental Skill 'Icy Paws' whereby when terminating the game client process while the shield is active, the effect duration of the Passive Talent 'Cat's Tail Secret Menu' may not be as expected.",
      ])
      .setFooter("Page 18/22")
      .setTimestamp()
      .setColor("RANDOM");

    const nineteenthEmbed = new Embed()
      .setTitle("Update Notes Version 1.2")
      .setDescription([
        "9. Fixes an issue with Diona whereby when using “Icy Paws” to create a shield for herself, if the connection cuts out, the shield will disappear after the game reconnects to the server.",
        "22. Fixes an issue with Lisa whereby Low Plunge Attack DMG is not as expected.",
        "11. Fixes an issue with Klee whereby if a Charged Attack is used at the same time as the Passive Talent 'Pounding Surprise'is triggered, Explosive Sparks will unexpectedly disappear and the Talent's effect will not function properly.",
        "12. Fixes the description of Noelle's Elemental Burst 'Sweeping Time.' The revised description adds the detail that the Geo DMG dealt 'cannot be overridden by any other elemental infusion,' which was missing in previous versions. No change has been made to the function itself.",
        "13. Fixes an issue affecting Beidou whereby after activating the Lv.2 Constellation 'Upon the Turbulent Sea, the Thunder Arises,' when casting the Elemental Burst 'Stormbreaker,' lightning will target enemy weapons and animals.",
        "14. Fixes an issue with Beidou whereby after casting her Elemental Burst 'Stormbreaker,' the lightning discharge does not affect the boss Stormterror.",
        "15. Fixes an issue with the shield generated by Beidou's Lv. 1 Constellation 'Sea Beast's Scourge' whereby the character does not receive the expected interruption resistance effect while the shield is active.",
        "16. Fixes an issue with Mona whereby using her Talent 'Illusory Torrent' in the Spiral Abyss incorrectly triggers the Blessing of the Abyssal Moon that is triggered by sprinting.",
        "17. Fixes an issue with Mona whereby she is unable to pass through some enemies when using the Combat Talent 'Illusory Torrent.'",
        "18. Fixes an issue with Ningguang whereby when her Passive Talent 'Backup Plan' is triggered, Charged Attacks do not consume Stamina after terminating the game client and logging back in to the game.",
        "19. Fixes an issue with Ningguang whereby after casting her Elemental Burst 'Starshatter,' Charged Attacks do not consume Stamina for a short period.",
        "20. Fixes an issue whereby when characters are frozen while moving quickly, the movement distance will not be as expected.",
        "21. Fixes an issue whereby when characters pick up Shards dropped by Geovishap Hatchlings, the resulting shield does not produce the expected interruption resistance effect.",
        "22. Fixes an issue affecting Fischl whereby if Fischl completes a chamber in the Spiral Abyss while in the form of Oz, Fischl's character model will appear incorrectly in the next chamber.",
        "23. Fixes an issue with Noelle whereby if the Internet connection is weak, switching character after casting her Elemental Skill incorrectly triggers Noelle's Level 4 Constellation 'To Be Cleaned.'",
      ])
      .setFooter("Page 19/22")
      .setTimestamp()
      .setColor("RANDOM");

    const twentythEmbed = new Embed()
      .setTitle("Update Notes Version 1.2")
      .setDescription([
        "• Weapons",
        "1. Fixes an issue whereby when a character is equipped with the Eye of Perception, the weapon effect 'Echo' will target animals when it is triggered.",
        "",
        "• Other",
        "1. Fixes an issue whereby when the Internet connection is weak, weapon effects, artifact set bonuses, and character Talent effects that should be triggered by defeating enemies fail to trigger.",
        "2. Fixes an issue with some iPad models whereby after updating to iOS 14.0.1 with the game previously installed, a white screen may appear for a long period when starting the game.",
        "3. Fixes an issue whereby some special effects do not correctly follow the entity they are attached to when disappearing.",
        "4. Fixes an issue whereby element icons may display incorrectly when Elemental Reactions are triggered.",
        "5. Fixes an issue whereby when multiple objectives exist for a single quest, the map does not display the navigation effects when tracking this quest.",
        "6. Fixes an issue whereby when weapon crafting prototypes appear as loot, the item model incorrectly displays as a 3-star item.",
        "7. Fixes issues with the environment model near the Cryo Regisvine, whereby the area cannot be accessed via one of the entrances above the regisvine.",
        "8. Fixes incorrect item descriptions for the ingredients Cream and Butter.",
        "9. Fixes an issue whereby 'Noodles with Mountain Delicacies' is missing from the Materials section of the Archive.",
        "22. Fixes an issue whereby Geo constructs may move NPCs from their positions.",
        "11. Fixes an issue on mobile devices whereby when Graphics > Graphics Quality is set to Lowest, the Golden House environment displays incorrectly.",
        "12. Fixes the issue of Smoldering Flames' Pyro DoT interrupting character actions.",
      ])
      .setFooter("Page 20/22")
      .setTimestamp()
      .setColor("RANDOM");

    const twentyonethEmbed = new Embed()
      .setTitle("Update Notes Version 1.2")
      .setDescription([
        "13. Fixes the description of the Elemental Resonance effect 'Protective Canopy.' The revised description adds the wording: 'Physical RES +15%.' No change has been made to the function itself.",
        "14. Fixes an issue whereby some characters' attacks will target Elemental Nodes.",
        "15. Fixes textual errors and display issues in some languages and optimizes the localization of text. 'Note:'",
        "Related in-game functions have not changed.' (Travelers can view the changes in different languages by going to the Paimon Menu > Settings > Language and changing the Game Language.)",
        "",
        "Text-related fixes and optimizations in English include:",
        "◆ Unifies all instances of the event name 'Baptism of Song' in the game.",
        "◆ Unifies descriptions relating to Lisa's Elemental Skill 'Violet Arc.' The effect referred to in places as 'Shocked status' is now consistently referred to as 'Conductive status.'",
        "◆ Corrects the description for one of the 'Elemental Reaction' loading screen tips. The original description read: 'Even the seemingly-inert Geo has its elemental reaction. When it comes into contact with Hydro, Pyro, Cryo, or Electro, Crystallize occurs, producing DMG-dealing elemental shards.' The revised description reads: 'Even the seemingly inert Geo has its elemental reaction. When it comes into contact with Hydro, Pyro, Cryo, or Electro, Crystallize occurs, producing DMG-absorbing elemental shards.'",
        "◆ Corrects the Source description for the in-game item Anemo Sigil. The original description read 'Mondstadt Expedition Reward.' The revised description reads 'Mondstadt Exploration Reward.'",
      ])
      .setFooter("Page 21/22")
      .setTimestamp()
      .setColor("RANDOM");

    const twentytwoEmbed = new Embed()
      .setTitle("Update Notes Version 1.2")
      .setDescription([
        "◆ Corrects the Source description for the in-game item Geo Sigil. The original description read 'Liyue Expedition Reward.' The revised description reads 'Liyue Exploration Reward.'",
        "◆ Corrects the Source description for the Character EXP Materials 'Wanderer's Advice' and 'Adventurer's Experience.' The original descriptions read 'Adventure and Expedition Reward.' The revised descriptions read 'Adventure and Exploration Reward.'",
        "◆ The name of Kaeya's Passive Talent 'Heart of the Abyss' is revised to 'Glacial Heart.'",
        "◆ For the weapon 'Thrilling Tales of Dragon Slayers,' the name of the weapon affix 'Legacy' is revised to 'Heritage.'",
        "◆ The name of Fischl's Passive Talent 'Lightning Smite' is revised to 'Undone Be Thy Sinful Hex.'",
        "◆ The name of the weapon 'Blackcliff Amulet' is revised to 'Blackcliff Agate'; the name of the weapon 'Prototype Aminus' is revised to 'Prototype Archaic'; the name of the weapon 'Prototype Grudge' is revised to 'Prototype Starglitter'; the name of the weapon 'Prototype Malice' is revised to 'Prototype Amber.'",
        "",
        "Voice-over-related fixes and optimizations made in English include:",
        "◆ Fixes an issue affecting several lines of Paimon's dialogue in the Liyue Archon Quest 'Custodian of Clouds' whereby the audio for multiple lines was spliced together.",
        "◆ Adds missing voice-over for Paimon's dialogue in Zhongli's Story Quest.",
        "◆ Adds missing voice-over for several lines of dialog in Jean's Story Quest.",
        "◆ Fixes issues with some of the Traveler's voice-over lines on the character profile screen.",
        "",
        "16. (Continuation from a related fix in 1.1) Adjusted the strength of the Overload DMG done by burning grass to targets affected by Electro. The DMG from this Elemental Reaction will be adjusted to 2 World Levels below the Traveler's current World Level. The lowest possible strength is World Level 0, and the highest possible strength is World Level 4.",
        "",
        "With this, the adjustment to environmental Elemental Reaction DMG as laid out in the 'World Level of Environmental Elemental Reaction Damage' notice on November 12 will be complete.",
      ])
      .setFooter("Page 22/22")
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
      twelfthEmbed,
      thirteenthEmbed,
      fourteenthEmbed,
      fifteenthEmbed,
      sixteenthEmbed,
      seventeenthEmbed,
      eigthteenthEmbed,
      nineteenthEmbed,
      twentythEmbed,
      twentyonethEmbed,
      twentytwoEmbed,
    ]);
  },
});
