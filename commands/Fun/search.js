module.exports = ({

  name: "search",

  code: `$title[Search ]

$description[Google - https://www.google.com/search?q=$replaceText[$message; ;+;-1]]

YouTube -

https://www.youtube.com/search?q=$replaceText[$message; ;+;-1]]

Web - .com

https://www.$message.com

Web - .org

https://www.$message.org

Web - .io

https://$message.com]

$footer[]

$color[ffffff]

`

})

