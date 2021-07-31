import { Message } from 'eris';

import { IMClient } from '../../../client';
import { BotCommand, CommandGroup } from '../../../types';
import { Command, Context } from '../Command';

const community: string[] = [
	'Menno#0002',
	'Armin#2296',
	'Astryx#4587',
	'malok#0002'
];

const devs: string[] = [
	'Alan Wen#3344',
	'LolRiTTeR#1258'
];

const moderation: string[] = [
	'Gugu72#7378',
	'Simplee.#5460',
	'JWEi#9873'
];

const staff: string[] = [
	'wilman#4040',
	'SPAZ#0001'
];

const graphic_designer: string[] = [
	'Danu#4422'
];

const translators: string[] = [
	'• xFalcon#0061',
	'Ormani3#8819',
	'GPP#9510',
	'awsamboi#9999'
];

export default class extends Command {
	public constructor(client: IMClient) {
		super(client, {
			name: BotCommand.credits,
			aliases: [],
			group: CommandGroup.Info,
			defaultAdminOnly: false,
			guildOnly: true
		});
	}

	public async action(message: Message, args: any[], flags: {}, { t }: Context): Promise<any> {
		const embed = this.createEmbed();

		embed.fields.push({
			name: t('Community Team'),
			value: this.getList(community)
		});

		embed.fields.push({
			name: t('Bot Developers'),
			value: this.getList(devs)
		});

		embed.fields.push({
			name: t('Moderation Team'),
			value: this.getList(moderation)
		});

		embed.fields.push({
			name: t('Support Team'),
			value: this.getList(staff)
		});

		embed.fields.push({
			name: t('Graphic Designer'),
			value: this.getList(graphic_designer)
		});

		embed.fields.push({
			name: t('Translators'),
			value: this.getList(translators)
		});

		return this.sendReply(message, embed);
	}

	private getList<T>(array: T[]) {
		return this.shuffle(array).join('\n');
	}

	private shuffle<T>(array: T[]) {
		var currentIndex = array.length,
			temporaryValue,
			randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	}
}
