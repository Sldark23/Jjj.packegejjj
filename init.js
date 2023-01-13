const Bot = new Aoijs.AoiClient({
 token: "",
 prefix: "$getServerVar[prefix]",
 intents: ["MessageContent", "Guilds", "GuildMessages", "GuildMembers", "GuildBans"],
 autoUodatr: true,
 respondOnEdit: {
  commands: true,
  alwaysExecute: true,
  time: 60000,
 }
})
bot.commands.load("./commands/")
const aoidash = require('aoi.js-panel')
const dash = new aoidash.Dash(bot, {
port: 3000,
command: './commands', //your command handler
username: "slda4k", //username to login  to dashboard
password: "sldark15" //password to login to dashboard
})
dash.start()
    "starbot": "node init.js"