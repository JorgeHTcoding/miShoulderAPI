const { response } = require("express");
const connection = require("../database");

function getPacientes(request, response) {

    let sql;
    if(request.query.id){

    // let espera = "espera";
    let id = request.query.id;

    sql = `SELECT * FROM user JOIN profesional_pacientes ON (user.id_user = profesional_pacientes.id_user)WHERE id_profesional = ${id}
    AND aceptado = 1`

    connection.query(sql, function (err, result) {
        if (err) {
            console.log(err);
        }
        else {
            response.send(result);
        }
    })
}}


function putPacientes(request, response) {

    let sql;
    console.log("entro al controller putPacientes")
    let id = request.body.id_user;
    console.log(id + "id en el controller")
    sql = `UPDATE profesional_pacientes SET aceptado = "aceptado" WHERE id_user=${id}` 

    connection.query(sql, function (err, result) {
        if (err) {
            console.log(err);
        }
        else {
            response.send(result);
        }
    })
}

// function putNegacionPac(request, response) {

//     let sql;
//     if(request.query.id){
//     let mensaje = request.body.negacion;    
//     let id = request.query.id;
//     console.log(mensaje)
//     console.log(id)

//     sql =  "UPDATE profesional_pacientes SET contenido_rechazado ='"+ request.body.negacion+"' WHERE id_user=" + id

//     connection.query(sql, function (err, result) {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             response.send(result);
//         }
//     })
    
// }}

function putEstadoPac(request, response) {
    
    let sql;
    console.log("entro al controller")
    let id = request.body.id_user;
    let mensaje = request.body.contenido_rechazo; //objeto del service por el body(mensaje es el atributo, hay que hacer3)
    let id_prof = request.body.id_profesional;

    console.log(request.body)

    sql = `UPDATE profesional_pacientes SET aceptado ="rechazado", contenido_rechazado = '${mensaje}' WHERE id_user= ${id} AND id_profesional =${id_prof}` 
    console.log(sql)
    connection.query(sql, function (err, result) {
        console.log("entro al connection")
        if (err) {
            console.log(err);
        }
        else {
            response.send(result);
        }
    })
    
}

module.exports = {getPacientes,putPacientes,putEstadoPac}