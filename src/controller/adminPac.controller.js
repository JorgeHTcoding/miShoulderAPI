const { response } = require("express");
const connection = require("../database");



function getPac(request, response) {

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
            console.log(request.query.id + " el id de usuario en el back")
            console.log("query"+request.query.diagnostico)
            let prueba = typeof request.query.diagnostico
            console.log(prueba)
            // console.log(request.body.diagnostico.value)
            // let prueba2 = typeof request.body.diagnostico.value
            // console.log(prueba2);
            
            let sql = "UPDATE profesional_pacientes SET diagnostico =" + "'" + request.body.diagnostico + "'" +
            " WHERE id_user=" + request.query.id

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



module.exports = {getPac,deletePac,postPac}