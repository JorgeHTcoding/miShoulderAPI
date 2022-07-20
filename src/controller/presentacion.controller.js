const { response } = require("express");
const connection = require("../database");

 // POST USER
    
 function postPresentacion(request, response) {
    console.log("Entramos a la funcion postUsuario")
    let sql = "INSERT INTO profesional_pacientes(id_user,id_profesional,contenido_presentacion)" + "VALUES ('" + request.query.id + "','" + request.body.id_profesional + "','" + request.body.contenido_presentacion + "')";
    console.log(sql)
    console.log("entramos al back")
    connection.query(sql, function (err, result) {

        if (err) {
            console.log(err);
        } else {
            console.log(result);
            if (result.insertId)
                response.send(String(result.insertId))
            else
                response.send(respuesta)
        }
    })
}


module.exports = { postPresentacion }