module.exports = {
    name: '8ball',
    code: `$deletecommand
$footer[Pregunta Propuesta Por $username]
$title[Pregunta: $message]
$color[ff0000]
$description[**Respuesta:** $randomText[No.;Si.;Yo no sé.;Tú Sabes?.;Eres Muy Lento.;Claro!;Claro que no!;usted está allí.;No Quiero Responder  >:(.;Yo no puedo hablar.;Tengo Mucho Sueño;Feo Tu;Ok.;ve tu.;No Me Entendido.;Como? que???;Que es eso?;Yo no quiero.;No Quiero Responder A Eso.;Tú no me gustas.;Vete De Aquí Ahora Mismo.;Si Das Un Paso Atrás Te Respondo.;Te Estoy Observando.;Por Listo Me Dices Cuanto Es +2;9×9=81.;Déjame En Paz.;Hola!]]

$argsCheck[>1;❌| Que Desea Preguntar A **🎱8ball🎱**]
`
}
