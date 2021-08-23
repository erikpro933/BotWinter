module.exports = {
    name: 'slowmode',
    code: `i just set the slowmode to \`$message\`!
$suppressErrors[Please, write a valid number with a valid time symbol! ex: 5m or 20s]
$slowmode[$channelID;$message]
$onlyPerms[kick;Permission Error]`
}
