import { botCache, Message, removeUserReaction } from "../../deps.ts";
import { needReaction } from "../utils/collectors.ts";
import { Embed } from "../utils/Embed.ts";
import { parsePrefix } from "../monitors/commandHandler.ts";
import { createCommand } from "../utils/helpers.ts";

createCommand({
  name: "commands",
  arguments: [
    { name: "page", type: "number", defaultValue: 1 },
  ],
  guildOnly: true,
  execute: async function (message, args) {
    const prefix = parsePrefix(message.guildID);
    const first = new Embed()
      .setTitle("Information")
      .setDescription([
        `🔹 \`${prefix}artifact (artifact set name)\`\nShows info about a specific artifact set.`,
        "",
        `🔹 \`${prefix}bday\`\n🔹 \`${prefix}birthday\`\n🔹 \`${prefix}birthdays\`\nShows the birthday of all characters.`,
        "",
        `🔹 \`${prefix}char (character name)\`\nShows info about a specific character.`,
        "",
        `🔹 \`${prefix}food (food name)\`\nShows info about a specific food/dish.`,
        "",
        `🔹 \`${prefix}gadget (name)\`\nShows info about a specific gadget.`,
        "",
        `🔹 \`${prefix}list [artifacts | chars | domains | food | gadgets | materials | weapons]\`\nShows you a list of the specific type.`,
        "",
        `🔹 \`${prefix}material (name)\`\nShows info about a specific material.`,
        "",
        `🔹 \`${prefix}update (version)\`\nShows info about a specific game update.`,
        "",
        `🔹 \`${prefix}weapon (weapon name)\`\nShows info about a specific weapon.`,
      ])
      .setTimestamp()
      .setFooter(
        "1️⃣ Information, 2️⃣ Profile, 3️⃣ Moderation, 4️⃣ Utility, 5️⃣ Other/Fun",
      );

    const second = new Embed()
      .setTitle("Profile")
      .setDescription([
        `🔹 \`${prefix}edit char (character) const (new constellation)\`\n🔹 \`${prefix}add char (character) const (constellation)\`\nThis allows you to edit a constellation of a character or add a new one with the given constellation.`,
        "",
        `🔹 \`${prefix}edit char (character) level (new level)\`\n🔹 \`${prefix}add char (character) level (level)\`\nThis allows you to edit the level of a character or add a new one with the given level.`,
        "",
        `🔹 \`${prefix}edit (uid/ar/wl) (number)\`\n🔹 \`${prefix}add (uid/ar/wl) (number)\`\nThis allows you to edit your UID, AR or WL.`,
        "",
        `🔹 \`${prefix}profile\`\nThis allows you to check your profile.`,
        "",
        `🔹 \`${prefix}setup\`\nThis allows you to setup your profile.`,
        "",
        `🔹 \`${prefix}remove (character name)\`\nRemoves a character from your profile.`,
        "",
        `🔹 \`${prefix}reset\`\nReset your whole profile to 0 (delete it).`,
      ])
      .setTimestamp()
      .setFooter(
        "1️⃣ Information, 2️⃣ Profile, 3️⃣ Moderation, 4️⃣ Utility, 5️⃣ Other/Fun",
      );

    const third = new Embed()
      .setTitle("Moderation")
      .setDescription([
        `🔹 \`${prefix}ban [@user | userID] (reason)\`\nBan a user.`,
        "",
        `🔹 \`${prefix}kick [@user | userID] (reason)\`\nKick a user.`,
        "",
        `🔹 \`${prefix}nick [@user | userID] (new nickname)\`\nChange your own nickname or the nickname of another user.`,
        "",
        `🔹 \`${prefix}note [@user | userID] (reason)\`\nTake a note about a user.`,
        "",
        `🔹 \`${prefix}purge [links | bots | invites | upload | images | messages] [@user | userID] (amount)\`\nPurge the last x messages (with the given kind like links, ...) from all or a specific user.`,
        "",
        `🔹 \`${prefix}unban [userID] (reason)\`\nUnban a user with their ID.`,
        "",
        `🔹 \`${prefix}warn [@user | userID] (reason)\`\nWarn a user.`,
        "",
        "",
        `🔹 \`${prefix}modlog [@user | userID]\`\nShows the modlog of the user.`,
        "",
        `🔹 \`${prefix}modlog edit (caseID) (new reason)\`\nEdit a modlog ID with a new reason.`,
        "",
        `🔹 \`${prefix}modlog clear [@user | userID]\`\nClear the modlog of a user.`,
        "",
        "If you put the text `Paimon Mod Logs` into a channeltopic, it will log all moderator actions into that channel.",
      ])
      .setTimestamp()
      .setFooter(
        "1️⃣ Information, 2️⃣ Profile, 3️⃣ Moderation, 4️⃣ Utility, 5️⃣ Other/Fun",
      );

    const fourth = new Embed()
      .setTitle("Utility")
      .setDescription([
        `🔹 \`${prefix}invites code (code)\`\nList all users that joined through this invite`,
        "",
        `🔹 \`${prefix}invites [delete | remove] (code)\`\nDelete a specific code from the DB.`,
        "",
        `🔹 \`${prefix}invites [reset | clear]\`\nRemoves all invites from the DB and stops tracking them.`,
        "",
        `🔹 \`${prefix}invites server\`\nList all your available server invites with uses, creator and destination channel.`,
        "",
        `🔹 \`${prefix}invites sync\`\nSaves all your server invites into a DB and starts tracking them.`,
        "",
        `🔹 \`${prefix}invites user @user\`\nLists all invites of that user with uses and destination channel.`,
      ])
      .setTimestamp()
      .setFooter(
        "1️⃣ Information, 2️⃣ Profile, 3️⃣ Moderation, 4️⃣ Utility, 4️⃣ Utility, 5️⃣ Other/Fun",
      );

    const fifth = new Embed()
      .setTitle("Other/Fun")
      .setDescription([
        `🔹 \`${prefix}emergencyfood\`\nPaimon is not emergency food!`,
        "",
        `🔹 \`${prefix}help\`\nGet some help and the invite for our support server.`,
        "",
        `🔹 \`${prefix}help [domain | edit | food | gadgets | help | list | material | moderation | patchnotes | profile | remind | remove | reset | setup | teyvattimes | weapon]\`\nGet some help and the invite for our support server.`,
        "",
        `🔹 \`${prefix}invite\`\nGet the invitelink for the Bot.`,
        "",
        `🔹 \`${prefix}credits\`\nSpecial thanks to these people!`,
        "",
        `🔹 \`${prefix}prefix set (prefix)\`\nChanges the prefix.`,
        "",
        `🔹 \`${prefix}remind [create | delete | list]\`\nManage your reminders.`,
        "",
        `🔹 \`${prefix}teyvattimes (version)\`\nShows you some newspaper about Teyvat.`,
        "",
        `🔹 \`${prefix}stats\`\nShow some bot stats.`,
      ])
      .setTimestamp()
      .setFooter(
        "1️⃣ Information, 2️⃣ Profile, 3️⃣ Moderation, 4️⃣ Utility, 4️⃣ Utility, 5️⃣ Other/Fun",
      );

    const pages = {
      1: { page: 1, embed: first, emoji: "1️⃣" },
      2: { page: 2, embed: second, emoji: "2️⃣" },
      3: { page: 3, embed: third, emoji: "3️⃣" },
      4: { page: 4, embed: fourth, emoji: "4️⃣" },
      5: { page: 5, embed: fifth, emoji: "5️⃣" },
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

    const emojis = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣"];
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
      .get("commands")
      ?.execute?.(message, {
        character: args.character,
        page: selectedPage.page,
        msg: response,
      });
  },
});

interface HelpArgs {
  command?: string;
}
