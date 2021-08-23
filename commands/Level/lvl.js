module.exports = [{
    name: '$alwaysExecute',
    code: `$setUserVar[talk;$math[$getUserVar[talk]+$random[5;25]]]
$cooldown[1s;]

`
}, {
    name: '$alwaysExecute',
    code: `$if[$getUserVar[talk]>=$getUserVar[req]]
$setUserVar[talk;0]
$setUserVar[level;$math[$getUserVar[level]+1]]
$setUserVar[req;$math[$getUserVar[req]*2]]
You leveled up! Now your new level is $sum[$getUserVar[level];1]

$endif

`
}]