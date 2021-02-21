import { botCache, ActivityType, cache } from "../../deps.ts";
import { wolfsStatusFunction } from "../utils/status.ts";
import { registerTasks } from "./../utils/taskHelper.ts";


botCache.eventHandlers.ready = function () {
  wolfsStatusFunction({
    status: "online",
    activity: {
      type: ActivityType.Streaming,
      name: "p!setup to setup profile",
      url: "https://www.twitch.tv/superboss4theultimatehero",
    },
  });

  //wolfsStatusFunction({
  //  status: "online",
  //  activity: {
  //    type: ActivityType.Streaming,
  //    name: "p!setup to setup profile",
  //    url: "https://www.twitch.tv/superboss4theultimatehero",
  //  },
  //});

  console.log(`Loaded ${botCache.arguments.size} Argument(s)`);
  console.log(`Loaded ${botCache.commands.size} Command(s)`);
  console.log(`Loaded ${Object.keys(botCache.eventHandlers).length} Event(s)`);
  console.log(`Loaded ${botCache.inhibitors.size} Inhibitor(s)`);
  console.log(`Loaded ${botCache.monitors.size} Monitor(s)`);
  console.log(`Loaded ${botCache.tasks.size} Task(s)`);

  registerTasks();
  botCache.fullyReady = true;
  console.log(
    `[READY] Bot is online and ready in ${cache.guilds.size} guild(s)!`,
  );
};