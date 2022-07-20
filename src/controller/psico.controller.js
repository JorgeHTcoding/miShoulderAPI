const { response } = require("express");
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


    module.exports = { getPsico }