module.exports = {
    name: 'weekly',
    code: `$setUserVar[money;$sum[1000;$getUserVar[money]]]
$title[Weekly Rewards]
$color[FF0000]
$description[$username got 1000€]
$cooldown[7d;Sorry, wait %time% hours for the next reward.] `
}
