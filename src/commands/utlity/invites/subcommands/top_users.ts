import { botCache, cache } from "../../../../../deps.ts";
import { db } from "../../../../database/database.ts";
import { Embed } from "../../../../utils/Embed.ts";
import { createSubcommand } from "../../../../utils/helpers.ts";
import { createPagination } from "../../../../utils/pagination.ts";

createSubcommand("invites", {
  name: "top",
  guildOnly: true,

  execute: async function (message) {
    const invites = (await db.serverinvites.findMany({
      guildID: message.guildID,
    }));

    const topUsers = new Map<string, { id: string; uses: number }>();

    [...invites.entries()].map(([, invite]) => {
      const previous = topUsers.get(invite.memberID);
      topUsers.set(
        invite.memberID,
        {
          id: invite.memberID,
          uses: (previous?.uses ?? 0) + invite.uses - (invite.fakeUses ?? 0),
        },
      );
    });

    const top = [...topUsers.entries()].sort(([, a], [, b]) => b.uses - a.uses);

    if (!top.length) return message.send("No top inviter found");

    const embeds = [];

    let embed = new Embed().setTitle("Top Inviter");

    let topCounter = 1;

    for (const [, invite] of top) {
      if (
        embed.fields.length === 2 ||
        embed.fields[embed.fields.length - 3]?.name === "\u200B"
      ) {
        embed.addBlankField();
      }
      embed.addField(
        `${invite.uses} invites`,
        `${topCounter++}. <@!${invite.id}>`,
        true,
      );
      if (embed.fields.length === 11) {
        await embeds.push(embed);
        embed = new Embed().setTitle("Top Inviter");
      }
    }

    if (!embeds.length) embeds.push(embed);

    console.log(embeds);

    createPagination(message, embeds);
  },
});
