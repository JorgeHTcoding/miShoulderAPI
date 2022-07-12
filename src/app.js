const express = require("express")
const cors = require('cors')
const errorHandling = require("./error/errorHandling")
const userRouters = require("./routes/user.routers")
const adminPac = require("../src/routes/adminPac.routers")
const busProfRouters = require("./routes/busProf.routers")


const app = express();
app.set("port", process.env.PORT || 3000)
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(userRouters);
app.use(adminPac);
app.use(busProfRouters);

;

app.use(function (req, res, next) 
    {
        res.status(404).json({
            error: true,
            codigo: 404,
            message: "Endpoint can't be found"
        })
    })

app.use(errorHandling)

module.exports= app;