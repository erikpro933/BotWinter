module.exports = {

name: "setwchannel",

code: `$setServerVar[wchannel;$mentionedChannels[1]]

$title[Welcome channel set!]

$description[The welcome channel is now <#$mentionedChannels[1]>!]

$footer[]

$color[7eff00]

$onlyPerms[admin;You need \`Administrator\` perm to set a welcome channel!]

$addReactions[👍]

`

}