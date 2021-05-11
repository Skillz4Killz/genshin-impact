import { db } from "../../../../database/database.ts";
import { Embed } from "../../../../utils/Embed.ts";
import { createSubcommand } from "../../../../utils/helpers.ts";
import { botCache, getInvite } from "../../../../../deps.ts";
import { createPagination } from "../../../../utils/pagination.ts";

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

    // inefficiency rocks

    const invitedMembers = botCache.helpers.chunkStrings(
      invite.invitedMemberIDs?.map((id) => `<@!${id}>`) || [],
      1850,
    );

    const inviteData = await getInvite(args.code).catch(() => undefined);

    const embeds = invitedMembers.map((chunk) =>
      new Embed().setAuthor(
        member.tag,
        member.avatarURL,
      )
        .setTitle(args.code)
        .setDescription(`**exists:** ${inviteData ? "✅" : "❌"}\n\n${chunk}`)
    );

    createPagination(message, embeds);
  },
});
