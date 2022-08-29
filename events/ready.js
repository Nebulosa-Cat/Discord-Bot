module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        console.log(`以 ${client.user.tag}身分登入了!`);
        console.log(`結弦回家囉!接觸了 ${client.users.cache.size} 位成員，看到了 ${client.channels.cache.size} 個頻道，加入了 ${client.guilds.cache.size} 個伺服器`);
        //使用者狀態(線上online、閒置idle、請勿打擾dnd、隱形invisible)
        client.user.setPresence({ activity: { name: '正在和 Nebulosa Cat 聊天' }, status: 'online' })
    },
};