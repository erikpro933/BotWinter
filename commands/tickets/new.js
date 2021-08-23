module.exports = {
    name: 'new',
    code: `$customEmoji[yes;821450283270799391] Successfully opened ticket! (<#$get[channelid]>)

$setChannelVar[TicketUser;$authorID;$get[channelid]]
$setServerVar[TicketCount;$math[$getServerVar[TicketCount]+0001]]
$modifyChannelperms[$get[channelid];+viewchannel;$authorID]
$modifyChannelPerms[$get[channelid];-viewchannel;$guildID]


$wait[0.2s]

$let[channelid;$newTicket[ticket-$getServerVar[TicketCount];
<@$authorID>
{author:Ticket #$getServerVar[TicketCount]}
{description:$getServerVar[TicketMessage]}
{footer:$username:$authorAvatar}
{color:$getServerVar[Color]};;yes;$customEmoji[no;821450283270799391] Could not open ticket!]]
$setUserVar[OpenedTickets;$math[$getUserVar[OpenedTickets]+1]]
$setChannelVar[TicketUser;$authorID]

$onlyIf[$getUserVar[OpenedTickets]<$getServerVar[MaxTickets];$customEmoji[no;821450283270799391] You have already opened the max amount of tickets on this server! ($getServerVar[MaxTickets])]

`
}