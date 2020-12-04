	<queryString>
		<![CDATA[SELECT
     round(co.subtotal) AS mail_cli,
     round(co.iva) AS mail_cli,
     round(co.total) AS mail_cli,
     round(i.vrunitario) AS mail_cli,
     round(i.vrtotal) AS mail_cli,
     co.`fecha` AS mail_cli,
     co.`hora` AS mail_cli,
     i.`numero` AS mail_cli,
     i.`descripcion` AS mail_cli,
     i.`cantidad` AS mail_cli,
     t.`nombre` AS nom_papel,
     cor.`nombre` AS nom_corte,
     u.`nombre` AS nom_Susuario,
     u.`email` AS mail_usuario,
     cliente.`codcliente` AS cliente_codcliente,
     cliente.`cedula` AS cliente_cedula,
     cliente.`nombre` AS cliente_nombre,
     cliente.`direccion` AS cliente_direccion,
     cliente.`telefono` AS cliente_telefono,
     cliente.`email` AS cliente_email
FROM
     `cotizacion` co INNER JOIN `usuario` u ON co.`usuario_codusuario` = u.`codusuario`
     INNER JOIN `item` i ON co.`numero` = i.`cotizacion_numero`
     INNER JOIN `cliente` cliente ON co.`cliente_codcliente` = cliente.`codcliente`
     INNER JOIN `cortepapel` cor ON i.`cortepapel_codcortepapel` = cor.`codcortepapel`
     INNER JOIN `tipopapel` t ON i.`tipopapel_codtipopapel` = t.`codtipopapel`
WHERE
     co.numero = $P{NumCotizacion}]]>
	</queryString>
