const { response } = require("express");
const connection = require("../database");
let answer = {}
// LOG - IN

function getLogin(request, response) {

    let sql;
    
  
        let param = [request.body.nick, request.body.password]       
        console.log("Entramos a la funcion getLogin en el back")
        sql = "SELECT * FROM user WHERE nick =? AND password =?"
        connection.query(sql, param, function (err, result) {
            if (err) {
                console.log(err);
                answer = {
                    err: true,
                    codigo: 500,
                    mensaje: "Usuario no encontrado",
                    titulo:"Error busqueda",
                    result : "usuario no valido"
                }            
            }
            else {
                if(result.length > 0){
                response.send(result);
                answer = {
                    error: false,
                    codigo: 500,
                    mensaje: "Usuario encontrado",
                    titulo:"Usuario Encontrado",
                    result : result
                } 
                console.log(result)
            } else {
                answer = {
                    err: true,
                    codigo: 500,
                    mensaje: "Usuario no encontrado",
                    titulo:"Error busqueda",
                    result : "usuario no valido"
                }
            }
        }
        })

    }

// REGISTRO 

function postUser(request, response) {
    console.log("Entramos a la funcion postUsuario")
    let sql = "INSERT INTO user(tipo,nick, name, sname, email, telefono, descripcion, img, direccion, password)" + "VALUES ('" + request.body.tipo + "','" + request.body.nick + "','" + request.body.name + "', '" + request.body.sname + "', '" + request.body.email + "', '" + request.body.telefono + "', '" + request.body.descripcion + "', '" + request.body.img + "','" + request.body.direccion + "','" + request.body.password + "')";
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

module.exports = { postUser, getLogin }