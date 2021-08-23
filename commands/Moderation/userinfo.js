module.exports = ({
  name: "userinfo",
  code: `
$title[$mentioned[1;yes]'s UserInfo]
$description[Username: **$username[$mentioned[1;yes]]**

Discriminator: **#$discriminator[$mentioned[1;yes]]**

ID: **$mentioned[1;yes]**

Joined At: **$memberJoinedDate[$mentioned[1;yes]]**

Account Created At: **$creationDate[$mentioned[1;yes]]**

User Badges: **$getUserBadges[$mentioned[1;yes]]**

Boosting?: **$isBoosting[$mentioned[1;yes]]**

Is a bot?: **isBot[$mentioned[1;yes]]**
]
$color[GREEN]
$footer[$username;$authorAvatar]
$thumbnail[$userAvatar[$mentioned[1;yes]]]
$addTimestamp`
});