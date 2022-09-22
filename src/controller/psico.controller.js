const { response, request } = require("express");
const connection = require("../database");

console.log("entramos al controler")
  // GET PROF

  function getPsico(request, response) {

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
       
              
                let localidad     = request.body.localidad 
                let localidadf    = "localidad  = " + "'" + request.body.localidad  + "'"
                let modalidad     = request.body.modalidad
                let modalidadf    = "modalidad = " + "'" + request.body.modalidad + "'"
                let acreditacion         = request.body.acreditacion
                let acreditacionf      = "acreditacion = " + "'" + request.body.acreditacion + "'"
                let fecha        = request.body.fecha  
                let fechaf      = "fecha  = " + "'" + request.body.fecha   + "'"

            
    
                let filter = [localidad,localidadf,modalidad,modalidadf,acreditacion,acreditacionf,fecha,fechaf]
    
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