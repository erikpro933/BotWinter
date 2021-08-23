module.exports = {
name: "setlchannel",
code: `$setServerVar[lchannel;$mentionedChannels[1]]
$title[Leave channel set!]
$description[The Leave channel is now <#$mentionedChannels[1]>!]
$footer[]
$color[7eff00]
$onlyPerms[admin;You need \`Administrator\` perm to set a welcome channel!]
$addReactions[👍]
`
}