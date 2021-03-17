import { botCache, Message, removeUserReaction } from "../../../deps.ts";
import { parsePrefix } from "../../monitors/commandHandler.ts";
import { needReaction } from "../../utils/collectors.ts";
import { Embed } from "../../utils/Embed.ts";
import { createSubcommand } from "../../utils/helpers.ts";

createSubcommand("list", {
  name: "food",
  arguments: [
    { name: "page", type: "number", defaultValue: 1 },
  ],
  guildOnly: true,
  execute: async function (message, args) {
    const prefix = parsePrefix(message.guildID);
    const first = new Embed()
      .setTitle("Rarity ⭐")
      .setDescription([
        "",
        `*If you want to search for food/dish infos, type \`${prefix}food (name)\`\nThe foodname has to be lower case and without spacing.\nFor example \`${prefix}food grilledtigerfish\`*`,
        "",
      ])
      .addField(
        "\u200B",
        "🔹 Apple\n🔹 Chicken-Mushroom Skewer\n🔹 Definitely Not Bar Food!\n🔹 Flash-Fried Filet\n\n🔹 Fruity Skewers\n🔹 Grilled Tiger Fish\n🔹 Mint Jelly\n🔹 Mondstadt Grilled Fish\n🔹 Mora Meat\n🔹 Outrider's Champion Steak!",
        true,
      )
      .addField(
        "\u200B",
        "🔹 Pop's Teas\n🔹 Qiankun Mora Meat\n🔹 Radish Veggie Soup\n🔹 Steak\n🔹 Stir-Fried Filet\n\n🔹 Sunsettia\n🔹 Survival Grilled Fish\n🔹 Teyvat Charred Egg\n🔹 Teyvat Fried Egg",
        true,
      )
      .addBlankField()
      .setFooter(
        "1️⃣ Rarity 1⭐, 2️⃣ Rarity 2⭐, 3️⃣ Rarity 3⭐, 4️⃣ Rarity 4⭐ &  5⭐",
      )
      .setTimestamp();

    const second = new Embed()
      .setTitle("Rarity ⭐⭐")
      .setDescription([
        "",
        `*If you want to search for food/dish infos, type \`${prefix}food (name)\`\nThe foodname has to be lower case and without spacing.\nFor example \`${prefix}food grilledtigerfish\`*`,
        "",
      ])
      .addField(
        "\u200B",
        "🔹 Almond Tofu\n🔹 All-Delicacy Parcels\n🔹 Apple Cider\n🔹 Berry & Mint Burst\n🔹 Cold Noodles with Mountain Delicacies\n🔹 Cream Stew\n🔹 Crystal Shrimp\n\n🔹 Der Weisheit Letzter Schluss (Life)\n🔹 Fish-Flavored Toast\n🔹 Fisherman's Toast\n🔹 Flaming Red Bolognese\n🔹 Fried Radish Balls\n🔹 Goulash\n🔹 Ghostly March\n🔹 Jewelry Soup",
        true,
      )
      .addField(
        "\u200B",
        "🔹 Jueyun Chili Chicken\n🔹 Lighter-Than-Air Pancake\n🔹 Lotus Seed and Bird Egg Soup\n🔹 Matsutake Meat Rolls\n🔹 Mint Salad\n🔹 Mysterious Bolognese\n🔹 Noodles with Mountain Delicacies\n🔹 Northern Smoked Chicken\n\n\n🔹 Rockin' Riffin' Chicken!\n🔹 Satisfying Salad\n🔹 Spicy Stew\n🔹 Sweet Dream\n🔹 Sweet Madame\n🔹 Tea Break Pancake\n🔹 Wolfhook Juice",
        true,
      )
      .addBlankField()
      .setFooter(
        "1️⃣ Rarity 1⭐, 2️⃣ Rarity 2⭐, 3️⃣ Rarity 3⭐, 4️⃣ Rarity 4⭐ &  5⭐",
      )
      .setTimestamp();

    const third = new Embed()
      .setTitle("Rarity ⭐⭐⭐")
      .setDescription([
        "",
        `*If you want to search for food/dish infos, type \`${prefix}food (name)\`\nThe foodname has to be lower case and without spacing.\nFor example \`${prefix}food grilledtigerfish\`*`,
        "",
      ])
      .addField(
        "\u200B",
        "🔹 A Buoyant Breeze\n🔹 A Prize Catch\n🔹 Adventurer's Breakfast Sandwich\n🔹 Bamboo Shoot Soup\n🔹 Barbatos Ratatouille\n🔹 Black-Back Perch Stew\n🔹 Calla Lily Seafood Soup\n🔹 Cold Cut Platter\n\n🔹 Come and Get It\n🔹 Crab, Ham & Veggie Bake\n🔹 Crispy Potato Shrimp Platter\n🔹 Die Heilige Sinfonie\n🔹 Golden Chicken Burger\n🔹 Golden Shrimp Balls\n🔹 Holy Water\n🔹 Invigorating Pizza\n🔹 Jueyun Guoba\n🔹 Lotus Flower Crisp\n🔹 Minty Meat Rolls\n🔹 Mondstadt Hash Brown\n🔹 Mushroom Pizza",
        true,
      )
      .addField(
        "\u200B",
        "🔹 No Tomorrow\n🔹 Northern Apple Stew\n🔹 Nutritious Meal (V. 593)\n🔹 Once Upon a Time in Mondstadt\n🔹 Pile 'Em Up\n🔹 Prosperous Peace\n🔹 Puppy-Paw Hash Brown\n🔹 Qingce Stir Fry\n\n🔹 Sautéed Matsutake\n🔹 Slow-Cooked Bamboo Shoot Soup\n🔹 Squirrel Fish\n🔹 Sticky Honey Roast\n🔹 Sunshine Sprat\n🔹 Triple-Layered Consommé\n🔹 Universal Peace\n🔹 Wanmin Restaurant's Boiled Fish\n🔹 Woodland Dream\n🔹 Zhongyuan Chop Suey",
        true,
      )
      .addBlankField()
      .setFooter(
        "1️⃣ Rarity 1⭐, 2️⃣ Rarity 2⭐, 3️⃣ Rarity 3⭐, 4️⃣ Rarity 4⭐ &  5⭐",
      )
      .setTimestamp();

    const fourth = new Embed()
      .setTitle("Rarity ⭐⭐⭐⭐ & ⭐⭐⭐⭐⭐")
      .setDescription([
        "",
        `*If you want to search for food/dish infos, type \`${prefix}food (name)\`\nThe foodname has to be lower case and without spacing.\nFor example \`${prefix}food grilledtigerfish\`*`,
        "",
      ])
      .addField(
        "[⭐⭐⭐⭐]",
        "🔹 Finger Lickin' Good Golden Chicken\n🔹 Golden Crab\n🔹 Golden Fried Chicken\n🔹 Jade Parcels\n🔹 Moon Pie\n🔹 Tianshu Meat",
        true,
      )
      .addField("[⭐⭐⭐⭐⭐]", "🔹 Adeptus' Temptation", true)
      .addBlankField()
      .setFooter(
        "1️⃣ Rarity 1⭐, 2️⃣ Rarity 2⭐, 3️⃣ Rarity 3⭐, 4️⃣ Rarity 4⭐ &  5⭐",
      )
      .setTimestamp();

    const pages = {
      1: { page: 1, embed: first, emoji: "1️⃣" },
      2: { page: 2, embed: second, emoji: "2️⃣" },
      3: { page: 3, embed: third, emoji: "3️⃣" },
      4: { page: 4, embed: fourth, emoji: "4️⃣" },
    } as Record<
      number,
      { page: number; embed: Embed; emoji: string } | undefined
    >;

    const page = pages[args.page];
    if (!page) return;

    // SEND FIRST EMBED
    const response = args.msg
      ? await (args.msg as Message).edit({ embed: page.embed }).catch(
        console.log,
      )
      : await message.reply({ embed: page.embed }).catch(console.log);
    if (!response) return;

    const emojis = ["1️⃣", "2️⃣", "3️⃣", "4️⃣"];
    // ADD THE REACTIONS
    if (!args.msg) await response.addReactions(emojis, true).catch(console.log);

    // HANDLE PAGINATION
    const reaction = await needReaction(message.author.id, response.id, {
      filter: (userID, reaction) =>
        message.author.id === userID && page.emoji !== reaction,
    }).catch(console.log);
    if (!reaction) return;

    if (
      !(removeUserReaction(
        message.channelID,
        response.id,
        reaction,
        message.author.id,
      ).catch(console.log))
    ) {
      return;
    }

    const selectedPage = Object.values(pages).find((page) =>
      page?.emoji === reaction
    );
    if (!selectedPage) return;

    return botCache.commands
      .get("list")?.subcommands?.get("food")
      ?.execute?.(message, {
        page: selectedPage.page,
        msg: response,
      });
  },
});
