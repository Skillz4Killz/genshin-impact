import { botCache, cache } from "../../../../deps.ts";
import { db } from "../../../database/database.ts";
import { Embed } from "../../../utils/Embed.ts";
import { createCommand } from "../../../utils/helpers.ts";

createCommand({
  name: "modlog",
  aliases: ["ml"],
  botServerPermissions: ["MANAGE_GUILD"],
  userServerPermissions: ["MANAGE_GUILD"],
  arguments: [
    { name: "subcommand", type: "subcommand", required: false },
    { name: "member", type: "member", required: false },
    { name: "userID", type: "snowflake", required: false },
  ],
  guildOnly: true,
  execute: async function (message, args, guild) {
    if (!guild) return;

    const memberID = args.member?.id || args.userID;
    if (!memberID) message.reply("❌ modlog error line 22");

    const logs = await db.modlogs.findMany({
      userID: memberID,
      guildID: message.guildID,
    }, true);
    if (!logs.length) return message.reply("No modlogs found for this user.");

    // Sort modlogs by oldest modlog as first in the array
    const sortedModLogs = logs.sort((a, b) => a.modlogID - b.modlogID);
    const modlogTypes = [
      {
        type: (message.guildID, `Ban`),
        amount: logs.filter((log) => log.action === `ban`).length,
      },
      {
        type: (message.guildID, `Unban`),
        amount: logs.filter((log) => log.action === `unban`).length,
      },
      //  {
      //    type: translate(message.guildID, "strings:MODLOG_MUTE"),
      //    amount: logs.filter((log) => log.action === `mute`).length,
      //  },
      //  {
      //    type: translate(message.guildID, "strings:MODLOG_UNMUTE"),
      //    amount: logs.filter((log) => log.action === `unmute`).length,
      //  },
      {
        type: (message.guildID, `Warn`),
        amount: logs.filter((log) => log.action === `warn`).length,
      },
      {
        type: (message.guildID, `Kick`),
        amount: logs.filter((log) => log.action === `kick`).length,
      },
      {
        type: (message.guildID, `Note`),
        amount: logs.filter((log) => log.action === `note`).length,
      },
    ];

    const description = modlogTypes.map((
      log,
    ) => (message.guildID, `Total ${log.type}s: ${log.amount}`));

    const embed = new Embed()
      .setAuthor(
        (message.guildID,
          `${args.member?.tag ||
            (message.guildID, "Unknown User")} Mod Log History`),
        args.member ? args.member.avatarURL : undefined,
      )
      .setDescription(description.join(`\n`));
    if (args.member) embed.setThumbnail(args.member.avatarURL);

    for (const log of sortedModLogs) {
      if (embed.fields.length === 25) {
        await message.send({ embed }).catch(console.log);
        embed.fields = [];
      }

      const date = new Date(log.timestamp);

      const readableDate = `${date.getMonth() +
        1}/${date.getDate()}/${date.getFullYear()}`;

      const details = [
        (message.guildID,
          `**Moderator** ${cache.members.get(log.modID)?.tag ||
            (await botCache.helpers.fetchMember(message.guildID, log.modID)
              .catch(console.log)) ||
            log.modID}`),
        (message.guildID, `**Time:** ${readableDate}`),
      ];
      if (log.duration) {
        details.push(
          (message.guildID, `**Duration:** ${log.duration}`),
        );
      }

      details.push(
        (message.guildID, `**Reason:** ${log.reason}`),
      );

      embed.addField(
        (message.guildID,
          `${botCache.helpers.toTitleCase(log.action)} => ${log.modlogID}`),
        details.join("\n"),
      );
    }

    return message.send({ embed });
  },
});
