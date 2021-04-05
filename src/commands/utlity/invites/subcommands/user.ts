import { db } from "../../../../database/database.ts";
import { Embed } from "../../../../utils/Embed.ts";
import { createSubcommand } from "../../../../utils/helpers.ts";

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

    const invites = await db.serverinvites.findMany({
      memberID: member.id,
    }, true);

    const embed = new Embed().setAuthor(member.tag, member.avatarURL);

    if (!invites.length) {
      return message.send({
        embed: embed.setDescription("User has no invites."),
      });
    }

    for (const invite of invites) {
      embed.addField(
        invite.code,
        `**uses:** ${invite.uses -
          invite.fakeUses}\n**channel:** <#${invite.channelID}>`,
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
