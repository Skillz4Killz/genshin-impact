import { db } from "../../../../database/database.ts";
import { Embed } from "../../../../utils/Embed.ts";
import { createSubcommand } from "../../../../utils/helpers.ts";
import { getInvites } from "../../../../../deps.ts";

createSubcommand("invites", {
  name: "user",
  arguments: [
    { name: "member", type: "member", required: false },
    { name: "userID", type: "snowflake", required: false },
  ],
  guildOnly: true,

  execute: async function (message, args) {
    const member = args.member || message.member;
    // TODO: Error message would be nice
    if (!member) return;

    const serverInvites = await db.serverinvites.findMany({
      guildID: message.guildID,
    }, true);

    const createdInvites = serverInvites.filter((invite) =>
      invite.memberID === member.id
    );

    const embed = new Embed().setAuthor(member.tag, member.avatarURL);

    const joinedWithInvite = serverInvites.find((invite) =>
      invite.invitedMemberIDs?.includes(member.id)
    );

    const invites = await db.serverinvites.findMany(
      (invite) => invite.memberID === args.member.id,
      true,
    );

    const guildInvites = await getInvites(message.guildID);
    const existingInvites = new Set<string>(
      guildInvites.map((invite: any) => invite.code),
    );

    const invited = invites.reduce((a, i) => a += i.uses - i.fakeUses || 0, 0);

    embed.setDescription(
      `**Total invites:** ${invited}${
        joinedWithInvite
          ? `\n**Invited by:** <@!${joinedWithInvite.memberID}> \n**with code:** ${joinedWithInvite.code}`
          : ""
      }`,
    );

    if (!createdInvites.length) {
      embed.description
        ? embed.description += `\n\nUser has no invites.`
        : embed.setDescription(
          `User has no invites.`,
        );
      return message.send({ embed });
    }

    for (const invite of createdInvites) {
      embed.addField(
        invite.code,
        `** uses:** ${(invite.uses -
          (invite.fakeUses || 0)) ||
          0}\n**exists:** ${
          existingInvites.has(invite.code) ? "yes" : "no"
        }\n**channel:** <#${invite.channelID}>`,
        true,
      );
      if (embed.fields.length === 25) {
        await message.send({ embed }).catch(console.log);
        embed.fields = [];
      }
    }

    if (embed.fields.length) return message.send({ embed });
  },
});
