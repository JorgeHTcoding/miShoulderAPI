const express = require("express")
const cors = require('cors')
const errorHandling = require("./src/error/errorHandling")
const userRouters = require("./src/routes/user.routers")
const { app } = require("express");
const mysql = require("mysql2");

let port = process.env.PORT || 3000;


app.listen(port);

app.use(function (req, res, next) 
    {
        res.status(404).json({
            error: true,
            codigo: 404,
            message: "Endpoint can't be found"
        })
    })

app.use(errorHandling)

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
