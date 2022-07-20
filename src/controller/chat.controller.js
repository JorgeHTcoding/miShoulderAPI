const { response } = require("express");
const connection = require("../database");

//CHATS
//MIRAR  lo de respuesta a ver quien tiene el deber
function getMensaje(request,response){
    let sql;
    
    
    sql = "SELECT * FROM mensaje WHERE (id_emisor=" + request.query.id_emisor  + " AND id_receptor="+request.query.id_receptor +") OR (id_emisor=" + request.query.id_receptor  + " AND id_receptor="+request.query.id_emisor +")";
    connection.query(sql,function(err,result){
        if(err){
            console.log(err)
        }else{
            //Aqui se envia el log de chat, y id_users
            response.send(result)
            console.log(result)
        }
    })
}

function postMensaje(request,response){
    console.log("Entramos a la funcion postMensaje")
   
    //pasamos el que envia por query, el receptor pasa como body!
    let sql = "INSERT INTO mensaje(id_emisor, id_receptor,contenido)" + "VALUES ('" + request.body.id_emisor + "','" + request.body.id_receptor + "','" + request.body.contenido+"')";
    connection.query(sql,function(err,result){
        if(err){
            console.log(err)
        }else{
        response.send(result)
        console.log("El mensaje se envio correctamente")
        console.log(result)
        }
    })
}
function postAnimo(request,response){
    console.log("Entramos a la funcion postAnimo")
   
    //pasamos el que envia por query, el receptor pasa como body!
    let sql = "INSERT INTO estado_animo(id_user, animo,energia,ansiedad)" + "VALUES ('" + request.query.id_user + "','" + request.body.animo + "','" + request.body.ansiedad + "','" + request.body.energia+"')";
    connection.query(sql,function(err,result){
        if(err){
            console.log(err)
        }else{
        response.send(result)
        console.log("El mensaje se envio correctamente")
        console.log(result)
        }
    })
}

function postPresentacion(request,response){
    console.log("Entramos en el post Presentacion")
    let sql ="INSERT INTO profesional_pacientes(id_user, id_profesional, contenido_presentacion)"+" VALUES ('" + request.query.id + "','" + request.body.id_profesional+ "','" + request.body.contenido_presentacion + "')";
    connection.query(sql,function(err,result){
        if(err){
            console.log(err)
        }else{
            response.send(result)
            console.log("La presentacion se ha hecho con exito")
            console.log(result)
        }
    })
}
function getPresentacion(request,response){
    let id = request.query.id
    console.log("Entramos en el get Presentacion")
    let sql = "SELECT * FROM  profesional_pacientes WHERE id_user=" + id + " OR id_profesional="+id;
    connection.query(sql,function(err,result){
        if(err){
            console.log(err)
        }else{
            response.send(result)
            console.log("La presentacion se ha hecho con exito")
            console.log(result)
        }
    })
}


function getEventos(request, response) {
    
    if(!request.query.id){
        
        let loc = request.body.loc
        let locf = "localidad = "+"'" +request.body.loc+"'"
        let mod = request.body.mod
        let modf = "modalidad = "+"'" +request.body.mod+"'"
        let ter = request.body.ter
        let terf = "terapia = " +"'"+request.body.ter+"'"
        let date = request.body.date
        let datef = "date = "+"'" +request.body.date+"'"
        let filter=[loc,locf,mod,modf,ter,terf,date,datef]
        let sql = "SELECT * FROM user_eventos " 
        console.log(filter)
        
        let control =1;
        for(let i=0; i<filter.length;i+=2){
            if(filter[i]!=undefined && control>1){
                sql+=" AND "+filter[i+1]
               
            }else if(filter[i]!=undefined){
                sql+="WHERE "+ filter[i+1];
                control++;
            }
        }
        console.log("La query dinamica es: ")
        console.log(sql);
        // sql.splice(sql.length-3,1);
        // console.log(sql)

        


        connection.query(sql, function (err, result) {
            if (err) {
                console.log(err);
            }
            else {
                response.send(result);
            }
        })
    }else{
        let id = request.query.id
        
        let loc = request.body.loc
        let locf = "localidad = "+"'" +request.body.loc+"'"
        let mod = request.body.mod
        let modf = "modalidad = "+"'" +request.body.mod+"'"
        let ter = request.body.ter
        let terf = "terapia = " +"'"+request.body.ter+"'"
        let date = request.body.date
        let datef = "date = "+"'" +request.body.date+"'"
        let filter=[loc,locf,mod,modf,ter,terf,date,datef]
        let sql = "SELECT * FROM user_eventos WHERE id_user="+id 
        console.log(filter)
        
        for(let i=0; i<filter.length;i+=2){
            if(filter[i]!=undefined){
                sql+=" AND "+filter[i+1]
     
        }
        console.log("La query dinamica es: ")
        console.log(sql);
        // sql.splice(sql.length-3,1);
        // console.log(sql)

        


        connection.query(sql, function (err, result) {
            if (err) {
                console.log(err);
            }
            else {
                response.send(result);
            }
        })
    }
    }
}
// function postPac(request, response) {
//     {


//         console.log(request.query.id + " el id de usuario en el back")
//         console.log("query" + request.query.diagnostico)
//         let prueba = typeof request.query.diagnostico
//         console.log(prueba)
//         // console.log(request.body.diagnostico.value)
//         // let prueba2 = typeof request.body.diagnostico.value
//         // console.log(prueba2);
//     }
// }



module.exports = {postMensaje , getMensaje, postPresentacion, getPresentacion, postAnimo}

