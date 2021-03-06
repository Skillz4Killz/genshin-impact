import { Embed } from "../../utils/Embed.ts";
import { createSubcommand } from "../../utils/helpers.ts";
import { createPagination } from "../../utils/pagination.ts";

createSubcommand("patchnotes", {
  name: "1.1",
  aliases: ["1-1"],
  arguments: [
    { name: "page", defaultValue: 1 },
  ],
  guildOnly: true,
  execute: async function (message) {
    const firstEmbed = new Embed()
      .setTitle("Update Notes Version 1.1")
      .setDescription([
        "**Release Date:** 06. December 2020",
        "",
        "**Download Size:**",
        "PC: NA",
        "Smartphone: NA",
        "Playstation: NA",
        "Switch: NA",
        "",
        "As the new version update in November draws near, Travelers must certainly be growing curious as to what the new version may hold. （￣︶￣） So today, please allow me to introduce everyone to some of the new content you will see in this update — the City Reputation and Exploration Progress systems.",
      ])
      .setThumbnail(
        "https://uploadstatic-sea.mihoyo.com/contentweb/20201104/2020110421125963573.png",
      )
      .setFooter("Page 1/13")
      .setTimestamp()
      .setColor("RANDOM");

    const secondEmbed = new Embed()
      .setTitle("Update Notes Version 1.1")
      .setDescription([
        "**〓City Reputation System〓**",
        "In Version 1.1, we will unveil a brand-new system called City Reputation. By interacting with certain NPCs, you will be able to accept requests to complete and increase your Reputation. As your Reputation Level increases, you will unlock various Reputation Rewards!",
        "",
        "",
        "**▌Details**",
        "◆ Unlock Criteria ◆",
        "1) Reach Adventure Rank 25 or above to unlock the City Reputation system.",
        "2) Mondstadt Reputation: Complete the archon quest 'The Outlander Who Caught the Wind' Prologue: Act I.",
        "",
        "Liyue Reputation: Complete the archon quest 'Farewell, Archaic Lord' Chapter I: Act II.",
        "Reputation is divided into Mondstadt Reputation and Liyue Reputation.",
        "After unlocking Mondstadt Reputation, Travelers can view their Mondstadt Reputation by talking to the Knights of Favonius Coordinator, Hertha.",
        "After unlocking Liyue Reputation, Travelers can view their Liyue Reputation by talking to the Ministry of Civil Affairs Secretary, Ms. Yu.",
      ])
      .setFooter("Page 2/13")
      .setTimestamp()
      .setColor("RANDOM");

    const thirdEmbed = new Embed()
      .setTitle("Update Notes Version 1.1")
      .setDescription([
        "**▌How to Increase Reputation**",
        "1. Region Quests: Complete various quests in Mondstadt and Liyue to increase your Reputation in each city.",
        "2. World Exploration: Open chests, find Elemental Oculi, unlock Waypoints, and complete other exploration activities in the Liyue and Mondstadt regions to increase your Exploration Progress in each region.",
        "3. Bounties: Hunt down and defeat the bounty targets to increase your Reputation in that city. The list of bounties will be refreshed every Monday. Each week you can complete up to 3 bounties in total across all cities.",
        "4. Requests: Complete requests from the local residents to increase your Reputation in that city. The list of requests will be refreshed every Monday. Each week you can complete up to 3 requests in total across all cities.",
      ])
      .setFooter("Page 3/13")
      .setImage(
        "https://uploadstatic-sea.mihoyo.com/contentweb/20201104/2020110420532482888.png",
      )
      .setTimestamp()
      .setColor("RANDOM");

    const fourthEmbed = new Embed()
      .setTitle("Update Notes Version 1.1")
      .setDescription([
        "◆ Reputation Rewards ◆",
        "As you increase your Reputation Level, you will unlock gadget blueprints, special city features, namecards, recipes, wind gliders, and other rewards. Now, let's look at those rewards in more detail~ヽ(•ω•ゞ)",
      ])
      .setFooter("Page 4/13")
      .setImage(
        "https://uploadstatic-sea.mihoyo.com/contentweb/20201104/2020110420542536730.png",
      )
      .setTimestamp()
      .setColor("RANDOM");

    const fifthEmbed = new Embed()
      .setTitle("Update Notes Version 1.1")
      .setDescription([
        "**▌Reward Details**",
        "**◆ Reputation Gadgets ◆**",
        "**I. Anemoculus Resonance Stone & Geoculus Resonance Stone**",
        "",
        "◆ How to Obtain Blueprints ◆",
        "1) Reach Reputation Level 2 in Mondstadt to obtain the Anemoculus Resonance Stone crafting blueprint.",
        "2) Reach Reputation Level 2 in Liyue to obtain the Geoculus Resonance Stone crafting blueprint.",
        "After using a blueprint, you will be able to craft the Reputation gadget at a Crafting Bench by consuming the materials required.",
      ])
      .setFooter("Page 5/13")
      .setImage(
        "https://uploadstatic-sea.mihoyo.com/contentweb/20201104/2020110420550554612.png",
      )
      .setTimestamp()
      .setColor("RANDOM");

    const sixthEmbed = new Embed()
      .setTitle("Update Notes Version 1.1")
      .setDescription([
        "◆ How to Use ◆",
        "1) After using an Oculus Resonance Stone, a blue area will appear on your map. Search for the Elemental Oculus in the blue area.",
        "2) When an Elemental Oculus appears on your mini-map, the blue area will disappear.",
        "3) You cannot use the next Oculus Resonance Stone while the current one is still in effect or if, after locating the Elemental Oculus, there is another Elemental Oculus nearby.",
        "",
        "◆ Notes ◆",
        "1) Oculus Resonance Stones have a cooldown time of 300 seconds after use.",
        "2) The Anemoculus Resonance Stone is only used in Mondstadt.",
        "3) The Geoculus Resonance Stone is only used in Liyue.",
        "",
        "",
        "**II. Wind Catcher**",
        "◆ How to Obtain Blueprint ◆",
        "Reach Reputation Level 3 in Mondstadt to obtain the Wind Catcher forging blueprint.",
        "",
        "◆ How to Use ◆",
        "1) When the Wind Catcher is equipped, Anemograna will automatically be stored in your Wind Catcher when you draw near them. Up to 5 Anemograna can be stored at once",
        "2) Using the Wind Catcher creates a wind current at your current location. The wind current will disappear after a certain amount of time.",
        "3) After using the Wind Catcher to create a wind current, the gadget will enter a cooldown of 100 seconds.",
        "4) The Wind Catcher cannot be used while in combat.",
      ])
      .setFooter("Page 6/13")
      .setTimestamp()
      .setColor("RANDOM");

    const seventhEmbed = new Embed()
      .setTitle("Update Notes Version 1.1")
      .setDescription([
        "**III. Condensed Resin**",
        "◆ How to Obtain Blueprint ◆",
        "Reach Reputation Level 3 in Liyue to obtain the Condensed Resin crafting blueprint.",
        "",
        "◆ How to Use ◆",
        "1) At a Crafting Bench, consume 1 Crystal Core, 40 Original Resin, and 100 Mora to create 1 Condensed Resin. Condensed Resin can be used to revitalize Ley Line Blossoms and Petrified Trees in Domains that require 20 Original Resin, yielding 2 sets of rewards at one time. (Both sets of rewards are random.)",
        "2) You can only have a maximum of 3 Condensed Resin at one time.",
        "",
        "**IV. NRE (Menu 30)**",
        "◆ How to Obtain Blueprint ◆",
        "Reach Reputation Level 5 in Mondstadt to obtain the NRE (Menu 30) forging blueprint.",
        "",
        "◆ How to Use ◆",
        "1) When NRE (Menu 30) is equipped, you will be able to quickly consume food without opening your Inventory. This gadget can hold one variety of HP-recovery dish and one variety of revival dish. NRE (Menu 30) will automatically offer the dish that best matches your party's situation at any given time.",
        "2) When a character in your party falls in battle, the NRE (Menu 30) will automatically switch from offering the HP-recovery dish to the revival dish.",
      ])
      .setFooter("Page 7/13")
      .setTimestamp()
      .setColor("RANDOM");

    const eighthEmbed = new Embed()
      .setTitle("Update Notes Version 1.1")
      .setDescription([
        "**V. Adepti Seeker's Stove**",
        "◆ How to Obtain Blueprint ◆",
        "Reach Reputation Level 5 in Liyue to obtain the Adepti Seeker's Stove crafting blueprint.",
        "",
        "◆ How to Use ◆",
        "1) Use this gadget to create a portable stove in front of you.",
        "2) This gadget will break if you enter combat near the stove.",
        "3) After creating a stove, the gadget will enter cooldown for 300 seconds. After the cooldown period is over, the Adepti Seeker's Stove will automatically disappear.",
        "",
        "",
        "**VI. Portable Waypoint**",
        "◆ How to Obtain Blueprint ◆",
        "Reach Reputation Level 6 in Mondstadt to obtain the Portable Waypoint crafting blueprint.",
        "",
        "◆ How to Use ◆",
        "1) Use the Portable Waypoint to create a temporary waypoint at your current location. This waypoint will last for 7 days.",
        "2) A Portable Waypoint marker will appear on your map. Select this marker to teleport there. (Only one Portable Waypoint can exist at any one time.)",
        "3) After creating a waypoint, the Portable Waypoint will enter cooldown for 60 seconds.",
        "4) Creating a new waypoint will automatically destroy your last-created waypoint.",
      ])
      .setFooter("Page 8/13")
      .setTimestamp()
      .setColor("RANDOM");

    const ninethEmbed = new Embed()
      .setTitle("Update Notes Version 1.1")
      .setDescription([
        "**VII. Anemo Treasure Compass & Geo Treasure Compass**",
        "◆ How to Obtain Blueprint ◆",
        "1) Reach Reputation Level 6 in Mondstadt to obtain the Anemo Treasure Compass forging blueprint.",
        "2) Reach Reputation Level 6 in Liyue to obtain the Geo Treasure Compass forging blueprint.",
        "",
        "◆ How to Use ◆",
        "Upon use, a prompt will appear directing you towards the nearest chest in the vicinity. Follow it to find the chest. ",
        "",
        "◆ Notes ◆",
        "1) If there are no chests in the vicinity, the gadget will enter cooldown for 5 seconds after use. If a chest is found, the gadget will enter cooldown for 30 seconds after use.",
        "2) The Anemo Treasure Compass can only be used in Mondstadt.",
        "3) The Geo Treasure Compass can only be used in Liyue.",
      ])
      .setFooter("Page 9/13")
      .setTimestamp()
      .setColor("RANDOM");

    const tenthEmbed = new Embed()
      .setTitle("Update Notes Version 1.1")
      .setDescription([
        "**◆ City Features ◆**",
        "**Mining Outcrop Search**",
        "◆ Unlock Criteria ◆",
        "1) Reach Reputation Level 2 in Mondstadt to unlock Mondstadt Mining Outcrop Search.",
        "2) Reach Reputation Level 2 in Liyue to unlock Liyue Mining Outcrop Search.",
        "",
        "◆ How to Use the Feature ◆",
        "After the feature is unlocked, talk to Wagner the Blacksmith in Mondstadt or Master Zhang the Blacksmith in Liyue. They will tell you where to find ore deposits in the region, and markers will appear on your map. You will be able to obtain Crystal Chunks from the ore deposits. After reaching Adventure Rank 30, you will also be able to mine Magical Crystal Chunks.",
        "",
        "**Merchant Discounts**",
        "◆ Feature Unlock Criteria ◆",
        "1) Reach Reputation Level 4 in Mondstadt to unlock discounts at the Good Hunter and Mondstadt General Goods.",
        "2) Reach Reputation Level 4 in Liyue to unlock discounts at Wanmin Restaurant and Second Life.",
        "",
        "◆ How to Use the Feature ◆",
        "After unlocking the Merchant Discounts, you will be able to enjoy discounted prices at the designated merchants.",
        "",
        "**Reputation Namecard Style**",
        "Reach Reputation Level 4 in Mondstadt to get the namecard style 'Mondstadt - Hero's Fame'. Reach Reputation Level 7 to get the namecard style 'Mondstadt - Blessing'.",
        "Reach Reputation Level 4 in Liyue to get the namecard style 'Liyue - A Thousand Ships'. Reach Reputation Level 7 to get the namecard style 'Liyue - In the Clouds'.",
      ])
      .setFooter("Page 10/13")
      .setTimestamp()
      .setColor("RANDOM");

    const eleventhEmbed = new Embed()
      .setTitle("Update Notes Version 1.1")
      .setDescription([
        "**Reputation Recipes**",
        "Reach Reputation Level 1 in Mondstadt to get the recipe for Northern Apple Stew.",
        "Reach Reputation Level 4 in Mondstadt to get the recipe for Adventurer's Breakfast Sandwich.",
        "Reach Reputation Level 7 in Mondstadt to get the recipe for Moon Pie.",
        "Reach Reputation Level 1 in Liyue to get the recipe for Golden Shrimp Balls.",
        "Reach Reputation Level 4 in Liyue to get the recipe for Lotus Flower Crisp.",
        "Reach Reputation Level 7 in Liyue to get the recipe for Tianshu Meat.",
        "",
        "**Reputation Wind Gliders**",
        "Reach Reputation Level 8 in Mondstadt to get the stylized wind glider Wings of Azure Wind.",
        "Reach Reputation Level 8 in Liyue to get the stylized wind glider Wings of Golden Flight.",
        "",
        "",
        "**〓Exploration Progress System〓**",
        "Zoom out on the map to view the Exploration Progress for each area. Open chests, find Elemental Oculi, unlock Waypoints, and complete other exploration activities to increase your Exploration Progress in each area.",
      ])
      .setFooter("Page 11/13")
      .setTimestamp()
      .setColor("RANDOM");

    const twelfthEmbed = new Embed()
      .setTitle("Update Notes Version 1.1")
      .setDescription([
        "**〓Archive System〓**",
        "Go to the Paimon Menu > Archive to view this feature.",
        "At present, the Archive is divided into five categories: 'Tutorials', 'Geography', 'Equipment', 'Materials', and 'Books'.",
        "",
        "**▌Equipment**",
        "Split into 'Weapons' and 'Artifacts'.",
        "Select 'Filter' in the Weapon Archive to view Weapons according to their type, quality, and whether you have obtained them. Select the 'Story' icon to check out the story of a selected weapon.",
        "Complete artifact sets to unlock their entries in the Artifact Archive. Once unlocked, you can view the Set Bonuses and story of a selected set.",
        "We will continue to further optimize the Archive system in upcoming updates.",
        "",
        "**▌Materials**",
        "1) Split into 'Teyvat's Resources', 'Food and Potions', and 'Utility Items'.",
        "2) In the Materials Archive, you can find entries for resources unique to each region of Teyvat, including: Cooking Ingredients, Food, Potions, Materials, Enhancement and Level Up Materials, and Gadgets.",
        "",
        "**▌Geography**",
        "The Geography tab archives all unlocked Viewpoints in Mondstadt and Liyue.",
        "Interact with the Viewpoints located in the areas marked as undiscovered to add them to the Geography Archive.",
        "",
        "**▌Books**",
        "The Books Archive allows you to read all the books you have collected so far.",
        "Additionally, some previously collected books will be removed from your Inventory and transferred to the Archive.",
        "",
        "**▌Tutorials**",
        "The Tutorials Archive is your go-to place for useful tips about 'Elemental Reactions', 'Enemies', 'System', and 'Adventure'. Look there for all the tutorials you have triggered during your travels.",
        "Use the search function to find the tips you need.",
      ])
      .setFooter("Page 12/13")
      .setTimestamp()
      .setColor("RANDOM");

    const thirteenthEmbed = new Embed()
      .setTitle("Update Notes Version 1.1")
      .setDescription([
        "**〓Character Archive System〓**",
        "Apart from the regular Archive mentioned above, Version 1.1 will also introduce the Character Archive. Go to the Paimon Menu > Character Archive to view this feature.",
        "1) In the Character Archive, you can check when exactly each character joined your team. Select the 'Details' button for more information on the Attributes, Constellations, and Profile of a selected character.",
        "2) The Character Archive allows you to sort and filter through all characters available in the current version of the game.",
        "",
        "*Some missing entries will be added to the Character Archive in future updates.*",
      ])
      .setFooter("Page 13/13")
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
    ]);
  },
});
