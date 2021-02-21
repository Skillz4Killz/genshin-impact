import { botCache, Message } from "../../deps.ts";
import { needReaction } from "../utils/collectors.ts";
import { Embed } from "../utils/Embed.ts";
import { createCommand } from "../utils/helpers.ts";

createCommand({
  name: "commands",
  arguments: [
    { name: "page", type: "number", defaultValue: 1 },
  ],
  guildOnly: true,
  execute: async function (message, args) {
    const first = new Embed()
      .setTitle("Information")
      .setDescription([
        "🔹 `p!char (character name)`\nShows info about a specific character.",
        "",
        "🔹 `p!list (weapons | artifacts | food | gadgets | materials | domains)\nShows you a list of the specific type.",
        "",
        "🔹 `p!weapon (weapon name)\nShows info about a specific weapon.",
        "",
        "🔹 `p!artifact (artifact set name)\nShows info about a specific artifact set.",
        "",
        "🔹 `p!food (food name)\nShows info about a specific food/dish.",
        "",
        "🔹 `p!gadget (name)\nShows info about a specific gadget.",
        "",
        "🔹 `p!material (name)\nShows info about a specific material.",
        "",
        "🔹 `p!update (version)\nShows info about a specific game update.",
        "",
        "1️⃣ Information",
        "2️⃣ Profile",
        "3️⃣ Other",
      ])
      .setTimestamp()

    const second = new Embed()
      .setTitle("Profile")
      .setDescription([
        "🔹 `p!setup\nThis allows you to setup your profile.",
        "",
        "🔹 `p!profile\nThis allows you to check your profile.",
        "",
        "🔹 `p!edit char (character) const (new constellation)\np!add char (character) const (constellation)\nThis allows you to edit a constellation of a character or add a new one with the given constellation.",
        "",
        "🔹 `p!edit char (character) level (new level)\np!add char (character) level (level)\nThis allows you to edit the level of a character or add a new one with the given level.",
        "",
        "🔹 `p!edit (uid/ar/wl) (number)\np!add (uid/ar/wl) (number)\nThis allows you to edit your UID, AR or WL.",
        "",
        "🔹 `p!remove (character name)\nRemoves a character from your profile.",
        "",
        "🔹 `p!reset\nReset your whole profile to 0 (delete it).",
        "",
        "1️⃣ Information",
        "2️⃣ Profile",
        "3️⃣ Other",
        
      ])
      .setTimestamp()

    const third = new Embed()
      .setTitle("Other")
      .setDescription([
        "🔹 `p!help\nGet some help and the invite for our support server.",
        "",
        "🔹 `p!help [edit | food | gadgets | help | list | patchnotes | profile | remove | reset | setup]\nGet some help and the invite for our support server.",
        "",
        "🔹 `p!invite\nGet the invitelink for the Bot.",
        "",
        "🔹 `p!credits\nSpecial thanks to these people!",
        "",
        "🔹 `p!prefix set (prefix)\nChanges the prefix.",
        "",
        "🔹 `p!emergencyfood\nPaimon is not emergency food!",
        "",
        "1️⃣ Information",
        "2️⃣ Profile",
        "3️⃣ Other",
      ])
      .setTimestamp()

    const pages = {
      1: { page: 1, embed: first, emoji: "1️⃣" },
      2: { page: 2, embed: second, emoji: "2️⃣" },
      3: { page: 3, embed: third, emoji: "3️⃣" },
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

    const emojis = ["1️⃣", "2️⃣", "3️⃣"];
    // ADD THE REACTIONS
    if (!args.msg) await response.addReactions(emojis, true).catch(console.log);

    // HANDLE PAGINATION
    const reaction = await needReaction(message.author.id, response.id, {
      filter: (userID, reaction) =>
        message.author.id === userID && page.emoji !== reaction,
    }).catch(console.log);
    if (!reaction) return;

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
