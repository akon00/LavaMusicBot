const {
  MessageEmbed
} = require(`discord.js`);
const config = require(`${process.cwd()}/botconfig/config.json`);
const ee = require(`${process.cwd()}/botconfig/embed.json`);
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
const playermanager = require(`${process.cwd()}/handlers/playermanager`);
const { handlemsg } = require(`${process.cwd()}/handlers/functions`);
    module.exports = {
  name: `playtop`,
  category: `Song`,
  aliases: [`ptop`, `pt`],
  description: `Adds a song with the given name/url on the top of the queue`,
  usage: `playtop <link/query>`,
  parameters: {
    "type": "music",
    "activeplayer": true,
    "check_dj": true,
    "previoussong": false
  },
  type: "queue",
  run: async (client, message, args, cmduser, text, prefix, player) => {
    
    let es = client.settings.get(message.guild.id, "embed");let ls = client.settings.get(message.guild.id, "language")

    //if no args added return error message if allowed to send an embed
    if (!args[0])
      return message.reply({embeds : [new MessageEmbed()
        .setColor(es.wrongcolor)
        .setTitle(eval(client.la[ls]["cmds"]["music"]["playtop"]["variable1"]))
      ]});
      if(args.join("").includes("soundcloud")){
        message.reply({
          embeds: [
            new MessageEmbed().setColor(es.color)
            .setTitle(`${emoji.msg.search} Searching for your Request on ${emoji.msg.soundcloud} Soundcloud & then adding it to the TOP of the QUEUE`)
            .setDescription(`\`\`\`${String(args.join(" ")).substr(0, 2000)}\`\`\``)
          ]
        })
        playermanager(client, message, args, `playtop:soundcloud`);
      } else if(args.join("").includes("spotify")){
        message.reply({
          embeds: [
            new MessageEmbed().setColor(es.color)
            .setTitle(`${emoji.msg.search} Searching for your Request on ${emoji.msg.spotify} Spotify & then adding it to the TOP of the QUEUE`)
            .setDescription(`\`\`\`${String(args.join(" ")).substr(0, 2000)}\`\`\``)
          ]
        })
        playermanager(client, message, args, `playtop:raw`);
      } else if(args.join("").includes("apple")){
        message.reply({
          embeds: [
            new MessageEmbed().setColor(es.color)
            .setTitle(`${emoji.msg.search} Searching for your Request on ${emoji.msg.apple} Apple-Music & then adding it to the TOP of the QUEUE`)
            .setDescription(`\`\`\`${String(args.join(" ")).substr(0, 2000)}\`\`\``)
          ]
        })
        playermanager(client, message, args, `playtop:raw`);
      } else {
        message.reply({
          embeds: [
            new MessageEmbed().setColor(es.color)
            .setTitle(`${emoji.msg.search} Searching for your Request on ${emoji.msg.youtube} Youtube & then adding it to the TOP of the QUEUE`)
            .setDescription(`\`\`\`${String(args.join(" ")).substr(0, 2000)}\`\`\``)
          ]
        })
        //play from YOUTUBE
        playermanager(client, message, args, `playtop:youtube`);
      }
  }
};
/**
 * @INFO
 * Bot Coded by Tomato#6966 | https://github.com/Tomato6966/discord-js-lavalink-Music-Bot-erela-js
 * @INFO
 * Work for Milrato Development | https://milrato.dev
 * @INFO
 * Please mention Him / Milrato Development, when using this Code!
 * @INFO
 */
