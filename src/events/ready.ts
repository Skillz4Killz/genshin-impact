import {
  ActivityType,
  botCache,
  cache,
  editBotsStatus,
  StatusTypes,
} from "../../deps.ts";
import { registerTasks } from "./../utils/taskHelper.ts";

console.log("ready.ts status")
botCache.eventHandlers.ready = function () {
  console.log("ready.ts editBotsStats")
  editBotsStatus(
    StatusTypes.DoNotDisturb,
    "Discordeno Best Lib",
    ActivityType.Game,
  );
  console.log("ready.ts editBotsStats finished")

  console.log("ready.ts loaded commands")
  console.log(`Loaded ${botCache.arguments.size} Argument(s)`);
  console.log(`Loaded ${botCache.commands.size} Command(s)`);
  console.log(`Loaded ${Object.keys(botCache.eventHandlers).length} Event(s)`);
  console.log(`Loaded ${botCache.inhibitors.size} Inhibitor(s)`);
  console.log(`Loaded ${botCache.monitors.size} Monitor(s)`);
  console.log(`Loaded ${botCache.tasks.size} Task(s)`);

  console.log("ready.ts registerTask")
  registerTasks();

  console.log(
    `[READY] Bot is online and ready in ${cache.guilds.size} guild(s)!`,
  );
};
console.log("ready.ts finish")