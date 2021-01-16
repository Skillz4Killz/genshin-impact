import { characters } from "../../constants/character.ts";
import { db } from "../../database/database.ts";
import { createCommand } from "../../utils/helpers.ts";

createCommand({
	name: "remove",
	arguments: [
		{ name: "name", type: '...string' },
	],
	guildOnly: true,
	execute: async function (message, args) {
		const character = characters.get(args.character);
    if (!character) {
			return await message.reply("Invalid character name.").catch(console.log);
		}

		const settings = await db.users.get(message.author.id);
		if (!settings) {
			return await message.reply("You have not setup your profile yet.");
		}

		await db.users.update(message.author.id, { characters: settings.characters.filter(c => c.name !== character.name) });
	}
})
