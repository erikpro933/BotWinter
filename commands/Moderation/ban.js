module.exports = {

    name: 'ban',

    code: `

$ban[$mentioned[1];$noMentionMessage;0]

✅ **Success:** Banned <@$mentioned[1]> by <@$authorID>!

$onlyPerms[admin;❌ Missing permissions: \`Administrator\`]

$argsCheck[>1;❌ Invalid arguments: \`Missing arguments: mentioned.user\`]`
}