import { botCache } from "../../deps.ts";
import { translate } from "../utils/i18next.ts";
import { Embed } from "../utils/Embed.ts";
import { createCommand, sendEmbed } from "../utils/helpers.ts";
import { sendMessage } from "https://deno.land/x/discordeno@10.0.2/src/api/handlers/channel.ts";

createCommand({
  name: `help`,
  arguments: [
    {
      name: "command",
      type: "string",
      lowercase: true,
      required: false,
    },
  ],
  execute: function (message, args: HelpArgs) {
    if (!args.command) {
      return message.reply({content: "https://discord.gg/26MjArxVP3", embed: new Embed()
      .setTitle("Need help, Traveler?")
      .setDescription([
        "To set up your profile run `p!setup` and go to my DMs!",
        "",
        "To check your profile, run the command `p!profile`!",
        "",
        "To access the command list, please use the command `p!commands`!",
        "",
        "Need further help? Visit our Support Server!",])
      })
    }

    const command = botCache.commands.get(args.command);
    if (!command) {
      return message.send(`Command ${args.command} not found.`);
    }

    const description = translate(
      message.guildID!,
      `commands/${args.command}:DESCRIPTION`,
    );

    const embed = new Embed()
      .setAuthor(
        translate(
          message.guildID!,
          `commands/help:AUTHOR`,
          { name: args.command },
        ),
      )
      .setDescription(
        description === "DESCRIPTION" ? command.description : description,
      );

    return message.send({ embed });
  },
});

interface HelpArgs {
  command?: string;
}
