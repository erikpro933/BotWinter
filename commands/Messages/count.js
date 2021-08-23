module.exports = ({
    name: "$alwaysExecute",
    code: `$setUserVar[Messages;$math[$getUserVar[Messages]+1]]`
})