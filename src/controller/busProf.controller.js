const { response } = require("express");
const connection = require("../database");


function getProf(request, response) {

    let id = request.query.id

            let localidad     = request.body.localidad
            let localidadf    = "localidad = " + "'" + request.body.localidad + "'"
            let modalidad     = request.body.modalidad
            let modalidadf    = "modalidad = " + "'" + request.body.modalidad + "'"
            let terapia       = request.body.terapia
            let terapiaf      = "terapia = " + "'" + request.body.terapia + "'"
            let fecha         = request.body.fecha
            let fechaf        = "fecha = " + "'" + request.body.fecha + "'"


            let filter  = [localidad,localidadf,modalidad,modalidadf,terapia,terapiaf,fecha,fechaf]

            let sql     = "SELECT * FROM user_eventos WHERE id_user=" + id 

            console.log(filter)

            for(let i=0; i<filter.length; i+=2){

                if (filter[i] != undefined && filter[i] != "" && filter[i] != null ){
                    sql += " AND " + filter[i+1]
            }}

            console.log("La query dinamica es: " + sql)


            connection.query(sql, function (err, result) {
                if (err) {
                    console.log(err);
                }
                else {
                    response.send(result);
                }
            })
        }




    module.exports = {getProf}