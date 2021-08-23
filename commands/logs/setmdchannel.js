module.exports = {

name: "setmdchannel",

code: `$setServerVar[mdelete;$mentionedChannels[1]]

$title[Channel message delete log set!]

$footer[]

$color[7eff00]

$onlyPerms[admin;You need \`Administrator\` perm to set a channel !]

$addReactions[👍]

`
}