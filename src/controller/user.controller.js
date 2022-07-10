const { response } = require("express");
const connection = require("../database");
let answer = {}

function postUser(request, response) {
    console.log("Entramos a la funcion postUsuario")
    let sql = "INSERT INTO user(id_tipo)" + "VALUES ('" + request.body.id_tipo + "')";
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



module.exports = { postUser, getUser }