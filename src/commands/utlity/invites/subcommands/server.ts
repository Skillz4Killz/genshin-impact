import { botCache } from "../../../../../deps.ts";
import { db } from "../../../../database/database.ts";
import { Embed } from "../../../../utils/Embed.ts";
import { createSubcommand } from "../../../../utils/helpers.ts";

createSubcommand("invites", {
  name: "server",
  guildOnly: true,

  execute: async function (message) {
    const invites = (await db.serverinvites.findMany({
      guildID: message.guildID,
    }, true)).sort((a, b) =>
      (b.uses - b.fakeUses || 0) - (a.uses - a.fakeUses || 0)
    );

    const embed = new Embed();
    for (const invite of invites) {
      (message.guildID, invite.memberID);
      embed.addField(
        invite.code,
        `**uses:** ${invite.uses -
            invite
              .fakeUses ||
          0}\n**creator:** <@!${invite.memberID}>\n**channel:** <#${invite.channelID}>\n\u200B`,
        true,
      );
      if (embed.fields.length === 25) {
        await message.send({ embed }).catch(console.log);
        embed.fields = [];
      }
      if (
        embed.fields.length === 2 ||
        embed.fields[embed.fields.length - 3]?.name === "\u200B"
      ) {
        embed.addBlankField();
      }
    }
    return embed.fields.length ? message.send({ embed }) : undefined;
  },
});
