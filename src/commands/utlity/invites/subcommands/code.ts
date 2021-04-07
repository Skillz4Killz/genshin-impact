import { db } from "../../../../database/database.ts";
import { Embed } from "../../../../utils/Embed.ts";
import { createSubcommand } from "../../../../utils/helpers.ts";
import { botCache } from "../../../../../deps.ts";

createSubcommand("invites", {
  name: "code",
  arguments: [
    { name: "code", type: "string" },
  ],
  guildOnly: true,

  execute: async function (message, args) {
    if (!message.member) return;

    const invite = await db.serverinvites.get(
      `${args.code}_${message.guildID}`,
    );

    if (!invite) return;

    const member = await botCache.helpers.fetchMember(
      message.guildID,
      invite.memberID,
    );

    if (!member) return;

    const embed = new Embed().setAuthor(
      member.tag,
      member.avatarURL,
    );

    embed.addField(
      args.code,
      `${invite.invitedMemberIDs?.map((id) => `<@!${id}>`)
        .join("\n") ||
        "None"}`,
      true,
    );

    message.send({ embed });
  },
});
