module.exports = {

    name: 'purge',

    code: `$clear[100]
    $deletecommand

$title[**Purge**]

$color[#191919]

$footer[$username;$authorAvatar]

$thumbnail[$authorAvatar]

$description[**$message messages have been deleted!**]

$addReactions[🤖]

$onlyPerms[managemessages;You can't use this command.`}