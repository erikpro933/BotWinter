module.exports = ({
    name: "mtop",
    aliases: ['leaderboard', 'lb'],
    code: `$title[Top Messages]
$description[$userLeaderboard[Messages;asc/desc (optional);**{top}** - {username}: {value} message(s)]]
$footer[$username;$authorAvatar]
$addTimestamp
$color[RANDOM]`
})