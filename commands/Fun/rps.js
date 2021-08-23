module.exports = {
    name: 'rps',
    code: `$deletecommand
$thumbnail[$authorAvatar]

$title[Rock paper Scissor Game]
$description[ you chose $replaceText[$replaceText[$replaceText[$toLowercase[$message];rock;**rock** ;1];paper;**paper** ;1];scissors;**scissors** ;1]; IQ chose $randomText[**rock**;**paper**;**scissors**]
$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$toLowercase[$message]$randomText[rock;paper;scissors];rockscissors;**You win** !;1];paperrock;**You win** !;1];scissorspaper;**You win** !;1];rockpaper;**You lost** !;1];paperscissors;**You lost** !;1];scissorsrock;**You lost** !;1];rockrock;**Equality** !;1];scissorsscissors;**Equality** !;1];paperpaper;**Equality** !;1]]
$footer[Made By Ankit"] 
$color[#D35400]

$argsCheck[1;\`\`\`Choose rock, paper or scissors\`\`\`]
$onlyIf[$checkCondition[$toLowercase[$message[1]]==rock]-
$checkCondition[$toLowercase[$message[1]]==paper]-
$checkCondition[$toLowercase[$message[1]]==scissors]!=false-false-false;Choose **rock,**paper** or **scissors**]
`
}
