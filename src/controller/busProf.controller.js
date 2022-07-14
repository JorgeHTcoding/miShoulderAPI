const { response } = require("express");
const connection = require("../database");


function getProf(request, response) {

    let sql;
    // if(){
    // sql = "SELECT * FROM user WHERE user.tipo = profesional"
    // connection.query(sql, function (err, result) {
    //     if (err) {
    //         console.log(err);
    //     }
    //     else {
    //         response.send(result);
    //     }
    // })
    // }else{
       sql = "SELECT * FROM user WHERE user.tipo = 'profesional'"
        connection.query(sql, function (err, result) {
            if (err) {
                console.log(err);
            }
            else {
                response.send(result);
            }
        })
    }
    // }




    module.exports = {getProf}