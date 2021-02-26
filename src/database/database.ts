import { configs } from "../../configs.ts";
import { botCache, Sabr, SabrTable } from "../../deps.ts";
import { ClientStatsSchema, GuildSchema, UserSchema, BlacklistedSchema, CommandSchema } from "./schemas.ts";



// Create the database class
const sabr = new Sabr();

export const db = {
  // This will allow us to access table methods easily as we will see below.
  sabr,
  guilds: new SabrTable<GuildSchema>(sabr, "guilds"),
  users: new SabrTable<UserSchema>(sabr, "users"),
  clientstats: new SabrTable<ClientStatsSchema>(sabr, "clientstats"),
  commands: new SabrTable<CommandSchema>(sabr, "commands"),
  blacklisted: new SabrTable<BlacklistedSchema>(sabr, "blacklisted"),

};

const [guildSettings, blacklisted] = await Promise.all([db.guilds.getAll(true), db.blacklisted.getAll(true)])

for (const settings of guildSettings) {
  if (settings.prefix !== configs.prefix) {
    botCache.guildPrefixes.set(settings.id, settings.prefix)
  }
}

// This is important as it prepares all the tables.
await sabr.init();

// Add blacklisted users and guilds to cache so bot will ignore them.
for (const blacklist of blacklisted) {
  botCache.blacklistedIDs.add(blacklist.id);
}