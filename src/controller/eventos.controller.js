const { response } = require("express");
const connection = require("../database");

// RELACIONADO CON TABLA EVENTOS


function getStart(request, response) {
 
    let respuesta = {error: true, codigo: 200, mensaje: "Punto de Inicio"};
    response.send(respuesta);
    next();
}


// function getEventos(request, response) {
    
//         if(!request.query.id && !request.body.localidad && !request.body.modalidad && !request.body.terapia && !request.body.fecha) {

//             sql = "SELECT * FROM user_eventos"

//                 connection.query(sql, function (err, result) {
//                     if (err) {
//                         console.log(err);
//                     }
//                     else {
//                         response.send(result);
//                     }
//                 })
        
//         }else {

//             if(!request.query.id) {
            
//                 let localidad     = request.body.localidad
//                 let localidadf    = "localidad = " + "'" + request.body.localidad + "'"
//                 let modalidad     = request.body.modalidad
//                 let modalidadf    = "modalidad = " + "'" + request.body.modalidad + "'"
//                 let terapia       = request.body.terapia
//                 let terapiaf      = "terapia = " + "'" + request.body.terapia + "'"
//                 let fecha         = request.body.fecha
//                 let fechaf        = "fecha = " + "'" + request.body.fecha + "'"
    
//                 let filter = [localidad,localidadf,modalidad,modalidadf,terapia,terapiaf,fecha,fechaf]
    
//                 let sql = "SELECT * FROM user_eventos " 
//                 console.log(filter)
                
//                 let control = 1;

//                 for(let i=0; i<filter.length; i+=2) {
                    
//                     if (filter[i] != undefined && filter[i] != "" && filter[i] != null ) {
//                         sql += " AND " + filter[i+1]
                       
//                     } else if (filter[i] != undefined || '' || null){
//                         sql += "WHERE " + filter[i+1];
//                         control++;
//                     }
//                 }
//                 console.log("La query dinamica es: ")
//                 console.log(sql);
//                 // sql.splice(sql.length-3,1);
//                 // console.log(sql)
    
        
//                 connection.query(sql, function (err, result) {
//                     if (err) {
//                         console.log(err);
//                     }
//                     else {
//                         response.send(result);
//                     }
//                 })
    

//             }else{

//                     let id = request.query.id
                    
//                     let localidad     = request.body.localidad
//                     let localidadf    = "localidad = " + "'" + request.body.localidad + "'"
//                     let modalidad     = request.body.modalidad
//                     let modalidadf    = "modalidad = " + "'" + request.body.modalidad + "'"
//                     let terapia       = request.body.terapia
//                     let terapiaf      = "terapia = " + "'" + request.body.terapia + "'"
//                     let fecha         = request.body.fecha
//                     let fechaf        = "fecha = " + "'" + request.body.fecha + "'"
                
                    
//                     let filter  = [localidad,localidadf,modalidad,modalidadf,terapia,terapiaf,fecha,fechaf]

//                     let sql     = "SELECT * FROM user_eventos WHERE id_user=" + id 
        
//                     console.log(filter)
                    
//                     for(let i=0; i<filter.length; i+=2){
                    
//                         if (filter[i] != undefined && filter[i] != "" && filter[i] != null ){
//                             sql += " AND " + filter[i+1]     
//                     }}

//                     console.log("La query dinamica es: " + sql)
//                     // console.log(sql);
//                     // sql.splice(sql.length-3,1);
//                     // console.log(sql)
            
//                     connection.query(sql, function (err, result) {
//                         if (err) {
//                             console.log(err);
//                         }
//                         else {
//                             response.send(result);
//                         }
//                     })
//                 }

//         }

//     }


        // }


    // let sql;
    // if(request.query.id){

    // sql = "SELECT * FROM user_eventos WHERE id_user=" + request.query.id

    // connection.query(sql, function (err, result) {
    //     if (err) {
    //         console.log(err);
    //     }
    //     else {
    //         response.send(result);
    //     }
    // })
    // }else{
    //    sql = "SELECT * FROM user_eventos"
    //     connection.query(sql, function (err, result) {
    //         if (err) {
    //             console.log(err);
    //         }
    //         else {
    //             response.send(result);
    //         }
    //     })
    // }
    // }



function postEventos(request, response) {
    console.log("Entramos a la funcion posEventos")

    let anfitrion = request.query.id

    let sql = "INSERT INTO eventos(anfitrion, titulo, localidad, direccion, descripcion, modalidad, terapia, fecha, img)" + "VALUES ('" + anfitrion + "','" + request.body.titulo + "','" + request.body.localidad + "', '" + request.body.direccion + "','" + request.body.descripcion + "', '" + request.body.modalidad + "', '" + request.body.terapia + "', '" + request.body.fecha + "', '" + request.body.img + "')";

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



// function putEventos(request, response) {
//     {

        
//         if (request.query.id_user_eventos != "") {

//             console.log(request.query.id_user_eventos + " el id de usuario en el back")

//             let anfitrion         = request.body.anfitrion;
//             let titulo            = request.body.titulo;
//             let localidad         = request.body.localidad;
//             let direccion         = request.body.direccion;
//             let descripcion       = request.body.descripcion;
//             let modalidad         = request.body.modalidad;
//             let terapia           = request.body.terapia;
//             let fecha             = request.body.fecha;

         
            
//             let params = [anfitrion, titulo, localidad, direccion, descripcion, modalidad, terapia, fecha];

//             let sql = "UPDATE user_eventos SET anfitrion = COALESCE(?,anfitrion) , " + "titulo = COALESCE(?, titulo), " +
//                                       "localidad = COALESCE(?,localidad), "  + "direccion = COALESCE(?,direccion), " +
//                                       "descripcion = COALESCE(?, descripcion), " + "modalidad = COALESCE(?, modalidad), " + 
//                                       "terapia = COALESCE(?, terapia), " + "fecha = COALESCE(?, fecha) WHERE id_user_eventos=" + request.query.id_user_eventos;

//             console.log(sql);
//             connection.query(sql, params, function (err, result) {
//                 if (err) {
//                     console.log(err);
//                 } else {
//                     console.log(result);
//                     if (result.insertId)
//                         response.send(String(result.insertId))
//                     else
//                         response.send(result)
//                 }
//             });
//         } else {
//             console.log("Introduce un id válido")
//         }
//     }
// }



// function deleteEventos(request, response) {
   
//     let sql;

//     console.log(request.query.id + "ESTA ES LA ID DEL EVENTO")


//     sql = "DELETE FROM eventos WHERE id_eventos=" + request.query.id;

//     connection.query(sql, function (err, result) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(result);
//             if (result.insertId)
//                 response.send(String(result.insertId))
//             else
//                 response.send(result)
//         }

//     })
// }




    // module.exports = { getStart, getEventos, postEventos, putEventos, deleteEventos}
    module.exports = { getStart, postEventos}