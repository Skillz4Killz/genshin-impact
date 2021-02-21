import { botCache, Intents, startBot } from "./deps.ts";
import { configs } from "./configs.ts";
import { importDirectory } from "./src/utils/helpers.ts";
import { loadLanguages } from "./src/utils/i18next.ts";

console.info(
  "Beginning Bot Startup Process. This can take a little bit depending on your system. Loading now...",
);

// Forces deno to read all the files which will fill the commands/inhibitors cache etc.
console.log(await Promise.all(
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
));
// Loads languages
console.log(await loadLanguages());
console.log(await import("./src/database/database.ts"));
console.log(await importDirectory(Deno.realPathSync("./src/constants")));
console.log(await importDirectory(Deno.realPathSync("./src/helpers")));
console.log(await importDirectory(Deno.realPathSync("./src/events")));

console.log(startBot({
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
}));