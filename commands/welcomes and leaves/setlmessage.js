module.exports = {
name: "setlmessage",
code: `$setServerVar[lmessage;$message]
$title[Welcome message set!]
$footer[]
$color[7eff00]
$onlyPerms[You need \`Administrator\` perm to set a welcome message!]
$addReactions[👍]
`
}