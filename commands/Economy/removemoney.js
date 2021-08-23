module.exports = ({

  name: "removemoney",

  code: `

Successfully removed $message[2] dollars to $username[$mentioned[<]]'s balance.

$setUserVar[money;$sub[$getUserVar[money;$mentioned[<]];$message[2]];$mentioned[<]]

$onlyPerms[managemessages;Only mod/admin can use it.]

$argsCheck[>2;Usage: w!removemoney <mention user> <number>]`

})

