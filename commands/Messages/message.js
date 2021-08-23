module.exports = ({
    name: "message",
    aliases: ['cm'],
    code: `$title[Total Messages]
$description[:speech_left: Your messages: **$getUserVar[Messages]**

:trophy: Your leaderboard position: **$getLeaderboardInfo[Messages;$authorID;user]**
]
$footer[$username;$authorAvatar]
$addTimestamp
$color[RANDOM]`
})