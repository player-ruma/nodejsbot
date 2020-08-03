const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === '출석') {
    message.reply('출석완료');
  }

if(message.content === '안녕') {
  message.reply('안녕하세요');
}

if(message.content === 'ANNA살리라') {
  message.reply('출석도 꾸준히! 대화도 많이! ANNA클 우리가 살리자!');
}

if(message.content === 'ping') {
  message.reply('pong');
}
});

client.login(token);