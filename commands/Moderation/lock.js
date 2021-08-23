module.exports = ({
  name: "lock",
  code: `
$modifyChannelPerms[$channelID;-sendmessages;$guildID]
**$username** has locked <#$channelID>!
$onlyPerms[managechannels;You must have **Manage Channels** permission to run this command!]`
});