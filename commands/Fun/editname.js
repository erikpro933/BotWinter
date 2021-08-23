module.exports = ({

  name: "editname",

  code: `$changeUsernameWithID[$authorID;$message]

$suppressErrors



$color[$random[1;9999]]

$author[$username#$discriminator[$authorID]]

$description[📋 <@$authorID> 👥 ha cambiado su apodo por **$noMentionMessage** 🎧]

$footer[Infinity#3080]

$authorIcon[$userAvatar[$authorID]]

$addTimestamp

`

})

