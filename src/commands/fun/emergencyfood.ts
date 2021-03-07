import { botCache } from "../../../deps.ts";

const gifData = [
  {
    name: "emergencyfood",
    aliases: [],
    gifs: [
      "https://i.imgur.com/sffCzqm.png",
      "https://i.imgur.com/dG1klRI.png",
      "https://i.imgur.com/Y5ZjXUJ.png",
      "https://i.imgur.com/K2iPkR4.png",
      "https://i.imgur.com/z1di5Iu.png",
      "https://i.imgur.com/apIutz5.png",
      "https://i.imgur.com/idslHLQ.png",
      "https://i.imgur.com/RXvRWHZ.png",
      "https://i.imgur.com/uPzChgX.png",
      "https://i.imgur.com/J2yQi1L.png",
      "https://i.imgur.com/vRzXYTR.png",
      "https://i.imgur.com/W43yeIC.png",
      "https://i.imgur.com/sdmlfFs.png",
      "https://i.imgur.com/KW3i5nF.png",
      "https://i.imgur.com/ZSvxn9l.png",
      "https://i.imgur.com/xHu6Ctb.png",
      "https://i.imgur.com/QjuMN7i.png",
      "https://i.imgur.com/5oMdDEk.png",
      "https://i.imgur.com/4Vb0XA6.jpg",
      "https://i.imgur.com/P0Pfsee.png",
      "https://i.imgur.com/VSGf7ZX.png",
      "https://i.imgur.com/5xmQXQk.jpg",
      "https://i.imgur.com/XE6XQsf.png",
      "https://i.imgur.com/wqmrgNC.png",
      "https://i.imgur.com/ceWY5H6.png",
      "https://media1.tenor.com/images/e5c0782eabec199b0d929a64813b98da/tenor.gif",
      "https://media1.tenor.com/images/7374fc0ef8a5192ce5f0083e51b98717/tenor.gif",
      "https://media1.tenor.com/images/4369322fe48647949dd720facb6845e0/tenor.gif",
      "https://media1.tenor.com/images/4869315535c15435f3d8ceeac8703b2c/tenor.gif",
      "https://media1.tenor.com/images/fd095dd822d291bd369ed556caf064a4/tenor.gif",
      "https://media1.tenor.com/images/18290708ef97c683eef31a7e24d2da79/tenor.gif",
    ],
  },
];

gifData.forEach(async (data) => {
  botCache.commands.set(data.name, {
    name: data.name,
    aliases: data.aliases,
    botChannelPermissions: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    guildOnly: true,
    execute: async (message) => {
      const randomGif = botCache.helpers.chooseRandom(data.gifs);

      // Create the embed
      const embed = botCache.helpers.authorEmbed(message).setImage(randomGif);

      // Send the embed to the channel
      return message.send({ embed }).catch(console.log);
    },
  });
});
