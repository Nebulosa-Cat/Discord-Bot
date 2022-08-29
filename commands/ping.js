const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('回覆 pong!'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};