module.exports = ({

name:"botinfo",

code:`

$author[Bot Stats;$userAvatar[$clientID]]

$description[

$addField[Links;

\`🔗\` [Suport Server](https://discord.gg/HPzFNGWYtq)

\`🔗\` [Invite Me](https://discord.com/oauth2/authorize?client_id=856597592008163379&scope=bot+applications.commands&permissions=8)

$addField[Version;

 

 Node.JS Version: $nodeVersion

 

$addField[General;

\`🏓\` Ping: $pingms

\`⏱️\` Uptime: $client[readytimestamp]

 

\`⚙️\` Commands Count: $commandsCount

\`👥\` All Members Count: $allMembersCount

\`🎚️\` Servers Count: $serverCount

 

\`🏅\` All Channels Count: $allChannelsCount

 

📝 All Text Channels : $allChannelsCount[text]

🎙 All Channels voice : $allChannelsCount[voice]

 

\`🚦\` Ram Usage: $ram MB/$replaceText[$abbreviate[$maxRam];K; GB;-1]

 

👑 - Owner name : <@$ownerID>

 

$color[RANDOM]

$thumbnail[$userAvatar[$clientid]]

$footer[$userTag[$clientID];$userAvatar[$clientID]]

$addTimestamp

`

})