import { botCache, Intents, startBot } from "./deps.ts";
import { configs } from "./configs.ts";
import { importDirectory } from "./src/utils/helpers.ts";
import { loadLanguages } from "./src/utils/i18next.ts";

console.info(
  "Beginning Bot Startup Process. This can take a little bit depending on your system. Loading now...",
);

// Forces deno to read all the files which will fill the commands/inhibitors cache etc.
await Promise.all(
  [
    "./src/commands",
    "./src/inhibitors",
    "./src/events",
    "./src/arguments",
    "./src/monitors",
    "./src/constants",
    "./src/tasks",
    "./src/permissionLevels",
    "./src/events",
  ].map((path) => importDirectory(Deno.realPathSync(path))),
);
// Loads languages
await loadLanguages();
await import("./src/database/database.ts");
await importDirectory(Deno.realPathSync("./src/constants"));
await importDirectory(Deno.realPathSync("./src/helpers"));
await importDirectory(Deno.realPathSync("./src/events"));

startBot({
  token: configs.token,
  // Pick the intents you wish to have for your bot.
  // For instance, to work with guild message reactions, you will have to pass the Intents.GUILD_MESSAGE_REACTIONS intent to the array.
  intents: [
    Intents.GUILDS,
    Intents.GUILD_MESSAGES,
    Intents.DIRECT_MESSAGES,
    Intents.DIRECT_MESSAGE_REACTIONS,
    Intents.GUILD_MESSAGE_REACTIONS,
  ],
  // These are all your event handler functions. Imported from the events folder
  eventHandlers: botCache.eventHandlers,
});

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)
console.log(11)
console.log(12)
console.log(13)
console.log(14)
console.log(15)
console.log(16)
console.log(17)
console.log(18)
console.log(19)
console.log(20)
console.log(21)
console.log(22)
console.log(23)
console.log(24)
console.log(25)
console.log(26)
console.log(27)
console.log(28)
console.log(29)
console.log(30)
console.log(31)
console.log(32)
console.log(33)
console.log(34)
console.log(35)
console.log(36)
console.log(37)
console.log(38)
console.log(39)
console.log(40)
console.log(41)
console.log(42)
console.log(43)
console.log(44)
