module.exports = {
    name: 'howgay',
    code: `$title[Qué tan Gay es?]
$description[<@$mentioned[1]> es $random[1;100]% Gay!! 🏳️‍🌈]
$footer[$username 🤣]
$color[ff00a0]
$image[$randomText[https://media.discordapp.net/attachments/781212792945901619/785557998445133895/9453828b711407ac19036df93244ba7a.gif?width=664&height=664;https://media.discordapp.net/attachments/781212792945901619/785558486581772348/tenor.gif;https://media.discordapp.net/attachments/781212792945901619/785558500540678164/giphy.gif]]
$deletecommand
$onlyIf[$mentioned[1]!=;Error, Debes mencionar a un Usuario]
$cooldown[3s;Debes esperar 3 segundos para volver a usar este comando!!]`
}
