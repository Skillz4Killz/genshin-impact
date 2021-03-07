import { botCache } from "../../../deps.ts";

const gifData = [
  {
    name: "emergencyfood",
    aliases: [],
    gifs: [
      "https://i.kym-cdn.com/photos/images/newsfeed/001/915/094/da9.png",
      "https://cdn.discordapp.com/attachments/812829387560189992/813051546677149696/3c24af6e02e64e4a8e22ba289da746df.png",
      "https://cdn.discordapp.com/attachments/812829387560189992/813051583935938590/maxresdefault.png",
      "https://cdn.discordapp.com/attachments/812829387560189992/813051634275844127/3e4.png",
      "https://cdn.discordapp.com/attachments/812829387560189992/813051740702244894/bc2.png",
      "https://cdn.discordapp.com/attachments/812829387560189992/813051824696328202/4ifzpj.png",
      "https://cdn.discordapp.com/attachments/812829387560189992/813051916804030504/sample-08d63e56d2627f4e16e9c63f85db8183.png",
      "https://cdn.discordapp.com/attachments/812829387560189992/813051883857772574/5c7.png",
      "https://cdn.discordapp.com/attachments/812829387560189992/813051991055532082/0886929373d90a46e8f79d006fc87940_1656200143489460465.png",
      "https://cdn.discordapp.com/attachments/812829387560189992/813052209532764160/Z.png",
      "https://media1.tenor.com/images/e5c0782eabec199b0d929a64813b98da/tenor.gif",
      "https://cdn.discordapp.com/attachments/812829387560189992/813052311361552394/kz5jqthsu4r51.png",
      "https://media1.tenor.com/images/7374fc0ef8a5192ce5f0083e51b98717/tenor.gif",
      "https://media1.tenor.com/images/4369322fe48647949dd720facb6845e0/tenor.gif",
      "https://i.kym-cdn.com/photos/images/facebook/001/915/205/954.jpg",
      "https://cdnb.artstation.com/p/assets/images/images/032/789/481/large/gabriel-seibel-paimon8.jpg?1607470952",
      "https://i.redd.it/n9xtsp7c2os51.jpg",
      "https://i.kym-cdn.com/photos/images/original/001/915/095/5c7.png",
      "https://cdna.artstation.com/p/assets/images/images/031/187/674/large/keith-zarraga-paimon.jpg?1602854808",
      "https://i.redd.it/fuodacj89rq51.png",
      "https://ih1.redbubble.net/image.1748298092.6828/pp,840x830-pad,1000x1000,f8f8f8.jpg",
      "https://danbooru.donmai.us/data/sample/sample-062c7b3e2833eaa391b5d8a7fec475bd.jpg",
      "https://i.imgur.com/4Vb0XA6.jpg",
      "https://cdn.discordapp.com/attachments/818175698035539989/818211111412957204/516.png",
      "https://cdn.discordapp.com/attachments/818175698035539989/818211685184831488/082.png",
      "https://cdn.discordapp.com/attachments/818175698035539989/818211766848454662/fuodacj89rq51.png",
      "https://cdn.discordapp.com/attachments/818175698035539989/818211796170571817/a8GQjX1_460s.png",
      "https://cdn.discordapp.com/attachments/818175698035539989/818211945017507860/Ekn0WV0VcAE0SjH.png",
      "https://cdn.discordapp.com/attachments/818175698035539989/818212040865873993/324685081993cf2e05d3cddfdc284c58.png",
      "https://tenor.com/view/paimon-paimon-eat-kanna-eats-paimon-genshin-impact-emergency-food-paimon-gif-19193450",
      "https://tenor.com/view/emergency-food-emergency-food-has-stopped-working-genshin-impact-paimon-gif-20004102",
      "https://tenor.com/view/genshin-impact-mocha-paimon-gif-19188737",
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
