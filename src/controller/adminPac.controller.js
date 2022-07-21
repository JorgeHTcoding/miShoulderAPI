const { response } = require("express");
const connection = require("../database");



function getPac(request, response) {
    console.log("Get pacientes")
    let sql;
    if(request.query.id){
    sql = "SELECT * FROM user JOIN profesional_pacientes ON (user.id_user = profesional_pacientes.id_user)WHERE id_profesional = " + request.query.id 
    connection.query(sql, function (err, result) {
        if (err) {
            console.log(err);
        }
        else {
            response.send(result);
        }
    })
    
}}
function getPro(request, response) {
    console.log("Get profesional")
    let sql;
    if(request.query.id){
    sql = "SELECT * FROM profesional_pacientes JOIN user ON (profesional_pacientes.id_profesional = user.id_user)WHERE profesional_pacientes.id_user = " + request.query.id 
    connection.query(sql, function (err, result) {
        if (err) {
            console.log(err);
        }
        else {
            response.send(result);
        }
    })
    
}}



function deletePac(request, response) {
   
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

function postPac(request, response) {
    {

    
            console.log(request.body.id_profesional+ " el id de usuario profesional en el back")
            console.log("query"+request.body.diagnostico)
            let prueba = typeof request.query.diagnostico
            console.log(prueba)
            // console.log(request.body.diagnostico.value)
            // let prueba2 = typeof request.body.diagnostico.value
            // console.log(prueba2);
            
            
         
            let sql = "UPDATE profesional_pacientes SET diagnostico =" + "'" + request.body.diagnostico + "'" +
            " WHERE id_profesional=" + request.body.id_profesional + " AND id_user=" + request.body.id_user ;

            console.log(sql);
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
}

function putPaciente(request, response) {
    {

    
            console.log(request.query.id_profesional + " el id de usuario profesional en el back")
            console.log(request.body.diagnostico)
 
;
        
            let sql = "UPDATE profesional_pacientes SET diagnostico =" + "'" + request.body.diagnostico + "'" +
            " WHERE id_profesional=" + request.body.id_profesional + " AND id_user=" + request.body.id_user ;

            console.log(sql);
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
}

function eliminarPaciente (request,response){
    let sql;
    console.log("entro al controller eliminar pacientes")
    let id = request.body.id_user;
    console.log(id)
    sql = `UPDATE profesional_pacientes SET aceptado="rechazado" WHERE id_user=${id}`

    connection.query(sql, function (err, result) {
        if (err) {
            console.log(err);
        }
        else {
            response.send(result);
        }
    })

}

function mostrarSoloAceptadas (request,response){
    let sql;
    console.log("entro al controller")
    let id = request.query.id;
    console.log(request.query.id)
    console.log(id + "id en el controller")

    // `SELECT * FROM profesional_pacientes  WHERE id_profesional=${id} AND  aceptado="aceptado"`
    sql =  `SELECT * FROM profesional_pacientes JOIN user ON (user.id_user = profesional_pacientes.id_user)WHERE id_profesional=${id} AND aceptado="aceptado"`
   
    connection.query(sql, function (err, result) {
        if (err) {
            console.log(err);
        }
        else {
            response.send(result);
        }
    })

}



module.exports = {mostrarSoloAceptadas,eliminarPaciente,getPac,deletePac,postPac,getPro,putPaciente}