module.exports = {

    name: 'kick',

    code: `$deletecommand 

$kick[$mentioned[1];$messageSlice[1]]

$title[**Member kicked**]

$color[#FF0000]

$footer[moderator ID: $authorID]

$description[

**Kicked: <@$mentioned[1]>

Kicked by: <@$authorID>

Reason: $messageSlice[1]**

]

$onlyPerms[kick;**ERROR! you need kick members permission**]
$argsCheck[>1;**ERROR! mention someone to kick, example: w!kick @lion.**]
`}