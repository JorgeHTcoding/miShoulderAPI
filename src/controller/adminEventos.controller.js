const { response } = require("express");
const connection = require("../database");


function getGEvento(request, response){
    
    console.log("Entramos por eventos y users")

    let sql = "SELECT * FROM eventos WHERE id_eventos=" + request.query.id_eventos
    connection.query(sql, function (err, result) {
         if (err) {
            console.log(err);
         }
         else {
            console.log(result)
             response.send(result);
            //  console.log("entra")
         }
     })
     
    //  console.log(result)
     console.log("por aqui sale")
}


function putGEventos(request, response){
    {

            console.log(request.query.id_eventos + "es el id de usuario en el back")

            let id_eventos        = request.body.id_eventos;
            let titulo            = request.body.titulo;
            let localidad         = request.body.localidad;
            let direccion         = request.body.direccion;
            let descripcion       = request.body.descripcion;
            let modalidad         = request.body.modalidad;
            let terapia           = request.body.terapia;
            let fecha             = request.body.fecha;
            let img               = request.body.img; 
         
            console.log(localidad)
            // let params = [ titulo, localidad, direccion, descripcion, modalidad, terapia, fecha, img];

            let sql =  `UPDATE eventos SET titulo = "${titulo}" , localidad = "${localidad}", direccion = "${direccion}"
                  , descripcion = "${descripcion}", modalidad = "${modalidad}", terapia = "${terapia}", fecha = "${fecha}", img = "${img}" WHERE id_eventos = ${id_eventos}`
            // let sql = "UPDATE eventos SET titulo = COALESCE(?, titulo), " +
            //                           "localidad = COALESCE(?,localidad), "  + "direccion = COALESCE(?,direccion), " +
            //                           "descripcion = COALESCE(?, descripcion), " + "modalidad = COALESCE(?, modalidad), " + 
            //                           "terapia = COALESCE(?, terapia), " + "fecha = COALESCE(?, fecha), " + "img = COALESCE(?, img) WHERE id_eventos=" + request.query.id_eventos;

            console.log(sql);
            connection.query(sql, function (err, result){
                if (err) {
                    console.log(err);
                } else {
                    console.log(result);
                    // if (result.insertId)
                    //     response.send(String(result.insertId))
                    // else
                        response.send(result)
                }
            });
    }
}



function deleteGEventos(request, response) {
   
    let sql;

    console.log(request.query.id + "ESTA ES LA ID DEL EVENTO EN DELETE")


    sql = "DELETE FROM eventos WHERE id_eventos=" + request.query.id_eventos;

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



module.exports = { getGEvento, putGEventos, deleteGEventos }