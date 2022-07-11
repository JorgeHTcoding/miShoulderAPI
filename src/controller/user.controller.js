const { response } = require("express");
const connection = require("../database");
let answer = {}


// RELACIONADO CON TABLA USER



function getUser(request, response) {
    
    let sql = "SELECT * FROM user"
    connection.query(sql, function (err, result) {
        if (err) {
            console.log(err);
        }
        else {
            response.send(result);
        }
    })
}

// RELACIONADO CON LA TABLA DATOS
function postUser(request, response) {
    console.log("Entramos a la funcion postUsuario")
    let sql = "INSERT INTO user(id_tipo)" + "VALUES ('" + request.body.id_tipo + "')";
    console.log(sql)
    console.log("creamos tipo usuario")
    connection.query(sql, function (err, result) {

        if (err) {
            console.log(err);
        } else {
            console.log(result);
            if (result.id_tipo){
                response.send(String(result.id_tipo))
                let iduser = result.id_user;
                console.log("id_usuario: " + iduser)
                let sql2 = "INSERT INTO datos(nick, name, sname, email, telefono, descripcion, img, direccion)" + "VALUES ('" + request.body.nick + "','" + request.body.nick + "', '" + request.body.nick + "', '" + request.body.nick + "', '" + request.body.nick + "', '" + request.body.nick + "', '" + request.body.nick + "','" + request.body.nick + "') WHERE id_user =" + iduser;
                console.log("Sentencia sql: " + sql2)
                connection.query(sql, function (err, result) {

                    if (err) {
                        console.log(err);
                    } else {
                        console.log(result);
                        if (result.id_tipo){
                            response.send(String(result.id_tipo))
                        }else{
                        response.send(respuesta)}}})
            }else
                response.send(respuesta)
        }
    })
}

function postDatos(request, response) {
    console.log("Entramos a la funcion postUsuario")
    let sql = "INSERT INTO datos(nick, name, sname, email, telefono, descripcion, img, direccion, acreditacion, horario, modalidad)" + "VALUES ('" + request.body.id_tipo + "')";
    console.log(sql)
    console.log("entramos al back")
    connection.query(sql, function (err, result) {

        if (err) {
            console.log(err);
        } else {
            console.log(result);
            if (result.insertId)
                response.send(String(result.insertId))
            else
                response.send(respuesta)
        }
    })
}

function getDatos(request, response) {
    
    let sql = "SELECT * FROM user"
    connection.query(sql, function (err, result) {
        if (err) {
            console.log(err);
        }
        else {
            response.send(result);
        }
    })
}

function putDatos(request, response) {
    {
        
        console.log(request.body.id_usuario + "el id de usuario en el back")
        if(request.query.id != ""){
        let id_usuario = request.body.id_usuario;     
        let titulo   = request.body.titulo;
        let tipo     = request.body.tipo;
        let autor    = request.body.autor;
        let precio   = request.body.precio;
        let foto     = request.body.foto;

        let params   = [id_usuario, titulo, tipo, autor, precio, foto];
    
        let sql = "UPDATE libro SET id_usuario = COALESCE(?, id_usuario) , " + 
                   "titulo = COALESCE(?, titulo), " + "tipo = COALESCE(?, tipo), " + "autor = COALESCE(?, autor), " +
                   "precio = COALESCE(?, precio), " + "foto = COALESCE(?, foto) WHERE id_libro=" + request.body.id_usuario;

        console.log(sql); 
        connection.query(sql, params,function (err, result) 
        {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
                if (result.insertId)
                    response.send(String(result.insertId))
                else
                    response.send(result)
            }
        }); 
    }else{
        console.log("Introduce un id válido")
    }
}
}

function deleteDatos(request, response) {
    let respuesta;
    let sql;
console.log(request.query.id_libro + "ESTA ES LA ID")    
    sql = "DELETE FROM libro WHERE id_libro=" +  request.query.id_libro    
    connection.query(sql, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            if (result.insertId)
                response.send(String(result.insertId))
            else
                response.send(respuesta)
        }
        
    })
}
module.exports = { postUser, getUser }