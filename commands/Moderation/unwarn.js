module.exports = ({
  name: "unwarn",
  code: `
$setUserVar[warn;$sub[$getUserVar[warn;$mentioned[1]];1];$mentioned[1]]
You have removed a warning from <@$mentioned[1]>. They now have \`$sub[$getUserVar[warn;$mentioned[1]];1]\` warnings 
$onlyPerms[managemessages;You must have **Manage Messages** permission to run this command!]
$argsCheck[>1;Please mention someone!]
$onlyIf[$mentioned[1]!=$authorID;You can't remove warnings to yourself!]
$onlyIf[$getUserVar[warn;$mentioned[1]]>=1;You can't remove a warning from someone that has no warnings!]`
});