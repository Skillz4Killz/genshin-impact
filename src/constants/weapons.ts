export const weapons = new Map([
  [
    "coolsteel",
    {
      name: "Cool Steel",
      description: "A reliable steel-forged weapon that serves as a testament to the great adventures of its old master.",
      thumbnail: "https://static.wikia.nocookie.net/gensin-impact/images/9/9c/Weapon_Cool_Steel.png/revision/latest/scale-to-width-down/256?cb=20201119233444",
      color: "RANDOM",
      category: "Sword",
      stars: "⭐⭐⭐",
      baseAttack: "39",
      secondaryStat: "ATK%",
      secondaryStatValue: "7,7%",
      specialAbility: "Bane of Water and Ice",
      moreInfo: "",
      refinementLevel: [
        {
          name: "Level 1",
          description:
            "Increases DMG against opponents affected by Hydro or Cryo by **12%**.",
        },
        {
          name: "Level 2",
          description:
            "Increases DMG against opponents affected by Hydro or Cryo by **15%**.",
        },
        {
          name: "Level 3",
          description:
            "Increases DMG against opponents affected by Hydro or Cryo by **18%**.",
        },
        {
          name: "Level 4",
          description:
            "Increases DMG against opponents affected by Hydro or Cryo by **21%**.",
        },
        {
          name: "Level 5",
          description:
            "Increases DMG against opponents affected by Hydro or Cryo by **24%**.",
        },
      ],
    },
  ],
  [
    "skyridersword",
    {
      name: "Skyrider Sword",
      description: "A reliable steel sword. The legendary Skyrider once tried to ride it as a flying sword...",
      thumbnail: "https://static.wikia.nocookie.net/gensin-impact/images/3/34/Weapon_Skyrider_Sword.png/revision/latest/scale-to-width-down/256?cb=20201116035206",
      color: "RANDOM",
      category: "Sword",
      stars: "⭐⭐⭐",
      baseAttack: "38",
      secondaryStat: "Energy Recharge",
      secondaryStatValue: "11,3%",
      specialAbility: "Determination",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Skyrider_Sword",
      refinement: "Using an Elemental Burst grants a **12/15/18/21/24%** increase in ATK and Movement SPD for 15s.",
    },
  ],
  [
    "filletblade",
    {
      name: "Fillet Blade",
      description: "A sharp filleting knife. The blade is long, thin, and incredibly sharp.",
      thumbnail: "https://static.wikia.nocookie.net/gensin-impact/images/f/f7/Weapon_Fillet_Blade.png/revision/latest/scale-to-width-down/256?cb=20201116033941",
      color: "RANDOM",
      category: "Sword",
      stars: "⭐⭐⭐",
      baseAttack: "39",
      secondaryStat: "ATK%",
      secondaryStatValue: "7,7%",
      specialAbility: "Gash",
      moreInfo: "",
      refinementLevel: [
        {
          name: "Refinement Rank 1",
          description:
            "On hit, has 50% chance to deal **240%** ATK DMG to a single enemy. Can only occur once every **15s**.",
        },
        {
          name: "Refinement Rank 2",
          description:
            "On hit, has 50% chance to deal **280%** ATK DMG to a single enemy. Can only occur once every **14s**.",
        },
        {
          name: "Refinement Rank 3",
          description:
            "On hit, has 50% chance to deal **320%** ATK DMG to a single enemy. Can only occur once every **13s**.",
        },
        {
          name: "Refinement Rank 4",
          description:
            "On hit, has 50% chance to deal **360%** ATK DMG to a single enemy. Can only occur once every **12s**.",
        },
        {
          name: "Refinement Rank 5",
          description:
            "On hit, has 50% chance to deal **400%** ATK DMG to a single enemy. Can only occur once every **11s**.",
        },
      ],
    },
  ],
  [
    "travelershandysword",
    {
      name: "Traveler's Handy Sword",
      description: "A handy steel sword which contains scissors, a magnifying glass, tinder, and other useful items in its sheath.",
      thumbnail: "https://static.wikia.nocookie.net/gensin-impact/images/c/c9/Weapon_Traveler%27s_Handy_Sword.png/revision/latest?cb=20201116035456",
      color: "RANDOM",
      category: "Sword",
      stars: "⭐⭐⭐",
      baseAttack: "40",
      secondaryStat: "DEF",
      secondaryStatValue: "6,4%",
      specialAbility: "Journey",
      moreInfo: "",
      refinementLevel: [
        {
          name: "Refinement Rank 1",
          description:
            "Each Elemental Orb or Particle collected restores **1%** HP.",
        },
        {
          name: "Refinement Rank 2",
          description:
            "Each Elemental Orb or Particle collected restores **1,25%** HP.",
        },
        {
          name: "Refinement Rank 3",
          description:
            "Each Elemental Orb or Particle collected restores **1,50%** HP.",
        },
        {
          name: "Refinement Rank 4",
          description:
            "Each Elemental Orb or Particle collected restores **1,75%** HP.",
        },
        {
          name: "Refinement Rank 5",
          description:
            "Each Elemental Orb or Particle collected restores **2%** HP.",
        },
      ],
    },
  ],
  [
    "harbingerofdawn",
    {
      name: "Harbinger of Dawn",
      description: "A sword that once shone like the sun. The wielder of this sword will be blessed with a 'feel-good' buff. The reflective material on the blade has long worn off.",
      thumbnail: "https://static.wikia.nocookie.net/gensin-impact/images/2/23/Weapon_Harbinger_of_Dawn.png/revision/latest/scale-to-width-down/256?cb=20201119233056",
      color: "RANDOM",
      category: "Sword",
      stars: "⭐⭐⭐",
      baseAttack: "39",
      secondaryStat: "CRIT DMG",
      secondaryStatValue: "10,2%",
      specialAbility: "Vigorous",
      moreInfo: "",
      refinementLevel: [
        {
          name: "Refinement Rank 1",
          description:
            "When HP is above 90%, increases CRIT Rate by **14%**.",
        },
        {
          name: "Refinement Rank 2",
          description:
            "When HP is above 90%, increases CRIT Rate by **17.5%**.",
        },
        {
          name: "Refinement Rank 3",
          description:
            "When HP is above 90%, increases CRIT Rate by **21%**.",
        },
        {
          name: "Refinement Rank 4",
          description:
            "When HP is above 90%, increases CRIT Rate by **24.5%**.",
        },
        {
          name: "Refinement Rank 5",
          description:
            "When HP is above 90%, increases CRIT Rate by **28%**.",
        },
      ],
    },
  ],
  [
    "darkironsword",
    {
      name: "Dark Iron Sword",
      description: "A perfectly ordinary iron sword, just slightly darker than most.",
      thumbnail: "https://static.wikia.nocookie.net/gensin-impact/images/3/3a/Weapon_Dark_Iron_Sword.png/revision/latest/scale-to-width-down/256?cb=20201119235556",
      color: "RANDOM",
      category: "Sword",
      stars: "⭐⭐⭐",
      baseAttack: "39",
      secondaryStat: "Elemental Mastery",
      secondaryStatValue: "31",
      specialAbility: "Overloaded",
      moreInfo: "",
      refinementLevel: [
        {
          name: "Refinement Rank 1",
          description:
            "Upon causing an Overloaded, Superconduct, Electro-Charged, or an Electro-infused Swirl reaction, ATK is increased by **20%** for 12s.",
        },
        {
          name: "Refinement Rank 2",
          description:
            "Upon causing an Overloaded, Superconduct, Electro-Charged, or an Electro-infused Swirl reaction, ATK is increased by **25%** for 12s.",
        },
        {
          name: "Refinement Rank 3",
          description:
            "Upon causing an Overloaded, Superconduct, Electro-Charged, or an Electro-infused Swirl reaction, ATK is increased by **30%** for 12s.",
        },
        {
          name: "Refinement Rank 4",
          description:
            "Upon causing an Overloaded, Superconduct, Electro-Charged, or an Electro-infused Swirl reaction, ATK is increased by **35%** for 12s.",
        },
        {
          name: "Refinement Rank 5",
          description:
            "Upon causing an Overloaded, Superconduct, Electro-Charged, or an Electro-infused Swirl reaction, ATK is increased by **40%** for 12s.",
        },
      ],
    },
  ],
  [
    "blackclifflongsword",
    {
      name: "Blackcliff Longsword",
      description: "A sword made of blackstone. It has a dark crimson glow on its black blade.",
      thumbnail: "https://static.wikia.nocookie.net/gensin-impact/images/6/6f/Weapon_Blackcliff_Longsword.png/revision/latest?cb=20201116033216",
      color: "RANDOM",
      category: "Sword",
      stars: "⭐⭐⭐⭐",
      baseAttack: "44",
      secondaryStat: "CRIT DMG",
      secondaryStatValue: "8%",
      specialAbility: "Press the Advantage",
      moreInfo: "",
      refinementLevel: [
        {
          name: "Refinement Rank 1",
          description:
            "After defeating an opponent, ATK is increased by **12%** for 30s. This effect has a maximum of 3 stacks, and the duration of each stack is independent of the others.",
        },
        {
          name: "Refinement Rank 2",
          description:
            "After defeating an opponent, ATK is increased by **15%** for 30s. This effect has a maximum of 3 stacks, and the duration of each stack is independent of the others.",
        },
        {
          name: "Refinement Rank 3",
          description:
            "After defeating an opponent, ATK is increased by **18%** for 30s. This effect has a maximum of 3 stacks, and the duration of each stack is independent of the others.",
        },
        {
          name: "Refinement Rank 4",
          description:
            "After defeating an opponent, ATK is increased by **21%** for 30s. This effect has a maximum of 3 stacks, and the duration of each stack is independent of the others.",
        },
        {
          name: "Refinement Rank 5",
          description:
            "After defeating an opponent, ATK is increased by **24%** for 30s. This effect has a maximum of 3 stacks, and the duration of each stack is independent of the others.",
        },
      ],
    },
  ],
  [
    "sacrificialsword",
    {
      name: "Sacrificial Sword",
      description: "A ceremonial sword that has become petrified over time. The trinkets on it are still visible. It grants the wielder the power to withstand the winds of time.",
      thumbnail: "https://static.wikia.nocookie.net/gensin-impact/images/a/a0/Weapon_Sacrificial_Sword.png/revision/latest?cb=20201120010840",
      color: "RANDOM",
      category: "Sword",
      stars: "⭐⭐⭐⭐",
      baseAttack: "41",
      secondaryStat: "Energy Recharge",
      secondaryStatValue: "13,3%",
      specialAbility: "Composed",
      moreInfo: "",
      refinementLevel: [
        {
          name: "Refinement Rank 1",
          description:
            "After damaging an opponent with an Elemental Skill, the skill has a 40% chance to end its own CD. Can only occur once every 30s.",
        },
        {
          name: "Refinement Rank 2",
          description:
            "After damaging an opponent with an Elemental Skill, the skill has a 50% chance to end its own CD. Can only occur once every 26s.",
        },
        {
          name: "Refinement Rank 3",
          description:
            "After damaging an opponent with an Elemental Skill, the skill has a 60% chance to end its own CD. Can only occur once every 22s.",
        },
        {
          name: "Refinement Rank 4",
          description:
            "After damaging an opponent with an Elemental Skill, the skill has a 70% chance to end its own CD. Can only occur once every 19s.",
        },
        {
          name: "Refinement Rank 5",
          description:
            "After damaging an opponent with an Elemental Skill, the skill has a 80% chance to end its own CD. Can only occur once every 16s.",
        },
      ],
    },
  ],
  [
    "swordofdescension",
    {
      name: "Sword of Descension",
      description: "\n**PS4 sword only!**\n\nA sword of unique craftsmanship. It does not appear to belong to this world.",
      thumbnail: "https://static.wikia.nocookie.net/gensin-impact/images/1/17/Weapon_Sword_of_Descension.png/revision/latest/scale-to-width-down/256?cb=20201116035338",
      color: "RANDOM",
      category: "Sword",
      stars: "⭐⭐⭐⭐",
      baseAttack: "39",
      secondaryStat: "ATK%",
      secondaryStatValue: "7,7%",
      specialAbility: "Descension",
      moreInfo: "",
      refinementLevel: [
        {
          name: "Refinement Rank 1",
          description:
            "Hitting enemies with Normal or Charged Attacks grants a 50% chance to deal 200% ATK as DMG in a small AoE. This effect can only occur once every 10s. Additionally, if the Traveler equips the Sword of Descension, their ATK is increased by 66.",
        },
        {
          name: "Refinement Rank 2",
          description:
            "Hitting enemies with Normal or Charged Attacks grants a 50% chance to deal 200% ATK as DMG in a small AoE. This effect can only occur once every 10s. Additionally, if the Traveler equips the Sword of Descension, their ATK is increased by 66.",
        },
        {
          name: "Refinement Rank 3",
          description:
            "Hitting enemies with Normal or Charged Attacks grants a 50% chance to deal 200% ATK as DMG in a small AoE. This effect can only occur once every 10s. Additionally, if the Traveler equips the Sword of Descension, their ATK is increased by 66.",
        },
        {
          name: "Refinement Rank 4",
          description:
            "Hitting enemies with Normal or Charged Attacks grants a 50% chance to deal 200% ATK as DMG in a small AoE. This effect can only occur once every 10s. Additionally, if the Traveler equips the Sword of Descension, their ATK is increased by 66.",
        },
        {
          name: "Refinement Rank 5",
          description:
            "Hitting enemies with Normal or Charged Attacks grants a 50% chance to deal 200% ATK as DMG in a small AoE. This effect can only occur once every 10s. Additionally, if the Traveler equips the Sword of Descension, their ATK is increased by 66.",
        },
      ],
    },
  ],

 // CBT CONTENT **TODO**
 // [
 //   "thealleyflash",
 //   {
 //     name: "The Alley Flash",
 //     description: "",
 //     thumbnail: "https://static.wikia.nocookie.net/gensin-impact/images/8/83/Weapon_The_Alley_Flash.png/revision/latest/scale-to-width-down/194?cb=20201016011557",
 //     color: "RANDOM",
 //     category: "Sword",
 //     stars: "⭐⭐⭐⭐",
 //     baseAttack: "44",
 //     secondaryStat: "CRIT Rate",
 //     secondaryStatValue: "4%",
 //     specialAbility: "Itinerant Hero",
 //     moreInfo: "",
 //     refinementLevel: [
 //       {
 //         name: "Refinement Rank 1",
 //         description:
 //           "Continuously sprinting for at least 1s increases ATK by 28% for 6s. This effect cannot stack.",
 //       },
 //       {
 //         name: "Refinement Rank 2",
 //         description:
 //           "Continuously sprinting for at least 1s increases ATK by 28% for 6s. This effect cannot stack.",
 //       },
 //       {
 //         name: "Refinement Rank 3",
 //         description:
 //           "Continuously sprinting for at least 1s increases ATK by 28% for 6s. This effect cannot stack.",
 //       },
 //       {
 //         name: "Refinement Rank 4",
 //         description:
 //           "Continuously sprinting for at least 1s increases ATK by 28% for 6s. This effect cannot stack.",
 //       },
 //       {
 //         name: "Refinement Rank 5",
 //         description:
 //           "Continuously sprinting for at least 1s increases ATK by 28% for 6s. This effect cannot stack.",
 //       },
 //     ],
 //   },
 // ],
  [
    "favoniussword",
    {
      name: "Favonius Sword",
      description: "A standard-issue longsword of the Knights of Favonius. When you're armed with this agile and sharp weapon, channeling the power of the elements has never been so easy!",
      thumbnail: "https://static.wikia.nocookie.net/gensin-impact/images/9/90/Weapon_Favonius_Sword.png/revision/latest?cb=20201116033811",
      color: "RANDOM",
      category: "Sword",
      stars: "⭐⭐⭐⭐",
      baseAttack: "41",
      secondaryStat: "Energy Recharge",
      secondaryStatValue: "13,3%",
      specialAbility: "Windfall",
      moreInfo: "",
      refinementLevel: [
        {
          name: "Refinement Rank 1",
          description:
            "CRIT hits have a **60%** chance to generate 1 Elemental Orb, which will regenerate 6 Energy for the character. Can only occur once every **12s**.",
        },
        {
          name: "Refinement Rank 2",
          description:
            "CRIT hits have a **70%** chance to generate 1 Elemental Orb, which will regenerate 6 Energy for the character. Can only occur once every **10.5s**.",
        },
        {
          name: "Refinement Rank 3",
          description:
            "CRIT hits have an **80%** chance to generate 1 Elemental Orb, which will regenerate 6 Energy for the character. Can only occur once every **9s**.",
        },
        {
          name: "Refinement Rank 4",
          description:
            "CRIT hits have a **90%** chance to generate 1 Elemental Orb, which will regenerate 6 Energy for the character. Can only occur once every **7.5s**.",
        },
        {
          name: "Refinement Rank 5",
          description:
            "CRIT hits have a **100%** chance to generate 1 Elemental Orb, which will regenerate 6 Energy for the character. Can only occur once every **6s**.",
        },
      ],
    },
  ],
  [
    "theblacksword",
    {
      name: "The Black Sword",
      description: "A pitch-black longsword that thirsts for violence and conflict. It is said that this weapon can cause its user to become drunk on the red wine of slaughter.",
      thumbnail: "https://static.wikia.nocookie.net/gensin-impact/images/c/cf/Weapon_The_Black_Sword.png/revision/latest/scale-to-width-down/256?cb=20201116035352",
      color: "RANDOM",
      category: "Sword",
      stars: "⭐⭐⭐⭐",
      baseAttack: "42",
      secondaryStat: "CRIT Rate",
      secondaryStatValue: "6%",
      specialAbility: "",
      moreInfo: "",
      refinementLevel: [
        {
          name: "Refinement Rank 1",
          description:
            "",
        },
        {
          name: "Refinement Rank 2",
          description:
            "",
        },
        {
          name: "Refinement Rank 3",
          description:
            "",
        },
        {
          name: "Refinement Rank 4",
          description:
            "",
        },
        {
          name: "Refinement Rank 5",
          description:
            "",
        },
      ],
    },
  ],
  [
    "coolsteel",
    {
      name: "",
      description: "",
      thumbnail: "",
      color: "RANDOM",
      category: "Sword",
      stars: "⭐⭐⭐⭐",
      baseAttack: "",
      secondaryStat: "",
      secondaryStatValue: "",
      specialAbility: "",
      moreInfo: "",
      refinementLevel: [
        {
          name: "Refinement Rank 1",
          description:
            "",
        },
        {
          name: "Refinement Rank 2",
          description:
            "",
        },
        {
          name: "Refinement Rank 3",
          description:
            "",
        },
        {
          name: "Refinement Rank 4",
          description:
            "",
        },
        {
          name: "Refinement Rank 5",
          description:
            "",
        },
      ],
    },
  ],
  [
    "coolsteel",
    {
      name: "",
      description: "",
      thumbnail: "",
      color: "RANDOM",
      category: "Sword",
      stars: "⭐⭐⭐⭐",
      baseAttack: "",
      secondaryStat: "",
      secondaryStatValue: "",
      specialAbility: "",
      moreInfo: "",
      refinementLevel: [
        {
          name: "Refinement Rank 1",
          description:
            "",
        },
        {
          name: "Refinement Rank 2",
          description:
            "",
        },
        {
          name: "Refinement Rank 3",
          description:
            "",
        },
        {
          name: "Refinement Rank 4",
          description:
            "",
        },
        {
          name: "Refinement Rank 5",
          description:
            "",
        },
      ],
    },
  ],
  [
    "coolsteel",
    {
      name: "",
      description: "",
      thumbnail: "",
      color: "RANDOM",
      category: "Sword",
      stars: "⭐⭐⭐⭐",
      baseAttack: "",
      secondaryStat: "",
      secondaryStatValue: "",
      specialAbility: "",
      moreInfo: "",
      refinementLevel: [
        {
          name: "Refinement Rank 1",
          description:
            "",
        },
        {
          name: "Refinement Rank 2",
          description:
            "",
        },
        {
          name: "Refinement Rank 3",
          description:
            "",
        },
        {
          name: "Refinement Rank 4",
          description:
            "",
        },
        {
          name: "Refinement Rank 5",
          description:
            "",
        },
      ],
    },
  ],
  [
    "coolsteel",
    {
      name: "",
      description: "",
      thumbnail: "",
      color: "RANDOM",
      category: "Sword",
      stars: "⭐⭐⭐⭐",
      baseAttack: "",
      secondaryStat: "",
      secondaryStatValue: "",
      specialAbility: "",
      moreInfo: "",
      refinementLevel: [
        {
          name: "Refinement Rank 1",
          description:
            "",
        },
        {
          name: "Refinement Rank 2",
          description:
            "",
        },
        {
          name: "Refinement Rank 3",
          description:
            "",
        },
        {
          name: "Refinement Rank 4",
          description:
            "",
        },
        {
          name: "Refinement Rank 5",
          description:
            "",
        },
      ],
    },
  ],
  [
    "coolsteel",
    {
      name: "",
      description: "",
      thumbnail: "",
      color: "RANDOM",
      category: "Sword",
      stars: "⭐⭐⭐⭐",
      baseAttack: "",
      secondaryStat: "",
      secondaryStatValue: "",
      specialAbility: "",
      moreInfo: "",
      refinementLevel: [
        {
          name: "Refinement Rank 1",
          description:
            "",
        },
        {
          name: "Refinement Rank 2",
          description:
            "",
        },
        {
          name: "Refinement Rank 3",
          description:
            "",
        },
        {
          name: "Refinement Rank 4",
          description:
            "",
        },
        {
          name: "Refinement Rank 5",
          description:
            "",
        },
      ],
    },
  ],
]);
