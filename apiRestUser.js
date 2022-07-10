const { application } = require("express");
const mysql = require("mysql2");


let port = process.env.PORT || 3000;

const connection = mysql.createConnection(
    {
        host        :"myshoulder.cdvg9i8dvcl6.eu-west-3.rds.amazonaws.com",
        user        :"ComboWombo",
        password    :"ComboWombo123!",
        database    :"myshoulder"
    });

    connection.connect(function(error){
        if(error){
            console.log(error);
        }else{
            console.log("Conexión establecida")
        }
    });

    app.listen(port);