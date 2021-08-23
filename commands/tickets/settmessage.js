module.exports = {

name: "settmessage",

code: `$setServerVar[TicketMessage;$message]

$title[Ticket message set!]

$footer[]

$color[7eff00]

$onlyPerms[admin;You need \`Administrator\` perm to set a Ticket message!]

$addReactions[👍]
$argsCheck[>1; type a message]

`

}