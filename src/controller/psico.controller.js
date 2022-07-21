const { response, request } = require("express");
const connection = require("../database");


  // GET PROF

  function getPsico(request, response) {
console.log("entramos a get psico")
    let sql;        
    sql = "SELECT * FROM user WHERE tipo='profesional'" 
    connection.query(sql, function (err, result) {
        if (err) {
            console.log(err);
        }
        else {
            response.send(result);            
        }
    })   
    }

function getFiltroPsico(request, response) {
        console.log("______________________________________________________________________________________________________________________________")
       

                let localidad     = request.body.localidad
                let localidadf    = "localidad = " + "'" + request.body.localidad + "'"
                let modalidad     = request.body.modalidad
                let modalidadf    = "modalidad = " + "'" + request.body.modalidad + "'"
                let nombre         = request.body.nombre
                let nombref      = "terapia = " + "'" + request.body.nombre + "'"
            
    
                let filter = [localidad,localidadf,modalidad,modalidadf,nombre,nombref]
    
                let sql = "SELECT * FROM user WHERE tipo = 'profesional' " 
                
                for(let i=0; i<filter.length; i+=2) {
                    
                    if (filter[i] != undefined && filter[i] != "" && filter[i] != null ) {
                        sql += " AND " + filter[i+1]
                  
                }
            }
                console.log("La query dinamica es: ")
                console.log(sql);
            
                connection.query(sql, function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        response.send(result);
                    }
                })
            }
    function getEstado(request,response){
            console.log("Como estas mia mor")
            let sql ="SELECT * FROM estado_animo WHERE id_user= "+request.query.id
             connection.query(sql, function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        response.send(result);
                    }
                })
        }
    module.exports = { getPsico ,getFiltroPsico, getEstado}