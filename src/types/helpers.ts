import type {
  Collection,
  Member,
  Message,
  MessageReactionUncachedPayload,
  ReactionPayload,
} from "../../deps.ts";
import type { Embed } from "../utils/Embed.ts";
import type {
  CollectMessagesOptions,
  CollectReactionsOptions,
  MessageCollectorOptions,
  ReactionCollectorOptions,
} from "./collectors.ts";

export interface Helpers {
  // Basic Utils
  chooseRandom: <T>(array: T[]) => T;
  snowflakeToTimestamp: (id: string) => number;
  toTitleCase: (text: string) => string;
  chunkStrings: (
    array: string[],
    chunkSize?: number,
    separateLines?: boolean,
  ) => string[];
  authorEmbed: (message: Message) => Embed;
  cleanNumber: (number: bigint | number | string) => string;
  shortNumber: (number: bigint | number | string) => string;
  booleanEmoji: (bool: boolean) => string;

  // Collectors
  needMessage: (
    memberID: string,
    channelID: string,
    options?: MessageCollectorOptions | undefined,
  ) => Promise<Message>;
  collectMessages: (options: CollectMessagesOptions) => Promise<Message[]>;
  needReaction: (
    memberID: string,
    messageID: string,
    options?: ReactionCollectorOptions,
  ) => Promise<string>;
  collectReactions: (options: CollectReactionsOptions) => Promise<string[]>;
  processReactionCollectors: (
    message: Message | MessageReactionUncachedPayload,
    emoji: ReactionPayload,
    userID: string,
  ) => void;
  fetchMember: (guildID: string, userID: string) => Promise<Member | undefined>;
  fetchMembers: (
    guildID: string,
    userIDs: string[],
  ) => Promise<Collection<string, Member> | undefined>;

  // Moderation utils
  createModlog: (
    message: Message,
    options: {
      action: `ban` | `unban` | `warn` | `kick` | `note`;
      member?: Member;
      userID?: string;
      reason: string;
      duration?: number;
    },
  ) => Promise<unknown>;
  modlogEmbed: (
    message: Message,
    modlogID: number,
    options: {
      action: `ban` | `unban` | `warn` | `kick` | `note`;
      member?: Member;
      userID?: string;
      reason: string;
      duration?: number;
    },
  ) => Promise<Embed>;
}
