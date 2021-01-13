// THIS MONITOR ALLOWS MULTIPLE WORDS TO TRIGGER A COMMAND FOR WEAPONS
import { botCache } from "../../deps.ts";
import { artifacts } from "../constants/artifacts.ts";
import { weapons } from "../constants/weapons.ts";
import { parsePrefix } from "./commandHandler.ts";

botCache.monitors.set("spacednames", {
  name: "spacednames",
  ignoreDM: false,
  execute: async function (message) {
    const prefix = parsePrefix(message.guildID);
    // THIS MESSAGE DOESNT START WITH PREFIX SO CANCEL
    if (!message.content.startsWith(prefix)) return;

    // IF ONLY 1 WORD, SKIP
    const words = message.content.substring(prefix.length).split(" ");
    if (words.length <= 1) return;

    // MORE THAN 1 WORD FOUND, VALIDATE IF ITS A WEAPON
    const name = words.join("").toLowerCase();
    const weapon = weapons.get(name);
    // WEAPON FOUND BY THIS NAME
    if (weapon) {
      console.log(
        `Weapons triggered for ${name} by ${message.author.id} in ${message
          .guild?.name || "DM"}`,
      );
      // A VALID WEAPON WAS FOUND, TRIGGER THE COMMAND
      return botCache.commands.get("weapon")?.execute?.(
        message,
        { name },
        message.guild,
      );
    }

    // CHECKS FOR ARTIFACTS
    const artifact = artifacts.get(name);
    // WEAPON FOUND BY THIS NAME
    if (artifact) {
      console.log(
        `Artifacts triggered for ${name} by ${message.author.id} in ${message
          .guild?.name || "DM"}`,
      );
      // A VALID ARTIFACT WAS FOUND, TRIGGER THE COMMAND
      return botCache.commands.get("artifact")?.execute?.(
        message,
        { name },
        message.guild,
      );
    }
  },
});
