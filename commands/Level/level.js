module.exports = ({
  name: "level",
  code: `$color[$random[111111;999999]]
$image[https://vacefron.nl/api/rankcard?username=$replaceText[$username[$mentioned[1;yes]]; ;+;-1]&avatar=$userAvatar[$mentioned[1;yes]]?size=4096&level=$getUserVar[level;$mentioned[1;yes]]&rank=&currentxp=$getUserVar[talk;$mentioned[1;yes]]&nextlevelxp=$getUserVar[req;$mentioned[1;yes]]&previouslevelxp=0&custombg=https://cdn.discordapp.com/attachments/775757240648466452/791348420844716052/1608742528817.jpg&xpcolor=F8F8F9&isboosting=false]
$footer[$username[$mentioned[1;yes]] es necesario
$replaceText[$sub[$sum[$getUserVar[req;$mentioned[1;yes]];1];$getUserVar[talk;$mentioned[1;yes]]];-; ;1] experiencia para subir de nivel!]
Vota https://top.gg/bot/821496737155776544 para obtener un 1% de potenciador en experiencia`
})
