export interface GuildSchema {
  /** The guild id */
  id: string;
  /** The custom prefix for this guild */
  prefix: string;
  /** The language for this guild */
  language: string;
  // Activate Invite tracking
  invitetracking: boolean;
  invitedUserIDs?: string[];
}

export interface UserSchema {
  /** The user id who created this emoji */
  id: string;
  /** The users uid. May be Not Available if user skipped. */
  uid: string;
  /** The characters that the user owns */
  characters: OwnedCharacter[];
  /** The adventurer rank */
  adventurerRank: number;
  /** The world levelfor the user */
  worldLevel: number;
}

export interface OwnedCharacter {
  /** The name of the character */
  name: string;
  /** The level of this character constellation */
  constellationLevel: number;
  /** The level of this character */
  charLevel: number;
}

export interface ClientStatsSchema {
  id: string;
  botID: string;
  // Bot Statistics. Using string to prevent big ints from breaking.
  messagesProcessed: string;
  messagesDeleted: string;
  messagesUpdated: string;
  messagesSent: string;
  reactionsAddedProcessed: string;
  reactionsRemovedProcessed: string;
  commandsRan: string;
}

export interface BlacklistedSchema {
  /** The id of the user or guild that is blacklisted. */
  id: string;
  /** Whether this is for a user or a guild. */
  type: "user" | "guild";
}

export interface CommandSchema {
  /** The unique guildID-commandName */
  id: string;
  /** Whether or not the command is fully enabled */
  enabled: boolean;
  /** The exceptions to the enabled option */
  exceptionChannelIDs: string[];
  /** The exceptions to the enabled option */
  exceptionRoleIDs: string[];
  /** The guild id */
  guildID: string;
}

export interface ModlogSchema {
  /** The action that was taken for this modlog */
  action: string;
  /** The amount of time a user is punished for. Used for temporary timed mutes. */
  duration?: number;
  /** The guild id where the modlog was created */
  guildID: string;
  /** The main guild ID for this modlog. */
  mainGuildID: string;
  /** The message id that created this modlog */
  messageID: string;
  /** The user id for the moderator who took this action */
  modID: string;
  /** The unique modlog id for the server */
  modlogID: number;
  /** If this log was a temporary mute, this tells us that this log still needs to unmute this user */
  needsUnmute: boolean;
  /** The reason that the mod gave for this action */
  reason: string;
  /** The timestamp that this modlog was created */
  timestamp: number;
  /** The user id  of the user who was the target of this action */
  userID: string;
}

export interface ServerlogsSchema {
  /** The guild id */
  id: string;
  publicChannelID: string;
  modChannelID: string;
  automodChannelID: string;
  banAddChannelID: string;
  banAddPublic: boolean;
  banRemoveChannelID: string;
  banRemovePublic: boolean;
  memberAddChannelID: string;
  memberAddPublic: boolean;
  memberRemoveChannelID: string;
  memberRemovePublic: boolean;
  memberNickChannelID: string;
  memberNickPublic: boolean;
}

export interface ReminderSchema {
  id: string;
  /** The channel the reminder was created in and will be sent */
  channelID: string;
  /** The text the reminder will send. */
  content: string;
  /** The guild id where this was created. useful for getting the guild language */
  guildID: string;
  /** The unique id(message id) of the reminder. Useful for users deleting reminders. */
  reminderID: string;
  /** If the reminder is recurring the time interval between reminders */
  interval?: number;
  /** Whether or not this reminder is recurring */
  recurring: boolean;
  /** The timestamp when this reminder will occur next. */
  timestamp: number;
  /** The user id of the person who created this reminder. */
  memberID: string;
}

export interface ServerInvitesSchema {
  // Invite Code
  code: string;
  // Total uses of the invite
  uses: number;
  // Fake invites (when this invite has already been used once idk)
  fakeUses: number;
  // ID of the server the invite code is in
  guildID: string;
  // ID of the user who created the invite
  memberID: string;
  // the destination channel of the invite
  channelID: string;
  // IDs of members who have used this code
  invitedMemberIDs: string[];
}
