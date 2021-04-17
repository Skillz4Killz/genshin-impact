import { botCache, getInvites } from "../../deps.ts";
import { db } from "../database/database.ts";
import { Embed } from "../utils/Embed.ts";

botCache.eventHandlers.guildMemberAdd = async function (guild, member) {
  const settings = await db.guilds.get(guild.id);
  if (!settings?.invitetracking) return;

  const newInvites: Map<string, any> = new Map(
    (await getInvites(guild.id)).map((invite: any) => [invite.code, invite]),
  );
  if (!newInvites.size) return;

  // const savedInvites = await db.serverinvites.findMany(
  //   { guildID: guild.id },
  // );
  // if (!savedInvites.size) return;

  const usedInvite = await db.serverinvites.findOne((serverInvite) => {
    const newInvite = newInvites.get(serverInvite.code);

    return newInvite && newInvite.uses === serverInvite.uses + 1;
  });

  if (!usedInvite) return;

  // check if this user already has been invited by this person
  if (settings.invitedUserIDs?.includes(member.id)) {
    await db.serverinvites.update(`${usedInvite.code}_${guild.id}`, {
      fakeUses: usedInvite.fakeUses + 1,
      uses: usedInvite.uses + 1,
    });

    return;
  }

  await db.guilds.update(guild.id, {
    invitedUserIDs: [...(settings.invitedUserIDs || []), member.id],
  });

  await db.serverinvites.update(`${usedInvite.code}_${guild.id}`, {
    uses: usedInvite.uses + 1,
    invitedMemberIDs: [...(usedInvite?.invitedMemberIDs || []), member.id],
  });

  const welcomeEmbed = new Embed().setDescription(
    `User <@${member.id}>\njoined by invite **${usedInvite.code}**\nfrom user <@${usedInvite.memberID}>`,
  );

  guild.channels.forEach((c) => {
    if (c.topic !== "invite tracking") return;

    c.send({ embed: welcomeEmbed }).catch(console.log);
  });
};

// heya {
//   code: "QHaMRcsV",
//   guild: {
//     id: "760068227275161620",
//     name: "Wolf Test",
//     splash: null,
//     banner: null,
//     description: null,
//     icon: "596007aaafb42219bf2951525284f4c1",
//     features: [],
//     verification_level: 0,
//     vanity_url_code: null
//   },
//   channel: { id: "798566392965103616", name: "paimon", type: 0 },
//   inviter: {
//     id: "270273690074087427",
//     username: "GeheimerWolf",
//     avatar: "a_84b2caf55fcbca2166bc61863a931db5",
//     discriminator: "8008",
//     public_flags: 256
//   },
//   uses: 5,
//   max_uses: 0,
//   max_age: 604800,
//   temporary: false,
//   created_at: "2021-04-04T19:24:05.636000+00:00"
// }
