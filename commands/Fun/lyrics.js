module.exports = ({

  name: "lyrics",

  code: `$title[$httpResult[title]]

$author[$httpResult[author]]

$embeddedURL[$httpResult[links;genius]]

$description[$httpResult[lyrics]$httpResult[error]]

$color[a09fff]

$thumbnail[$httpResult[thumbnail;genius]]

$footer[Requested by $username]

$footerIcon[$authorAvatar]

$sendMessage[searching `$message`;no]

$argsCheck[>1;Name Music? (not link)]

$httpGet[https://some-random-api.ml/lyrics?title=$replaceText[$message; ;+;-1]]`

})

