import { botCache } from "../../deps.ts";
import { translate } from "../utils/i18next.ts";
import { Embed } from "../utils/Embed.ts";
import { createCommand, sendEmbed } from "../utils/helpers.ts";

createCommand({
  name: `commands`,
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
      return sendEmbed(
        message.channelID,
        new Embed()
          .setTitle("Here are all commands, Traveler!")
          .setDescription([
            "`p!setup`\nThis allows you to setup your profile.",
            "",
            "`p!profile`\nThis allows you to check your profile.",
            "",
            "`p!profile edit (character) (new constellation)`\nThis allows you to edit a constellation of a character or add a new one with the given constellation.",
            "",
            "Random bullshittery here",
          ]),
      );
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
