module.exports = {

name: "setumchannel",

code: `$setServerVar[umessage;$mentionedChannels[1]]

$title[Channel update message log set!]

$footer[]

$color[7eff00]

$onlyPerms[admin;You need \`Administrator\` perm to set a channel !]

$addReactions[👍]

`
}