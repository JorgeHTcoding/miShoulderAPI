const { response } = require("express");
const connection = require("../database");

// RELACIONADO CON TABLA USER

function getUser(request, response) {

    let sql = "SELECT * FROM user"
    connection.query(sql, function (err, result) {
        if (err) {
            console.log(err);
        }
        else {
            response.send(result);
        }
    })
}

function postUser(request, response) {
    console.log("Entramos a la funcion postUsuario")
    let sql = "INSERT INTO user(tipo,nick, name, sname, email, telefono, descripcion, img, direccion)" + "VALUES ('" + request.body.tipo + "','" + request.body.nick + "','" + request.body.name + "', '" + request.body.sname + "', '" + request.body.email + "', '" + request.body.telefono + "', '" + request.body.descripcion + "', '" + request.body.img + "','" + request.body.direccion + "')";
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

function putUser(request, response) {
    {

        
        if (request.query.id != "null") {
            console.log(request.query.id + " el id de usuario en el back")
           
            let tipo = request.body.tipo;
            let nick = request.body.nick;
            let name = request.body.name;
            let sname = request.body.sname;
            let email = request.body.email;
            let telefono = request.body.telefono;
            let descripcion = request.body.descripcion;
            let img = request.body.img;
            let direccion = request.body.direccion;
            let acreditacion = request.body.acreditacion;
            let horario = request.body.horario;
            let modalidad = request.body.modalidad;
            let password = request.body.password;         
            
            let params = [tipo, nick, name, sname, email, telefono, descripcion, img, direccion, acreditacion, horario, modalidad, password];

            let sql = "UPDATE user SET tipo = COALESCE(?,tipo) , " +
                "nick = COALESCE(?, nick), " + "name = COALESCE(?,name), " + "sname = COALESCE(?, sname), " +
                "email = COALESCE(?, email), " + "telefono = COALESCE(?, telefono), " + "descripcion = COALESCE(?, descripcion), " + "img = COALESCE(?, img), " +
                "direccion = COALESCE(?, direccion), " + "acreditacion = COALESCE(?, acreditacion), " + "horario = COALESCE(?, horario), " +"modalidad = COALESCE(?, modalidad), "
                 +"password = COALESCE(?, password) WHERE id_user=" + request.query.id;

            console.log(sql);
            connection.query(sql, params, function (err, result) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(result);
                    if (result.insertId)
                        response.send(String(result.insertId))
                    else
                        response.send(result)
                }
            });
        } else {
            console.log("Introduce un id válido")
        }
    }
}

function deleteUser(request, response) {
   
    let sql;
    console.log(request.query.id + "ESTA ES LA ID")
    sql = "DELETE FROM user WHERE id_user=" + request.query.id
    connection.query(sql, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            if (result.insertId)
                response.send(String(result.insertId))
            else
                response.send(result)
        }

    })
}
module.exports = { postUser, getUser, putUser, deleteUser }