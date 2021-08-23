module.exports = ({

  name: "pay",

  code: `

$suppressErrors[ ]

$onlyIf[$message[2]>1; ]

$onlyIf[$getUserVar[money]>$message[2];Do not have money]

$setUserVar[money;$sum[$getUserVar[money;$mentioned[1]];$message[2]];$mentioned[1]] 


$setUserVar[money;$sub[$getUserVar[money];$message[2]]]

$title[Has pagado a alguien]

$description[has pagado a <@$mentioned[1]> unos $message[2]€]

$footer[comando activado por $username]

$color[33b302]`

})

