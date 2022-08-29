const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('查詢自己')
		.setDescription('查詢你的使用者資料'),
	async execute(interaction) {
		await interaction.reply(`你的 ID: ${interaction.user.tag}\n用戶唯一代碼: ${interaction.user.id}`);
	},
};