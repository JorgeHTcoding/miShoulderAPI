const { response } = require("express");
const connection = require("../database");

// RELACIONADO CON TABLA EVENTOS


function getStart(request, response) {
 
    let respuesta = {error: true, codigo: 200, mensaje: "Punto de Inicio"};
    response.send(respuesta);
    next();
}


function getEventos(request, response) {

    let sql;
    if(request.query.id){

    sql = "SELECT * FROM user_eventos WHERE id_user=" + request.query.id

    connection.query(sql, function (err, result) {
        if (err) {
            console.log(err);
        }
        else {
            response.send(result);
        }
    })
    }else{
       sql = "SELECT * FROM user_eventos"
        connection.query(sql, function (err, result) {
            if (err) {
                console.log(err);
            }
            else {
                response.send(result);
            }
        })
    }
    }



function postEventos(request, response) {
    console.log("Entramos a la funcion posEventos")

    let sql = "INSERT INTO user_eventos(anfitrion, titulo, localidad, direccion, descripcion, modalidad, terapia, id_user)" + "VALUES ('" + request.body.anfitrion + "','" + request.body.titulo + "','" + request.body.localidad + "', '" + request.body.direccion + "','" + request.body.descripcion + "', '" + request.body.modalidad + "', '" + request.body.terapia + "', '" + request.body.id_user + "')";

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



function putEventos(request, response) {
    {

        
        if (request.query.id_user_eventos != "") {

            console.log(request.query.id_user_eventos + " el id de usuario en el back")

            let anfitrion         = request.body.anfitrion;
            let titulo            = request.body.titulo;
            let localidad         = request.body.localidad;
            let direccion         = request.body.direccion;
            let descripcion       = request.body.descripcion;
            let modalidad         = request.body.modalidad;
            let terapia           = request.body.terapia;
         
            
            let params = [anfitrion, titulo, localidad, direccion, descripcion, modalidad, terapia];

            let sql = "UPDATE user_eventos SET anfitrion = COALESCE(?,anfitrion) , " + "titulo = COALESCE(?, titulo), " +
                                      "localidad = COALESCE(?,localidad), "  + "direccion = COALESCE(?,direccion), " +
                                      "descripcion = COALESCE(?, descripcion), " + "modalidad = COALESCE(?, modalidad), " + 
                                      "terapia = COALESCE(?, terapia) WHERE id_user_eventos=" + request.query.id_user_eventos;

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



function deleteEventos(request, response) {
   
    let sql;

    console.log(request.query.id_user_eventos + "ESTA ES LA ID DEL EVENTO")


    sql = "DELETE FROM user_eventos WHERE id_user_eventos=" + request.query.id_user_eventos;

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




    module.exports = { getStart, getEventos, postEventos, putEventos, deleteEventos}