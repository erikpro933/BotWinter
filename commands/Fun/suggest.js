module.exports = ({
  name: "suggest",
  code: `
$channelSendMessage[$channelID;{title:Suggest!} {description:$message} {footer:sugerencia echa por $username} {color:Blue}]
$addReactions[👍;🚧;👎]
$deletecommand`
})