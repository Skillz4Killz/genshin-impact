import {
  botID,
  createGuildChannel,
  getInvites,
  OverwriteType,
} from "../../../../../deps.ts";
import { db } from "../../../../database/database.ts";
import { createSubcommand } from "../../../../utils/helpers.ts";

createSubcommand("invites", {
  name: "sync",
  guildOnly: true,
  userServerPermissions: ["MANAGE_GUILD"],
  botServerPermissions: ["MANAGE_GUILD", "MANAGE_CHANNELS"],

  execute: async function (message) {
    // TODO: error nachricht
    if (!message.guild) return;

    const invites = await getInvites(message.guildID);
    for (const invite of invites) {
      console.log(invite);
      await db.guilds.update(message.guildID, { invitetracking: true });
      await db.serverinvites.create(`${invite.code}_${invite.guild.id}`, {
        code: invite.code,
        uses: invite.uses,
        fakeUses: 0,
        guildID: invite.guild.id,
        memberID: invite.inviter.id,
        channelID: invite.channel.id,
        invitedMemberIDs: [],
      });
    }

    if (
      !message.guild.channels.some((channel) =>
        channel.topic === "invite tracking"
      )
    ) {
      await createGuildChannel(message.guild, "invitetracking", {
        topic: "invite tracking",
        permissionOverwrites: [{
          id: message.guildID,
          type: OverwriteType.ROLE,
          // @ts-ignore who cares
          allow: [],
          deny: ["VIEW_CHANNEL"],
        }, {
          id: botID,
          type: OverwriteType.MEMBER,
          allow: ["SEND_MESSAGES"],
          deny: [],
        }],
      });
    }

    message.reply("✅ Invites successfully synced!");
  },
});
