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
    if(request.query.id){

    let id = request.query.id;

    sql =  "UPDATE profesional_pacientes SET aceptado = 2 WHERE id_user=" + request.query.id

    connection.query(sql, function (err, result) {
        if (err) {
            console.log(err);
        }
        else {
            response.send(result);
        }
    })
}}


module.exports = {getPacientes,putPacientes}