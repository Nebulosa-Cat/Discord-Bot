const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('伺服器資訊')
		.setDescription('查詢 Server 資料'),
	async execute(interaction) {
		await interaction.reply(`伺服器名稱: ${interaction.guild.name}\n成員人數: ${interaction.guild.memberCount}`);
	},
};