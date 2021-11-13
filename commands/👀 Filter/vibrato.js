const {
  MessageEmbed
} = require(`discord.js`);
const config = require(`${process.cwd()}/botconfig/config.json`);
const ee = require(`${process.cwd()}/botconfig/embed.json`);
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
const { handlemsg } = require(`${process.cwd()}/handlers/functions`);
    module.exports = {
  name: `vibrate`,
  category: `👀 Filter`,
  aliases: [``],
  description: `Applies a Vibrate Filter`,
  usage: `vibrate`,
  parameters: {"type":"music", "activeplayer": true, "previoussong": false},
  run: async (client, message, args, cmduser, text, prefix, player) => {
    
    let es = client.settings.get(message.guild.id, "embed");
    let ls = client.settings.get(message.guild.id, "language")
  
    player.node.send({
      op: "filters",
      guildId: message.guild.id,
      equalizer: player.bands.map((gain, index) => {
          var Obj = {
            "band": 0,
            "gain": 0,
          };
          Obj.band = Number(index);
          Obj.gain = Number(gain)
          return Obj;
        }),
        vibrato: {
          "frequency": 4.0, // 0 < x
          "depth": 0.75      // 0 < x ≤ 1
      },
    });
    player.set("filter", "💯 Vibrato");
    return message.channel.send({embeds :[new MessageEmbed()
      .setColor(es.color).setThumbnail(es.thumb ? es.footericon : null)
      
      .setTitle(eval(client.la[ls]["cmds"]["filter"]["vibrato"]["variable1"]))
      .setDescription(eval(client.la[ls]["cmds"]["filter"]["vibrato"]["variable2"]))
    ]});
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
