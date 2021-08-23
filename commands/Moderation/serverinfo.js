module.exports = ({
  name: "serverinfo",
  code: `
$title[$serverName[$guildID]'s Server Info]
$description[Server Name: **$serverName[$guildID]**

ID: **$guildID**

Server Owner: **$username[$ownerID]#$discriminator[$ownerID]**

Features: **$serverFeatures**

Members: **$membersCount**

  Online: **$membersCount[$guildID;online]**
  Do Not Disturb: **$membersCount[$guildID;dnd]**
  Idle: **$membersCount[$guildID;Idle]**
  Offline: **$membersCount[$guildID;offline]**

Role Count: **$roleCount**

Text Channels: **$channelCount[text]**

Voice Channels: **$channelCount[voice]**

Content Filter: **$serverContentFilter**

Ban Count: **$banCount**

Server Region: **$serverRegion**

Verification Level: **$serverVerificationLevel**

Total Boosts: **$serverBoostCount**

Boost Level: **$serverBoostLevel**
]
$color[YELLOW]
$footer[$username;$authorAvatar]
$thumbnail[$serverIcon]
$addTimestamp`
});