module.exports = {
    name: 'add-money',
    code: `

$setUserVar[money;$sum[$getUserVar[money;$mentioned[1]];$noMentionMessage];$mentioned[1]]


$author[GIFT] 
$description[$username[$mentioned[1]] a recibido $noMentionMessage 💵 by using magic!] 
$authorIcon[$authorAvatar]
$thumbnail[$userAvatar[$mentioned[1]]]

$onlyIf[$isNumber[$noMentionMessage]==true;**⚠️🚫| Only numerical value please.**] 
$argsCheck[>1;\`\`\`w!add-money @user <amount>\`\`\`]
$onlyPerms[manageroles; Nooope] `
}