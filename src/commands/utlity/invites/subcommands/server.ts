import { botCache, getInvites } from "../../../../../deps.ts";
import { db } from "../../../../database/database.ts";
import { Embed } from "../../../../utils/Embed.ts";
import { createSubcommand } from "../../../../utils/helpers.ts";
import { createPagination } from "../../../../utils/pagination.ts";

createSubcommand("invites", {
  name: "server",
  guildOnly: true,

  execute: async function (message) {
    const guildInvites = await getInvites(message.guildID);
    const existingInvites = new Set<string>(
      guildInvites.map((invite: any) => invite.code),
    );

    const invites = (await db.serverinvites.findMany({
      guildID: message.guildID,
    }, true)).sort((a, b) =>
      (b.uses - b.fakeUses || 0) - (a.uses - a.fakeUses || 0)
    );

    let embed = new Embed();
    const embeds: Embed[] = [];

    for (const invite of invites) {
      (message.guildID, invite.memberID);
      embed.addField(
        invite.code,
        `**uses:** ${invite.uses -
            invite
              .fakeUses ||
          0}\n**exists:** ${
          existingInvites.has(invite.code) ? "✅" : "❌"
        }\n**creator:** <@!${invite.memberID}>\n**channel:** <#${invite.channelID}>`,
        true,
      );
      if (embed.fields.length === 25) {
        embeds.push(embed);
        embed = new Embed();
      }
      if (
        embed.fields.length === 2 ||
        embed.fields[embed.fields.length - 3]?.name === "\u200B"
      ) {
        embed.addBlankField();
      }
    }

    createPagination(message, embeds);
  },
});
