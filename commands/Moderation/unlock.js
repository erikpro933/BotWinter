module.exports = ({
  name: "unlock",
  code: `
$modifyChannelPerms[$channelID;+sendmessages;$guildID]
**$username** has unlocked **<#$channelID>**!
$onlyPerms[managechannels;You must have **Manage Messages** permission to run this command!]`
});
