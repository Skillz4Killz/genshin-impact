import { db } from "../../../../database/database.ts";
import { Embed } from "../../../../utils/Embed.ts";
import { createSubcommand } from "../../../../utils/helpers.ts";
import { botCache, cache } from "../../../../../deps.ts";

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

    const author = cache.members.get(invite.memberID);

    if (!author) return;

    const embed = new Embed().setAuthor(
      author.tag,
      author.avatarURL,
    );

    const member = await botCache.helpers.fetchMember(
      message.guildID,
      invite.memberID,
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
