import { getInvites } from "../../../../../deps.ts";
import { db } from "../../../../database/database.ts";
import { createSubcommand } from "../../../../utils/helpers.ts";

createSubcommand("invites", {
  name: "sync",
  guildOnly: true,
  userServerPermissions: ["MANAGE_GUILD"],
  botServerPermissions: ["MANAGE_GUILD"],

  execute: async function (message) {
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
    message.reply("✅ Invites successfully synced!");
  },
});
